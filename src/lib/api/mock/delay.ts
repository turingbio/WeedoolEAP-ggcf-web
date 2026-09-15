/** 네트워크 지연 시뮬레이션 (300~800ms) */
export function delay(): Promise<void> {
  const ms = 300 + Math.floor(Math.random() * 500);
  return new Promise((resolve) => setTimeout(resolve, ms));
}
