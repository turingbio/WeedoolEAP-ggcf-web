import { OrgCodeForm } from '@/features/org-code/OrgCodeForm';
import { VerifyDecoration } from './VerifyDecoration';
import { commonContent } from '@/content/common';
import { Suspense } from 'react';
import Image from 'next/image';
import logo from '../../../public/brand/logo-full.png';

export default function VerifyPage() {
  return (
    <div className="grid min-h-dvh w-full bg-[linear-gradient(160deg,#eff5ff,#ffffff_45%,#f8f4ec)] lg:grid-cols-2 lg:bg-white">
      <div className="relative hidden overflow-hidden bg-brand-soft lg:block">
        <Image src="/hero-paper-v3.png" alt="" fill sizes="50vw" className="object-cover" />
        <div className="absolute inset-0 bg-white/10" />
        <VerifyDecoration />
      </div>
      <main className="m-auto flex w-full max-w-[520px] flex-col items-start gap-6 px-7 py-20 lg:px-12">
        <Image
          src={logo}
          alt={commonContent.brandName}
          className="h-auto w-[160px] lg:w-[200px]"
          sizes="(min-width: 1024px) 240px, 200px"
          preload
        />
        <Suspense fallback={null}>
          <OrgCodeForm />
        </Suspense>
      </main>
    </div>
  );
}
