type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`px-6 py-24 md:px-10 md:py-32 ${className}`}>
      {children}
    </section>
  );
}
