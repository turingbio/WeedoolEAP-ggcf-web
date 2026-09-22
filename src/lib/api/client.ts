import { ApiError } from './errors';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

/** 서버는 모든 응답을 code·message·data·detailCode로 감싸서 보낸다 */
type Envelope = {
  code?: unknown;
  message?: unknown;
  data?: unknown;
  detailCode?: unknown;
};

export async function getJson<T>(path: string): Promise<T> {
  return request<T>(path, { method: 'GET' });
}

export async function postJson<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });
}

async function request<T>(path: string, init: RequestInit): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}${path}`, init);
  } catch {
    throw new ApiError('SERVER_ERROR');
  }

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(readErrorCode(payload) ?? 'SERVER_ERROR');
  }

  const data = readData(payload);
  if (data === null) {
    throw new ApiError('SERVER_ERROR');
  }

  return data as T;
}

function isEnvelope(payload: unknown): payload is Envelope {
  return typeof payload === 'object' && payload !== null;
}

/** 실패 응답의 상세 코드를 읽는다. 없으면 HTTP 상태 코드를 문자열로 쓴다 */
function readErrorCode(payload: unknown) {
  if (!isEnvelope(payload)) return null;

  if (typeof payload.detailCode === 'string' && payload.detailCode.length > 0) {
    return payload.detailCode;
  }

  return typeof payload.code === 'number' ? String(payload.code) : null;
}

function readData(payload: unknown) {
  if (!isEnvelope(payload)) return null;
  return payload.data ?? null;
}
