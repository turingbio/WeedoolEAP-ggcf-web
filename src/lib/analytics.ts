import { sendGAEvent } from '@next/third-parties/google';

type EventParams = {
  cta_account_click: { location: 'header' | 'hero' };
  org_code_checked: { result: 'ok' | 'invalid' | 'error' };
  account_issued: { result: 'success' | 'error' };
  credential_saved: { trigger: 'auto' | 'manual'; result: 'success' | 'error' };
  store_click: { store: 'ios' | 'android' };
  manual_download: undefined;
};

type EventName = keyof EventParams;

type EventArgs<T extends EventName> = EventParams[T] extends undefined ? [] : [EventParams[T]];

export type TrackedEvent = { [T in EventName]: [T, ...EventArgs<T>] }[EventName];

export function trackEvent(...event: TrackedEvent) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent('event', ...event);
}
