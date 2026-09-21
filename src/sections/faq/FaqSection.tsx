import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { faqContent } from './content';

export function FaqSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={faqContent.label}
      title={faqContent.title}
      className="bg-white"
      containerClassName="max-w-[880px]"
      headingClassName="mb-6 md:mb-6 [&_.editorial-title]:text-[28px]"
    >
      <div className="mt-6">
        {faqContent.items.map((item) => (
          <details key={item.question} className="group border-b border-[#e4e7ec]">
            <summary className="flex min-h-touch cursor-pointer list-none items-center justify-between gap-5 py-5 text-[17px] font-medium text-ink focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-brand-link [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-2xl text-brand-bright transition-transform duration-150 ease-out group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>
            <p className="pb-5 text-base leading-[1.75] text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}
