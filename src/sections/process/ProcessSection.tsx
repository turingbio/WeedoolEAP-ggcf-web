import Image from 'next/image';
import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { processContent } from './content';

const screenshots = ['login', 'screening', 'ba', 'chatbot', 'report'] as const;

export function ProcessSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={processContent.label}
      title={processContent.title}
      className="bg-white"
    >
      <ol className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-7 xl:grid-cols-5">
        {processContent.steps.map((step, index) => (
          <li
            key={step.title}
            className="grid min-w-0 grid-cols-[140px_1fr] items-start gap-6 max-[380px]:grid-cols-1 md:block"
          >
            <div className="w-[140px] overflow-hidden rounded-xl border border-[#bbc7d6] bg-[#f2f4f7] md:w-[176px]">
              <Image
                src={`/screenshot/process-${screenshots[index]}.png`}
                alt={`${step.title} ${processContent.captureAlt}`}
                width={176}
                height={381}
                sizes="(max-width: 767px) 140px, 176px"
                className="block h-auto w-full"
              />
            </div>
            <div className="md:mt-7">
              <span className="mb-4 inline-grid h-7 w-7 place-items-center rounded-full bg-brand-pale text-[15px] font-semibold text-brand-mid">
                {index + 1}
              </span>
              <h3 className="mb-2 text-[22px] leading-[1.4] font-semibold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="text-[17px] text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
