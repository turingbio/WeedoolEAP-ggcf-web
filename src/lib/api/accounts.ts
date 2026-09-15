import type { Account } from '@/types/domain';
import { postJson } from './client';
import { USE_MOCK } from './config';
import { mockIssueAccount } from './mock/accounts';

/** 계정 발급 및 재발급 처리 */
export async function issueAccount(orgCode: string): Promise<Account> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockIssueAccount(normalized);
  }

  return postJson<Account>('/api/accounts', {
    orgCode: normalized,
  });
}
