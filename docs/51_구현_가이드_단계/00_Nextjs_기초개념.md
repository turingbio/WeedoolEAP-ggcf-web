# 0. Next.js 기초 개념

이 프로젝트를 만드는 데 필요한 개념만 추렸다. 코드를 치기 전에 한 번 읽고, 막힐 때 다시 돌아온다.

---

## 1. Next.js는 무엇인가

React로 화면을 만들되, **주소(URL)마다 페이지를 나누고 빌드·실행까지 해 주는 도구**다.

- React: 화면 조각(컴포넌트)을 만드는 라이브러리
- Next.js: React 컴포넌트를 모아 웹사이트로 만들어 주는 프레임워크

이 프로젝트는 Next.js의 **App Router** 방식을 쓴다.

---

## 2. 폴더가 곧 주소다 (App Router)

`src/app` 폴더 안의 구조가 그대로 주소가 된다. 폴더 안에 `page.tsx` 파일이 있어야 그 주소가 열린다.

| 파일 | 주소 |
| --- | --- |
| `src/app/page.tsx` | `/` |
| `src/app/verify/page.tsx` | `/verify` |
| `src/app/welcome/page.tsx` | `/welcome` |

`page.tsx`는 컴포넌트 하나를 `export default`로 내보낸다.

```tsx
// src/app/verify/page.tsx
export default function VerifyPage() {
  return <main>기관코드 확인 화면</main>;
}
```

`/verify`에 들어가면 이 함수가 돌려준 내용이 보인다.

### layout.tsx

`src/app/layout.tsx`는 **모든 페이지를 감싸는 틀**이다. `<html>`, `<body>`, 전역 CSS, 모든 페이지가 함께 쓰는 상태(이 프로젝트의 `FlowProvider`)를 여기에 둔다. 페이지가 바뀌어도 layout은 다시 만들어지지 않는다.

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

`children` 자리에 각 `page.tsx`의 내용이 들어간다.

### 파비콘

`src/app`에 정해진 이름으로 이미지를 두면 Next.js가 `<head>`에 `<link>` 태그를 알아서 넣는다. `layout.tsx`의 `metadata`는 고치지 않는다.

| 파일 이름 | 받는 형식 | 쓰이는 곳 |
| --- | --- | --- |
| `favicon` | `.ico`만 | 브라우저 탭 |
| `icon` | `.png`·`.jpg`·`.jpeg`·`.svg`·`.ico` | 브라우저 탭 |
| `apple-icon` | `.png`·`.jpg`·`.jpeg` | iPhone 홈 화면에 추가했을 때 |

`favicon`은 `src/app` 바로 아래에만 둘 수 있다. `favicon.png`처럼 다른 형식을 붙이면 적용되지 않는다.

#### .ico를 쓸 때

`src/app/favicon.ico`를 새 파일로 덮어쓴다. 지울 파일은 없다.

#### .png·.jpg를 쓸 때 (이 프로젝트)

1. 이미지를 `src/app/icon.png`로 둔다
2. 프로젝트를 만들 때 생긴 `src/app/favicon.ico`를 지운다. 남겨 두면 `<link>`가 두 개 들어가서 브라우저가 기존 Next.js 아이콘을 띄우기도 한다
3. iPhone 홈 화면 아이콘도 바꾸려면 같은 이미지를 `src/app/apple-icon.png`로 하나 더 둔다

정사각형 이미지를 쓴다. 가로·세로 크기는 Next.js가 파일에서 읽어 `sizes`에 넣는다.

#### .svg를 쓸 때

`src/app/icon.svg`로 두고 `favicon.ico`를 지운다. SVG는 크기를 읽지 않으므로 `sizes="any"`가 들어간다. iPhone 홈 화면은 SVG를 받지 않으므로 `apple-icon.png`를 따로 둔다.

#### 여러 크기를 함께 둘 때

이름 뒤에 숫자를 붙인다. `icon1.png`(32×32), `icon2.png`(192×192)처럼 두면 둘 다 `<link>`로 들어가고, 브라우저가 맞는 크기를 고른다.

> 코드로 아이콘을 그리는 `icon.tsx` 방식도 있지만 이 프로젝트는 쓰지 않는다.

바꾼 뒤에도 탭 아이콘이 그대로면 브라우저 캐시 때문이다. 강력 새로고침(`Ctrl + Shift + R`)을 한다.

---

## 3. 서버 컴포넌트와 클라이언트 컴포넌트

Next.js에서 컴포넌트는 두 종류다. **이 구분을 모르면 오류가 가장 많이 난다.**

| 종류 | 표시 | 할 수 있는 것 | 할 수 없는 것 |
| --- | --- | --- | --- |
| 서버 컴포넌트 (기본값) | 아무것도 안 붙임 | 정적인 화면 그리기, `redirect` | `useState`, `useEffect`, 클릭 이벤트, `window`·`sessionStorage` |
| 클라이언트 컴포넌트 | 파일 맨 위에 `'use client';` | 위의 모든 것 | (서버 전용 기능) |

규칙은 이것 하나만 기억한다.

> **`useState`·`useEffect`·`onClick`·`onChange`·`window`를 쓰는 파일은 맨 첫 줄에 `'use client';`를 적는다.**

```tsx
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

- `'use client';`를 빼먹으면 「You're importing a component that needs useState...」 같은 오류가 난다
- `'use client';` 파일이 import하는 다른 컴포넌트도 클라이언트 쪽에서 실행된다
- 이 프로젝트는 화면 대부분이 상태를 쓰므로 클라이언트 컴포넌트가 많다. 괜찮다

---

## 4. 훅(Hook) 요약

이 프로젝트에서 쓰는 React·Next.js 훅이다.

| 훅 | 가져오는 곳 | 용도 |
| --- | --- | --- |
| `useState` | `react` | 컴포넌트 안에서 바뀌는 값 (입력값, 로딩 상태) |
| `useEffect` | `react` | 화면이 그려진 뒤 한 번 실행할 일 (자동 확인, 이동) |
| `useRef` | `react` | 다시 그려도 유지되는 값, DOM 요소 잡기 |
| `useContext` / `createContext` | `react` | 여러 컴포넌트가 같은 상태를 나눠 쓰기 |
| `useSyncExternalStore` | `react` | `sessionStorage`·시계처럼 React 밖의 값을 읽기 |
| `useRouter` | `next/navigation` | 코드로 다른 주소로 이동 |
| `useSearchParams` | `next/navigation` | 주소의 `?GGCF26=...` 읽기 |

훅은 **컴포넌트 함수의 맨 위에서, 조건문 밖에서** 부른다. `if` 안에서 부르면 오류가 난다.

---

## 5. import 경로의 `@/`

`@/`는 `src/`를 뜻한다. 프로젝트를 만들 때 설정된다.

```tsx
import { Button } from '@/components/ui/Button';
// = src/components/ui/Button.tsx
```

`../../../`처럼 상대 경로를 세지 않아도 된다.

---

## 6. public 폴더

`public/` 안의 파일은 주소로 바로 열린다.

| 파일 위치 | 주소 |
| --- | --- |
| `public/manual/weedool-manual.pdf` | `/manual/weedool-manual.pdf` |
| `public/store/qr-ios.png` | `/store/qr-ios.png` |

코드에서는 `public`을 빼고 `/`부터 적는다.

---

## 7. 환경 변수

`.env.local` 파일에 적은 값을 코드에서 `process.env.이름`으로 읽는다.

- 브라우저에서 읽으려면 이름이 **`NEXT_PUBLIC_`으로 시작**해야 한다
- 값은 개발 서버를 켤 때 코드에 박힌다. **`.env.local`을 고치면 개발 서버를 껐다 켠다**
- `process.env.NEXT_PUBLIC_USE_MOCK`처럼 이름을 통째로 적어야 한다. `process.env[name]`처럼 변수로 꺼내면 값이 비어 있다

---

## 8. 명령어

| 명령 | 뜻 |
| --- | --- |
| `pnpm dev` | 개발 서버 실행. 코드를 저장하면 화면이 바로 바뀐다. `http://localhost:3000` |
| `pnpm build` | 배포용으로 빌드. 타입 오류·빌드 오류를 여기서 잡는다 |
| `pnpm start` | 빌드한 결과 실행 |
| `pnpm lint` | ESLint 검사 |

개발 서버는 `Ctrl + C`로 끈다.

---

## 9. Tailwind CSS

CSS 파일을 따로 쓰지 않고 `className`에 미리 정해진 이름을 붙여 꾸민다.

```tsx
<button className="rounded-xl bg-brand px-6 text-white">계정 받기</button>
```

| 클래스 | 뜻 |
| --- | --- |
| `px-6` | 좌우 안쪽 여백 |
| `mt-4` | 위쪽 바깥 여백 |
| `text-white` | 글자색 흰색 |
| `rounded-xl` | 모서리 둥글게 |
| `w-full` | 너비 100% |
| `md:grid-cols-2` | 화면이 넓을 때(768px 이상)만 2열 |

`bg-brand`처럼 우리 프로젝트만의 이름은 `globals.css`의 `@theme`에서 정의한다(2번 문서).

---

## 10. TypeScript 최소한

```tsx
type ButtonProps = {
  label: string;
  onClick?: () => void; // ? 는 없어도 된다는 뜻
};

export function MyButton({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

- `type`으로 모양을 정하고, 컴포넌트 인자에 `: 타입`을 붙인다
- `string | null`은 「문자열이거나 null」이다
- 빨간 줄이 뜨면 대부분 타입이 안 맞는 것이다. 마우스를 올려 메시지를 읽는다

---

## 참고 문서

- [Next.js: Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [Next.js: Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js: favicon, icon, and apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
- [Next.js: public Folder](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder)
- [Next.js: Environment Variables](https://nextjs.org/docs/app/guides/environment-variables)
- [Next.js: next CLI](https://nextjs.org/docs/app/api-reference/cli/next)
- [React: createContext](https://react.dev/reference/react/createContext)
- [React: useContext](https://react.dev/reference/react/useContext)
- [Tailwind CSS: Responsive design](https://tailwindcss.com/docs/responsive-design)
- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
