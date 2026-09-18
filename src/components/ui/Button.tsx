import type { ComponentProps } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const baseClass =
  'inline-flex min-h-touch w-full items-center justify-center rounded-full px-6 py-3 text-center text-title-3 font-bold transition-colors duration-200 md:w-auto ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ' +
  'disabled:cursor-not-allowed disabled:border-transparent disabled:bg-disabled disabled:text-inactive';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-bright text-white hover:bg-brand active:bg-brand-strong',
  secondary: 'border border-brand bg-white text-brand hover:bg-brand-tint active:bg-brand-tint',
  ghost: 'border border-line bg-transparent text-ink hover:bg-brand-tint active:bg-brand-tint',
};

function buttonClassName(variant: Variant, className?: string) {
  return [baseClass, variantClasses[variant], className].filter(Boolean).join(' ');
}

type ButtonProps = ComponentProps<'button'> & { variant?: Variant };

export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClassName(variant, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<'a'> & { variant?: Variant };

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return <a className={buttonClassName(variant, className)} {...props} />;
}
