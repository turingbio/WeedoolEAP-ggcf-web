import { SectionWrapper } from '@/components/SectionWrapper';
import { ButtonLink } from '@/components/ui/Button';
import { links } from '@/config/links';
import type { SectionProps } from '../types';
import { manualContent } from './content';

export function ManualSection({ id }: SectionProps) {
  return (
    <SectionWrapper id={id}>
      <ButtonLink href={links.manual.href} download={links.manual.fileName} variant="secondary">
        {manualContent.downloadButton}
      </ButtonLink>
    </SectionWrapper>
  );
}
