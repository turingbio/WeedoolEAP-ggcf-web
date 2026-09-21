import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { faqContent } from './content';

export function FaqSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={faqContent.label}
      title={faqContent.title}
      className="bg-white [&>.site-container]:max-w-[960px]"
    >
      <div className="mt-16 divide-y divide-[#e7eaf0] border-y border-[#e7eaf0]">
        {faqContent.items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex min-h-touch cursor-pointer list-none items-center justify-between gap-8 py-6 text-xl leading-tight font-normal tracking-[-0.02em] text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-2xl font-normal text-black transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>
            <p className="max-w-[720px] pb-8 pl-10 text-lg leading-8 text-[#404040]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}
