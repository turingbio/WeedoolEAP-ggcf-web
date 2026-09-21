import { OrgCodeForm } from '@/features/org-code/OrgCodeForm';
import { commonContent } from '@/content/common';
import { Suspense } from 'react';
import Image from 'next/image';
import logo from '../../../public/brand/logo-original.webp';

export default function VerifyPage() {
  return (
    <div className="grid min-h-dvh w-full bg-white lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-brand-soft lg:block">
        <Image src="/hero-paper-v3.png" alt="" fill sizes="50vw" className="object-cover" />
        <div className="absolute inset-0 bg-white/10" />
      </div>
      <main className="m-auto flex w-full max-w-[520px] flex-col items-start gap-16 px-7 py-20 lg:px-12">
        <Image
          src={logo}
          alt={commonContent.brandName}
          className="h-auto w-[112px]"
          sizes="112px"
          preload
        />
        <Suspense fallback={null}>
          <OrgCodeForm />
        </Suspense>
      </main>
    </div>
  );
}
