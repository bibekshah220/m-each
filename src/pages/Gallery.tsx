import React, { useState } from "react";
import PageHero from "@/components/PageHero";
import { MoveRight } from "lucide-react";
import Modal from "@/components/Modal";

// Import real project images
import towerLattice from "@/assets/gallery/telecom-tower-lattice.jpg";
import siteBase from "@/assets/gallery/telecom-site-base.jpg";
import powerTransformer from "@/assets/gallery/power-transformer.png";
import microwaveDish from "@/assets/gallery/microwave-dish.png";
import towerLandscape from "@/assets/gallery/telecom-tower-landscape.jpg";
import rooftopTelecom from "@/assets/gallery/rooftop-telecom.png";
import civilExcavation from "@/assets/gallery/civil-excavation.png";
import infraLogistics from "@/assets/gallery/infrastructure-logistics.png";
import onsiteSafety from "@/assets/gallery/onsite-safety.png";
import solarDeployment from "@/assets/gallery/solar-deployment.png";
import ppeOverview from "@/assets/gallery/ppe-overview.png";
import fireSafety from "@/assets/gallery/fire-safety.png";
import mandatoryPpe from "@/assets/gallery/mandatory-ppe.png";
import safetyRulesNepali from "@/assets/gallery/safety-rules-nepali.png";
import ppeSign from "@/assets/gallery/ppe-sign.png";
import siteSurveyor from "@/assets/gallery/site-surveyor.png";
import towerClimber from "@/assets/gallery/tower-climber.png";
import turnkeyEngineer from "@/assets/gallery/turnkey-engineer.png";
import equipmentCabinet from "@/assets/gallery/equipment-cabinet.jpg";

const galleryItems = [
  {
    image: towerLattice,
    label: "Lattice Tower Installation",
    description: "High-capacity network infrastructure assembly in central regions.",
    category: "Telecom"
  },
  {
    image: powerTransformer,
    label: "Grid Power Connection",
    description: "Industrial-grade transformer installation and power line integration.",
    category: "Power"
  },
  {
    image: siteBase,
    label: "Ground Base Site Setup",
    description: "End-to-end civil works including secure fencing and base infrastructure.",
    category: "Infrastructure"
  },
  {
    image: microwaveDish,
    label: "Microwave Backhaul",
    description: "Precision microwave link configuration for long-range connectivity.",
    category: "Transmission"
  },
  {
    image: towerLandscape,
    label: "Strategic Site Deployment",
    description: "Optimized network coverage across Nepal's diverse geographical terrains.",
    category: "Rollout"
  },
  {
    image: rooftopTelecom,
    label: "Urban Rooftop Site",
    description: "Precision equipment hosting on high-rise structures for dense urban coverage.",
    category: "Telecom"
  },
  {
    image: civilExcavation,
    label: "Civil Foundation Works",
    description: "Heavy machinery deployment for robust infrastructure base preparation.",
    category: "Infrastructure"
  },
  {
    image: infraLogistics,
    label: "Remote Site Logistics",
    description: "Manual handling and transport of materials to high-altitude regions.",
    category: "Operations"
  },
  {
    image: onsiteSafety,
    label: "EHS & Safety Audit",
    description: "Stringent safety standards and personal protective equipment compliance.",
    category: "Safety"
  },
  {
    image: solarDeployment,
    label: "Off-grid Solar Arrays",
    description: "Aerial perspective of clean energy solutions powering remote network sites.",
    category: "Power"
  },
  {
    image: ppeOverview,
    label: "EHS: PPE Overview",
    description: "Detailed breakdown of Personal Protective Equipment standards.",
    category: "Safety"
  },
  {
    image: fireSafety,
    label: "M-EACH Fire Safety",
    description: "Certified fire safety protocols and equipment for all site locations.",
    category: "Safety"
  },
  {
    image: mandatoryPpe,
    label: "Ground Safety Banner",
    description: "Visible safety mandates required for all ground-level operations.",
    category: "Operations"
  },
  {
    image: safetyRulesNepali,
    label: "Site Rules (Nepali)",
    description: "Multilingual safety guidelines to ensure clear communication on-site.",
    category: "Compliance"
  },
  {
    image: ppeSign,
    label: "Mandatory Signage",
    description: "Standardized safety signage used across all project locations.",
    category: "Safety"
  },
  {
    image: siteSurveyor,
    label: "Precision Site Survey",
    description: "Professional surveyors utilizing advanced tools for data accuracy.",
    category: "Survey"
  },
  {
    image: towerClimber,
    label: "Skilled Tower Climbing",
    description: "Certified climbers performing high-altitude infrastructure works.",
    category: "Telecom"
  },
  {
    image: turnkeyEngineer,
    label: "Project Management",
    description: "Expert engineering oversight on turnkey infrastructure projects.",
    category: "Management"
  },
  {
    image: equipmentCabinet,
    label: "Network Integration",
    description: "Configuring core network electronics within secure enclosures.",
    category: "Core"
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <PageHero
        title="Project Gallery"
        description="A visual journey through our mission to build Nepal's digital backbone with precision and integrity."
      />

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 animate-in fade-in slide-in-from-bottom-5 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-all duration-500 group-hover:via-blue-900/40 group-hover:from-blue-950" />

                <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-500/80 text-white rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {item.label}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center text-blue-400 text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative Corner Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Item Detail Modal */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div className="flex flex-col bg-white dark:bg-slate-950 overflow-hidden">
            <div className="relative aspect-video sm:aspect-[16/10] bg-slate-200 dark:bg-slate-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-500 text-white rounded-full mb-3 inline-block">
                  {selectedItem.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {selectedItem.label}
                </h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="mb-10">
                <h3 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">
                  Project Details
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed font-medium">
                  {selectedItem.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-10 border-t border-slate-100 dark:border-white/5">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-2xl transition-all active:scale-95"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default Gallery;
