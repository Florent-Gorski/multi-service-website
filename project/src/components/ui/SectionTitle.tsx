type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;