import { ApiError } from '../errors';
import { delay } from './delay';

const VALID_ORG_CODE = (process.env.NEXT_PUBLIC_MOCK_VALID_ORG_CODE ?? 'A1B2C3').toUpperCase();
const SERVER_ERROR_ORG_CODE = 'ERR500';

/** 공통 목업 기관코드 검증 로직 */
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
