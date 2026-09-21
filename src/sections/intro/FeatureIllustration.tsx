import Image from 'next/image';
import styles from './FeatureIllustration.module.css';

export type FeatureIllustrationKind = 'chat' | 'check' | 'routine' | 'report';

const illustrationSources: Record<FeatureIllustrationKind, string> = {
  chat: '/intro-chat.png',
  check: '/intro-selfcheck.png',
  routine: '/intro-ba.png',
  report: '/intro-report.png',
};

const illustrationSizes = '(min-width: 1280px) 280px, (min-width: 768px) 45vw, calc(100vw - 40px)';

type FeatureIllustrationProps = {
  kind: FeatureIllustrationKind;
};

export function FeatureIllustration({ kind }: FeatureIllustrationProps) {
  return (
    <span className={`${styles.panel} ${styles[kind]}`} aria-hidden="true">
      <Image
        src={illustrationSources[kind]}
        alt=""
        fill
        sizes={illustrationSizes}
        className={styles.illustration}
      />
    </span>
  );
}
