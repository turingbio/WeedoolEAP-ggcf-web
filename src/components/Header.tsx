'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { commonContent } from '@/content/common';

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY;
      const previous = lastScrollRef.current;
      lastScrollRef.current = current;

      // 최상단 부근에서는 항상 보여 준다
      if (current < 80) {
        setIsHidden(false);
        return;
      }

      // 작은 흔들림으로 깜빡이지 않도록 일정 거리 이상 움직였을 때만 바꾼다
      if (Math.abs(current - previous) < 6) return;

      setIsHidden(current > previous);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#e4e7ec]/40 bg-white/65 backdrop-blur-md transition-transform duration-300 ease-out motion-reduce:transition-none ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="site-container flex min-h-18 items-center justify-between gap-4 md:min-h-20">
        <a href="#hero" aria-label={commonContent.brandName}>
          <Image
            src="/brand/logo-full.png"
            alt={commonContent.brandName}
            width={744}
            height={128}
            className="h-auto w-36 md:w-40"
            sizes="(max-width: 767px) 144px, 160px"
          />
        </a>
        <a
          href="#account"
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-brand-strong px-4 text-sm font-[550] text-white transition-colors duration-150 hover:bg-brand-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link md:min-h-11 md:px-6 md:text-base"
        >
          {commonContent.header.ctaButton}
        </a>
      </div>
    </header>
  );
}
