import Image from 'next/image';
import Link from 'next/link';

type BrandWordmarkProps = {
  priority?: boolean;
};

/** Selected precision wordmark — outlined white lettering with detached brass inset. Used in header and footer. */
export default function BrandWordmark({ priority = false }: BrandWordmarkProps) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="SyncAI home">
      <Image
        src="/brand/syncai-wordmark-light.svg"
        alt="SyncAI"
        width={843}
        height={224}
        className="h-8 w-auto"
        priority={priority}
      />
    </Link>
  );
}
