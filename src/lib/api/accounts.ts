import type { Account } from '@/types/domain';
import { postJson } from './client';
import { USE_MOCK } from './config';
import { ApiError } from './errors';
import { mockIssueAccount } from './mock/accounts';

type IssueResponse = { email?: unknown; password?: unknown; ttl?: unknown };

/** 계정 발급 및 재발급 처리 */
export async function issueAccount(orgCode: string): Promise<Account> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockIssueAccount(normalized);
  }

  const data = await postJson<IssueResponse>('/non-identify/accounts/v1/issue', {
    orgCd: normalized,
  });

  return toAccount(data);
}

/**
 * 서버는 만료 시각 대신 남은 초(ttl)를 보낸다.
 * 응답을 받은 시각에 더해 화면이 그대로 쓸 수 있는 만료 시각으로 바꾼다.
 */
function toAccount(data: IssueResponse): Account {
  const { email, password, ttl } = data;

  if (typeof email !== 'string' || typeof password !== 'string' || typeof ttl !== 'number') {
    throw new ApiError('SERVER_ERROR');
  }

  return {
    accountId: email,
    accountPassword: password,
    expiresAt: new Date(Date.now() + ttl * 1000).toISOString(),
  };
}
