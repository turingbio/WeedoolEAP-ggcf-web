'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { useFlow } from '@/features/flow/FlowProvider';
import { issueAccount } from '@/lib/api/accounts';
import { CredentialPanel } from '../credential-image/CredentialPanel';
import type { SectionProps } from '../types';
import { accountContent } from './content';

type RequestStatus = 'idle' | 'loading' | 'error';

export function AccountSection({ id }: SectionProps) {
  const { orgCode, account, setAccount } = useFlow();
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

  const isLoading = requestStatus === 'loading';
  const isError = requestStatus === 'error';

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
    <SectionWrapper id={id} title={accountContent.title}>
      <p className="-mt-4 mb-6 text-muted">{accountContent.body}</p>

      {orgCode && account ? (
        <CredentialPanel orgCode={orgCode} account={account} />
      ) : (
        <>
          <p aria-live="polite" className="mb-3 text-danger">
            {isError ? accountContent.issueError : ''}
          </p>
          <Button onClick={handleIssue} disabled={isLoading}>
            {isLoading
              ? accountContent.loadingButton
              : isError
                ? accountContent.retryButton
                : accountContent.issueButton}
          </Button>
        </>
      )}
    </SectionWrapper>
  );
}
