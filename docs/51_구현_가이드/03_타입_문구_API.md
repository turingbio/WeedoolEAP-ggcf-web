# 3. 타입·문구·API

목표: 데이터 모양(타입)을 정하고, 화면 문구를 파일로 모으고, 서버 호출 함수와 mock을 만든다. 이 단계에는 화면이 없다.

---

## 3-1. 데이터 타입

`docs/30_API_계약.md`의 필드 이름을 그대로 쓴다.

`src/types/domain.ts`

```ts
/** 서버가 발급한 임시 계정 (API 계약 4장) */
export type Account = {
  accountId: string;
  accountPassword: string;
  /** ISO 8601, 시간대 포함. 예: 2026-09-14T15:40:00+09:00 */
  expiresAt: string;
};

/** 화면 흐름 상태 */
export type FlowState = {
  /** 확인을 통과한 기관코드. 확인 전이면 null */
  orgCode: string | null;
  /** 발급받은 계정. 발급 전이면 null */
  account: Account | null;
};
```

- 「만료됐는지」는 상태로 저장하지 않는다. `expiresAt`과 지금 시각을 비교해 그때그때 계산한다(7번 문서)

---

## 3-2. 공통 문구

화면에 보이는 글자는 컴포넌트에 직접 쓰지 않는다. 문구만 고칠 때 컴포넌트를 열지 않기 위해서다.

`src/content/common.ts`

```ts
export const commonContent = {
  errors: {
    invalidOrgCode: '기관코드를 다시 확인해 주세요',
    network: '잠시 후 다시 시도해 주세요',
  },
  // [개선 필요] 푸터 안내 문구는 나중에 개선한다
  footer: {
    text: '㈜튜링바이오 031-607-7560 · 평일 10:00–17:00',
    telHref: 'tel:0316077560',
  },
} as const;
```

섹션 문구는 7번 문서에서 섹션마다 `content.ts`로 만든다.

---

## 3-3. 시각 형식 함수

`expiresAt`(`2026-09-14T15:40:00+09:00`)을 화면에 `15:40`으로 보여 줄 함수다.

`src/lib/format.ts`

```ts
const timeFormatter = new Intl.DateTimeFormat('ko-KR', {
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
  timeZone: 'Asia/Seoul',
});

/** ISO 시각 문자열을 한국 시간 HH:mm으로 바꾼다 */
export function formatTime(isoString: string): string {
  return timeFormatter.format(new Date(isoString));
}
```

- `timeZone: 'Asia/Seoul'`: 이용자 휴대전화 시간대 설정과 관계없이 한국 시간으로 보여 준다
- `hourCycle: 'h23'`: 「오후 3:40」이 아니라 「15:40」으로 나온다
- 포매터를 함수 밖에 한 번만 만든다. 매번 만들면 느리다

---

## 3-4. API 에러

API 계약 2장에 따라 화면은 에러를 **두 갈래**로만 나눈다. 백엔드가 에러 코드 이름을 바꾸거나 늘려도 이 파일만 고친다.

`src/lib/api/errors.ts`

```ts
/** API 호출이 실패했을 때 던지는 에러. code에 서버의 error.code가 들어간다 */
export class ApiError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(code);
    this.name = 'ApiError';
    this.code = code;
  }
}

/** 화면이 구분하는 에러 종류 */
export type ErrorKind = 'invalidOrgCode' | 'other';

/** 기관코드 오류로 보는 서버 에러 코드 목록. 백엔드 코드가 바뀌면 여기만 고친다 */
const INVALID_ORG_CODE_CODES = ['INVALID_ORG_CODE'];

export function toErrorKind(error: unknown): ErrorKind {
  if (error instanceof ApiError && INVALID_ORG_CODE_CODES.includes(error.code)) {
    return 'invalidOrgCode';
  }
  return 'other';
}
```

- `unknown`: 무엇이 던져졌는지 모른다는 뜻. `instanceof`로 확인한 뒤 쓴다
- 네트워크 오류 등 알 수 없는 에러는 모두 `other`(「잠시 후 다시 시도해 주세요」)가 된다

---

## 3-5. 서버 호출 공통 함수

`fetch`를 직접 여기저기 쓰지 않고, 이 함수 하나로 부른다. 실패 처리가 한 곳에 모인다.

`src/lib/api/client.ts`

```ts
import { ApiError } from './errors';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

/** JSON을 POST로 보내고 JSON 응답을 돌려준다. 실패하면 ApiError를 던진다 */
export async function postJson<T>(path: string, body: unknown): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
  } catch {
    // 인터넷이 끊겼거나 서버에 닿지 못함
    throw new ApiError('SERVER_ERROR');
  }

  const data: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(readErrorCode(data) ?? 'SERVER_ERROR');
  }

  return data as T;
}

/** { error: { code } } 모양이면 code를 꺼낸다 */
function readErrorCode(data: unknown): string | null {
  if (typeof data !== 'object' || data === null || !('error' in data)) {
    return null;
  }
  const error = (data as { error?: { code?: unknown } }).error;
  return typeof error?.code === 'string' ? error.code : null;
}
```

### 코드 읽기

- `<T>`: 제네릭. 부르는 쪽이 「응답이 이런 모양」이라고 알려 준다. `postJson<Account>(...)`
- `response.ok`: HTTP 상태가 200~299면 `true`
- `response.json().catch(() => null)`: 응답 본문이 JSON이 아니어도 앱이 멈추지 않게 한다
- `?.`: 앞의 값이 없으면 오류 대신 `undefined`를 돌려준다

---

## 3-6. mock 사용 여부

`src/lib/api/config.ts`

```ts
/** .env.local의 NEXT_PUBLIC_USE_MOCK이 'true'면 mock을 쓴다 */
export const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';
```

- 환경 변수는 항상 **문자열**이다. `'true'`와 비교한다

---

## 3-7. mock 구현

실제 서버처럼 행동하는 가짜 함수다. API 계약 6장 규칙을 따른다.

| 입력 기관코드                            | 결과               |
| ---------------------------------------- | ------------------ |
| `NEXT_PUBLIC_MOCK_VALID_ORG_CODE`와 같음 | 성공               |
| `ERR500`                                 | `SERVER_ERROR`     |
| 그 밖                                    | `INVALID_ORG_CODE` |

`src/lib/api/mock/delay.ts`

```ts
/** 실제 네트워크처럼 300~800ms 기다린다 */
export function delay(): Promise<void> {
  const ms = 300 + Math.floor(Math.random() * 500);
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

`src/lib/api/mock/org.ts`

```ts
import { ApiError } from '../errors';
import { delay } from './delay';

const VALID_ORG_CODE = (process.env.NEXT_PUBLIC_MOCK_VALID_ORG_CODE ?? 'GGCF26').toUpperCase();
const SERVER_ERROR_ORG_CODE = 'ERR500';

/** mock 공통 규칙. 통과하지 못하면 에러를 던진다 */
export function assertMockOrgCode(orgCode: string): void {
  if (orgCode === SERVER_ERROR_ORG_CODE) {
    throw new ApiError('SERVER_ERROR');
  }
  if (orgCode !== VALID_ORG_CODE) {
    throw new ApiError('INVALID_ORG_CODE');
  }
}

export async function mockVerifyOrgCode(orgCode: string): Promise<void> {
  await delay();
  assertMockOrgCode(orgCode);
}
```

`src/lib/api/mock/accounts.ts`

```ts
import type { Account } from '@/types/domain';
import { delay } from './delay';
import { assertMockOrgCode } from './org';

/** 헷갈리는 글자(0, o, 1, l, i)를 뺀 글자 모음 (API 계약 4장) */
const CHARACTERS = 'abcdefghjkmnpqrstuvwxyz23456789';
const TTL_SECONDS = Number(process.env.NEXT_PUBLIC_MOCK_TTL_SECONDS ?? '600');
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

function randomString(length: number): string {
  const values = new Uint32Array(length);
  crypto.getRandomValues(values);
  return Array.from(values, (value) => CHARACTERS[value % CHARACTERS.length]).join('');
}

/** Date를 2026-09-14T15:40:00+09:00 형식으로 바꾼다 */
function toKstIsoString(date: Date): string {
  const shifted = new Date(date.getTime() + KST_OFFSET_MS);
  return shifted.toISOString().replace(/\.\d{3}Z$/, '+09:00');
}

export async function mockIssueAccount(orgCode: string): Promise<Account> {
  await delay();
  assertMockOrgCode(orgCode);

  const expiresAt = new Date(Date.now() + TTL_SECONDS * 1000);

  return {
    accountId: `wd${randomString(6)}`,
    accountPassword: randomString(8),
    expiresAt: toKstIsoString(expiresAt),
  };
}
```

### 코드 읽기

- `crypto.getRandomValues`: 브라우저가 제공하는 안전한 난수. `Math.random`보다 예측하기 어렵다
- `toKstIsoString`: `toISOString()`은 항상 UTC(`...Z`)로 나온다. 9시간을 더한 뒤 끝의 `.000Z`를 `+09:00`으로 바꿔 한국 시간 표기를 만든다

---

## 3-8. API 함수

화면은 이 두 함수만 부른다. 안에서 mock과 실제 서버를 고른다.

`src/lib/api/org.ts`

```ts
import { postJson } from './client';
import { USE_MOCK } from './config';
import { mockVerifyOrgCode } from './mock/org';

/** 기관코드 확인. 통과하지 못하면 ApiError를 던진다 (API 계약 3장) */
export async function verifyOrgCode(orgCode: string): Promise<void> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockVerifyOrgCode(normalized);
  }

  await postJson<{ valid: boolean }>('/api/org/verify', { orgCode: normalized });
}
```

`src/lib/api/accounts.ts`

```ts
import type { Account } from '@/types/domain';
import { postJson } from './client';
import { USE_MOCK } from './config';
import { mockIssueAccount } from './mock/accounts';

/** 계정 발급·재발급. 같은 함수를 다시 부르면 재발급이다 (API 계약 4장) */
export async function issueAccount(orgCode: string): Promise<Account> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockIssueAccount(normalized);
  }

  return postJson<Account>('/api/accounts', { orgCode: normalized });
}
```

- 요청 본문에는 `orgCode`만 담는다. 개인정보를 담지 않는다

---

## 3-9. 동작 확인

아직 화면이 없으니 임시 페이지로 확인한다. **확인이 끝나면 원래대로 되돌린다.**

`src/app/verify/page.tsx`를 잠시 아래로 바꾼다.

```tsx
'use client';

import { issueAccount } from '@/lib/api/accounts';
import { toErrorKind } from '@/lib/api/errors';
import { verifyOrgCode } from '@/lib/api/org';

async function test(orgCode: string) {
  try {
    await verifyOrgCode(orgCode);
    const account = await issueAccount(orgCode);
    console.log('성공', orgCode, account);
  } catch (error) {
    console.log('실패', orgCode, toErrorKind(error), error);
  }
}

export default function VerifyPage() {
  return (
    <main className="flex gap-2 p-4">
      <button onClick={() => test('GGCF26')}>정상</button>
      <button onClick={() => test('ZZZZZZ')}>틀림</button>
      <button onClick={() => test('ERR500')}>서버오류</button>
    </main>
  );
}
```

`pnpm dev` → `/verify` → 브라우저 개발자 도구(F12) → Console 탭을 열고 버튼을 누른다.

**확인:**

| 버튼     | 콘솔                                                                                         |
| -------- | -------------------------------------------------------------------------------------------- |
| 정상     | `성공 GGCF26 { accountId: 'wd......', accountPassword: '........', expiresAt: '...+09:00' }` |
| 틀림     | `실패 ZZZZZZ invalidOrgCode`                                                                 |
| 서버오류 | `실패 ERR500 other`                                                                          |

- `expiresAt`이 지금 한국 시각 + 10분인지 본다
- 아이디·비밀번호에 `0 o 1 l i`가 없는지 여러 번 눌러 본다

확인 후 `src/app/verify/page.tsx`를 2번 문서의 임시 내용(`<main>verify</main>`)으로 되돌린다.

```bash
pnpm format
git add -A -- . ':!docs'
git commit -m "feat: 도메인 타입, 공통 문구, API 함수와 mock"
```

---

## 참고 문서

- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [MDN: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
- [Next.js: Environment Variables](https://nextjs.org/docs/app/guides/environment-variables)
- `docs/30_API_계약.md` 2장·3장·4장·6장
