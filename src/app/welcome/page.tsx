import { Footer } from '@/components/Footer';
import { RequireOrgCode } from '@/features/flow/RequireOrgCode';
import { LandingSections } from '@/sections/LandingSections';

export default function WelcomePage() {
  return (
    <RequireOrgCode>
      <main>
        <LandingSections />
      </main>
      <Footer />
    </RequireOrgCode>
  );
}
