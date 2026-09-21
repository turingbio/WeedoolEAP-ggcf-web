import Image from 'next/image';
import { links } from '@/config/links';
import type { SectionProps } from '../types';
import { heroContent } from './content';

export function HeroSection({ id }: SectionProps) {
  const [titleLead, titleTail] = heroContent.title.split(', ');

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-brand-pale md:min-h-[calc(100svh-80px)]"
    >
      <Image
        src="/hero-paper-v3.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] md:object-[center_55%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#edf5fff0,#edf5ffde_58%,#edf5ff20)] md:bg-[linear-gradient(90deg,#edf5fff5,#edf5ffe0_32%,#edf5ff00_76%)]"
      />
      <div className="site-container py-9 pb-25 md:py-0">
        <p className="mb-7 text-base font-medium text-brand-mid md:text-2xl">{heroContent.body}</p>
        <h1
          id={`${id}-title`}
          className="text-[44px] leading-[1.2] font-[650] tracking-[-0.025em] text-brand-deep md:text-[clamp(44px,5vw,60px)]"
        >
          {titleLead},
          <br />
          {titleTail}
        </h1>
        <p className="mt-9 text-lg text-muted md:text-[28px]">{heroContent.footer}</p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          <a
            href={links.appStore.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-5 text-base font-[550] text-white transition-colors duration-150 hover:bg-brand-mid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-link md:px-6"
          >
            {heroContent.appStoreButton}
          </a>
          <a
            href={links.googlePlay.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-base font-[550] text-brand-mid transition-colors duration-150 hover:bg-[#cce0ff] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-link md:px-6"
          >
            {heroContent.googlePlayButton}
          </a>
        </div>
      </div>
    </section>
  );
}
