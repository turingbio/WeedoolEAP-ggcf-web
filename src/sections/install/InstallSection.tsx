import Image from 'next/image';
import { SectionWrapper } from '@/components/SectionWrapper';
import { InstallDecoration } from './InstallDecoration';
import { links } from '@/config/links';
import type { SectionProps } from '../types';
import { installContent } from './content';

const stores = [
  {
    key: 'ios',
    href: links.appStore.href,
    qrImage: links.appStore.qrImage,
    buttonLabel: installContent.appStoreButton,
    qrAlt: installContent.iosQrAlt,
    badge: '/store/appstore-ko.svg',
    badgeWidth: 143,
    badgeHeight: 44,
  },
  {
    key: 'android',
    href: links.googlePlay.href,
    qrImage: links.googlePlay.qrImage,
    buttonLabel: installContent.googlePlayButton,
    qrAlt: installContent.androidQrAlt,
    badge: '/store/googleplay-ko.png',
    badgeWidth: 142,
    badgeHeight: 55,
  },
];

export function InstallSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      title={installContent.title}
      decoration={<InstallDecoration />}
      className="relative isolate overflow-hidden bg-[linear-gradient(130deg,#a8c8ff,#cfe2ff_55%,#b4e8dd)] py-14 md:py-20"
      containerClassName="text-center"
      headingClassName="mx-auto items-center text-center"
    >
      <div className="mx-auto mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
        {stores.map((store) => (
          <div
            key={store.key}
            className="flex min-w-0 flex-col items-center gap-5 rounded-[28px] bg-white/75 px-8 py-8 shadow-[0_10px_30px_rgb(32_51_77_/_0.07)]"
          >
            <Image
              src={store.qrImage}
              alt={store.qrAlt}
              width={120}
              height={120}
              unoptimized
              className="h-[120px] w-[120px] rounded-lg bg-white"
            />
            <a
              href={store.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-end justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <Image
                src={store.badge}
                alt={store.buttonLabel}
                width={store.badgeWidth}
                height={store.badgeHeight}
                unoptimized
              />
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 hidden items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-base font-medium text-ink md:inline-flex">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5 shrink-0 text-brand-strong"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 7.5h2.8l1.2-2h7l1.2 2h2.8A1.5 1.5 0 0 1 21 9v8.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V9a1.5 1.5 0 0 1 1.5-1.5Z" />
          <circle cx="12" cy="13" r="3.4" />
        </svg>
        {installContent.qrCaption}
      </p>

      <div className="mt-7 flex justify-center">
        <a
          href={links.manual.href}
          download={links.manual.fileName}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-base font-medium text-ink shadow-[0_4px_14px_rgb(32_51_77_/_0.10)] transition-colors hover:bg-[#f4f8fd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4v11m0 0-4-4m4 4 4-4" />
            <path d="M5 18.5h14" />
          </svg>
          {installContent.manualButton}
        </a>
      </div>
    </SectionWrapper>
  );
}
