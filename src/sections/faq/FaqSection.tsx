import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { faqContent } from './content';

export function FaqSection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id} title={faqContent.title}>
      <div className="flex flex-col gap-3">
        {faqContent.items.map((item) => (
          <details key={item.question} className="group rounded-xl bg-white px-5">
            <summary className="flex min-h-touch cursor-pointer list-none items-center gap-2 py-3 font-bold [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="transition-transform group-open:rotate-90">
                ▸
              </span>
              {item.question}
            </summary>
            <p className="pb-4 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}
