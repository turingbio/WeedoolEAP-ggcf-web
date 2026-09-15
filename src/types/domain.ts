// 1	기관코드 확인	POST /api/org/verify
// 2	계정 발급·재발급	POST /api/accounts

export type Account = {
  accountId: string;
  accountPassword: string;
  expiresAt: string;
};

export type FlowState = {
  orgCode: string | null;
  account: Account | null;
};
