export function AnonymityDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 200 240"
        className="absolute top-1/2 -right-28 h-[210%] -translate-y-1/2 text-[#99c2ff] opacity-[0.08] md:-right-40"
        fill="none"
      >
        <path
          d="M60 104V72a40 40 0 0 1 80 0v32"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <rect x="26" y="104" width="148" height="122" rx="30" fill="currentColor" />
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-[0.10]">
        <filter id="anonymity-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#anonymity-grain)" />
      </svg>
    </div>
  );
}
