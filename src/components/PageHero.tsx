import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ title, description, children }: PageHeroProps) => (
  <section className="bg-[#0f172a] pt-32 pb-20 md:pb-28 relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-blue-500/5" />
    <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full bg-blue-500/5" />

    <div className="container-narrow text-center relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-white/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHero;
