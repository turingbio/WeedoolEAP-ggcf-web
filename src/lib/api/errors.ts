export class ApiError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(code);

    this.name = 'ApiError';
    this.code = code;
  }
}

export type ErrorKind = 'invalidOrgCode' | 'other';

const INVALID_ORG_CODE_CODES = ['INVALID_ORG_CODE']; // TODO: 기관코드 에러 코드 목록

export function toErrorKind(error: unknown): ErrorKind {
  if (error instanceof ApiError && INVALID_ORG_CODE_CODES.includes(error.code)) {
    return 'invalidOrgCode';
  }
  return 'other';
}
