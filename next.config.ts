import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 같은 공유기의 다른 기기(휴대폰 등)에서 dev 서버에 접속할 때 필요하다
  allowedDevOrigins: ['192.168.0.*', '192.168.1.*'],
};

export default nextConfig;
