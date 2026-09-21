import { SectionWrapper } from '@/components/SectionWrapper';
import { AnonymityDecoration } from './AnonymityDecoration';
import type { SectionProps } from '../types';
import { anonymityContent } from './content';

export function AnonymitySection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={anonymityContent.label}
      title={anonymityContent.title}
      headingClassName="max-w-[780px]"
      decoration={<AnonymityDecoration />}
      className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#f4f8fd,#faf9f6,#fff5ee)] max-md:py-18"
    >
      <ul className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-9">
        {anonymityContent.cards.map((card) => (
          <li key={card.title} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="grid h-[30px] flex-[0_0_30px] place-items-center rounded-full bg-[#D6F5F0] text-[17px] font-semibold text-[#0B8E78]"
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
