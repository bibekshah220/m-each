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
    CheckCircle2,
    Shield,
    Users,
    ChevronDown,
} from "lucide-react";
import Modal from "@/components/Modal";
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
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            q: "What industries do you specialize in?",
            a: "We specialize in telecommunications and power infrastructure, providing end-to-end solutions from site acquisition to full turnkey project execution."
        },
        {
            q: "Do you handle government-scale infrastructure projects?",
            a: "Yes, Meach Group has extensive experience collaborating with government bodies and major private operators like Ncell and Nepal Telecom on national-level infrastructure rollouts."
        },
        {
            q: "What is your typical project timeline?",
            a: "Timelines vary depending on project scale, but our 'FTK' approach is designed for maximum efficiency. Most site installations are completed within 4-8 weeks from acquisition."
        }
    ];

    return (
        <main className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-20">
            {/* 1. Premium Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="container-narrow relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                                Strategic <span className="text-blue-600">Infrastructure</span> <br /> Excellence
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Deploying world-class telecommunications and power solutions across Nepal. Our expert-led approach ensures maximum network resilience and operational efficiency.
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <a href="#services-list" className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-xl transition-all">
                                    Our Services
                                </a>
                                <Link to="/contact" className="px-8 py-4 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-2xl">
                            <div className="service-hero-mockup">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bb1c003f07af?auto=format&fit=crop&q=80&w=1200"
                                    alt="Network Analytics Dashboard"
                                    className="w-full h-full object-cover grayscale opacity-50 dark:opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl scale-90 md:scale-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-4 w-48 bg-blue-600/20 rounded-full" />
                                            <div className="h-4 w-64 bg-slate-200 dark:bg-white/10 rounded-full" />
                                            <div className="h-4 w-40 bg-slate-200 dark:bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why Our Infrastructure Matters */}
            <section className="py-24 bg-white dark:bg-slate-900/50">
                <div className="container-narrow">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1600880212340-02d9566209b5?auto=format&fit=crop&q=80&w=800"
                                    alt="Expert Team"
                                    className="rounded-[2.5rem] shadow-2xl"
                                />
                                <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                                    <p className="text-4xl font-bold mb-1">14+</p>
                                    <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                                Why Strategic <br className="hidden md:block" /> Infrastructure Matters
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                In a rapidly evolving digital landscape, your infrastructure is the backbone of your business. We don't just build sites; we deploy resilient, future-ready network solutions.
                            </p>
                            <Link to="/contact" className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-all inline-block">
                                Discuss Your Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Data-Driven Services + Stats */}
            <section className="py-32">
                <div className="container-narrow">
                    <div id="services-list" className="text-center mb-20">
                        <p className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4">Our Expertise</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Our Strategic Services</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Services List */}
                        <div className="flex-[1.5] space-y-4">
                            {services.slice(0, 6).map((service) => (
                                <button
                                    key={service.slug}
                                    onClick={() => setSelectedService(service)}
                                    className="w-full flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-blue-600/30 dark:hover:border-blue-400/30 transition-all group shadow-sm active:scale-[0.98]"
                                >
                                    <span className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {service.title}
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                                </button>
                            ))}
                        </div>
                        {/* High-Impact Stats Section */}
                        <div className="flex-1">
                            <div className="bg-blue-50 dark:bg-blue-600/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center h-full border border-blue-100 dark:border-blue-500/20">
                                <div className="w-48 h-48 rounded-full border-[12px] border-blue-600/10 flex flex-col items-center justify-center mb-8 bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/10">
                                    <p className="text-5xl font-extrabold text-blue-600 mb-1">500+</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Successful Projects</p>
                                </div>
                                <div className="space-y-12">
                                    <div className="flex items-center gap-8 justify-center">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white leading-none">200+</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Towers Installed</p>
                                        </div>
                                        <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white leading-none">100+</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Clients Served</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white leading-none">Nationwide</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Presence Across Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Transparent Process Section */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="container-narrow relative z-10">
                    <div className="text-center mb-24">
                        <p className="text-blue-400 font-bold uppercase tracking-[0.2em] mb-4 text-sm">Execution</p>
                        <h2 className="text-4xl md:text-5xl font-bold">A Simple, Transparent Process</h2>
                    </div>

                    <div className="relative">
                        <div className="process-line" />
                        <div className="grid md:grid-cols-5 gap-12 relative z-10">
                            {[
                                { step: "01", title: "Site Acquisition", desc: "Expert selection and legal clearance." },
                                { step: "02", title: "Civil Construction", desc: "Building resilient foundations." },
                                { step: "03", title: "Technical Integration", desc: "Precision hardware commissioning." },
                                { step: "04", title: "RFI Management", desc: "Regulatory and radio compliance." },
                                { step: "05", title: "Network Launch", desc: "Full-scale rollout and handover." }
                            ].map((p, i) => (
                                <div key={i} className="text-center group">
                                    <div className="process-step-dot mx-auto mb-6 group-hover:scale-110 transition-transform bg-blue-600">
                                        {p.step}
                                    </div>
                                    <h4 className="text-lg font-bold mb-3">{p.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </section>

            {/* 5. Trust & FAQ Section */}
            <section className="py-32">
                <div className="container-narrow">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* Promise Cards */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                                Why Infrastructure <br /> Leaders Trust Meach
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="service-promise-card">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/20 flex items-center justify-center mb-6 text-blue-600">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Certified Quality</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Adherence to rigorous ISO and national standards for all construction.</p>
                                </div>
                                <div className="service-promise-card">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/20 flex items-center justify-center mb-6 text-blue-600">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Expert Workforce</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Highly trained field technicians and dedicated project managers.</p>
                                </div>
                            </div>
                        </div>
                        {/* FAQ Section */}
                        <div>
                            <p className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm">FAQ</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Common Enquiries</h3>
                            <div className="space-y-0">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="faq-accordion-item">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full flex items-center justify-between text-left group"
                                        >
                                            <span className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors py-2">
                                                {faq.q}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Final CTA Section */}
            <section className="pb-32">
                <div className="container-narrow">
                    <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden flex flex-col md:flex-row items-center p-10 md:p-20 text-white gap-12">
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Ready to Scale Your Network Infrastructure?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl">
                                Join the leaders in Nepal's telecommunications and power sectors. Partner with Meach Group for world-class turnkey solutions and operational excellence.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Link to="/contact" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-600/20">
                                    Get Started
                                </Link>
                                <Link to="/projects" className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-50 transition-all">
                                    View Projects
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative z-10 w-full max-w-md hidden md:block">
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
                                    alt="Telecom Infrastructure"
                                    className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                        {/* Background mesh */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    </div>
                </div>
            </section>

            {/* Service Detail Modal (Using existing logic) */}
            <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
                {selectedService && (
                    <div className="flex flex-col bg-white dark:bg-slate-900">
                        <div className="relative h-64 md:h-80">
                            <img src={selectedService.imageUrl} alt={selectedService.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{selectedService.title}</h2>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Service Overview</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">{selectedService.fullDesc}</p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {selectedService.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
                                <Link
                                    to="/contact"
                                    onClick={() => setSelectedService(null)}
                                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold inline-flex items-center gap-2 hover:bg-blue-700 transition-all"
                                >
                                    Get Quote <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </main>
    );
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center container-narrow">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Service Not Found</h1>
                <Link to="/services" className="text-blue-600 hover:underline">
                    Back to Services
                </Link>
            </div>
        );
    }

    const Icon = iconMap[service.icon] || Briefcase;

    return (
        <main className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-20">
            {/* Simple Hero for Detail Page */}
            <section className="bg-white dark:bg-slate-900 py-20 border-b border-slate-100 dark:border-white/5">
                <div className="container-narrow">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/20">
                            <Icon className="w-10 h-10" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h1>
                            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl">{service.shortDesc}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-narrow max-w-4xl">
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm p-8 md:p-16">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Service Overview</h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                                {service.fullDesc}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {service.features.map(f => (
                                <div key={f} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-100 dark:border-white/5">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{f}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-slate-100 dark:border-white/5">
                            <Link
                                to="/services"
                                className="text-slate-500 dark:text-slate-400 font-bold hover:text-blue-600 transition-colors flex items-center gap-2"
                            >
                                ← All Services
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold ml-auto hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export { ServicesIndex, ServiceDetail };
