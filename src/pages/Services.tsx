import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    MapPin,
    Briefcase,
    Radio,
    Server,
    Zap,
    Cable,
    Cpu,
    Wrench,
    ArrowRight,
    Eye,
    CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Modal from "@/components/Modal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services, Service } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
    "map-pin": MapPin,
    key: Briefcase,
    "tower-control": Radio,
    radio: Radio,
    server: Server,
    zap: Zap,
    cable: Cable,
    gauge: Cpu,
    package: Briefcase,
    wrench: Wrench,
    activity: Cable,
    "refresh-cw": Cpu,
};

const ServicesIndex = () => {
    const { ref, isRevealed } = useScrollReveal();
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <>
            <PageHero
                title="Our Services"
                description="Comprehensive telecommunications and infrastructure solutions tailored to your needs."
            />
            <section className="section-padding bg-background">
                <div className="container-narrow">
                    <div
                        ref={ref}
                        className={`scroll-reveal-stagger ${isRevealed ? "revealed" : ""}`}
                    >
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((s) => {
                                const Icon = iconMap[s.icon] || Briefcase;
                                return (
                                    <div
                                        key={s.slug}
                                        onClick={() => setSelectedService(s)}
                                        className="group relative card-interactive bg-card rounded-2xl overflow-hidden card-shadow flex flex-col h-full cursor-pointer"
                                    >
                                        <div className="relative h-44 overflow-hidden">
                                            <img
                                                src={s.imageUrl}
                                                alt={s.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg hero-gradient flex items-center justify-center border border-white/20 shadow-lg">
                                                <Icon className="w-4 h-4 text-primary-foreground" />
                                            </div>

                                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                                                <Eye className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                                                {s.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                                                {s.shortDesc}
                                            </p>
                                            <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                                                Quick View <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Quick View Modal */}
            <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
                {selectedService && (
                    <div className="flex flex-col">
                        <div className="relative h-64 md:h-80">
                            <img src={selectedService.imageUrl} alt={selectedService.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{selectedService.title}</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Service Overview</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{selectedService.fullDesc}</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {selectedService.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border">
                                <Link
                                    to={`/services/${selectedService.slug}`}
                                    onClick={() => setSelectedService(null)}
                                    className="btn-primary px-6 py-3 rounded-lg hero-gradient text-white font-bold inline-flex items-center gap-2 hover:opacity-90 transition-all"
                                >
                                    View Full Detail <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center container-narrow">
                <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
                <Link to="/services" className="text-secondary hover:underline">
                    Back to Services
                </Link>
            </div>
        );
    }

    const Icon = iconMap[service.icon] || Briefcase;

    return (
        <>
            <PageHero title={service.title} description={service.shortDesc} />
            <section className="section-padding bg-background">
                <div className="container-narrow max-w-4xl">
                    <div className="bg-card rounded-2xl overflow-hidden card-shadow">
                        <div className="relative h-[400px]">
                            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-2xl hero-gradient flex items-center justify-center border border-white/20 shadow-xl">
                                <Icon className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        <div className="p-10 md:p-14">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Service Overview</h2>
                            <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                                {service.description || service.fullDesc}
                            </p>

                            <h3 className="text-xl font-bold text-foreground mb-6">Key Features & Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {service.features.map(f => (
                                    <div key={f} className="flex items-start gap-4 p-5 bg-muted/40 rounded-2xl border border-border/50">
                                        <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                                        <span className="text-foreground/90 font-medium leading-relaxed">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-border">
                                <Link
                                    to="/services"
                                    className="text-secondary font-bold hover:gap-1 flex items-center gap-2 transition-all"
                                >
                                    ← All Services
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn-primary px-10 py-4 rounded-xl hero-gradient text-white font-bold ml-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Get a Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export { ServicesIndex, ServiceDetail };
