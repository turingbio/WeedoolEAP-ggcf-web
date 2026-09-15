'use client';

import { createContext, useContext, useState, useSyncExternalStore } from 'react';
import type { Account } from '@/types/domain';
import {
  getOrgCodeServerSnapshot,
  getOrgCodeSnapshot,
  saveOrgCode,
  subscribeOrgCode,
} from './storage';

type FlowContextValue = {
  orgCode: string | null;
  account: Account | null;
  isHydrated: boolean;
  confirmOrgCode: (orgCode: string) => void;
  setAccount: (account: Account) => void;
};

const FlowContext = createContext<FlowContextValue | null>(null);

export function FlowProvider({ children }: { children: React.ReactNode }) {
  const storedOrgCode = useSyncExternalStore(
    subscribeOrgCode,
    getOrgCodeSnapshot,
    getOrgCodeServerSnapshot,
  );

  const [account, setAccountState] = useState<Account | null>(null);

  const value: FlowContextValue = {
    orgCode: storedOrgCode ?? null,
    account,
    isHydrated: storedOrgCode !== undefined,
    confirmOrgCode: (orgCode) => {
      saveOrgCode(orgCode);
      setAccountState(null);
    },
    setAccount: (nextAccount) => setAccountState(nextAccount),
  };

  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
}

/** FlowContext 참조를 위한 커스텀 훅 */
export function useFlow(): FlowContextValue {
  const value = useContext(FlowContext);
  if (!value) {
    throw new Error('useFlow는 FlowProvider 하위에서만 사용할 수 있습니다.');
  }
  return value;
}
