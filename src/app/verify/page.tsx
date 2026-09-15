import { OrgCodeForm } from '@/features/org-code/OrgCodeForm';
import { Suspense } from 'react';

export default function VerifyPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-5">
      <Suspense fallback={null}>
        <OrgCodeForm />
      </Suspense>
    </main>
  );
}
