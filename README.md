This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 기능 소개 일러스트

네 장의 일러스트는 `public/`에 있고 `src/sections/intro/FeatureIllustration.tsx`가 불러옵니다.

| 카드             | 파일                  | 패널 배경 | 라벨 색   |
| ---------------- | --------------------- | --------- | --------- |
| AI 상담          | `intro-chat.png`      | `#eaf3ff` | `#0052cc` |
| 자가진단         | `intro-selfcheck.png` | `#fff6df` | `#996e00` |
| 일상 행동 활성화 | `intro-ba.png`        | `#ffede8` | `#b61634` |
| 마음 리포트      | `intro-report.png`    | `#ebfaf7` | `#145247` |

### 이미지를 교체할 때

**파일명을 그대로 두고 내용만 바꿨다면 dev 서버를 껐다 켜야 합니다.** 브라우저 새로고침으로는 반영되지 않습니다.

Next의 이미지 최적화는 요청의 `Accept` 헤더에 따라 PNG와 WebP를 서로 다른 캐시 항목으로 관리합니다. 브라우저는 WebP를 받는데, 실행 중인 dev 서버가 그 변환 결과를 메모리에 들고 있어서 `.next/cache/images`를 지워도 옛 이미지가 계속 나옵니다. 재시작이 유일한 방법입니다.

확인이 필요하면 이렇게 볼 수 있습니다. `HIT`이면 캐시된 옛 이미지입니다.

```bash
curl -sD - -o /dev/null -H "Accept: image/webp" "http://localhost:3000/_next/image?url=%2Fintro-ba.png&w=384&q=75" | grep -i x-nextjs-cache
```

재시작이 번거로우면 파일명에 버전을 붙이는 방법도 있습니다(`intro-ba-v2.png`). URL이 달라지면 캐시 키도 달라집니다.

### 컴포넌트가 처리하는 것

- `fill`과 `sizes`로 반응형 동작합니다. 카드는 4열에서 268px, 2열에서 약 410px, 1열에서 화면 폭에 맞춰 늘어납니다.
- `object-fit: contain`이라 원본 비율이 달라도 패널 안에 들어갑니다. 자가진단만 정사각이고 나머지는 3:2입니다.
- `mix-blend-mode: multiply`로 이미지의 흰 배경을 패널 색면에 녹입니다. **이 속성이 없으면 파스텔 색면 위에 흰 사각형이 그대로 보입니다.**
- 이미지를 새로 만들 때는 흰 배경으로 뽑으면 됩니다. 투명 배경은 필요하지 않습니다.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
