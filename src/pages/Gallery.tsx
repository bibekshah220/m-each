import { Radio, Zap, Cable, Server, Wrench, Cpu } from "lucide-react";
import PageHero from "@/components/PageHero";

const galleryItems = [
  { icon: Radio, label: "Telecom Tower Installation" },
  { icon: Cable, label: "Fiber Optic Deployment" },
  { icon: Zap, label: "Power Installation" },
  { icon: Server, label: "Core Network Setup" },
  { icon: Wrench, label: "Network Maintenance" },
  { icon: Radio, label: "BTS Installation" },
  { icon: Cpu, label: "Equipment Commissioning" },
  { icon: Cable, label: "Underground Fiber Works" },
  { icon: Zap, label: "Grid Power Connection" },
];

const Gallery = () => (
  <>
    <PageHero
      title="Gallery"
      description="A visual showcase of our telecommunications and infrastructure achievements across Nepal."
    />
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.label}-${i}`}
                className="group relative aspect-square rounded-xl overflow-hidden hero-gradient cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-20 h-20 text-primary-foreground/20 group-hover:text-primary-foreground/40 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg text-center px-4">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Gallery;
