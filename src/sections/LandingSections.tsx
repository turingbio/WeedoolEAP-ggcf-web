'use client'; // 컨텍스트(useFlow)를 사용하므로 클라이언트 컴포넌트로 지정

import { useFlow } from '@/features/flow/FlowProvider';
import { landingSections } from './registry';

export const LandingSections = () => {
  const { orgCode, account } = useFlow();
  const state = { orgCode, account };

  const visibleSections = landingSections.filter(
    (section) => section.enabled && (section.visibleWhen?.(state) ?? true),
  );

  return (
    <>
      {visibleSections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
    </>
  );
};
