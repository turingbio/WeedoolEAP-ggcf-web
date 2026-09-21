import { commonContent } from '@/content/common';
import Image from 'next/image';

const { footer } = commonContent;

export function Footer() {
  return (
    <footer className="bg-[#101722] py-24 text-[15px] leading-6 text-[#f5f7fb]">
      <div className="site-container flex flex-col gap-2">
        <div className="mb-8 inline-flex w-fit">
          <Image
            src="/brand/logo-full.png"
            alt={commonContent.brandName}
            width={744}
            height={128}
            className="h-auto w-36 brightness-0 invert"
            sizes="144px"
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
