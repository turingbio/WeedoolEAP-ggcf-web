import { getJson } from './client';
import { USE_MOCK } from './config';
import { mockVerifyOrgCode } from './mock/org';

type ValidateResponse = { exists?: unknown };

export async function verifyOrgCode(orgCode: string): Promise<boolean> {
  const normalized = orgCode.toUpperCase();

  if (USE_MOCK) {
    return mockVerifyOrgCode(normalized);
  }

  const data = await getJson<ValidateResponse>(
    `/orgs/v1/${encodeURIComponent(normalized)}/validate`,
  );
  return data?.exists === true;
}
