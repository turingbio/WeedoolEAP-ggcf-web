export const accountContent = {
  title: '먼저 계정을 발급 받아 주세요',
  body: '이름이나 연락처 같은 개인정보가 필요하지 않아요',
  issueButton: '계정 발급받기',
  loadingButton: '계정을 생성하고 있어요',
  loginUntil: (time: string) => `${time} 전까지 앱에서 로그인을 완료해 주세요.`,
  saved: '계정 정보 카드가 다운로드 폴더에 저장되었어요.',
  keepImage: '익명 계정은 복구가 불가능하니 저장된 이미지를 꼭 보관해 주세요.',
  issueError: '일시적인 오류로 계정을 생성하지 못했어요.',
  retryButton: '재시도하기',
} as const;
