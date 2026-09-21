import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { introContent } from './content';
import { FeatureIllustration, type FeatureIllustrationKind } from './FeatureIllustration';

const featureIllustrations: FeatureIllustrationKind[] = ['chat', 'check', 'routine', 'report'];

const featureLabelColors = ['text-[#0052cc]', 'text-[#996e00]', 'text-[#b61634]', 'text-[#145247]'];

export function IntroSection({ id }: SectionProps) {
  return (
    <SectionWrapper
      id={id}
      label={introContent.label}
      title={introContent.brandName + introContent.lead}
      description={introContent.body}
      className="bg-white"
    >
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        {introContent.features.map((feature, index) => (
          <li key={feature.title} className="min-w-0">
            <div className="mb-6 w-full md:mb-7">
              <FeatureIllustration kind={featureIllustrations[index]} />
            </div>
            <div className="relative z-1 md:max-w-[340px] xl:max-w-none">
              <p className={`mb-3 text-[15px] font-[550] ${featureLabelColors[index]}`}>
                {feature.label}
              </p>
              <h3 className="mb-3 max-w-[260px] text-[25px] leading-[1.4] font-semibold tracking-[-0.02em] text-ink md:max-w-none md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
