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
    Activity,
    Eye,
    Tag,
    Calendar,
    CheckCircle2,
    ChevronDown,
    Star,
    ClipboardCheck,
    Settings,
    Rocket,
    Shield,
    Users,
    Clock,
    Award,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/Modal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { services, projects, testimonials, Service, Project } from "@/data/siteData";

/* ─── Data ──────────────────────────────────────────── */

const processSteps = [
    {
        number: "01",
        title: "Site Survey & Planning",
        desc: "Comprehensive site analysis, feasibility studies, and strategic planning for optimal infrastructure placement.",
    },
    {
        number: "02",
        title: "Design & Engineering",
        desc: "Precision engineering solutions with detailed design specifications tailored to project requirements.",
    },
    {
        number: "03",
        title: "Installation & Deployment",
        desc: "Expert installation of telecom equipment, towers, fiber networks, and power systems.",
    },
    {
        number: "04",
        title: "Testing & Handover",
        desc: "Rigorous testing, quality assurance, and seamless handover with complete documentation.",
    },
];

const whyChooseUs = [
    {
        icon: Award,
        title: "14+ Years Experience",
        desc: "Proven track record with over 500 successful projects across Nepal.",
    },
    {
        icon: Users,
        title: "Expert Team",
        desc: "Highly trained engineers and technicians specialized in telecom infrastructure.",
    },
    {
        icon: Shield,
        title: "Safety First",
        desc: "Strict EHS protocols and PPE standards ensuring zero-compromise safety.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        desc: "Round-the-clock maintenance and troubleshooting to minimize downtime.",
    },
    {
        icon: Rocket,
        title: "Latest Technology",
        desc: "Cutting-edge tools and methodologies for superior project execution.",
    },
    {
        icon: CheckCircle2,
        title: "End-to-End Solutions",
        desc: "From site acquisition to network optimization — all under one roof.",
    },
];

const faqs = [
    {
        q: "What services does Meach Group provide?",
        a: "We offer comprehensive telecom infrastructure services including site survey & acquisition, turnkey solutions, tower installation, equipment commissioning, optical fiber deployment, power installation, network optimization, and ongoing maintenance.",
    },
    {
        q: "Which regions in Nepal does Meach Group operate in?",
        a: "Meach Group operates nationwide across all provinces of Nepal. We have completed projects in Kathmandu Valley, Terai Region, Western Region, Eastern Region, and remote mountainous areas.",
    },
    {
        q: "How does Meach Group ensure project quality?",
        a: "We maintain rigorous quality standards through certified engineering teams, strict EHS protocols, advanced testing equipment (OTDR, RF analyzers), and comprehensive documentation at every project phase.",
    },
    {
        q: "Does Meach Group offer maintenance services?",
        a: "Yes, we provide 24/7 operation and maintenance services for both telecom networks and optical fiber infrastructure, including preventive maintenance, emergency repairs, and environmental monitoring.",
    },
    {
        q: "What types of telecom equipment does Meach Group install?",
        a: "We install a wide range of equipment including BTS/NodeB/eNodeB, microwave links, antennas, feeder cables, power systems (rectifiers, batteries, generators), and core network components (BSC, MSC, DWDM).",
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
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                {count}
                {suffix}
            </div>
            <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
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

/* ─── FAQ Item ──────────────────────────────────────── */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
            <button className="faq-trigger" onClick={() => setOpen(!open)}>
                <span>{q}</span>
                <span className="faq-trigger-icon">
                    <ChevronDown className="w-4 h-4" />
                </span>
            </button>
            <div className="faq-content">
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
            </div>
        </div>
    );
};

/* ─── Star Rating ──────────────────────────────────── */
const StarRating = ({ count = 5 }: { count?: number }) => (
    <div className="star-rating">
        {Array.from({ length: count }).map((_, i) => (
            <Star key={i} className="star fill-current" />
        ))}
    </div>
);

/* ─── Main Page ────────────────────────────────────── */
const Index = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            {/* Hero */}
            <HeroSection>
                <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10">
                        Since 2011 — Trusted Infrastructure Partner
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground mb-6 leading-[1.1]">
                        Leading the Future of{" "}
                        <span className="hero-highlight">Telecommunications</span>{" "}
                        &amp; Infrastructure
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                        Meach Group is a trusted service provider delivering
                        comprehensive, end-to-end solutions in network deployment,
                        site management, and power distribution across Nepal.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/services"
                            className="btn-primary px-7 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                        >
                            Our Services <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/about"
                            className="btn-primary px-7 py-3.5 rounded-xl border-2 border-border text-foreground hover:border-blue-300 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </HeroSection>

            {/* Stats Bar */}
            <section className="stats-bar">
                <div className="container-narrow">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCounter value={14} suffix="+" label="Years Experience" />
                        <StatCounter value={500} suffix="+" label="Successful Projects" />
                        <StatCounter value={200} suffix="+" label="Towers Installed" />
                        <StatCounter value={100} suffix="+" label="Clients Served" />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-muted/30 dark:bg-background">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="What We Do"
                            title="Everything Your Business Needs"
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
                                        className="service-card cursor-pointer group"
                                    >
                                        <div className="service-card-icon">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {s.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {s.shortDesc}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all">
                                            Learn More <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </RevealSection>
                    <RevealSection className="text-center mt-12">
                        <Link
                            to="/services"
                            className="btn-primary px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                        >
                            View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </RevealSection>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section-padding bg-background dark:bg-[#0a0f1a]">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="How We Work"
                            title="A Simple Process, Amazing Results"
                            description="Our streamlined 4-step workflow ensures every project is delivered on time, within budget, and to the highest standards."
                        />
                    </RevealSection>
                    <RevealSection stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {processSteps.map((step, i) => (
                                <div key={step.number} className="process-step">
                                    {i < processSteps.length - 1 && (
                                        <div className="process-step-connector hidden lg:block" />
                                    )}
                                    <div className="process-step-number">{step.number}</div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-muted/30 dark:bg-background">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="Why Us"
                            title="Why Nepal Trusts Meach Group"
                            description="With over a decade of experience in telecom infrastructure, we deliver reliable results that keep Nepal connected."
                        />
                    </RevealSection>
                    <RevealSection stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseUs.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-blue-200 dark:hover:border-blue-500/30 transition-all card-shadow hover:shadow-md group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Projects */}
            <section className="section-padding bg-background dark:bg-[#0a0f1a]">
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
                                    className="group card-interactive bg-card rounded-2xl overflow-hidden border border-border card-shadow cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-bold backdrop-blur-sm">
                                            {p.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                        >
                            View All Projects <ArrowRight className="w-4 h-4" />
                        </Link>
                    </RevealSection>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-muted/30 dark:bg-background">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="Testimonials"
                            title="Trusted by Nepal's Industry Leaders"
                            description="Hear what our clients say about working with Meach Group and how our infrastructure solutions have helped simplify their network and power distribution processes."
                        />
                    </RevealSection>

                    <RevealSection stagger>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                            {/* Column 1: Tall Testimonial */}
                            <div className="lg:row-span-2 bg-card rounded-2xl p-8 border border-border card-shadow hover:shadow-md transition-shadow relative overflow-hidden group">
                                <Quote className="w-10 h-10 text-blue-500/10 mb-6 group-hover:text-blue-500 transition-colors" />
                                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                                    "{testimonials[0].text}"
                                </p>
                                <div className="mt-auto flex items-center gap-4">
                                    <img
                                        src={testimonials[0].avatar}
                                        alt={testimonials[0].name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div>
                                        <p className="font-bold text-foreground">{testimonials[0].name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonials[0].title}</p>
                                        <div className="mt-1">
                                            <StarRating />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Stacked Testimonials */}
                            <div className="space-y-6">
                                <div className="bg-card rounded-2xl p-8 border border-border card-shadow hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <Quote className="w-8 h-8 text-blue-500/10 mb-4 group-hover:text-blue-500 transition-colors" />
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        "{testimonials[1].text}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonials[1].avatar}
                                            alt={testimonials[1].name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-bold text-foreground text-sm">{testimonials[1].name}</p>
                                            <p className="text-xs text-muted-foreground">{testimonials[1].title}</p>
                                            <div className="mt-1">
                                                <StarRating />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card rounded-2xl p-8 border border-border card-shadow hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <Quote className="w-8 h-8 text-blue-500/10 mb-4 group-hover:text-blue-500 transition-colors" />
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        "{testimonials[2].text}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonials[2].avatar}
                                            alt={testimonials[2].name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-bold text-foreground text-sm">{testimonials[2].name}</p>
                                            <p className="text-xs text-muted-foreground">{testimonials[2].title}</p>
                                            <div className="mt-1">
                                                <StarRating />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Dark Testimonial */}
                            <div className="bg-[#0f172a] rounded-2xl p-8 card-shadow hover:shadow-md transition-shadow relative overflow-hidden group h-full">
                                <Quote className="w-10 h-10 text-blue-400/20 mb-6 group-hover:text-blue-400 transition-colors" />
                                <p className="text-white/80 leading-relaxed mb-10 text-lg italic">
                                    "{testimonials[3].text}"
                                </p>
                                <div className="mt-auto flex items-center gap-4">
                                    <img
                                        src={testimonials[3].avatar}
                                        alt={testimonials[3].name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white/10 shadow-sm"
                                    />
                                    <div>
                                        <p className="font-bold text-white">{testimonials[3].name}</p>
                                        <p className="text-sm text-white/50">{testimonials[3].title}</p>
                                        <div className="mt-1">
                                            <StarRating />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Avatar Group */}
                        <div className="mt-16 text-center">
                            <div className="flex justify-center -space-x-4 mb-4">
                                {testimonials.map((t, i) => (
                                    <img
                                        key={i}
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full border-4 border-background object-cover bg-muted"
                                    />
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-background bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                                    +50
                                </div>
                            </div>
                            <p className="text-muted-foreground font-medium">
                                <span className="text-foreground font-bold">50+ satisfied clients</span> love our infrastructure services.
                            </p>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-background dark:bg-[#0a0f1a]">
                <div className="container-narrow">
                    <RevealSection>
                        <SectionHeader
                            subtitle="FAQ"
                            title="Frequently Asked Questions"
                            description="Got questions? We've got answers. Here are some of the most common questions about our services."
                        />
                    </RevealSection>
                    <RevealSection>
                        <div className="max-w-3xl mx-auto space-y-3">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner section-padding">
                <div className="container-narrow text-center relative z-10">
                    <RevealSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Ready to Build Your Network Infrastructure?
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                            Contact us today for a consultation. Our expert team is ready
                            to help you plan, deploy, and maintain world-class telecom
                            infrastructure.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="btn-primary px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/services"
                                className="btn-primary px-8 py-4 rounded-xl border-2 border-white/20 text-white hover:bg-white/10"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </RevealSection>
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
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedService.title}</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Service Overview</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{selectedService.fullDesc}</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {selectedService.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl border border-border/50 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to={`/services/${selectedService.slug}`}
                                onClick={() => setSelectedService(null)}
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all"
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
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
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
                                                <Tag className="w-4 h-4 text-blue-500" />
                                                <span className="text-muted-foreground">Type:</span>
                                                <span className="font-semibold">{selectedProject.category}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                                <span className="text-muted-foreground">Location:</span>
                                                <span className="font-semibold">{selectedProject.location}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <Calendar className="w-4 h-4 text-blue-500" />
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
