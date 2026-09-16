import { SectionWrapper } from '@/components/SectionWrapper';
import type { SectionProps } from '../types';
import { introContent } from './content';
import Image from 'next/image';
import { links } from '@/config/links';

export function IntroSection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id} title={introContent.title}>
      <p className="text-meted mb-6">{introContent.body}</p>
      <Image
        src={links.introImage}
        alt={introContent.imageAlt}
        width={640}
        height={480}
        className="h-auto w-full rounded-2xl"
        priority
      />
    </SectionWrapper>
  );
}
