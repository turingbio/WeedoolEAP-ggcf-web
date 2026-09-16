import { postJson } from './client';
import { USE_MOCK } from './config';
import { mockVerifyOrgCode } from './mock/org';

export async function verifyOrgCode(orgCode: string): Promise<boolean> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockVerifyOrgCode(normalized);
  }

  const data = await postJson<{ valid: boolean }>('/api/org/verify', {
    orgCode: normalized,
  });
  return data?.valid === true;
}
