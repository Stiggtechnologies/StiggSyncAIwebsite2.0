import { fieldManual } from '@/lib/manuals';

export default function ManualByline() {
  return (
    <p className="text-sm text-slate-400">
      <span className="font-semibold text-slate-200">{fieldManual.author}</span>
      <span className="mx-2 text-slate-600">·</span>
      Author
      <span className="mx-2 text-slate-600">·</span>
      Field Manual {fieldManual.version}
    </p>
  );
}
