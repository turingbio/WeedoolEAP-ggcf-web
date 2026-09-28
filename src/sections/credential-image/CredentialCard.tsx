import { forwardRef } from 'react';
import { links } from '@/config/links';
import type { Account } from '@/types/domain';
import { credentialImageContent as content } from './content';

type CredentialCardProps = {
  orgCode: string;
  account: Account;
};

/** PNG로 저장되는 카드. 화면 미리보기로도 쓴다 */
export const CredentialCard = forwardRef<HTMLDivElement, CredentialCardProps>(
  function CredentialCard({ orgCode, account }, ref) {
    const rows = [
      { label: content.orgCodeLabel, value: orgCode },
      { label: content.idLabel, value: account.accountId },
      { label: content.passwordLabel, value: account.accountPassword },
    ];

    const qrCodes = [
      { label: content.iosQrLabel, src: links.appStore.qrImage },
      { label: content.androidQrLabel, src: links.googlePlay.qrImage },
    ];

    return (
      <div
        ref={ref}
        className="@container w-full rounded-2xl border border-line bg-white p-6 text-ink"
      >
        {/* 일반 이미지로 저장본과 화면에 같은 로고를 사용한다. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-full.png"
          alt={content.appName}
          width={120}
          className="mb-8 h-auto w-[120px]"
        />

        <dl className="mb-8 space-y-4">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-x-4 gap-y-0.5 border-b border-line pb-4 @min-[300px]:grid-cols-[auto_minmax(0,1fr)] @min-[300px]:items-baseline"
            >
              <dt className="text-body-1 text-muted">{row.label}</dt>
              <dd className="min-w-0 font-mono text-title-4 font-semibold [overflow-wrap:anywhere] [word-break:normal] @min-[300px]:text-title-3">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div data-credential-qr-grid className="grid grid-cols-1 gap-6 @min-[310px]:grid-cols-2">
          {qrCodes.map((qr) => (
            <figure key={qr.label} className="flex flex-col items-center gap-2">
              {/* PNG 변환에 확실히 포함되도록 next/image 대신 일반 img를 쓴다 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                data-credential-qr
                src={qr.src}
                alt={content.qrAlt(qr.label)}
                width={120}
                height={120}
                className="h-[120px] w-[120px]"
              />
              <figcaption className="text-body-1 text-muted">{qr.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  },
);
