const timeFormatter = new Intl.DateTimeFormat('ko-KR', {
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
  // timeZone: 'Asia/Seoul',
});

// ISO 타임스탬프를 사용자 기기 타임존 기준 HH:mm으로 포맷팅
export function formatTime(isoString: string): string {
  return timeFormatter.format(new Date(isoString));
}
