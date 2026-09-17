import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { anonymityContent } from './content';

export function AnonymitySection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id} label={anonymityContent.label} title={anonymityContent.title}>
      {anonymityContent.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-2">
          {paragraph}
        </p>
      ))}
      <p className="mt-6 text-center font-bold">{anonymityContent.closing}</p>
    </SectionWrapper>
  );
}
