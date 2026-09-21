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
    <SectionWrapper
      id={id}
      label={accountContent.label}
      title={accountContent.title}
      className="bg-linear-to-br from-[#f4f8fd] via-[#faf9f6] to-[#fff5ee]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="max-w-[420px] text-lg leading-relaxed text-muted">{accountContent.body}</p>
        </div>

        {orgCode && account ? (
          <CredentialPanel orgCode={orgCode} account={account} />
        ) : (
          <div className="w-full max-w-[480px] self-center">
            <p aria-live="polite" className="mb-3 text-danger">
              {isError ? accountContent.issueError : ''}
            </p>
            <Button
              className="md:w-full"
              onClick={handleIssue}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading
                ? accountContent.loadingButton
                : isError
                  ? accountContent.retryButton
                  : accountContent.issueButton}
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
