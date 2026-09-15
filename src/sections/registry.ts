import type { ComponentType } from 'react';
import type { SectionProps } from './types';
import { FlowState } from '@/types/domain';
import { IntroSection } from './intro/IntroSection';
import { AnonymitySection } from './anonymity/AnonymitySection';
import { ManualSection } from './manual/ManualSection';
import { AccountSection } from './account/AccountSection';
import { CredentialImageSection } from './credential-image/CredentialImageSection';
import { InstallSection } from './install/InstallSection';
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
  { id: 'intro', Component: IntroSection, enabled: true },
  { id: 'anonymity', Component: AnonymitySection, enabled: true },
  { id: 'manual-top', Component: ManualSection, enabled: true },
  { id: 'account', Component: AccountSection, enabled: true },
  {
    id: 'credential-image',
    Component: CredentialImageSection,
    enabled: true,
    visibleWhen: (state) => state.account !== null,
  },
  { id: 'install', Component: InstallSection, enabled: true },
  { id: 'manual-bottom', Component: ManualSection, enabled: true },
];
