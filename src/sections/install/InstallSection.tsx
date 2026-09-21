import Image from 'next/image';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ButtonLink } from '@/components/ui/Button';
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
  },
  {
    key: 'android',
    href: links.googlePlay.href,
    qrImage: links.googlePlay.qrImage,
    buttonLabel: installContent.googlePlayButton,
    qrAlt: installContent.androidQrAlt,
  },
];

export function InstallSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      title={installContent.title}
      className="bg-[linear-gradient(130deg,#e5efff,#eef8ff_60%,#d6f5f0)]"
      containerClassName="text-center"
      headingClassName="mx-auto items-center text-center"
    >
      <div className="mx-auto mt-12 mb-12 flex flex-wrap justify-center gap-8 md:gap-24">
        {stores.map((store) => (
          <div key={store.key} className="flex min-w-0 flex-col items-center gap-6">
            <div className="rounded-[20px] bg-white p-3">
              <Image
                src={store.qrImage}
                alt={store.qrAlt}
                width={120}
                height={120}
                unoptimized
                className="h-[120px] w-[120px]"
              />
            </div>
            <ButtonLink href={store.href} target="_blank" rel="noopener noreferrer">
              {store.buttonLabel}
            </ButtonLink>
          </div>
        ))}
      </div>

      <p className="text-muted">{installContent.qrCaption}</p>

      <a
        href={links.manual.href}
        download={links.manual.fileName}
        className="mt-2 inline-flex min-h-12 items-center text-base text-brand-deep underline underline-offset-[5px] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-link"
      >
        {installContent.manualButton}
      </a>
    </SectionWrapper>
  );
}
