export class ApiError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(code);

    this.name = 'ApiError';
    this.code = code;
  }
}

export type ErrorKind = 'invalidOrgCode' | 'other';

/** 이용자가 기관코드를 다시 입력하면 풀리는 오류 */
const INVALID_ORG_CODE_CODES = ['INVALID_ORG_CODE', 'ORG003', 'CONTRACT001', 'CMN002'];

export function toErrorKind(error: unknown): ErrorKind {
  if (error instanceof ApiError && INVALID_ORG_CODE_CODES.includes(error.code)) {
    return 'invalidOrgCode';
  }
  return 'other';
}
