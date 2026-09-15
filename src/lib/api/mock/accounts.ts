import type { Account } from '@/types/domain';
import { delay } from './delay';
import { assertMockOrgCode } from './org';

/** 혼동을 유발하는 문자(0, o, 1, l, i)를 제외한 문자 셋 **/
const CHARACTERS = 'abcdefghjkmnpqrstuvwxyz23456789';
const TTL_SECONDS = Number(process.env.NEXT_PUBLIC_MOCK_TTL_SECONDS ?? '600');
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

function randomString(length: number): string {
  const values = new Uint32Array(length);
  crypto.getRandomValues(values);
  return Array.from(values, (value) => CHARACTERS[value % CHARACTERS.length]).join('');
}

/** Date 객체를 `2026-09-14T15:40:00+09:00` 형식의 문자열로 변환 */
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
