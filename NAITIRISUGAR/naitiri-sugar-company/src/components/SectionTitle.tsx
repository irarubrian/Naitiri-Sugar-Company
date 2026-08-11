interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg leading-8 text-gray-600">{subtitle}</p>}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-16 rounded bg-green-700"></div>
      </div>
    </div>
  );
}