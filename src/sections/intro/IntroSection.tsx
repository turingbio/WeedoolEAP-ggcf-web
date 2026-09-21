import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { introContent } from './content';
import { FeatureIllustration, type FeatureIllustrationKind } from './FeatureIllustration';

const featureIllustrations: FeatureIllustrationKind[] = ['chat', 'check', 'routine', 'report'];

export function IntroSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={introContent.label}
      title={introContent.brandName + introContent.lead}
      className="border-t border-line bg-white"
    >
      <p className="mb-16 max-w-[680px] text-xl leading-8 text-muted">{introContent.body}</p>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {introContent.features.map((feature, index) => (
          <li key={feature.title} className="flex min-w-0 flex-col">
            <FeatureIllustration kind={featureIllustrations[index]} />
            <p className="mt-7 mb-4 text-base font-medium tracking-normal text-muted uppercase">
              {feature.label}
            </p>
            <h3 className="mb-3 text-2xl leading-tight font-medium tracking-[-0.015em] text-ink">
              {feature.title}
            </h3>
            <p className="max-w-[30rem] text-lg leading-8 text-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
