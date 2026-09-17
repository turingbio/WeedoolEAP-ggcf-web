type SectionWrapperProps = {
  id: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
};

export function SectionWrapper({ id, label, title, children }: SectionWrapperProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className="mx-auto w-full max-w-7xl scroll-mx-4 border-b-2 border-gray-500 bg-gray-100 px-5 py-10"
    >
      {label && <p>{label}</p>}
      {title && (
        <h2 id={titleId} className="mb-6 text-title font-bold">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
