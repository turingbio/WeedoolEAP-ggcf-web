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
      className="border-y border-line bg-surface"
      headingClassName="mx-auto text-center"
    >
      <div className="mx-auto mt-16 grid max-w-[900px] justify-items-center gap-10 sm:grid-cols-2">
        {stores.map((store) => (
          <div key={store.key} className="flex min-w-0 flex-col items-center gap-6 text-center">
            <div className="rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgb(32_51_77_/_0.06)]">
              <Image src={store.qrImage} alt={store.qrAlt} width={120} height={120} unoptimized />
            </div>
            <ButtonLink href={store.href} target="_blank" rel="noopener noreferrer">
              {store.buttonLabel}
            </ButtonLink>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-base leading-7 text-muted">{installContent.qrCaption}</p>

      <div className="mt-10 flex justify-center">
        <ButtonLink href={links.manual.href} download={links.manual.fileName} variant="secondary">
          {installContent.manualButton}
        </ButtonLink>
      </div>
    </SectionWrapper>
  );
}
