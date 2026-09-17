import type { SectionProps } from '../types';
import { heroContent } from './content';

// TODO: 편지봉투 스프라이트 애니메이션 에셋 반영 예정. 임시 도형 사용
export function HeroSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="bg-linear-to-br from-blue-50 to-blue-200 px-5 py-16 text-center"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8">
        <div>
          <h1 id={`${id}-title`} className="text-title font-bold">
            {heroContent.title}
          </h1>
          <p>{heroContent.body}</p>
        </div>

        <div
          role="img"
          aria-label={heroContent.envelopeAlt}
          className="h-32 w-48 rounded-xl border border-line bg-white shadow-md"
        />

        <p className="text-title">{heroContent.footer}</p>
      </div>
    </section>
  );
}
