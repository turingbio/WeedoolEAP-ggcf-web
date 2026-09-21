import Image from 'next/image';
import { links } from '@/config/links';
import type { SectionProps } from '../types';
import { heroContent } from './content';
import './hero.css';

export function HeroSection({ id }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="px-3 md:px-6">
      <div className="paper-hero">
        <Image
          src="/hero-paper-v3.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="paper-hero-art"
        />
        <div className="paper-hero-light" aria-hidden="true" />
        <div className="paper-hero-copy">
          <p className="mb-7 text-lg font-medium text-ink">{heroContent.body}</p>
          <h1
            id={`${id}-title`}
            className="text-[44px] leading-[1.18] font-medium tracking-[-0.025em] text-ink md:text-[64px]"
          >
            {heroContent.title.split(', ')[0]},<br />
            {heroContent.title.split(', ')[1]}
          </h1>
          <p className="mt-8 max-w-[360px] text-lg leading-8 text-muted">{heroContent.footer}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={links.appStore.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-brand-strong px-7 text-base font-medium text-white hover:bg-brand-strong"
            >
              {heroContent.appStoreButton}
            </a>
            <a
              href={links.googlePlay.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-[#bdcde0] bg-white/70 px-7 text-base font-medium text-ink hover:bg-white"
            >
              {heroContent.googlePlayButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
