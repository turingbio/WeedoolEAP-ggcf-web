'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { commonContent } from '@/content/common';
import type { Account } from '@/types/domain';
import { accountContent } from '../account/content';
import { CredentialCard } from './CredentialCard';
import { credentialImageContent as content } from './content';
import { downloadCredentialPng } from './downloadCredentialPng';
import { formatTime } from '@/lib/format';

type CredentialPanelProps = {
  orgCode: string;
  account: Account;
};

export function CredentialPanel({ orgCode, account }: CredentialPanelProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const lastDownloadedAccountIdRef = useRef<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasError, setHasError] = useState(false);

  /** 카드를 PNG로 내려받는다. 실패하면 오류 문구를 보여 준다 */
  async function saveImage() {
    const card = cardRef.current;
    if (!card) return;

    try {
      await downloadCredentialPng(card, content.fileName);
      setHasError(false);
    } catch {
      setHasError(true);
    }
  }

  // 계정이 발급되면 자동으로 한 번 내려받는다
  useEffect(() => {
    if (lastDownloadedAccountIdRef.current === account.accountId) return;

    lastDownloadedAccountIdRef.current = account.accountId;
    void saveImage();
    // 계정이 바뀔 때만 실행한다
  }, [account]);

  async function handleSave() {
    if (isSaving) return;
    setIsSaving(true);
    await saveImage();
    setIsSaving(false);
  }

  const saveLabel = isSaving ? content.savingButton : content.saveButton;

  return (
    <div className="mx-auto max-w-[480px]">
      <div className="group relative">
        <CredentialCard ref={cardRef} orgCode={orgCode} account={account} />
        <div className="mt-4 opacity-100 transition-opacity md:pointer-fine:opacity-0 md:pointer-fine:group-focus-within:opacity-100 md:pointer-fine:group-hover:opacity-100">
          <Button variant="secondary" onClick={handleSave} disabled={isSaving}>
            {saveLabel}
          </Button>
        </div>
      </div>

      <ul aria-live="polite" className="mt-6 flex list-disc flex-col gap-2 pl-5 text-body-1">
        <li className="font-semibold text-brand-strong">
          {accountContent.loginUntil(formatTime(account.expiresAt))}
        </li>
        {hasError ? (
          <li className="text-danger">{commonContent.errors.network}</li>
        ) : (
          <li>
            {accountContent.saved}
            <br />
            {accountContent.keepImage}
          </li>
        )}
      </ul>
    </div>
  );
}
