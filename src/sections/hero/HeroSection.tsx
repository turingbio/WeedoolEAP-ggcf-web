import Image from 'next/image';
import type { SectionProps } from '../types';
import { heroContent } from './content';

export function HeroSection({ id }: SectionProps) {
  const [titleLead, titleTail] = heroContent.title.split(', ');

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[linear-gradient(120deg,#eff5ff,#e5efff_55%,#f8f4ec)] md:min-h-[calc(100svh-80px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center"
      >
        <Image
          src="/hero-paper-v3.png"
          alt=""
          width={2896}
          height={2172}
          preload
          className="h-auto w-full [mask-image:linear-gradient(to_right,transparent_0%,black_22%),linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)] [mask-composite:intersect] object-contain opacity-55 md:opacity-100"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[18%] right-[18%] h-[75%] w-[46%] rounded-full bg-[radial-gradient(circle,#fff3e2_0%,#fff3e200_70%)] blur-3xl" />
        <div className="absolute -bottom-[22%] -left-[8%] h-[70%] w-[46%] rounded-full bg-[radial-gradient(circle,#cfe0ff_0%,#cfe0ff00_70%)] blur-3xl" />
        <div className="absolute top-[22%] left-[6%] size-3 rounded-full bg-white/70" />
        <div className="absolute top-[64%] left-[22%] size-2 rounded-full bg-white/60" />
        <div className="absolute top-[14%] left-[34%] size-1.5 rounded-full bg-[#99c2ff]/50" />
        <div className="absolute bottom-[18%] left-[12%] size-2.5 rounded-full bg-[#ffd9a8]/60" />
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
      <div className="site-container relative z-10 py-12 md:py-0">
        <div className="md:max-w-[46%]">
          <p className="mb-7 text-base font-medium text-brand-mid md:text-2xl">
            {heroContent.body}
          </p>
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
              href="#account"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-strong px-7 text-base font-[550] text-white transition-colors duration-150 hover:bg-brand-mid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-link"
            >
              {heroContent.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
