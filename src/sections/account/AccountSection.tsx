'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { useFlow } from '@/features/flow/FlowProvider';
import { issueAccount } from '@/lib/api/accounts';
import { CredentialPanel } from '../credential-image/CredentialPanel';
import type { SectionProps } from '../types';
import { AccountDecoration } from './AccountDecoration';
import { accountContent } from './content';

type RequestStatus = 'idle' | 'loading' | 'error';

export function AccountSection({ id }: SectionProps) {
  const { orgCode, account, setAccount } = useFlow();
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

  const isIssued = Boolean(orgCode && account);
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
      description={accountContent.body}
      decoration={<AccountDecoration />}
      className={`relative isolate mt-13 overflow-hidden bg-[linear-gradient(180deg,#e5efff_20%,#cce0ff_85%,#99c2ff86_90%,#d6f5f0_120%)] ${
        isIssued ? 'py-10 md:py-12' : ''
      }`}
      containerClassName="text-center"
      headingClassName={`mx-auto items-center text-center [&>p]:mx-auto ${
        isIssued ? 'mb-8 md:mb-8' : ''
      }`}
    >
      {orgCode && account ? (
        <div className="mx-auto w-full max-w-[480px] text-left">
          <CredentialPanel orgCode={orgCode} account={account} />
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[420px]">
          <p aria-live="polite" className="mb-3 text-base text-danger">
            {isError ? accountContent.issueError : ''}
          </p>
          <div className="flex justify-center">
            <Button onClick={handleIssue} disabled={isLoading} aria-busy={isLoading}>
              {isLoading
                ? accountContent.loadingButton
                : isError
                  ? accountContent.retryButton
                  : accountContent.issueButton}
            </Button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
