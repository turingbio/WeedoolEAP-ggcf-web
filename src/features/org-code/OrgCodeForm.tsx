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
type Selection = { start: number; end: number };

/** 영문·숫자만 남기고 대문자로 바꾸고 6글자까지 자른다 */
function normalizeOrgCode(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .slice(0, ORG_CODE_LENGTH);
}

/** 입력 중에는 잘못된 문자도 보여 주되, 영문은 대문자로 표시한다. */
function normalizeInputValue(value: string): string {
  return value.slice(0, ORG_CODE_LENGTH).replace(/[a-z]/g, (character) => character.toUpperCase());
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
  const isComposingRef = useRef(false);
  const checkingValueRef = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pointerDownRef = useRef<{ x: number; y: number } | null>(null);
  const pendingSelectionRef = useRef<Selection | null>(null);
  const [selection, setSelection] = useState<Selection>({
    start: initialOrgCode.length,
    end: initialOrgCode.length,
  });
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const pendingSelection = pendingSelectionRef.current;
    if (!pendingSelection) return;

    pendingSelectionRef.current = null;
    const input = inputRef.current;
    if (input && document.activeElement === input) {
      input.setSelectionRange(pendingSelection.start, pendingSelection.end);
    }
  }, [value]);

  /** confirmOrgCode 결과에 따라 후속 라우팅 처리 */
  function applyResult(orgCode: string, result: VerifyResult) {
    if (checkingValueRef.current === orgCode) {
      checkingValueRef.current = null;
    }

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

  function checkValue(nextValue: string) {
    if (nextValue.length === 0 || !/^[A-Z0-9]*$/.test(nextValue)) {
      setStatus(nextValue.length > 0 ? 'invalid' : 'idle');
      return;
    }

    if (nextValue.length !== ORG_CODE_LENGTH) {
      setStatus('idle');
      return;
    }

    if (checkingValueRef.current === nextValue) return;

    checkingValueRef.current = nextValue;
    setStatus('checking');
    void checkOrgCode(nextValue).then((result) => applyResult(nextValue, result));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (status === 'checking') return;

    const nextValue = normalizeInputValue(event.target.value);
    const nextSelection = {
      start: event.target.selectionStart ?? nextValue.length,
      end: event.target.selectionEnd ?? nextValue.length,
    };
    pendingSelectionRef.current = nextSelection;
    setSelection(nextSelection);
    setValue(nextValue);

    if (!isComposingRef.current) checkValue(nextValue);
  }

  function handleCompositionStart() {
    isComposingRef.current = true;
    setStatus('idle');
  }

  function handleCompositionEnd(event: React.CompositionEvent<HTMLInputElement>) {
    isComposingRef.current = false;
    const nextValue = normalizeInputValue(event.currentTarget.value);
    const nextSelection = {
      start: event.currentTarget.selectionStart ?? nextValue.length,
      end: event.currentTarget.selectionEnd ?? nextValue.length,
    };
    pendingSelectionRef.current = nextSelection;
    setSelection(nextSelection);
    setValue(nextValue);
    checkValue(nextValue);
  }

  function rememberSelection(event: React.SyntheticEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    setSelection({
      start: input.selectionStart ?? value.length,
      end: input.selectionEnd ?? value.length,
    });
  }

  function handlePointerDown(event: React.PointerEvent<HTMLInputElement>) {
    if (event.button !== 0 || status === 'checking') return;
    pointerDownRef.current = { x: event.clientX, y: event.clientY };
  }

  function handleClick(event: React.MouseEvent<HTMLInputElement>) {
    const pointerDown = pointerDownRef.current;
    pointerDownRef.current = null;

    if (!pointerDown || event.detail !== 1 || status === 'checking') return;

    const pointerMoved = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y);
    if (pointerMoved > 4) return;

    const input = event.currentTarget;
    const bounds = input.getBoundingClientRect();
    const cellWidth = bounds.width / ORG_CODE_LENGTH;
    const nextPosition = Math.max(
      0,
      Math.min(ORG_CODE_LENGTH, Math.floor((event.clientX - bounds.left) / cellWidth)),
    );

    requestAnimationFrame(() => {
      if (document.activeElement !== input) return;
      input.setSelectionRange(nextPosition, nextPosition);
      setSelection({ start: nextPosition, end: nextPosition });
    });
  }

  const selectionStart = Math.min(selection.start, value.length);
  const selectionEnd = Math.min(selection.end, value.length);
  const hasSelection = isFocused && selectionStart !== selectionEnd;

  const message =
    status === 'invalid'
      ? commonContent.errors.invalidOrgCode
      : status === 'error'
        ? commonContent.errors.network
        : '';

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="mb-8 text-[32px] leading-snug font-normal tracking-[-0.035em] md:text-[40px]">
        <label htmlFor="org-code">{orgCodeContent.label}</label>
      </h1>

      <div
        className={`relative isolate min-h-16 w-full overflow-hidden rounded-xl border bg-white transition-colors focus-within:border-brand-soft focus-within:ring-2 focus-within:ring-brand-soft ${
          status === 'invalid' ? 'border-danger' : 'border-control-border'
        }`}
      >
        <div aria-hidden="true" className="pointer-events-none grid h-16 w-full grid-cols-6">
          {Array.from({ length: ORG_CODE_LENGTH }, (_, index) => {
            const isSelected = hasSelection && index >= selectionStart && index < selectionEnd;
            const isActive =
              isFocused &&
              (isSelected ||
                (selectionStart === selectionEnd &&
                  index === Math.min(selectionStart, ORG_CODE_LENGTH - 1)));

            return (
              <span
                key={index}
                className={`flex min-w-0 items-center justify-center border-control-border text-2xl tracking-[0.2em] text-ink ${
                  index > 0 ? 'border-l' : ''
                } ${isSelected ? 'bg-brand-soft' : isActive ? 'bg-brand-tint' : ''}`}
              >
                {value[index] ?? ''}
              </span>
            );
          })}
        </div>

        <input
          ref={inputRef}
          id="org-code"
          name="orgCode"
          value={value}
          onChange={handleChange}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onSelect={rememberSelection}
          onPointerDown={handlePointerDown}
          onPointerCancel={() => {
            pointerDownRef.current = null;
          }}
          onClick={handleClick}
          onFocus={(event) => {
            setIsFocused(true);
            rememberSelection(event);
          }}
          onBlur={() => setIsFocused(false)}
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
          className="absolute inset-0 z-10 h-full w-full cursor-text bg-transparent px-0 py-4 text-2xl tracking-[0.2em] text-transparent caret-transparent outline-none selection:bg-transparent selection:text-transparent placeholder:text-transparent"
        />
      </div>

      <p id="org-code-message" aria-live="polite" className="min-h-12 text-body-1 text-danger">
        {message}
      </p>
    </div>
  );
}
