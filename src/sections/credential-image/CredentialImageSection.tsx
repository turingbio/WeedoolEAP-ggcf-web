'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { commonContent } from '@/content/common';
import { useFlow } from '@/features/flow/FlowProvider';
import type { SectionProps } from '../types';
import { CredentialCard } from './CredentialCard';
import { credentialImageContent as content } from './content';
import { downloadCredentialPng } from './downloadCredentialPng';

export function CredentialImageSection({ id }: SectionProps) {
  const { orgCode, account } = useFlow();
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

  // 계정이 발급·재발급되면 자동으로 한 번 내려받는다
  useEffect(() => {
    if (!account) return;
    if (lastDownloadedAccountIdRef.current === account.accountId) return;

    lastDownloadedAccountIdRef.current = account.accountId;
    void saveImage();
    // 계정이 바뀔 때만 실행한다
  }, [account]);

  // registry의 visibleWhen이 막지만, 타입상 한 번 더 확인한다
  if (!orgCode || !account) {
    return null;
  }

  async function handleSave() {
    if (isSaving) return;
    setIsSaving(true);
    await saveImage();
    setIsSaving(false);
  }

  return (
    <SectionWrapper id={id}>
      <CredentialCard ref={cardRef} orgCode={orgCode} account={account} />

      <Button onClick={handleSave} disabled={isSaving} className="mt-6">
        {isSaving ? content.savingButton : content.saveButton}
      </Button>

      <p aria-live="polite" className="mt-3 text-danger">
        {hasError ? commonContent.errors.network : ''}
      </p>
    </SectionWrapper>
  );
}
