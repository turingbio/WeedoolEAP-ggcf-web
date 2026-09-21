type SectionWrapperProps = {
  id: string;
  label?: string;
  title?: string;
  description?: string;
  decoration?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headingClassName?: string;
};

export function SectionWrapper({
  id,
  label,
  title,
  description,
  decoration,
  children,
  className = '',
  containerClassName = '',
  headingClassName = '',
}: SectionWrapperProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className={`section-shell ${className}`}
    >
      {decoration}
      <div className={`site-container section-inset ${containerClassName}`}>
        {(label || title) && (
          <div className={`section-heading ${headingClassName}`}>
            {label && <p className="eyebrow">{label}</p>}
            {title && (
              <h2 id={titleId} className="editorial-title">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-[780px] text-lg text-muted md:text-[1.125rem]">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
