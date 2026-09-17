import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { RequireOrgCode } from '@/features/flow/RequireOrgCode';
import { LandingSections } from '@/sections/LandingSections';

export default function WelcomePage() {
  return (
    <RequireOrgCode>
      <Header />
      <main>
        <LandingSections />
      </main>
      <Footer />
    </RequireOrgCode>
  );
}
