import { toPng } from 'html-to-image';

/**
 * DOM 요소를 PNG로 바꿔 내려받는다.
 * 저장 위치는 브라우저 기본 다운로드 폴더다. 웹에서는 폴더를 정할 수 없다.
 */
export async function downloadCredentialPng(node: HTMLElement, fileName: string): Promise<void> {
  // 화면 폭과 관계없이 같은 저장본을 만들고, 보이는 카드의 크기는 바꾸지 않는다.
  const container = document.createElement('div');
  container.setAttribute('aria-hidden', 'true');
  container.inert = true;
  Object.assign(container.style, {
    position: 'fixed',
    left: '-10000px',
    top: '0',
    width: '480px',
    pointerEvents: 'none',
  });
  const exportCard = node.cloneNode(true) as HTMLElement;
  Object.assign(exportCard.style, {
    width: '480px',
    maxWidth: 'none',
    fontFamily: getComputedStyle(node).fontFamily,
  });
  exportCard
    .querySelector<HTMLElement>('[data-credential-qr-grid]')
    ?.style.setProperty('grid-template-columns', 'repeat(2, minmax(0, 1fr))');
  exportCard.querySelectorAll<HTMLImageElement>('[data-credential-qr]').forEach((image) => {
    image.width = 144;
    image.height = 144;
    image.style.width = '144px';
    image.style.height = '144px';
  });
  container.append(exportCard);
  document.body.append(container);

  try {
    await document.fonts.ready;
    await Promise.all(Array.from(exportCard.querySelectorAll('img'), (image) => image.decode()));
    const dataUrl = await toPng(exportCard, {
      width: 480,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      cacheBust: true,
    });

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = fileName;
    link.click();
  } finally {
    container.remove();
  }
}
