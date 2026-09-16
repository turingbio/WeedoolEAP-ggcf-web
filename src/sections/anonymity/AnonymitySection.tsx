import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { anonymityContent } from './content';

export function AnonymitySection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id} title={anonymityContent.title}>
      <ul className="flex flex-col gap-3">
        {anonymityContent.items.map((item) => (
          <li key={item} className="rounded-xl bg-surface px-5 py-4">
            {item}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
