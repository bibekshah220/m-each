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
      <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${light ? "text-primary-foreground/70" : "text-secondary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
