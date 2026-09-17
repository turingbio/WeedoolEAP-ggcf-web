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
    <div>
      <div className="group relative">
        <CredentialCard ref={cardRef} orgCode={orgCode} account={account} />
        <div className="absolute top-4 right-4 hidden opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:block">
          <Button onClick={handleSave} disabled={isSaving} className="px-4">
            {saveLabel}
          </Button>
        </div>
      </div>

      <div className="mt-4 md:hidden">
        <Button onClick={handleSave} disabled={isSaving}>
          {saveLabel}
        </Button>
      </div>

      <ul aria-live="polite" className="mt-6 flex list-disc flex-col gap-2 pl-5">
        <li className="font-bold">{accountContent.loginUntil(formatTime(account.expiresAt))}</li>
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
