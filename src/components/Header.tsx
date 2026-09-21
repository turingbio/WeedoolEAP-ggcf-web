import { commonContent } from '@/content/common';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white">
      <div className="site-container flex min-h-20 items-center">
        <a href="#hero" aria-label={commonContent.brandName}>
          <Image
            src="/brand/logo-original.webp"
            alt={commonContent.brandName}
            width={704}
            height={128}
            className="h-auto w-[136px]"
            sizes="136px"
          />
        </a>
      </div>
    </header>
  );
}
