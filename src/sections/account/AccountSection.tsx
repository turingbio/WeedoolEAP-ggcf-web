'use client';

import { useState } from 'react';
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
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section-shell mt-13 bg-[linear-gradient(180deg,#e5efff_20%,#cce0ff_85%,#99c2ff86_90%,#d6f5f0_120%)]"
    >
      <div className="site-container section-inset flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="section-heading mb-0">
          <p className="eyebrow">{accountContent.label}</p>
          <h2 id={`${id}-title`} className="editorial-title mb-5">
            {accountContent.title}
          </h2>
          <p className="text-muted">{accountContent.body}</p>
        </div>

        {orgCode && account ? (
          <div className="w-full max-w-[480px] shrink-0">
            <CredentialPanel orgCode={orgCode} account={account} />
          </div>
        ) : (
          <div className="w-full max-w-[480px] shrink-0 lg:w-auto">
            <p aria-live="polite" className="mb-3 text-base text-danger">
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
    </section>
  );
}
