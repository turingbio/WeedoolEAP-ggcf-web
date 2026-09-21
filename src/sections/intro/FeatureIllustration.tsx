import styles from './FeatureIllustration.module.css';

export type FeatureIllustrationKind = 'chat' | 'check' | 'routine' | 'report';

type FeatureIllustrationProps = {
  kind: FeatureIllustrationKind;
};

const stroke = '#326bc0';
const ink = '#20334d';
const softLine = '#cbd9ec';

export function FeatureIllustration({ kind }: FeatureIllustrationProps) {
  return (
    <span className={`${styles.panel} ${styles[kind]}`} aria-hidden="true">
      <svg
        className={styles.illustration}
        viewBox="0 0 360 220"
        role="presentation"
        focusable="false"
      >
        {kind === 'chat' && <ChatIllustration />}
        {kind === 'check' && <CheckIllustration />}
        {kind === 'routine' && <RoutineIllustration />}
        {kind === 'report' && <ReportIllustration />}
      </svg>
    </span>
  );
}

function ChatIllustration() {
  return (
    <>
      <g>
        <path
          d="M69 61c0-17 14-31 31-31h160c17 0 31 14 31 31s-14 31-31 31h-72l-19 18 4-18h-73c-17 0-31-14-31-31Z"
          fill="#fff"
        />
        <path d="M109 53h111M109 67h72" stroke={softLine} strokeWidth="7" strokeLinecap="round" />
      </g>
      <g>
        <path
          d="M36 133c0-15 12-27 27-27h85c15 0 27 12 27 27s-12 27-27 27h-39l-16 15 3-15H63c-15 0-27-12-27-27Z"
          fill={stroke}
        />
        <path d="M71 125h67M71 138h43" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g>
        <path
          d="M188 157c0-14 11-25 25-25h85c14 0 25 11 25 25s-11 25-25 25h-34l-15 14 2-14h-38c-14 0-25-11-25-25Z"
          fill="#ffd9cf"
        />
        <path d="M220 149h54M220 162h37" stroke="#d99082" strokeWidth="7" strokeLinecap="round" />
      </g>
    </>
  );
}

function CheckIllustration() {
  return (
    <>
      <path
        d="M61 178c42 17 195 20 239-9"
        fill="none"
        stroke="#f3dca4"
        strokeWidth="3"
        strokeDasharray="5 9"
      />
      <rect
        x="87"
        y="27"
        width="186"
        height="166"
        rx="25"
        fill="#fff"
        stroke="#f0dfb3"
        strokeWidth="3"
      />
      <circle cx="131" cy="78" r="24" fill="#ffdd8e" />
      <circle cx="124" cy="75" r="3.5" fill={ink} />
      <circle cx="138" cy="75" r="3.5" fill={ink} />
      <path
        d="M122 86c5 7 13 7 18 0"
        fill="none"
        stroke={ink}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M171 59h66M171 70h41" stroke="#eadfbf" strokeWidth="6" strokeLinecap="round" />
      <rect x="111" y="120" width="24" height="24" rx="8" fill="#eaf3ff" />
      <path
        d="m118 132 5 5 9-11"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M150 132h80" stroke="#d8e4f5" strokeWidth="7" strokeLinecap="round" />
      <rect x="111" y="155" width="24" height="24" rx="8" fill="#dff4eb" />
      <path
        d="m118 167 5 5 9-11"
        fill="none"
        stroke="#469b7b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M150 167h57" stroke="#d8e4f5" strokeWidth="7" strokeLinecap="round" />
    </>
  );
}

function RoutineIllustration() {
  return (
    <>
      <path
        d="M40 153c49-61 72-74 117-51 33 17 55 17 76-9 22-27 49-24 83 10"
        fill="none"
        stroke="#e5ae9e"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2 13"
      />
      <g>
        <rect x="43" y="49" width="98" height="77" rx="22" fill="#fff" />
        <circle cx="70" cy="77" r="15" fill="#ffd9cf" />
        <path d="M65 77h10M70 72v10" stroke="#bd7f70" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M95 69h28M95 82h20" stroke="#ebc7bd" strokeWidth="6" strokeLinecap="round" />
        <path d="M61 105h59" stroke="#f0ddd7" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g>
        <rect x="154" y="92" width="96" height="76" rx="22" fill="#fff" />
        <circle cx="182" cy="120" r="15" fill="#eaf3ff" />
        <path
          d="m175 120 5 5 9-11"
          fill="none"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M206 112h27M206 125h20" stroke="#d0deee" strokeWidth="6" strokeLinecap="round" />
        <path d="M172 149h58" stroke="#dbe6f3" strokeWidth="7" strokeLinecap="round" />
      </g>
      <circle cx="303" cy="71" r="30" fill="#ffdd8e" />
      <path
        d="M303 56v17l11 7"
        fill="none"
        stroke="#a97746"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function ReportIllustration() {
  return (
    <>
      <rect
        x="56"
        y="30"
        width="224"
        height="164"
        rx="26"
        fill="#fff"
        stroke="#ded8f5"
        strokeWidth="3"
      />
      <path d="M84 161h165" stroke="#e7e3f5" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M92 137 125 119l31 14 34-45 30 21 24-31"
        fill="none"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="92" cy="137" r="6" fill="#fff" stroke={stroke} strokeWidth="4" />
      <circle cx="125" cy="119" r="6" fill="#fff" stroke={stroke} strokeWidth="4" />
      <circle cx="156" cy="133" r="6" fill="#fff" stroke={stroke} strokeWidth="4" />
      <circle cx="190" cy="88" r="6" fill="#fff" stroke={stroke} strokeWidth="4" />
      <circle cx="220" cy="109" r="6" fill="#fff" stroke={stroke} strokeWidth="4" />
      <circle cx="244" cy="78" r="6" fill="#fff" stroke={stroke} strokeWidth="4" />
      <g>
        <rect x="215" y="40" width="107" height="40" rx="20" fill="#cfe0ff" />
        <circle cx="238" cy="60" r="8" fill="#326bc0" />
        <path
          d="m234 60 3 3 6-7"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M255 56h43" stroke="#326bc0" strokeWidth="6" strokeLinecap="round" />
      </g>
      <path d="M88 63h53M88 74h30" stroke="#e2ddf5" strokeWidth="7" strokeLinecap="round" />
    </>
  );
}
