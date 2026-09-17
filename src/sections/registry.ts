import type { ComponentType } from 'react';
import type { SectionProps } from './types';
import { FlowState } from '@/types/domain';
import { HeroSection } from './hero/HeroSection';
import { IntroSection } from './intro/IntroSection';
import { AnonymitySection } from './anonymity/AnonymitySection';
import { AccountSection } from './account/AccountSection';
import { ProcessSection } from './process/ProcessSection';
import { InstallSection } from './install/InstallSection';
import { FaqSection } from './faq/FaqSection';
export type SectionDefinition = {
  /** HTML anchor id (페이지 내 유일한 값) */
  id: string;
  /** 렌더링할 섹션 컴포넌트 */
  Component: ComponentType<SectionProps>;
  /** 섹션 활성화 여부 */
  enabled: boolean;
  /** 플로우 상태 기반 노출 조건 (미지정 시 항시 노출) */
  visibleWhen?: (state: FlowState) => boolean;
};

/**
 * 랜딩 페이지 섹션 레지스트리
 * 배열 순서대로 렌더링됨.섹션의 순서 변경, 비활성화, 추가는 이 배열만 수정
 */
export const landingSections: SectionDefinition[] = [
  { id: 'hero', Component: HeroSection, enabled: true },
  { id: 'intro', Component: IntroSection, enabled: true },
  { id: 'anonymity', Component: AnonymitySection, enabled: true },
  { id: 'account', Component: AccountSection, enabled: true },
  { id: 'process', Component: ProcessSection, enabled: true },
  { id: 'install', Component: InstallSection, enabled: true },
  { id: 'faq', Component: FaqSection, enabled: true },
];
