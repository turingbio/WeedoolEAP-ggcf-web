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
    <SectionWrapper id={id} title={installContent.title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {stores.map((store) => (
          <div
            key={store.key}
            className="flex flex-col items-center gap-4 rounded-2xl bg-surface p-5"
          >
            <Image src={store.qrImage} alt={store.qrAlt} width={160} height={160} />
            <ButtonLink href={store.href} target="_blank" rel="noopener noreferrer">
              {store.buttonLabel}
            </ButtonLink>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
