'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { commonContent } from '@/content/common';
import { useFlow } from '@/features/flow/FlowProvider';
import { issueAccount } from '@/lib/api/accounts';
import { formatTime } from '@/lib/format';
import type { SectionProps } from '../types';
import { accountContent } from './content';

type RequestStatus = 'idle' | 'loading' | 'error';

export function AccountSection({ id }: SectionProps) {
  const { orgCode, account, setAccount } = useFlow();
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

  const isLoading = requestStatus === 'loading';

  async function handleIssue() {
    if (!orgCode || isLoading) return;

    setRequestStatus('loading');
    try {
      const nextAccount = await issueAccount(orgCode);
      setAccount(nextAccount);
      setRequestStatus('idle');
    } catch {
      setRequestStatus('error');
    }
  }

  return (
    <SectionWrapper id={id}>
      {account && (
        <dl className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 rounded-2xl border-2 border-line p-5">
          <dt className="text-muted">{accountContent.idLabel}</dt>
          <dd className="font-mono text-title tracking-wider select-all">{account.accountId}</dd>
          <dt className="text-muted">{accountContent.passwordLabel}</dt>
          <dd className="font-mono text-title tracking-wider select-all">
            {account.accountPassword}
          </dd>
        </dl>
      )}

      <div aria-live="polite" className="mt-4">
        {account && (
          <>
            <p className="font-bold">{accountContent.loginUntil(formatTime(account.expiresAt))}</p>
            <p className="mt-2 text-muted">{accountContent.notice}</p>
          </>
        )}
        {requestStatus === 'error' && <p className="text-danger">{commonContent.errors.network}</p>}
      </div>

      {!account && (
        <Button onClick={handleIssue} disabled={isLoading} className="mt-6">
          {isLoading ? accountContent.loadingButton : accountContent.issueButton}
        </Button>
      )}
    </SectionWrapper>
  );
}
