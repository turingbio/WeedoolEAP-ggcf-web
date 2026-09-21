export function AccountDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 280 180"
        className="absolute top-1/2 left-2 h-[62%] -translate-y-1/2 -rotate-12 text-[#99c2ff] opacity-[0.09] md:left-10"
        fill="none"
      >
        <rect
          x="10"
          y="10"
          width="260"
          height="160"
          rx="26"
          stroke="currentColor"
          strokeWidth="12"
        />
        <path
          d="M46 68h92M46 104h150M46 134h64"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-[0.10]">
        <filter id="account-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#account-grain)" />
      </svg>
    </div>
  );
}
