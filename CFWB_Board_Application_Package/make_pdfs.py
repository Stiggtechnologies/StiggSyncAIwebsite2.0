#!/usr/bin/env python3
# Minimal, dependency-free PDF writer (text only) for quick document packaging.
# Letter size: 612 x 792 points. Uses built-in Helvetica.

from __future__ import annotations

import datetime
import re
from pathlib import Path

PAGE_W, PAGE_H = 612, 792
MARGIN_L, MARGIN_R, MARGIN_T, MARGIN_B = 54, 54, 54, 54  # 0.75in
FONT = "Helvetica"
FONT_B = "Helvetica-Bold"
FONT_SIZE = 11
LEADING = 14


def wrap_paragraph(text: str, max_chars: int) -> list[str]:
    text = re.sub(r"\s+", " ", text.strip())
    if not text:
        return [""]
    words = text.split(" ")
    lines = []
    cur = ""
    for w in words:
        if not cur:
            cur = w
        elif len(cur) + 1 + len(w) <= max_chars:
            cur += " " + w
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def layout_lines(blocks: list[tuple[str, str]], max_chars: int) -> list[tuple[str, str]]:
    """blocks: list of (style, text). style in {'p','h','b','sp'}.
    Returns list of (style, lineText) with wrapping applied.
    'sp' inserts a blank line.
    """
    out: list[tuple[str, str]] = []
    for style, text in blocks:
        if style == "sp":
            out.append(("p", ""))
            continue
        if style in ("h", "b"):
            # keep headings unwrapped unless too long
            for ln in wrap_paragraph(text, max_chars):
                out.append((style, ln))
        else:
            for ln in wrap_paragraph(text, max_chars):
                out.append(("p", ln))
    return out


def escape_pdf_text(s: str) -> str:
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def build_pdf(pages: list[list[tuple[str, str]]], out_path: Path) -> None:
    # Build content streams for each page
    objs: list[bytes] = []

    def add_obj(data: bytes) -> int:
        objs.append(data)
        return len(objs)

    # Font objects
    font_h = add_obj(f"<< /Type /Font /Subtype /Type1 /BaseFont /{FONT} >>".encode())
    font_b = add_obj(f"<< /Type /Font /Subtype /Type1 /BaseFont /{FONT_B} >>".encode())

    page_obj_ids = []
    content_obj_ids = []

    for page_lines in pages:
        # Build a simple text content stream
        y = PAGE_H - MARGIN_T
        x = MARGIN_L
        parts = ["BT"]
        # default font
        parts.append(f"/{'F1'} {FONT_SIZE} Tf")
        parts.append(f"{x} {y} Td")
        cur_font = "F1"

        for style, line in page_lines:
            # move down first (except for very first line after Td)
            parts.append(f"0 -{LEADING} Td")

            desired_font = "F2" if style in ("h", "b") else "F1"
            if desired_font != cur_font:
                parts.append(f"/{desired_font} {FONT_SIZE} Tf")
                cur_font = desired_font

            txt = escape_pdf_text(line)
            parts.append(f"({txt}) Tj")

        parts.append("ET")
        stream = "\n".join(parts).encode("utf-8")
        content_id = add_obj(b"<< /Length %d >>\nstream\n" % len(stream) + stream + b"\nendstream")
        content_obj_ids.append(content_id)

        # Page object (Kids will be set by Pages object later; but simplest is to create page now with placeholder parent 0, then fix not required? Parent must be valid.)
        # We'll create Pages object first after loop; so store page dict later.
        page_obj_ids.append(None)

    # Pages object (id placeholder)
    # We must create Page objects now with correct Parent.
    pages_id_placeholder = len(objs) + 1

    for i, page_lines in enumerate(pages):
        content_id = content_obj_ids[i]
        page_dict = (
            f"<< /Type /Page /Parent {pages_id_placeholder} 0 R "
            f"/MediaBox [0 0 {PAGE_W} {PAGE_H}] "
            f"/Resources << /Font << /F1 {font_h} 0 R /F2 {font_b} 0 R >> >> "
            f"/Contents {content_id} 0 R >>"
        ).encode("utf-8")
        page_obj_ids[i] = add_obj(page_dict)

    kids = " ".join(f"{pid} 0 R" for pid in page_obj_ids)
    pages_obj = f"<< /Type /Pages /Kids [ {kids} ] /Count {len(page_obj_ids)} >>".encode("utf-8")
    pages_id = add_obj(pages_obj)

    # Catalog
    catalog_id = add_obj(f"<< /Type /Catalog /Pages {pages_id} 0 R >>".encode("utf-8"))

    # Write full PDF
    xref_offsets = []
    out = bytearray()
    out += b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"

    for i, obj in enumerate(objs, start=1):
        xref_offsets.append(len(out))
        out += f"{i} 0 obj\n".encode("utf-8")
        out += obj + b"\nendobj\n"

    xref_start = len(out)
    out += f"xref\n0 {len(objs)+1}\n".encode("utf-8")
    out += b"0000000000 65535 f \n"
    for off in xref_offsets:
        out += f"{off:010d} 00000 n \n".encode("utf-8")

    out += (
        f"trailer\n<< /Size {len(objs)+1} /Root {catalog_id} 0 R >>\nstartxref\n{xref_start}\n%%EOF\n"
    ).encode("utf-8")

    out_path.write_bytes(out)


def paginate(lines: list[tuple[str, str]]) -> list[list[tuple[str, str]]]:
    # Compute max lines per page
    usable_h = PAGE_H - MARGIN_T - MARGIN_B
    max_lines = int(usable_h // LEADING) - 1
    pages = []
    for i in range(0, len(lines), max_lines):
        pages.append(lines[i : i + max_lines])
    return pages


def make_pdf_doc(title: str, blocks: list[tuple[str, str]], out_path: Path) -> None:
    # crude width estimate: Helvetica 11 ~ 0.53 * chars; choose safe max
    max_chars = 92
    lines = layout_lines(blocks, max_chars=max_chars)
    pages = paginate(lines)
    build_pdf(pages, out_path)


def main() -> None:
    out_dir = Path(__file__).resolve().parent
    today = "February 3, 2026"  # locked to current date in Orville's timezone

    header = [
        ("b", "ORVILLE DAVIS, M.Eng., MMP"),
        ("p", "160 Woodpecker Way"),
        ("p", "Fort McMurray, AB T9K 0L4"),
        ("p", "Cell: (780) 215-2887 | Email: oadavis@hotmail.com"),
    ]

    # Application Letter
    app_blocks = []
    app_blocks += header
    app_blocks += [("sp", ""), ("p", today), ("sp", "")]
    app_blocks += [
        ("p", "Pamela Ramrup, Executive Director"),
        ("p", "Community Futures Wood Buffalo"),
        ("p", "107-8026 Franklin Avenue"),
        ("p", "Fort McMurray, AB T9H 5K3"),
        ("sp", ""),
        ("b", "Re: Application to Join the Community Futures Wood Buffalo Board of Directors"),
        ("sp", ""),
        ("p", "Dear Ms. Ramrup and Members of the Board,"),
        ("sp", ""),
        ("p", "I am writing to express my interest in joining the Community Futures Wood Buffalo Board of Directors. I’m motivated by the organization’s mission—strengthening the economy of the Wood Buffalo Region through loans, training, and projects—and I would be honored to support the organization’s impact and long-term sustainability."),
        ("sp", ""),
        ("p", "I bring over 28 years of experience in maintenance and reliability engineering, asset management, and operational leadership, including senior roles at Suncor Energy in Fort McMurray. I hold a Master of Engineering in Maintenance & Reliability Engineering (Monash University), I am a PEMAC-certified Maintenance Management Professional (MMP), and a Red Seal Heavy Duty Equipment Technician with Alberta Blue Seal business competencies. I currently serve as Chief Technology Officer at Stigg Security Inc., leading technology strategy and innovation across AI- and IoT-enabled solutions."),
        ("sp", ""),
        ("p", "At the board level, my strengths are disciplined governance, risk-based decision-making, and performance management. I help organizations translate strategy into measurable execution through clear priorities, practical KPIs, and a focus on sustainability, accountability, and stakeholder trust. My approach is collaborative and respectful of management’s role—supporting the Executive Director and team through clarity, oversight, and resourcing rather than operational interference."),
        ("sp", ""),
        ("p", "If selected, I am prepared to contribute consistently through monthly board meetings and committee work. I would be particularly interested in supporting the Governance and/or Finance Committee, based on board needs."),
        ("sp", ""),
        ("p", "Thank you for your consideration. I welcome the opportunity to serve and contribute to strong outcomes for entrepreneurs and the broader community."),
        ("sp", ""),
        ("p", "Sincerely,"),
        ("sp", ""),
        ("p", "Orville Davis, M.Eng., MMP"),
    ]

    make_pdf_doc("Application Letter", app_blocks, out_dir / "CFWB_Board_Application_Letter_Orville_Davis.pdf")

    # Board Bio
    bio_blocks = []
    bio_blocks += [("b", "ORVILLE DAVIS, M.Eng., MMP"), ("p", "Fort McMurray, Alberta"), ("p", "(780) 215-2887 | oadavis@hotmail.com"), ("sp", "")]
    bio_blocks += [
        ("b", "Board Value Proposition"),
        ("p", "Governance and execution discipline: KPI visibility, risk-based decision-making, and operational excellence—supporting sustainable outcomes and strong stewardship."),
        ("sp", ""),
        ("b", "Summary"),
        ("p", "Orville Davis is an operational leader with 28+ years of experience in maintenance and reliability engineering, asset management, and cross-functional leadership in safety-critical environments. He has held multiple senior roles at Suncor Energy in Fort McMurray and currently serves as Chief Technology Officer at Stigg Security Inc., leading technology strategy and AI/IoT-enabled innovation. Orville brings a collaborative, accountability-driven director style."),
        ("sp", ""),
        ("b", "Core Strengths (Board-relevant)"),
        ("p", "• Governance cadence and decision clarity (oversight vs operations)"),
        ("p", "• KPI dashboards and performance reporting (early warning indicators)"),
        ("p", "• Risk management and integrity-first leadership"),
        ("p", "• Budget stewardship and lifecycle cost/value thinking"),
        ("p", "• Technology strategy and digital transformation (as needed, without distraction)"),
        ("sp", ""),
        ("b", "Selected Experience"),
        ("p", "• CTO, Stigg Security Inc. (2023–Present): Technology roadmap; AI/IoT integration; team leadership"),
        ("p", "• Suncor Energy (2009–2023): Reliability/maintenance leadership; KPI-driven improvements; risk-based decisions; multi-million-dollar value delivery"),
        ("sp", ""),
        ("b", "Education & Credentials"),
        ("p", "• M.Eng. Maintenance & Reliability Engineering — Monash University"),
        ("p", "• PEMAC Maintenance Management Professional (MMP)"),
        ("p", "• Red Seal Heavy Duty Equipment Technician; Alberta Blue Seal"),
        ("p", "• RCMII Practitioner; TapRooT Certified Investigator"),
        ("p", "• MBA (Operations Management) — in progress (Athabasca University)"),
        ("p", "• HBS Online — Alternative Investments (2020–2021)"),
        ("sp", ""),
        ("b", "Community"),
        ("p", "Volunteer musician; community-focused leadership"),
    ]

    make_pdf_doc("Board Bio", bio_blocks, out_dir / "CFWB_Board_Bio_Orville_Davis.pdf")

    # Conflict of Interest
    coi_blocks = []
    coi_blocks += header
    coi_blocks += [("sp", ""), ("b", "Conflict of Interest Disclosure — Orville Davis"), ("sp", "")]
    coi_blocks += [
        ("p", "I, Orville Davis, acknowledge my duty to act in the best interests of Community Futures Wood Buffalo and to avoid conflicts between my personal/professional interests and those of the organization."),
        ("sp", ""),
        ("p", "I disclose the following: I am a current client of Community Futures Wood Buffalo and I have an active small business development loan."),
        ("sp", ""),
        ("p", "I will promptly disclose any additional conflicts that arise and will recuse myself from any discussion or vote where a real or perceived conflict exists, including any matters related to my loan."),
        ("sp", ""),
        ("p", "Signed: ________________________________"),
        ("p", "Date: _________________________________"),
    ]

    make_pdf_doc("COI", coi_blocks, out_dir / "CFWB_Conflict_of_Interest_Orville_Davis.pdf")


if __name__ == "__main__":
    main()
