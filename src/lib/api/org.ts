import { postJson } from './client';
import { USE_MOCK } from './config';
import { mockVerifyOrgCode } from './mock/org';

export async function verifyOrgCode(orgCode: string): Promise<void> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockVerifyOrgCode(normalized);
  }

  await postJson<{ valid: boolean }>('/api/org/verify', {
    orgCode: normalized,
  });
}
