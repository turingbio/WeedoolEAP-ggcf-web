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
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          aria-label={saveLabel}
          className="absolute right-4 bottom-4 hidden size-11 place-items-center rounded-xl border border-[#99c2ff] bg-white text-brand-strong transition-opacity hover:bg-brand-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 md:pointer-fine:grid md:pointer-fine:opacity-0 md:pointer-fine:group-focus-within:opacity-100 md:pointer-fine:group-hover:opacity-100"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="8.75" cy="8.75" r="1.35" />
            <path d="m4 17.5 4.4-4.4a1.9 1.9 0 0 1 2.7 0L15 17" />
            <path d="m13.8 14.8 1.7-1.7a1.9 1.9 0 0 1 2.7 0L21 16.2" />
          </svg>
        </button>

        <div className="mt-4 md:pointer-fine:hidden">
          <Button variant="secondary" onClick={handleSave} disabled={isSaving}>
            {saveLabel}
          </Button>
        </div>
      </div>

      <ul
        aria-live="polite"
        className="mt-5 flex list-disc flex-col gap-2 rounded-2xl bg-white/70 py-4 pr-5 pl-9 text-left text-body-1"
      >
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
