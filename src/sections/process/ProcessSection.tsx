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
      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-5">
        {processContent.steps.map((step, index) => (
          <li
            key={step.title}
            className="flex min-w-0 flex-row items-start gap-5 sm:flex-col sm:gap-6"
          >
            <div className="relative aspect-[750/1624] w-[88px] shrink-0 overflow-hidden rounded-[22px] bg-[#f5f8fd] shadow-[0_10px_24px_rgb(32_51_77_/_0.08)] sm:w-[104px] xl:w-[120px]">
              <Image
                src={`/screenshot/process-${screenshots[index]}.png`}
                alt={`${step.title} ${processContent.captureAlt}`}
                fill
                sizes="(min-width: 1280px) 120px, (min-width: 640px) 104px, 88px"
                className="object-contain"
              />
            </div>
            <div className="w-full">
              <p className="mb-4 text-base font-medium tracking-normal text-muted uppercase">
                0{index + 1}
              </p>
              <h3 className="mb-3 text-2xl leading-tight font-medium tracking-[-0.015em] text-ink">
                {step.title}
              </h3>
              <p className="text-lg leading-8 text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
