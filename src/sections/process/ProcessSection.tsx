import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { processContent } from './content';

// TODO: 앱 캡처 이미지 반영 예정. 임시 도형 사용
export function ProcessSection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id} label={processContent.label} title={processContent.title}>
      <ol className="grid gap-6 sm:grid-cols-5 sm:gap-3">
        {processContent.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3">
            <div
              role="img"
              aria-label={`${step.title} ${processContent.captureAlt}`}
              className="aspect-[9/16] w-full rounded-xl border border-line bg-white"
            />
            <h3 className="font-bold">
              {index + 1}. {step.title}
            </h3>
            <p className="text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
