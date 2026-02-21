import React, { useState } from "react";
import { MapPin, Calendar, Tag, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Modal from "@/components/Modal";
import { projects, Project } from "@/data/siteData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <PageHero
        title="Our Projects"
        description="Showcasing our portfolio of telecommunications and infrastructure projects across Nepal."
      />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={p.title}
                onClick={() => setSelectedProject(p)}
                className="group card-interactive bg-card rounded-2xl overflow-hidden card-shadow animate-fade-in flex flex-col h-full cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-bold backdrop-blur-sm">
                    {p.category}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-secondary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="flex flex-col">
            <div className="relative h-[300px] md:h-[400px]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-white text-xs font-bold backdrop-blur-sm mb-4">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-bold text-foreground mb-4">Project Overview</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Meach Group's involvement in this project underscores our dedication to enhancing Nepal's
                    telecommunications and power infrastructure. Our end-to-end management approach ensures
                    that every technical requirement is met with precision and safety.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-muted/40 rounded-xl border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">Technical Support</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/40 rounded-xl border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">Compliance Checked</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-2xl p-6 border border-border shadow-sm">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">Project Details</h4>
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm">
                          <Tag className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Category</p>
                          <p className="text-sm font-bold text-foreground">{selectedProject.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm">
                          <MapPin className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Location</p>
                          <p className="text-sm font-bold text-foreground">{selectedProject.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm">
                          <Calendar className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Status / Year</p>
                          <p className="text-sm font-bold text-foreground">
                            {selectedProject.status} {selectedProject.completionDate && `(${selectedProject.completionDate})`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Projects;
