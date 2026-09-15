import { RequireOrgCode } from '@/features/flow/RequireOrgCode';

export default function WelcomePage() {
  return (
    <RequireOrgCode>
      <main>welcome</main>
    </RequireOrgCode>
  );
}
