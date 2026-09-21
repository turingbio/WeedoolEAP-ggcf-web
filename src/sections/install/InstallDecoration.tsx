export function InstallDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 200 300"
        className="absolute top-1/2 right-2 h-[78%] -translate-y-1/2 rotate-12 text-[#99c2ff] opacity-[0.32] md:right-10"
        fill="none"
      >
        <rect
          x="30"
          y="14"
          width="140"
          height="272"
          rx="34"
          stroke="currentColor"
          strokeWidth="14"
        />
        <rect x="82" y="40" width="36" height="10" rx="5" fill="currentColor" />
        <path
          d="M100 116v70m0 0-28-28m28 28 28-28"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-[0.10]">
        <filter id="install-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#install-grain)" />
      </svg>
    </div>
  );
}
