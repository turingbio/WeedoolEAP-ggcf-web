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
        <div className="absolute top-[22%] left-[6%] size-3 animate-hero-twinkle rounded-full bg-white/70 [animation-delay:0s]" />
        <div className="absolute top-[64%] left-[22%] size-2 animate-hero-twinkle rounded-full bg-white/60 [animation-delay:1.4s]" />
        <div className="absolute top-[14%] left-[34%] size-1.5 animate-hero-twinkle rounded-full bg-[#99c2ff]/60 [animation-delay:2.6s]" />
        <div className="absolute bottom-[18%] left-[12%] size-2.5 animate-hero-twinkle rounded-full bg-[#ffb700]/55 [animation-delay:0.7s]" />
        <div className="absolute top-[42%] left-[2%] size-2 animate-hero-twinkle rounded-full bg-[#ffb700]/45 [animation-delay:3.4s]" />
        <div className="absolute top-[78%] left-[38%] size-1.5 animate-hero-twinkle rounded-full bg-[#99c2ff]/55 [animation-delay:2s]" />
        <div className="absolute top-[10%] right-[46%] size-2.5 animate-hero-twinkle rounded-full bg-white/80 [animation-delay:1.8s]" />
        <div className="absolute top-[70%] right-[42%] size-3.5 animate-hero-twinkle rounded-full bg-white/65 [animation-delay:4s]" />
        <div className="absolute top-[26%] right-[20%] size-2 animate-hero-twinkle rounded-full bg-white/75 [animation-delay:3.1s]" />
        <div className="absolute right-[54%] bottom-[10%] size-2 animate-hero-twinkle rounded-full bg-white/70 [animation-delay:2.4s]" />
        <div className="absolute top-[52%] left-[16%] size-3.5 animate-hero-float rounded-full bg-white/55 [animation-delay:5s]" />
        <svg
          viewBox="0 0 24 24"
          className="absolute top-[16%] right-[34%] size-6 animate-hero-sparkle text-[#ffb700] [animation-delay:0.4s]"
          fill="currentColor"
        >
          <path d="M12 1.5c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="absolute top-[58%] right-[12%] size-4 animate-hero-sparkle text-white [animation-delay:2.2s]"
          fill="currentColor"
        >
          <path d="M12 1.5c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="absolute top-[34%] left-[30%] size-5 animate-hero-sparkle text-[#99c2ff] [animation-delay:3.6s]"
          fill="currentColor"
        >
          <path d="M12 1.5c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10Z" />
        </svg>
        <div className="absolute top-[30%] right-[6%] size-2.5 animate-hero-float rounded-full bg-[#ffb700]/40 [animation-delay:1s]" />
        <div className="absolute right-[26%] bottom-[26%] size-3 animate-hero-float rounded-full bg-white/60 [animation-delay:3s]" />
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
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-strong px-9 text-lg font-semibold text-white shadow-[0_8px_24px_rgb(0_102_255_/_0.28)] transition-colors duration-150 hover:bg-brand-mid focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-link md:min-h-16 md:px-11 md:text-xl"
            >
              {heroContent.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
