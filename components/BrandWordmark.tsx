import Image from 'next/image';
import Link from 'next/link';

type BrandWordmarkProps = {
  priority?: boolean;
};

/** Canonical comet wordmark — white SyncAI + cyan motion mark. Used in header and footer. */
export default function BrandWordmark({ priority = false }: BrandWordmarkProps) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="SyncAI home">
      <Image
        src="/brand/syncai-wordmark.png"
        alt="SyncAI"
        width={303}
        height={144}
        className="h-10 w-auto"
        priority={priority}
      />
    </Link>
  );
}
