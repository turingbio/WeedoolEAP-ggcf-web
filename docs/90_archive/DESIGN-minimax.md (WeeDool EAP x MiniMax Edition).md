version: 1.0.0-minimax
name: WeeDool-EAP-MiniMax-Variant
description: WeeDool EAP의 공용 토큰(tokens.yaml)을 바탕으로, MiniMax 특유의 스탁 모노크롬(Stark Monochrome) 캔버스와 강렬한 알약(Pill) CTA, 그리고 모델/서비스 영역별 비비드·파스텔 컬러 블록 시스템을 이식한 디자인 시스템 사양서입니다. 대형 히어로 타이포그래피, 계정 정보 전용 Tabular 컴포넌트, 3컬럼 가이드 구조를 제공합니다.

colors:
primary: "{colors.brand}" # #0066FF (MiniMax의 메인 시그니처 액션 포인트)
on-primary: "{colors.on-brand}" # #FFFFFF
primary-soft: "{colors.surface-dark}" # #171719 (네이비/다크 포인트 패널)
canvas: "{colors.canvas}" # #FFFFFF (스탁 화이트 캔버스 배경)
surface: "{colors.surface}" # #F7F7F8 (서브 섹션, 검색 필드)
surface-soft: "{colors.surface-dark}" # #171719
hairline: "{colors.line}" # #E1E2E4 (1px 카드 및 구분선)
hairline-soft: "{colors.line-control}" # #878A93 (미세 구분선)
ink: "{colors.ink}" # #171719 (헤드라인 및 메인 텍스트)
ink-strong: "#000000" # 순수 흑색 (프로모션 바 및 대형 히어로 디스플레이)
charcoal: "#222222" # 일반 본문 텍스트
slate: "#45515e" # 서브 보조 텍스트
steel: "#5f5f5f" # 테이블 헤더, 3차 텍스트
stone: "#8e8e93" # 비활성 탭 및 캡션
muted: "{colors.line-control}" # #878A93 (푸터 링크 및 비활성 라벨)

WeeDool EAP 파스텔/브랜드 스토리 컬러 블록 (MiniMax 모델별 컬러 엔코딩 적용)
brand-coral: "{colors.block-rose}" # #FFE5E5 (긴급 EAP / M2.7 시그니처 블록)
brand-magenta: "{colors.block-lavender}" # #EFE5FF (상담/Music 스토리 블록)
brand-blue: "{colors.block-sky}" # #E5EFFF (시스템/Hailuo 안내 블록)
brand-purple: "{colors.block-lavender}" # #EFE5FF (AI 자동화 스토리 블록)
brand-mint: "{colors.block-mint}" # #E5FFF2 (성공 / 완료 블록)
brand-cream: "{colors.block-yellow}" # #FFFBE5 (워크플로우 가이드 블록)

success-bg: "#E5FFF2" # 성공 상태 배경
success-text: "{colors.success}" # #0F9F59 (성공 텍스트)
on-dark: "#FFFFFF" # 다크/컬러 카드 내부 텍스트
footer-bg: "{colors.surface-dark}" # #171719 (다크 푸터)

typography:
hero-display:
fontFamily: "{meta.font-stack}"
fontSize: 80px
fontWeight: 700
lineHeight: 1.10
letterSpacing: -2.00px
display-lg:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-desktop.size}" # 44px
fontWeight: "{typography.hero-desktop.weight}" # 700
lineHeight: "{typography.hero-desktop.line}" # 1.25
letterSpacing: "{typography.hero-desktop.tracking}" # -0.88px
heading-lg:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-mobile.size}" # 32px
fontWeight: "{typography.hero-mobile.weight}" # 700
lineHeight: "{typography.hero-mobile.line}" # 1.30
letterSpacing: "{typography.hero-mobile.tracking}" # -0.64px
heading-md:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.title-desktop.size}" # 28px
fontWeight: "{typography.title-desktop.weight}"# 700
lineHeight: "{typography.title-desktop.line}" # 1.35
letterSpacing: "{typography.title-desktop.tracking}" # -0.28px
heading-sm:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.title-mobile.size}" # 24px
fontWeight: "{typography.title-mobile.weight}" # 700
lineHeight: "{typography.title-mobile.line}" # 1.35
letterSpacing: "{typography.title-mobile.tracking}" # -0.24px
card-title:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.subtitle-desktop.size}" # 22px
fontWeight: "{typography.subtitle-desktop.weight}" # 600
lineHeight: "{typography.subtitle-desktop.line}" # 1.50
letterSpacing: 0
subtitle:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.body-strong.size}" # 18px
fontWeight: "{typography.body-strong.weight}" # 600
lineHeight: "{typography.body-strong.line}" # 1.60
letterSpacing: 0
body-md:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.body.size}" # 18px (웹 본문 하한선 준수)
fontWeight: "{typography.body.weight}" # 400
lineHeight: "{typography.body.line}" # 1.60
letterSpacing: 0
body-tabular:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.credential.size}" # 24px
fontWeight: "{typography.credential.weight}" # 700
lineHeight: "{typography.credential.line}" # 1.40
letterSpacing: "{typography.credential.tracking}" # 0.48px
fontFeature: "{typography.credential.feature}" # tnum
caption:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.caption.size}" # 15px
fontWeight: "{typography.caption.weight}" # 400
lineHeight: "{typography.caption.line}" # 1.60
letterSpacing: 0
caption-bold:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.caption.size}" # 15px
fontWeight: 700
lineHeight: 1.30
letterSpacing: 0
button-md:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.button.size}" # 20px
fontWeight: "{typography.button.weight}" # 600
lineHeight: "{typography.button.line}" # 1.20
letterSpacing: 0

rounded:
xs: "{rounded.xs}" # 4px
sm: "{rounded.sm}" # 12px
md: "{rounded.sm}" # 12px
lg: "{rounded.lg}" # 20px
xl: "{rounded.xl}" # 28px
hero: 32px # 시그니처 블록/프로모션 전용 대형 곡률
full: "{rounded.full}" # 9999px (모든 버튼 및 알약 탭 전용)

spacing:
xxs: "{spacing.xs}" # 4px
xs: "{spacing.sm}" # 8px
sm: "{spacing.md}" # 12px
md: "{spacing.base}" # 16px
lg: "{spacing.lg}" # 20px
xl: "{spacing.xl}" # 24px
xxl: "{spacing.xxl}" # 32px
xxxl: 40px
section-sm: 48px
section: "{spacing.section-desktop}" # 80px
hero: 96px

components:
button-primary:
backgroundColor: "{colors.ink}"
textColor: "{colors.on-primary}"
typography: "{typography.button-md}"
rounded: "{rounded.full}"
padding: "16px 28px"
minHeight: "{layout.control-height}"
button-primary-pressed:
backgroundColor: "{colors.charcoal}"
textColor: "{colors.on-primary}"
button-secondary:
backgroundColor: "transparent"
textColor: "{colors.ink}"
typography: "{typography.button-md}"
rounded: "{rounded.full}"
padding: "16px 28px"
border: "1px solid {colors.ink}"
minHeight: "{layout.control-height}"
button-tertiary:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.button-md}"
rounded: "{rounded.full}"
padding: "16px 28px"
border: "1px solid {colors.hairline}"
button-icon-circular:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
rounded: "{rounded.full}"
size: "48px"
border: "1px solid {colors.hairline}"
product-card-coral:
backgroundColor: "{colors.brand-coral}"
textColor: "{colors.ink}"
rounded: "{rounded.hero}"
padding: "{spacing.xxl}"
product-card-blue:
backgroundColor: "{colors.brand-blue}"
textColor: "{colors.ink}"
rounded: "{rounded.hero}"
padding: "{spacing.xxl}"
account-credential-box:
backgroundColor: "{colors.brand-blue}"
textColor: "{colors.ink}"
typography: "{typography.body-tabular}"
rounded: "{rounded.lg}"
padding: "{spacing.xl}"
card-base:
backgroundColor: "{colors.canvas}"
rounded: "{rounded.xl}"
padding: "{spacing.xl}"
border: "1px solid {colors.hairline}"
pill-tab:
backgroundColor: "{colors.canvas}"
textColor: "{colors.steel}"
typography: "{typography.caption-bold}"
rounded: "{rounded.full}"
padding: "{spacing.xs} {spacing.md}"
border: "1px solid {colors.hairline}"
pill-tab-active:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.full}"
border: "1px solid {colors.primary}"
promo-banner:
backgroundColor: "{colors.ink-strong}"
textColor: "{colors.on-primary}"
typography: "{typography.caption-bold}"
padding: "{spacing.sm} {spacing.lg}"
footer-region:
backgroundColor: "{colors.footer-bg}"
textColor: "{colors.on-dark}"
typography: "{typography.caption}"
padding: "{spacing.section} {spacing.xxl}"
