import { toPng } from 'html-to-image';

/**
 * DOM 요소를 PNG로 바꿔 내려받는다.
 * 저장 위치는 브라우저 기본 다운로드 폴더다. 웹에서는 폴더를 정할 수 없다.
 */
export async function downloadCredentialPng(node: HTMLElement, fileName: string): Promise<void> {
  // 글꼴이 다 불러와진 뒤에 변환한다. 아니면 PNG에 기본 글꼴이 들어간다
  await document.fonts.ready;

  const dataUrl = await toPng(node, {
    pixelRatio: 2,
    backgroundColor: '#ffffff',
    cacheBust: true,
  });

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  link.click();
}
