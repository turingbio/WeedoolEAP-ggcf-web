import type { ComponentProps } from 'react';

type Variant = 'primary' | 'secondary';

const baseClass =
  'inline-flex min-h-touch w-full items-center justify-center rounded-xl px-6 text-button font-bold ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ' +
  'disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand text-white active:bg-brand-strong',
  secondary: 'border-2 border-brand bg-white text-brand',
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
