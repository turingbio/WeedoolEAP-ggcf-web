import { commonContent } from '@/content/common';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line bg-surface px-5 py-8 text-center text-muted">
      <a
        href={commonContent.footer.telHref}
        className="inline-flex min-h-touch items-center underline"
      >
        {commonContent.footer.text}
      </a>
    </footer>
  );
}
