import { commonContent } from '@/content/common';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white">
      <div className="site-container flex min-h-18 items-center md:min-h-20">
        <a href="#hero" aria-label={commonContent.brandName}>
          <Image
            src="/brand/logo-original.webp"
            alt={commonContent.brandName}
            width={704}
            height={128}
            className="h-auto w-32 md:w-36"
            sizes="(max-width: 767px) 128px, 144px"
          />
        </a>
      </div>
    </header>
  );
}
