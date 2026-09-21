import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { anonymityContent } from './content';

export function AnonymitySection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={anonymityContent.label}
      title={anonymityContent.title}
      className="bg-[#fcfbf8]"
    >
      <ul className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-16">
        {anonymityContent.cards.map((card) => (
          <li key={card.title} className="px-0 py-4">
            <h3 className="mb-6 text-2xl leading-tight font-medium tracking-[-0.015em] text-ink">
              {card.title}
            </h3>
            <p className="text-lg leading-8 text-muted">{card.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
