import { commonContent } from '@/content/common';

export function Header() {
  return (
    <header className="border-b border-line bg-white px-5 py-4">
      <p className="text-center text-body font-bold">{commonContent.brandName}</p>
    </header>
  );
}
