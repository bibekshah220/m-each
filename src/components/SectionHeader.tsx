import { ReactNode } from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ subtitle, title, description, centered = true, light = false }: SectionHeaderProps) => (
  <div className={`mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
    {subtitle && (
      <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 px-4 py-1.5 rounded-full ${light
          ? "text-blue-300 bg-white/10"
          : "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10"
        }`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 leading-tight ${light ? "text-white" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
