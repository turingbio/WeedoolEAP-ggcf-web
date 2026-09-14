// TODO: 스토어 URL과 QR 이미지는 추후 반영 예정. 임시로 '#' 및 임시 이미지 경로 사용
export const links = {
  manual: {
    href: '/manual/weedool-manual.pdf',
    fileName: 'weedool-manual.pdf',
  },
  appStore: {
    href: '#',
    qrImage: '/store/qr-ios.png',
  },
  googlePlay: {
    href: '#',
    qrImage: '/store/qr-android.png',
  },
  introImage: '/brand/intro.png',
} as const;
