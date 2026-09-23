import type { MetadataRoute } from 'next';

/** 기관 직원이 QR과 사내 공지로 들어오는 사이트라 검색 수집을 받지 않는다 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
