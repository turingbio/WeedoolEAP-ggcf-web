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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: commonContent.meta.title,
  description: commonContent.meta.description,
  applicationName: commonContent.meta.siteName,
  // 기관 직원만 들어오는 사이트라 검색 결과에 남기지 않는다
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: commonContent.meta.siteName,
    title: commonContent.meta.title,
    description: commonContent.meta.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: commonContent.meta.ogAlt,
      },
    ],
    ...(siteUrl ? { url: siteUrl } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${pretendardVariable.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <FlowProvider>{children}</FlowProvider>
      </body>
    </html>
  );
}
