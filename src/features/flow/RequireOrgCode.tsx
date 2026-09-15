'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFlow } from './FlowProvider';

export function RequireOrgCode({ children }: { children: React.ReactNode }) {
  const { orgCode, isHydrated } = useFlow();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !orgCode) {
      router.replace('/verify');
    }
  }, [isHydrated, orgCode, router]);

  // 하이드레이션 미완료 또는 기관코드 미존재 시 렌더링 차단 (Flicker 현상 방지)
  if (!isHydrated || !orgCode) {
    return null;
  }

  return <>{children}</>;
}
