import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ title, description, children }: PageHeroProps) => (
  <section className="hero-gradient pt-32 pb-20 md:pb-28">
    <div className="container-narrow text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHero;
