import { ApiError } from './errors';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

export async function postJson<T>(path: string, body: unknown): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ApiError('SERVER_ERROR');
  }

  const data: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(readErrorCode(data) ?? 'SERVER_ERROR');
  }

  return data as T;
}

function readErrorCode(data: unknown) {
  if (typeof data !== 'object' || data === null || !('error' in data)) {
    return null;
  }

  const error = (data as { error?: { code?: unknown } }).error;
  return typeof error?.code === 'string' ? error.code : null;
}
