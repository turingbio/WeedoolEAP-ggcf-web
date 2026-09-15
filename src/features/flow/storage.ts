const STORAGE_KEY = 'weedool:orgCode';

/** 상태 변경 감지를 위한 리스너 집합 */
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

/** React 컴포넌트의 외부 스토어 구독 메서드 */
export function subscribeOrgCode(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** 클라이언트 사이드 스냅샷 조회 (기관코드 문자열 또는 null) */
export function getOrgCodeSnapshot(): string | null | undefined {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    // 시크릿 모드 등 브라우저 스토리지 접근 제한 시 예외 처리
    return null;
  }
}

/** 서버 사이드 스냅샷 조회 (SSR 환경 대응) */
export function getOrgCodeServerSnapshot(): string | null | undefined {
  return undefined;
}

export function saveOrgCode(orgCode: string): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, orgCode);
  } catch {
    // 스토리지 쓰기 실패 시 예외 처리
  }
  notify();
}
