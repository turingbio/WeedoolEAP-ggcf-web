import { commonContent } from '@/content/common';

const { footer } = commonContent;

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line bg-surface px-5 py-8 text-muted">
      <div className="mx-auto flex max-w-xl flex-col gap-1">
        <p>
          {footer.companyName} | {footer.ceo} | {footer.businessNumber}
        </p>
        <p>{footer.address}</p>
        <p>
          {footer.phoneLabel}{' '}
          <a href={footer.phoneHref} className="underline">
            {footer.phone}
          </a>{' '}
          {footer.hours} |{' '}
          <a href={footer.emailHref} className="underline">
            {footer.email}
          </a>
        </p>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
