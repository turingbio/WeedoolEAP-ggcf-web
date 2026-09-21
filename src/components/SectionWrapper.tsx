type SectionWrapperProps = {
  id: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  headingClassName?: string;
};

export function SectionWrapper({
  id,
  label,
  title,
  children,
  className = '',
  headingClassName = '',
}: SectionWrapperProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className={`section-shell ${className}`}
    >
      <div className="site-container">
        {(label || title) && (
          <div className={`section-heading ${headingClassName}`}>
            {label && <p className="eyebrow">{label}</p>}
            {title && (
              <h2 id={titleId} className="editorial-title">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
