import { OrgCodeForm } from '@/features/org-code/OrgCodeForm';
import { commonContent } from '@/content/common';
import { Suspense } from 'react';

export default function VerifyPage() {
  return (
    <div className="flex min-h-dvh w-full bg-linear-to-b from-white to-blue-100">
      <main className="mx-auto flex w-full max-w-md flex-col justify-center gap-8 px-5">
        <p className="text-center text-title font-bold">{commonContent.brandName}</p>
        <Suspense fallback={null}>
          <OrgCodeForm />
        </Suspense>
      </main>
    </div>
  );
}
