import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { introContent } from './content';

export function IntroSection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id}>
      <p className="mb-4 text-center text-title">
        <strong>{introContent.brandName}</strong>
        {introContent.lead}
      </p>
      <p className="mb-8 text-muted">{introContent.body}</p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {introContent.features.map((feature) => (
          <li key={feature.title} className="rounded-2xl bg-white p-5">
            <h3 className="mb-2 font-bold">{feature.title}</h3>
            <p className="text-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
