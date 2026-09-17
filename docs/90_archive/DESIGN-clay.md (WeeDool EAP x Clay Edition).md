version: 1.0.0-clay
name: WeeDool-EAP-Clay-Variant
description: WeeDool EAP의 공용 토큰(tokens.yaml)을 바탕으로, Clay.com의 입체적인 데이터-클레이메이션 감성(따뜻한 크림 캔버스, 6색 파스텔 액센트 카드로 이어지는 모듈 구조, 둥근 디스플레이 타이포그래피 및 크림 푸터)을 접목한 디자인 시스템 사양서입니다. 샌드-크림 배경 위에서 시각적 친근함과 높은 정보 전달력을 동시에 제공합니다.

colors:
primary: "{colors.ink}" # #171719 (Clay 특유의 웜 다크 네이비 / Near-Black CTA)
primary-active: "#1f1f1f" # 버튼 눌림 상태
primary-disabled: "{colors.line}" # #E1E2E4
on-primary: "{colors.on-brand}" # #FFFFFF

canvas: "#FFFAF0" # Clay 시그니처 웜 크림-샌드 캔버스
surface-soft: "#FAF5E8" # 서브 컨테이너, CTA 밴드, 푸터 배경
surface-card: "#F5F0E0" # 크림 서브 카드, 테스티모니얼 카드
surface-strong: "#EBE6D6" # 강조 구분 밴드
surface-dark: "{colors.surface-dark}" # #171719
hairline: "{colors.line}" # #E1E2E4 (1px 외곽선)
hairline-soft: "#F0F0F0"

ink: "{colors.ink}" # #171719 (헤드라인 및 메인 텍스트)
body: "#3A3A3A" # 본문 기본 텍스트
body-strong: "#1A1A1A" # 강조 본문
muted: "{colors.line-control}" # #878A93 (서브 텍스트, 풋노트)
muted-soft: "#9A9A9A" # 비활성 라벨 및 캡션

WeeDool EAP x Clay 6컬러 시그니처 카드가 결합된 액센트 팔레트
brand-pink: "{colors.block-rose}" # #FFE5E5 (긴급 EAP / Hot-Pink 대체 파스텔 핑크)
brand-teal: "#1A3A3A" # 딥 티일 (강조 플랜 및 서명 카드)
brand-lavender: "{colors.block-lavender}" # #EFE5FF (상담 / 스토리보드 모듈)
brand-peach: "{colors.block-yellow}" # #FFFBE5 (피치/옐로우 웜 카드)
brand-ochre: "#E8B94A" # 머스타드 / 오커 포인트
brand-blue: "{colors.block-sky}" # #E5EFFF (시스템/계정 안내 모듈)
brand-mint: "{colors.block-mint}" # #E5FFF2 (성공 / 완료 안내 모듈)

success: "{colors.success}" # #0F9F59
warning: "#F59E0B"
error: "#EF4444"
on-dark: "#FFFFFF" # 딥 컬러 카드 내부 텍스트

typography:
display-xl:
fontFamily: "{meta.font-stack}"
fontSize: 72px
fontWeight: 700
lineHeight: 1.05
letterSpacing: -2.00px
display-lg:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-desktop.size}" # 44px
fontWeight: "{typography.hero-desktop.weight}" # 700
lineHeight: "{typography.hero-desktop.line}" # 1.25
letterSpacing: "{typography.hero-desktop.tracking}" # -0.88px
display-md:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-mobile.size}" # 32px
fontWeight: "{typography.hero-mobile.weight}" # 700
lineHeight: "{typography.hero-mobile.line}" # 1.30
letterSpacing: "{typography.hero-mobile.tracking}" # -0.64px
title-lg:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.title-desktop.size}" # 28px
fontWeight: "{typography.title-desktop.weight}"# 700
lineHeight: "{typography.title-desktop.line}" # 1.35
letterSpacing: "{typography.title-desktop.tracking}" # -0.28px
title-md:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.title-mobile.size}" # 24px
fontWeight: "{typography.title-mobile.weight}" # 700
lineHeight: "{typography.title-mobile.line}" # 1.35
letterSpacing: "{typography.title-mobile.tracking}" # -0.24px
title-sm:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.subtitle-desktop.size}" # 22px
fontWeight: "{typography.subtitle-desktop.weight}" # 600
lineHeight: "{typography.subtitle-desktop.line}" # 1.50
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
caption-uppercase:
fontFamily: "{meta.font-stack}"
fontSize: 13px
fontWeight: 700
lineHeight: 1.30
letterSpacing: 1.50px
button:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.button.size}" # 20px
fontWeight: "{typography.button.weight}" # 600
lineHeight: "{typography.button.line}" # 1.20
letterSpacing: 0

rounded:
xs: "{rounded.xs}" # 4px
sm: 8px
md: "{rounded.sm}" # 12px (버튼 및 입력창 기본)
lg: "{rounded.lg}" # 20px (컨텐트 카드 및 요약)
xl: "{rounded.xl}" # 28px (Clay 시그니처 컬러 카드)
pill: "{rounded.full}" # 9999px
full: "{rounded.full}" # 9999px

spacing:
xxs: "{spacing.xs}" # 4px
xs: "{spacing.sm}" # 8px
sm: "{spacing.md}" # 12px
md: "{spacing.base}" # 16px
lg: "{spacing.lg}" # 20px
xl: "{spacing.xl}" # 24px
xxl: "{spacing.xxl}" # 32px
section: "{spacing.section-desktop}" # 80px

components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
typography: "{typography.button}"
rounded: "{rounded.md}"
padding: "16px 24px"
minHeight: "{layout.control-height}"
button-primary-active:
backgroundColor: "{colors.primary-active}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
button-secondary:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.button}"
rounded: "{rounded.md}"
padding: "16px 24px"
border: "1px solid {colors.hairline}"
minHeight: "{layout.control-height}"
button-on-color:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.button}"
rounded: "{rounded.md}"
padding: "16px 24px"
minHeight: "{layout.control-height}"
feature-card-pink:
backgroundColor: "{colors.brand-pink}"
textColor: "{colors.ink}"
typography: "{typography.title-lg}"
rounded: "{rounded.xl}"
padding: "{spacing.xxl}"
feature-card-teal:
backgroundColor: "{colors.brand-teal}"
textColor: "{colors.on-dark}"
typography: "{typography.title-lg}"
rounded: "{rounded.xl}"
padding: "{spacing.xxl}"
feature-card-lavender:
backgroundColor: "{colors.brand-lavender}"
textColor: "{colors.ink}"
typography: "{typography.title-lg}"
rounded: "{rounded.xl}"
padding: "{spacing.xxl}"
feature-card-peach:
backgroundColor: "{colors.brand-peach}"
textColor: "{colors.ink}"
typography: "{typography.title-lg}"
rounded: "{rounded.xl}"
padding: "{spacing.xxl}"
feature-card-blue:
backgroundColor: "{colors.brand-blue}"
textColor: "{colors.ink}"
typography: "{typography.title-lg}"
rounded: "{rounded.xl}"
padding: "{spacing.xxl}"
account-credential-box:
backgroundColor: "{colors.brand-blue}"
textColor: "{colors.ink}"
typography: "{typography.body-tabular}"
rounded: "{rounded.lg}"
padding: "{spacing.xl}"
product-mockup-card:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.title-sm}"
rounded: "{rounded.lg}"
padding: "{spacing.xl}"
border: "1px solid {colors.hairline}"
text-input:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.body-md}"
rounded: "{rounded.md}"
padding: "16px 20px"
minHeight: "{layout.control-height}"
border: "1px solid {colors.hairline}"
badge-pill:
backgroundColor: "{colors.surface-card}"
textColor: "{colors.ink}"
typography: "{typography.caption}"
rounded: "{rounded.pill}"
padding: "6px 14px"
cta-band-illustrated:
backgroundColor: "{colors.surface-soft}"
textColor: "{colors.ink}"
typography: "{typography.display-md}"
rounded: "{rounded.xl}"
padding: "{spacing.section}"
footer:
backgroundColor: "{colors.surface-soft}"
textColor: "{colors.body}"
typography: "{typography.caption}"
padding: "{spacing.section} {spacing.xxl}"
