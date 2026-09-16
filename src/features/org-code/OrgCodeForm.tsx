'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { commonContent } from '@/content/common';
import { useFlow } from '@/features/flow/FlowProvider';
import { verifyOrgCode } from '@/lib/api/org';
import { orgCodeContent } from './content';

const ORG_CODE_LENGTH = 6;

type Status = 'idle' | 'checking' | 'invalid' | 'error';
type VerifyResult = 'ok' | 'invalid' | 'error';

/** 영문·숫자만 남기고 대문자로 바꾸고 6글자까지 자른다 */
function normalizeOrgCode(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .slice(0, ORG_CODE_LENGTH);
}

/** 기관코드 API 검증 결과 반환 */
async function checkOrgCode(orgCode: string): Promise<VerifyResult> {
  try {
    const valid = await verifyOrgCode(orgCode);
    return valid ? 'ok' : 'invalid';
  } catch {
    return 'error';
  }
}

export function OrgCodeForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { confirmOrgCode } = useFlow();

  const initialOrgCode = normalizeOrgCode(searchParams.get('orgCode') ?? '');
  const hasFullInitialCode = initialOrgCode.length === ORG_CODE_LENGTH;

  const [value, setValue] = useState(initialOrgCode);
  const [status, setStatus] = useState<Status>(hasFullInitialCode ? 'checking' : 'idle');
  const autoCheckedRef = useRef(false);

  /** confirmOrgCode 결과에 따라 후속 라우팅 처리 */
  function applyResult(orgCode: string, result: VerifyResult) {
    if (result === 'ok') {
      confirmOrgCode(orgCode);
      router.replace('/welcome');
      return;
    }

    if (result === 'invalid') {
      setValue('');
    }
    setStatus(result);
  }

  // QR 진입 시 6자리 코드 유효성 충족할 경우 최초 1회 자동 검증 실행
  useEffect(() => {
    if (autoCheckedRef.current) return;
    autoCheckedRef.current = true;

    if (!hasFullInitialCode) return;

    // 상태 변경은 서버 응답이 온 뒤 .then 콜백에서 한다
    void checkOrgCode(initialOrgCode).then((result) => applyResult(initialOrgCode, result));

    // 마운트 시점 최초 1회만 수행되도록 의존성 배열 비움
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (status === 'checking') return;

    const nextValue = normalizeOrgCode(event.target.value);
    setValue(nextValue);

    if (nextValue.length === ORG_CODE_LENGTH) {
      setStatus('checking');
      void checkOrgCode(nextValue).then((result) => applyResult(nextValue, result));
    } else {
      setStatus('idle');
    }
  }

  const message =
    status === 'invalid'
      ? commonContent.errors.invalidOrgCode
      : status === 'error'
        ? commonContent.errors.network
        : '';

  return (
    <div className="flex w-full flex-col gap-3">
      <label htmlFor="org-code" className="text-title font-bold">
        {orgCodeContent.label}
      </label>

      <input
        id="org-code"
        name="orgCode"
        value={value}
        onChange={handleChange}
        readOnly={status === 'checking'}
        placeholder={orgCodeContent.placeholder}
        inputMode="text"
        autoCapitalize="characters"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        aria-invalid={status === 'invalid'}
        aria-describedby="org-code-message"
        aria-busy={status === 'checking'}
        className="min-h-touch w-full rounded-xl border-2 border-line px-4 text-center font-mono text-title tracking-[0.3em] uppercase focus:border-brand focus:outline-none aria-[invalid=true]:border-danger"
      />

      <p id="org-code-message" aria-live="polite" className="min-h-[1.7em] text-danger">
        {message}
      </p>
    </div>
  );
}
