#!/usr/bin/env python3
"""
AIM Meta Ads Creative Generator
Creates 5 professional ad images with text overlays
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

def add_text_with_shadow(draw, text, position, font, fill_color='white', shadow_color='black', shadow_offset=3):
    """Add text with drop shadow for readability"""
    x, y = position
    # Draw shadow
    draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=shadow_color)
    # Draw main text
    draw.text((x, y), text, font=font, fill=fill_color)

def create_ad(input_image, output_name, headline, subtext=None, cta=None, logo_path=None):
    """Create Facebook ad creative with text overlays"""
    
    # Open and resize image to 1200x628
    img = Image.open(input_image)
    img = img.resize((1200, 628), Image.Resampling.LANCZOS)
    
    # Add semi-transparent overlay for text readability
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw_overlay = ImageDraw.Draw(overlay)
    
    # Top gradient for headline
    for i in range(150):
        alpha = int(150 * (1 - i/150))
        draw_overlay.rectangle([(0, i), (1200, i+1)], fill=(0, 0, 0, alpha))
    
    # Bottom gradient for CTA
    if cta:
        for i in range(120):
            alpha = int(120 * (i/120))
            draw_overlay.rectangle([(0, 628-120+i), (1200, 628-120+i+1)], fill=(0, 0, 0, alpha))
    
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(img)
    
    # Try to load fonts (fallback to default if not available)
    try:
        font_headline = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 60)
        font_subtext = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 36)
        font_cta = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 48)
    except:
        font_headline = ImageFont.load_default()
        font_subtext = ImageFont.load_default()
        font_cta = ImageFont.load_default()
    
    # Add headline (top, centered)
    bbox = draw.textbbox((0, 0), headline, font=font_headline)
    text_width = bbox[2] - bbox[0]
    headline_x = (1200 - text_width) // 2
    add_text_with_shadow(draw, headline, (headline_x, 40), font_headline)
    
    # Add subtext if provided
    if subtext:
        bbox = draw.textbbox((0, 0), subtext, font=font_subtext)
        text_width = bbox[2] - bbox[0]
        subtext_x = (1200 - text_width) // 2
        add_text_with_shadow(draw, subtext, (subtext_x, 300), font_subtext)
    
    # Add CTA (bottom, centered)
    if cta:
        bbox = draw.textbbox((0, 0), cta, font=font_cta)
        text_width = bbox[2] - bbox[0]
        cta_x = (1200 - text_width) // 2
        add_text_with_shadow(draw, cta, (cta_x, 540), font_cta)
    
    # Add logo (bottom right)
    if logo_path and os.path.exists(logo_path):
        logo = Image.open(logo_path)
        # Resize logo to fit (max 200px wide)
        logo_width = 200
        logo_height = int(logo.height * (logo_width / logo.width))
        logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
        
        # Position in bottom right
        logo_x = 1200 - logo_width - 20
        logo_y = 628 - logo_height - 20
        
        # Add white background behind logo for visibility
        draw.rectangle(
            [(logo_x - 10, logo_y - 10), (logo_x + logo_width + 10, logo_y + logo_height + 10)],
            fill='white'
        )
        
        img.paste(logo, (logo_x, logo_y), logo if logo.mode == 'RGBA' else None)
    
    # Save as high-quality JPG
    img.save(output_name, 'JPEG', quality=95, optimize=True)
    print(f"✅ Created: {output_name}")

# Generate all 5 ads
logo = "aim-logo.jpg"

print("🎨 Generating AIM Meta Ads Creatives...\n")

# Ad 1: Professional Treatment Scene
create_ad(
    "therapist-patient.jpg",
    "ad-1-professional-treatment.jpg",
    "Edmonton's Trusted Injury Clinic",
    cta="780-250-8188",
    logo_path=logo
)

# Ad 2: WCB/Clinic Care
create_ad(
    "clinic-professional.jpg",
    "ad-2-wcb-care.jpg",
    "Expert WCB Care",
    subtext="No Referral Needed • Direct Billing",
    cta="780-250-8188",
    logo_path=logo
)

# Ad 3: Recovery Success
create_ad(
    "stock-recovery.jpg",
    "ad-3-recovery-success.jpg",
    "Get Back to Life Pain-Free",
    cta="Same-Day Appointments • 780-250-8188",
    logo_path=logo
)

# Ad 4: MVA Focus
create_ad(
    "stock-neck-treatment.jpg",
    "ad-4-mva-focus.jpg",
    "Injured in a Car Accident?",
    subtext="We Handle Insurance Paperwork",
    cta="Call 780-250-8188 Today",
    logo_path=logo
)

# Ad 5: Team/Trust
create_ad(
    "stock-team.jpg",
    "ad-5-team-trust.jpg",
    "38+ Years Serving Edmonton",
    subtext="Work Hard • Play Hard • Recover Right",
    cta="780-250-8188",
    logo_path=logo
)

print("\n✅ All 5 ad creatives ready for upload!")
print("📁 Location: /Users/orvilledavis/.openclaw/workspace/aim-meta-ads-creative/")
print("\n🚀 Next: Upload to Facebook Ads Manager")
