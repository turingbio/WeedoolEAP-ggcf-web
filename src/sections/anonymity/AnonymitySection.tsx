import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { anonymityContent } from './content';

export function AnonymitySection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={anonymityContent.label}
      title={anonymityContent.title}
      headingClassName="max-w-[780px]"
      className="bg-[linear-gradient(180deg,#e5efff_20%,#cce0ff_85%,#99c2ff86_90%,#d6f5f0_120%)] max-md:py-18"
    >
      <ul className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-9">
        {anonymityContent.cards.map((card) => (
          <li key={card.title} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="grid h-[30px] flex-[0_0_30px] place-items-center rounded-full bg-[#ebfaf7] text-[17px] font-semibold text-[#145247]"
            >
              ✓
            </span>
            <div>
              <h3 className="mb-2 text-[21px] leading-[1.4] font-semibold tracking-[-0.02em] text-ink">
                {card.title}
              </h3>
              <p className="text-muted">{card.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
