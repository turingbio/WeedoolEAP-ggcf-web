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
      <div ref={ref} className="rounded-2xl border-2 border-line bg-white p-6 text-ink">
        <p className="mb-5 text-title font-bold">{content.appName}</p>

        <dl className="mb-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          {rows.map((row) => (
            <div key={row.label} className="contents">
              <dt className="text-muted">{row.label}</dt>
              <dd className="font-mono font-bold tracking-wider">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-2 gap-4">
          {qrCodes.map((qr) => (
            <figure key={qr.label} className="flex flex-col items-center gap-2">
              {/* PNG 변환에 확실히 포함되도록 next/image 대신 일반 img를 쓴다 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qr.src} alt={`${qr.label} 설치 QR`} width={120} height={120} />
              <figcaption className="text-muted">{qr.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  },
);
