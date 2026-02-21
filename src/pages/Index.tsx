import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Briefcase,
    Lightbulb,
    Cpu,
    Headphones,
    MapPin,
    Radio,
    Zap,
    Cable,
    Server,
    Wrench,
    Quote,
    TowerControl,
    Signal,
    Building2,
    Activity,
    Eye,
    Tag,
    Calendar,
    CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/Modal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { services, projects, testimonials, Service, Project } from "@/data/siteData";

const highlights = [
    {
        id: "expertise",
        icon: Briefcase,
        title: "Industry Expertise",
        desc: "Proven experience in managing large-scale telecom and infrastructure projects.",
        fullDesc: "With over 14 years of experience, Meach Group has built a reputation for excellence in the telecommunications sector. We have successfully completed over 500 projects, ranging from site acquisition to full network integration.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        features: ["14+ Years Experience", "500+ Projects Completed", "Expert Engineering Team", "Multi-Region Presence"]
    },
    {
        id: "solutions",
        icon: Lightbulb,
        title: "Comprehensive Solutions",
        desc: "A one-stop service provider for network deployment, power distribution, and site management.",
        fullDesc: "We offer end-to-end infrastructure solutions that cover the entire project lifecycle. Our clients benefit from a single point of responsibility, ensuring streamlined communication and consistent quality across all phases.",
        image: "https://images.unsplash.com/photo-1591696208198-a0d25fe179cb?auto=format&fit=crop&q=80&w=800",
        features: ["Design & Planning", "Hardware Procurement", "Field Engineering", "Managed Services"]
    },
    {
        id: "technology",
        icon: Cpu,
        title: "Advanced Technology",
        desc: "Utilizing cutting-edge tools and methodologies for superior project execution.",
        fullDesc: "Technology is at the core of what we do. From advanced RF planning tools to underground fiber detection systems, we invest in the latest equipment to deliver precision and reliability to our clients.",
        image: "https://images.unsplash.com/photo-1558494949-ef010ccdcc51?auto=format&fit=crop&q=80&w=800",
        features: ["RF Testing Equipment", "Cloud-Based Reporting", "Modern Safety Gear", "Integrated Workflow Tools"]
    },
    {
        id: "support",
        icon: Headphones,
        title: "Reliable Support",
        desc: "Ensuring seamless network operation through expert maintenance and monitoring.",
        fullDesc: "Our partnership doesn't end with project handover. We provide round-the-clock support and preventive maintenance services to ensure your infrastructure remains resilient and performs at peak levels.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        features: ["24/7 Response Teams", "Preventive Maintenance", "SLA-Driven Performance", "Local Support Hubs"]
    },
];

const serviceIcons: Record<string, React.ElementType> = {
    "map-pin": MapPin,
    key: Briefcase,
    "tower-control": TowerControl,
    radio: Radio,
    server: Server,
    zap: Zap,
    cable: Cable,
    gauge: Cpu,
    package: Briefcase,
    wrench: Wrench,
    activity: Activity,
    "refresh-cw": Cpu,
};

/* ─── Animated Stat Counter ────────────────────────── */
const StatCounter = ({
    value,
    suffix,
    label,
}: {
    value: number;
    suffix: string;
    label: string;
}) => {
    const { ref, count } = useAnimatedCounter(value);
    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {count}
                {suffix}
            </div>
            <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                {label}
            </p>
        </div>
    );
};

/* ─── Scroll Reveal Wrapper ────────────────────────── */
const RevealSection = ({
    children,
    className = "",
    stagger = false,
}: {
    children: React.ReactNode;
    className?: string;
    stagger?: boolean;
}) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`${stagger ? "scroll-reveal-stagger" : "scroll-reveal"} ${isRevealed ? "revealed" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
};

const Index = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedHighlight, setSelectedHighlight] = useState<typeof highlights[0] | null>(null);

    return (
        <>
            {/* Hero */}
            <HeroSection>
                <div className="container-narrow text-center">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-hero-fade-up"
                        style={{ opacity: 0 }}
                    >
                        Leading the Future of
                        <br />
                        Telecommunications &amp; Infrastructure
                    </h1>
                    <p
                        className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-10 animate-hero-fade-up"
                        style={{ animationDelay: "0.2s", opacity: 0 }}
                    >
                        Meach Group is a trusted service provider in the telecommunications
                        and infrastructure sector, delivering comprehensive, end-to-end
                        solutions in network deployment, site management, and power
                        distribution.
                    </p>
                    <div
                        className="flex flex-wrap justify-center gap-4 animate-hero-scale-in"
                        style={{ animationDelay: "0.4s", opacity: 0 }}
                    >
                        <Link
                            to="/about"
                            className="btn-primary px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90"
                        >
                            Explore More
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-primary px-8 py-4 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </HeroSection>

            {/* Highlights */}
            <section className="section-padding bg-background">
                <div className="container-narrow">
                    <RevealSection stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {highlights.map((h) => {
                                const Icon = h.icon;
                                return (
                                    <div
                                        key={h.title}
                                        onClick={() => setSelectedHighlight(h)}
                                        className="group card-interactive bg-card rounded-2xl overflow-hidden card-shadow flex flex-col h-full cursor-pointer"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={h.image}
                                                alt={h.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg hero-gradient flex items-center justify-center border border-white/20 shadow-lg">
                                                <Icon className="w-5 h-5 text-primary-foreground" />
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col justify-center text-center">
                                            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-secondary transition-colors">
                                                {h.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {h.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section-padding bg-muted/30">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="What We Do"
                            title="Our Services"
                            description="Meach Group provides a diverse range of services across telecommunications, power distribution, and infrastructure development."
                        />
                    </RevealSection>
                    <RevealSection stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.slice(0, 6).map((s) => {
                                const Icon = serviceIcons[s.icon] || Briefcase;
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
                                            <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                                                {s.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                                                {s.shortDesc}
                                            </p>
                                            <div className="inline-flex items-center gap-1 text-secondary text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                                                Quick View <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </RevealSection>
                    <RevealSection className="text-center mt-12">
                        <Link
                            to="/services"
                            className="btn-primary px-8 py-4 rounded-lg hero-gradient text-primary-foreground"
                        >
                            View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </RevealSection>
                </div>
            </section>

            {/* Projects */}
            <section className="section-padding bg-background">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="Our Work"
                            title="Projects Undertaken by Meach Group"
                        />
                    </RevealSection>
                    <RevealSection stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.slice(0, 6).map((p) => (
                                <div
                                    key={p.title}
                                    onClick={() => setSelectedProject(p)}
                                    className="group card-interactive bg-card rounded-2xl overflow-hidden card-shadow cursor-pointer"
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
                                    <div className="p-6">
                                        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                                            {p.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {p.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                    <RevealSection className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                        >
                            View All Projects <ArrowRight className="w-4 h-4" />
                        </Link>
                    </RevealSection>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding hero-gradient">
                <div className="container-narrow">
                    <RevealSection>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <StatCounter value={14} suffix="+" label="Years Experience" />
                            <StatCounter value={500} suffix="+" label="Successful Projects" />
                            <StatCounter value={200} suffix="+" label="Towers Installed" />
                            <StatCounter value={100} suffix="+" label="Clients Served" />
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-muted/30">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="Testimonials"
                            title="What Our Customers Say"
                        />
                    </RevealSection>
                    <RevealSection stagger>
                        <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((t) => (
                                <div
                                    key={t.name}
                                    className="card-interactive bg-card rounded-xl p-8 card-shadow"
                                >
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {t.text}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-white font-bold text-xs">
                                            {t.name.charAt(0)}
                                        </div>
                                        <p className="font-semibold text-foreground">{t.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-background">
                <div className="container-narrow text-center">
                    <RevealSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Let's Talk About Your Project
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Ready to build or upgrade your telecom infrastructure? Contact us
                            today for a consultation.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary px-8 py-4 rounded-lg hero-gradient text-primary-foreground"
                        >
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </RevealSection>
                </div>
            </section>

            {/* Highlight Modal */}
            <Modal isOpen={!!selectedHighlight} onClose={() => setSelectedHighlight(null)}>
                {selectedHighlight && (
                    <div className="flex flex-col">
                        <div className="relative h-64 md:h-80">
                            <img src={selectedHighlight.image} alt={selectedHighlight.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedHighlight.title}</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Why Choose Us</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{selectedHighlight.fullDesc}</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {selectedHighlight.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl border border-border/50">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        <span className="text-foreground/90 font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Service Quick View Modal */}
            <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
                {selectedService && (
                    <div className="flex flex-col">
                        <div className="relative h-64 md:h-80">
                            <img src={selectedService.imageUrl} alt={selectedService.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedService.title}</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Service Overview</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{selectedService.fullDesc}</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {selectedService.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl border border-border/50 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to={`/services/${selectedService.slug}`}
                                onClick={() => setSelectedService(null)}
                                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                            >
                                View Detailed Page <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Project Quick View Modal */}
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div className="flex flex-col">
                        <div className="relative h-64 md:h-80">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
                                    {selectedProject.category}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{selectedProject.title}</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <h3 className="text-lg font-bold mb-4 text-foreground">Project Overview</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{selectedProject.description}</p>
                                    <p className="text-muted-foreground mt-4 leading-relaxed">
                                        This project represents our capability to handle critical {selectedProject.category.toLowerCase()}
                                        infrastructure with precision and expert engineering.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-5 bg-muted/50 rounded-2xl border border-border shadow-sm">
                                        <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Fast Stats</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm">
                                                <Tag className="w-4 h-4 text-secondary" />
                                                <span className="text-muted-foreground">Type:</span>
                                                <span className="font-semibold">{selectedProject.category}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <MapPin className="w-4 h-4 text-secondary" />
                                                <span className="text-muted-foreground">Location:</span>
                                                <span className="font-semibold">{selectedProject.location}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <Calendar className="w-4 h-4 text-secondary" />
                                                <span className="text-muted-foreground">Status:</span>
                                                <span className="font-semibold">{selectedProject.status}</span>
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

export default Index;
