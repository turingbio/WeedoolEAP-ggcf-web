import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { links } from '@/config/links';
import { commonContent } from '@/content/common';
import { heroContent } from '@/sections/hero/content';
import { introContent } from '@/sections/intro/content';
import {
  FeatureIllustration,
  type FeatureIllustrationKind,
} from '@/sections/intro/FeatureIllustration';
import { anonymityContent } from '@/sections/anonymity/content';
import { accountContent } from '@/sections/account/content';
import { processContent } from '@/sections/process/content';
import { installContent } from '@/sections/install/content';
import { faqContent } from '@/sections/faq/content';
import logo from '../../../public/brand/logo-full.png';
import styles from './preview.module.css';

export const metadata: Metadata = {
  title: '위둘 — 디자인 v4 시안',
  robots: { index: false, follow: false },
};

const kinds: FeatureIllustrationKind[] = ['chat', 'check', 'routine', 'report'];
const screenshots = ['login', 'screening', 'ba', 'chatbot', 'report'];
const stores = [
  { ...links.appStore, label: installContent.appStoreButton, alt: installContent.iosQrAlt },
  { ...links.googlePlay, label: installContent.googlePlayButton, alt: installContent.androidQrAlt },
];

export default function DesignPreview() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src={logo} alt={commonContent.brandName} width={144} />
        <span className={styles.previewLabel}>디자인 시안 · v4</span>
      </header>
      <main>
        <section className={styles.hero} aria-labelledby="preview-hero-title">
          <Image
            src="/hero-paper-v3.png"
            alt=""
            fill
            preload
            sizes="100vw"
            className={styles.heroArt}
          />
          <div className={styles.heroTitle}>
            <p className={styles.heroNote}>{heroContent.body}</p>
            <h1 id="preview-hero-title">
              요즘 마음,
              <br />
              괜찮으세요?
            </h1>
            <p className={styles.heroDescription}>{heroContent.footer}</p>
            <div className={styles.actions}>
              {stores.map((store, index) => (
                <a
                  key={store.label}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={index === 0 ? styles.primary : styles.secondary}
                >
                  {store.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="preview-intro-title">
          <div className={styles.sectionTitle}>
            <p className={styles.label}>{introContent.label}</p>
            <h2 id="preview-intro-title" className={styles.heading}>
              {introContent.brandName}
              {introContent.lead}
            </h2>
            <p className={styles.description}>{introContent.body}</p>
          </div>
          <ul className={styles.features}>
            {introContent.features.map((feature, index) => (
              <li key={feature.label} className={styles.feature}>
                <div className={styles.featureArt}>
                  <FeatureIllustration kind={kinds[index]} />
                </div>
                <div className={styles.featureCopy}>
                  <p className={styles.featureLabel}>{feature.label}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.privacy}`}
          aria-labelledby="preview-privacy-title"
        >
          <div className={styles.privacyInner}>
            <div className={styles.sectionTitle}>
              <p className={styles.label}>{anonymityContent.label}</p>
              <h2 id="preview-privacy-title" className={styles.heading}>
                {anonymityContent.title}
              </h2>
            </div>
            <ul className={styles.privacyGrid}>
              {anonymityContent.cards.map((card) => (
                <li key={card.title}>
                  <span className={styles.checkmark} aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.account} aria-labelledby="preview-account-title">
          <div className={styles.accountInner}>
            <div className={styles.sectionTitle}>
              <p className={styles.label}>{accountContent.label}</p>
              <h2 id="preview-account-title" className={styles.heading}>
                {accountContent.title}
              </h2>
              <p className={styles.description}>{accountContent.body}</p>
            </div>
            <div className={styles.accountAction}>
              <a href="/welcome#account" className={styles.primary}>
                {accountContent.issueButton}
              </a>
              <p className={styles.previewHint}>기존 계정 발급 화면으로 이동합니다</p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.process}`}
          aria-labelledby="preview-process-title"
        >
          <div className={styles.sectionTitle}>
            <p className={styles.label}>{processContent.label}</p>
            <h2 id="preview-process-title" className={styles.heading}>
              {processContent.title}
            </h2>
          </div>
          <ol className={styles.steps}>
            {processContent.steps.map((step, index) => (
              <li key={step.title}>
                <div className={styles.processScreenshot}>
                  <Image
                    src={`/screenshot/process-${screenshots[index]}.png`}
                    alt={`${step.title} 앱 화면`}
                    width={176}
                    height={381}
                    sizes="(max-width: 700px) 140px, 176px"
                  />
                </div>
                <div className={styles.stepCopy}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.install} aria-labelledby="preview-install-title">
          <div className={styles.sectionTitle}>
            <h2 id="preview-install-title" className={styles.heading}>
              {installContent.title}
            </h2>
          </div>
          <div className={styles.stores}>
            {stores.map((store) => (
              <div className={styles.store} key={store.label}>
                <div className={styles.qr}>
                  <Image src={store.qrImage} alt={store.alt} width={120} height={120} unoptimized />
                </div>
                <a
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  {store.label}
                </a>
              </div>
            ))}
          </div>
          <p>{installContent.qrCaption}</p>
          <a className={styles.manual} href={links.manual.href} download={links.manual.fileName}>
            {installContent.manualButton}
          </a>
        </section>

        <section className={`${styles.section} ${styles.faq}`} aria-labelledby="preview-faq-title">
          <h2 id="preview-faq-title">{faqContent.title}</h2>
          <div className={styles.questions}>
            {faqContent.items.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
