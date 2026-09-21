const sparklePath =
  'M12 1.5c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10Z';

export function VerifyDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[8%] left-[18%] size-2.5 animate-hero-twinkle rounded-full bg-white/80 [animation-delay:0.3s]" />
      <div className="absolute top-[22%] right-[16%] size-3 animate-hero-twinkle rounded-full bg-white/70 [animation-delay:2.1s]" />
      <div className="absolute top-[35%] left-[10%] size-2 animate-hero-twinkle rounded-full bg-[#99c2ff]/60 [animation-delay:3.4s]" />
      <div className="absolute top-[48%] right-[24%] size-3.5 animate-hero-twinkle rounded-full bg-white/65 [animation-delay:1.2s]" />
      <div className="absolute top-[62%] left-[24%] size-2 animate-hero-twinkle rounded-full bg-[#ffb700]/50 [animation-delay:4.1s]" />
      <div className="absolute top-[76%] right-[14%] size-2.5 animate-hero-twinkle rounded-full bg-white/75 [animation-delay:2.7s]" />
      <div className="absolute bottom-[8%] left-[32%] size-2 animate-hero-twinkle rounded-full bg-white/70 [animation-delay:1.6s]" />

      <svg
        viewBox="0 0 24 24"
        className="absolute top-[16%] left-[38%] size-5 animate-hero-sparkle text-[#ffb700] [animation-delay:0.8s]"
        fill="currentColor"
      >
        <path d={sparklePath} />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute top-[54%] left-[8%] size-4 animate-hero-sparkle text-white [animation-delay:3s]"
        fill="currentColor"
      >
        <path d={sparklePath} />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute top-[84%] right-[30%] size-5 animate-hero-sparkle text-[#99c2ff] [animation-delay:1.9s]"
        fill="currentColor"
      >
        <path d={sparklePath} />
      </svg>

      <div className="absolute top-[30%] right-[8%] size-3 animate-hero-float rounded-full bg-white/55 [animation-delay:0.5s]" />
      <div className="absolute bottom-[26%] left-[14%] size-2.5 animate-hero-float rounded-full bg-[#ffb700]/40 [animation-delay:3.8s]" />
    </div>
  );
}
