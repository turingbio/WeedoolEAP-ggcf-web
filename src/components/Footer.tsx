import { commonContent } from '@/content/common';
import Image from 'next/image';

const { footer } = commonContent;

export function Footer({ preview = false }: { preview?: boolean }) {
  return (
    <footer
      className={
        preview
          ? 'bg-[#101722] py-24 text-[15px] leading-6 text-[#f5f7fb]'
          : 'border-t border-[#202733] bg-[#202733] py-16 text-[15px] leading-6 text-[#f5f7fb]'
      }
    >
      <div className="site-container flex flex-col gap-2">
        <div
          className={
            preview
              ? 'mb-8 inline-flex w-fit'
              : 'mb-8 inline-flex w-fit rounded-md bg-[#faf8f4] px-3 py-2'
          }
        >
          <Image
            src={preview ? '/logo-full.png' : '/brand/logo-original.webp'}
            alt={commonContent.brandName}
            width={704}
            height={128}
            className={preview ? 'h-auto w-[136px] brightness-0 invert' : 'h-auto w-[136px]'}
            sizes="136px"
          />
        </div>
        <p>
          {footer.companyName} | {footer.ceo} | {footer.businessNumber}
        </p>
        <p>{footer.address}</p>
        <p className="flex flex-wrap items-center gap-x-3 text-[15px] leading-6">
          {footer.phoneLabel}{' '}
          <a
            href={footer.phoneHref}
            className="inline-flex min-h-touch items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {footer.phone}
          </a>{' '}
          {footer.hours} |{' '}
          <a
            href={footer.emailHref}
            className="inline-flex min-h-touch items-center [overflow-wrap:anywhere] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {footer.email}
          </a>
        </p>
        <p className="mt-8 border-t border-white/20 pt-6 text-white/75">{footer.copyright}</p>
      </div>
    </footer>
  );
}
