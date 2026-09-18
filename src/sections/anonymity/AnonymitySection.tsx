import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { anonymityContent } from './content';

export function AnonymitySection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id} label={anonymityContent.label} title={anonymityContent.title}>
      <ul className="grid gap-4 sm:grid-cols-3">
        {anonymityContent.cards.map((card) => (
          <li key={card.title} className="rounded-2xl bg-white p-5">
            <h3 className="mb-2 font-bold">{card.title}</h3>
            <p className="text-muted">{card.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
