type SectionWrapperProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
};

export function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className="mx-auto h-[500px] w-full max-w-xl scroll-mx-4 border-b-2 border-gray-500 bg-gray-100 px-5 py-10"
    >
      {title && (
        <h2 id={titleId} className="mb-6 text-title font-bold">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
