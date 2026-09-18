import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { commonContent } from '@/content/common';
import { FlowProvider } from '@/features/flow/FlowProvider';

const pretendardVariable = localFont({
  src: [{ path: './fonts/PretendardVariable.woff2' }],
  variable: '--font-app',
  display: 'swap',
});

export const metadata: Metadata = {
  title: commonContent.meta.title,
  description: commonContent.meta.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendardVariable.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <FlowProvider>{children}</FlowProvider>
      </body>
    </html>
  );
}
