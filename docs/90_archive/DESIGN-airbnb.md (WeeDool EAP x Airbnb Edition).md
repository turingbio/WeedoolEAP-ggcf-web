version: 1.0.0-airbnb
name: WeeDool-EAP-Airbnb-Variant
description: WeeDool EAP의 공용 토큰(tokens.yaml)을 기반으로 Airbnb 특유의 따뜻하고 포용력 있는 consumer marketplace 감성을 이식한 디자인 시스템 사양서입니다. 과도한 글자 굵기 대신 정갈한 타이포그래피, 부드러운 라운딩(Pill & Soft Radius), 단일 에피소드형 그림자, 그리고 핵심 액션 중심의 여백 구조를 갖춥니다.

colors:
primary: "{colors.brand}" # #0066FF (Airbnb의 Rausch 메인 CTA 역할)
primary-active: "{colors.brand-strong}" # #0052CC (눌림, 활성 상태)
primary-disabled: "{colors.disabled-bg}" # #F1F4FF (비활성화 상태)
primary-error-text: "{colors.danger}" # #C20A0A (오류 텍스트)
ink: "{colors.ink}" # #171719 (헤드라인, 타이틀, 숫자)
body: "{colors.ink}" # #171719 (기본 본문)
muted: "{colors.muted}" # #636786 (보조 설명, 비활성 탭, 오프 텍스트)
muted-soft: "{colors.placeholder}" # #70737C (플레이스홀더)
hairline: "{colors.line}" # #E1E2E4 (1px 카드/구분선)
border-strong: "{colors.line-control}" # #878A93 (조작 요소/포커스 테두리)
canvas: "{colors.canvas}" # #FFFFFF (기본 백그라운드)
surface-soft: "{colors.surface}" # #F7F7F8 (쿨톤 Off-White 서피스)
surface-strong: "{colors.surface-dark}" # #171719 (다크 패널)
on-primary: "{colors.on-brand}" # #FFFFFF
on-dark: "{colors.on-brand}" # #FFFFFF
star-rating: "{colors.ink}" # #171719 (평점/숫자는 황금색 대신 ink 사용)
scrim: "{elevation.scrim}" # rgba(23,23,25,0.55) 모달 모션 오버레이

typography:
rating-display:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-desktop.size}" # 44px (핵심 신뢰 수치 표현)
fontWeight: "{typography.hero-desktop.weight}" # 700
lineHeight: "{typography.hero-desktop.line}" # 1.25
letterSpacing: "{typography.hero-desktop.tracking}" # -0.88px
display-xl:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-desktop.size}" # 44px
fontWeight: "{typography.hero-desktop.weight}" # 700
lineHeight: "{typography.hero-desktop.line}" # 1.25
letterSpacing: "{typography.hero-desktop.tracking}" # -0.88px
display-lg:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.hero-mobile.size}" # 32px
fontWeight: "{typography.hero-mobile.weight}" # 700
lineHeight: "{typography.hero-mobile.line}" # 1.30
letterSpacing: "{typography.hero-mobile.tracking}" # -0.64px
display-md:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.title-desktop.size}" # 28px
fontWeight: "{typography.title-desktop.weight}"# 700
lineHeight: "{typography.title-desktop.line}" # 1.35
letterSpacing: "{typography.title-desktop.tracking}" # -0.28px
display-sm:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.title-mobile.size}" # 24px
fontWeight: "{typography.title-mobile.weight}" # 700
lineHeight: "{typography.title-mobile.line}" # 1.35
letterSpacing: "{typography.title-mobile.tracking}" # -0.24px
title-md:
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
body-strong:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.body-strong.size}" # 18px
fontWeight: "{typography.body-strong.weight}" # 600
lineHeight: "{typography.body-strong.line}" # 1.60
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
button-lg:
fontFamily: "{meta.font-stack}"
fontSize: "{typography.button.size}" # 20px
fontWeight: "{typography.button.weight}" # 600
lineHeight: "{typography.button.line}" # 1.20
letterSpacing: 0

rounded:
none: 0px
xs: "{rounded.xs}" # 4px (인라인 태그)
sm: "{rounded.sm}" # 12px (버튼, 입력창, 카드)
lg: "{rounded.lg}" # 20px (표준 카드, 모듈)
xl: "{rounded.xl}" # 28px (시그니처/블록)
full: "{rounded.full}" # 9999px (Pill, 오르브)

spacing:
xs: "{spacing.xs}" # 4px
sm: "{spacing.sm}" # 8px
md: "{spacing.md}" # 12px
base: "{spacing.base}" # 16px
lg: "{spacing.lg}" # 20px
xl: "{spacing.xl}" # 24px
xxl: "{spacing.xxl}" # 32px
huge: "{spacing.huge}" # 48px
section: "{spacing.section-desktop}" # 80px

components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
typography: "{typography.button-lg}"
rounded: "{rounded.sm}"
padding: "16px 24px"
minHeight: "{layout.control-height}"
button-secondary:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
border: "1px solid {colors.ink}"
typography: "{typography.button-lg}"
rounded: "{rounded.sm}"
padding: "16px 24px"
minHeight: "{layout.control-height}"
button-pill:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
typography: "{typography.button-lg}"
rounded: "{rounded.full}"
padding: "16px 32px"
minHeight: "{layout.control-height}"
search-bar-pill:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
typography: "{typography.caption}"
rounded: "{rounded.full}"
border: "1px solid {colors.hairline}"
shadow: "{elevation.card}"
padding: "12px 24px"
property-card:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
rounded: "{rounded.lg}"
border: "1px solid {colors.hairline}"
shadow: "{elevation.card}"
reservation-card:
backgroundColor: "{colors.canvas}"
textColor: "{colors.ink}"
rounded: "{rounded.lg}"
padding: "{spacing.xl}"
border: "1px solid {colors.hairline}"
shadow: "{elevation.mockup}"
account-credential-box:
backgroundColor: "{colors.block-sky}"
textColor: "{colors.ink}"
typography: "{typography.body-tabular}"
rounded: "{rounded.lg}"
padding: "{spacing.xl}"
