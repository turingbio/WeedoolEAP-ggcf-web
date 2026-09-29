import type { ComponentProps } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Size = 'md' | 'lg';

const sizeClasses: Record<Size, string> = {
  md: 'min-h-touch px-6 py-3 text-base font-medium',
  lg: 'min-h-14 px-9 text-lg font-semibold md:min-h-16 md:px-11 md:text-xl',
};

const baseClass =
  'inline-flex w-full items-center justify-center rounded-full text-center transition-colors duration-200 md:w-auto cursor-pointer ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ' +
  'disabled:cursor-not-allowed disabled:border-transparent disabled:bg-disabled disabled:text-inactive';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-bright text-white hover:bg-[#0052cc] active:bg-brand-strong',
  secondary:
    'border border-[#99c2ff] bg-white text-brand-strong hover:bg-brand-tint active:bg-brand-tint',
  ghost: 'border border-line bg-transparent text-ink hover:bg-brand-tint active:bg-brand-tint',
};

function buttonClassName(variant: Variant, size: Size, className?: string) {
  return [baseClass, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');
}

type ButtonProps = ComponentProps<'button'> & { variant?: Variant; size?: Size };

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonClassName(variant, size, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<'a'> & { variant?: Variant; size?: Size };

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClassName(variant, size, className)} {...props} />;
}
