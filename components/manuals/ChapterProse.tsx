import type { ManualChapter } from '@/lib/manuals';

export default function ChapterProse({ chapter }: { chapter: ManualChapter }) {
  return (
    <div className="space-y-5 text-base leading-7 text-slate-300">
      {chapter.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
