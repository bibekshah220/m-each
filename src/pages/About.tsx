import React from "react";
import {
    Target,
    Eye,
    ArrowRight,
    Shield,
    Users,
    CheckCircle2,
    Award,
    Globe,
    Briefcase,
    Building2,
    Zap,
    Signal,
    LineChart,
    ChevronDown,
    Plus,
    X,
    Layout,
    Box,
    HardHat
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import turnkeyEngineer from "@/assets/gallery/turnkey-engineer.png";
import towerLandscape from "@/assets/gallery/telecom-tower-landscape.jpg";
import equipmentCabinet from "@/assets/gallery/equipment-cabinet.jpg";
import microwaveDish from "@/assets/gallery/microwave-dish-close.jpg";
import powerSystem from "@/assets/gallery/power-system-install.jpg";
import rooftopTelecom from "@/assets/gallery/rooftop-telecom-site.jpg";

/* ─── Scroll Reveal Wrapper ────────────────────────── */
const RevealSection = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isRevealed ? "revealed" : ""} ${className}`}
        >
            {children}
        </div>
    );
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
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {count}
                {suffix}
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">
                {label}
            </p>
        </div>
    );
};

const About = () => {
    return (
        <main className="bg-white dark:bg-slate-950 pt-20 overflow-hidden">
            {/* 1. Premium Hero Section */}
            <section className="relative py-24 md:py-32">
                <div className="container-narrow text-center relative z-10">
                    <RevealSection>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                            Your Trusted <span className="text-blue-600">Infrastructure Partner</span> <br /> In Nepal
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                            Meach Group is dedicated to building the foundation of Nepal's growing telecommunications
                            and infrastructure sectors with precision, innovation, and unwavering trust since 2011.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-2xl transition-all">
                                Our Portfolio
                            </button>
                            <button className="px-8 py-4 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                Learn More
                            </button>
                        </div>
                    </RevealSection>
                </div>

                {/* 2. Interactive Feature Grid (Surrounding Main Visual) */}
                <div className="container-narrow mt-20 md:mt-32">
                    <RevealSection>
                        <div className="relative max-w-5xl mx-auto">
                            {/* Main Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full -z-10" />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                {/* Left Features */}
                                <div className="space-y-6 md:space-y-8">
                                    <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-2xl border border-white/5 transform hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                                            <HardHat className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">Turnkey Solutions</h3>
                                        <p className="text-sm text-slate-400 font-medium">End-to-end site acquisition, civil construction, and equipment integration.</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-white/5 transform hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-4">
                                            <Zap className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Power Distribution</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Reliable power backup and distribution systems for critical infrastructure.</p>
                                    </div>
                                </div>

                                {/* Center Hero Image */}
                                <div className="relative group px-4 md:px-0">
                                    <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={towerLandscape}
                                        alt="Infrastructure Excellence"
                                        className="rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative z-10 w-full h-[400px] md:h-[500px] object-cover border-8 border-white dark:border-slate-900"
                                    />
                                </div>

                                {/* Right Features */}
                                <div className="space-y-6 md:space-y-8 text-right md:text-left">
                                    <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-white/5 transform hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-4 ml-auto md:ml-0">
                                            <Signal className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Telecom Engineering</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Precision microwave links and BTS/NodeB installation & integration.</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-2xl border border-white/5 transform hover:-translate-y-1 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 ml-auto md:ml-0">
                                            <Globe className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-white">Nationwide Reach</h3>
                                        <p className="text-sm text-slate-400 font-medium">Operation and maintenance across all 77 districts of Nepal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* 3. A Modern Infrastructure Firm Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
                <div className="container-narrow">
                    <RevealSection>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1">
                                <p className="text-blue-600 font-black uppercase tracking-[0.2em] mb-4 text-sm">Our Legacy</p>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                                    A Modern Infrastructure Firm <br /> Built for Today’s Connectivity
                                </h2>
                                <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                                    Since our establishment in January 2011, Meach Group has evolved into a leader in
                                    Nepal's telecom sector. We specialize in transforming complex requirements into
                                    seamless, resilient infrastructure.
                                </p>
                                <button className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold flex items-center gap-3 group">
                                    Read Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <div className="flex-1 relative">
                                <img
                                    src={turnkeyEngineer}
                                    alt="Expert Engineering"
                                    className="rounded-[2.5rem] shadow-2xl relative z-10"
                                />
                                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[80px] -z-10" />
                                <div className="absolute -bottom-8 -left-8 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl z-20 border border-slate-100 dark:border-white/5 animate-bounce-slow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-slate-900 dark:text-white">100%</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safety Record</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* 4. Vision & Mission Cards */}
            <section className="py-24">
                <div className="container-narrow">
                    <RevealSection>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative group overflow-hidden rounded-[2.5rem]">
                                <img
                                    src={rooftopTelecom}
                                    alt="Our History"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                                    <h3 className="text-3xl font-black text-white mb-4">Our Story</h3>
                                    <p className="text-slate-200 font-medium leading-relaxed">
                                        Born from a vision to connect the unconnected, Meach Group started with a
                                        dedicated team of five experts and has now grown into a 800+ strong workforce.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl h-[calc(50%-1rem)] flex flex-col justify-center border border-white/5">
                                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                                        <Target className="w-8 h-8 text-blue-400" /> Our Mission
                                    </h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">
                                        To revolutionize Nepal’s telecom and power infrastructure with cutting-edge
                                        solutions, ensuring seamless connectivity and energy efficiency.
                                    </p>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-slate-100 dark:bg-white/5 shadow-inner h-[calc(50%-1rem)] flex flex-col justify-center border border-slate-200/50 dark:border-white/5">
                                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                        <Eye className="w-8 h-8 text-blue-600" /> Our Vision
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                        To become the leading infrastructure partner in Nepal, known for innovation,
                                        quality, and trust. Connecting every corner of Nepal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* 5. What We Stand For (Core Values) */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container-narrow">
                    <RevealSection>
                        <div className="text-center mb-16">
                            <p className="text-blue-600 font-black uppercase tracking-[0.2em] mb-4 text-sm">Ethos</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">What We Stand For</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Shield, title: "Integrity", desc: "Honesty and ethical practices in every project we undertake." },
                                { icon: Zap, title: "Innovation", desc: "Pushing boundaries with cutting-edge telecom technologies." },
                                { icon: Target, title: "Precision", desc: "Meticulous execution from survey to integration." },
                                { icon: Users, title: "Community", desc: "Empowering Nepal through reliable connectivity." },
                                { icon: Award, title: "Quality", desc: "Adhering to international standards and SLA excellence." },
                                { icon: Signal, title: "Reliability", desc: "Ensuring 99.9% uptime for national networks." },
                                { icon: Globe, title: "Sustainability", desc: "Building long-term, future-ready infrastructure." },
                                { icon: HardHat, title: "Safety", desc: "Zero-compromise EHS protocols for our personnel." }
                            ].map((v, i) => (
                                <div key={i} className="group p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-blue-600/30 transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <v.icon className={`w-7 h-7 ${i % 2 === 0 ? 'text-blue-600' : 'text-slate-900 dark:text-white'} group-hover:text-white`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{v.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* 6. Supporting Multiple Sectors Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="container-narrow relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <RevealSection>
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                    Supporting Multiple <br /> <span className="text-blue-400">Infrastructure Sectors</span>
                                </h2>
                                <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium max-w-xl">
                                    From telecommunications and power distribution to civil construction and urban
                                    development, we provide the specialized expertise needed to build a modern Nepal.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <p className="text-4xl font-black text-white mb-2">15,000+</p>
                                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Sites Maintained</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <p className="text-4xl font-black text-white mb-2">Nationwide</p>
                                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Service Operational</p>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>
                        <div className="flex-1 relative">
                            <RevealSection>
                                {/* Complex Sector Diagram */}
                                <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
                                    {/* Central Node */}
                                    <div className="w-40 h-40 rounded-full bg-blue-600 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(37,99,235,0.5)] z-20 border-4 border-white/20">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-80">Core</span>
                                        <span className="text-2xl font-black">MEACH</span>
                                    </div>

                                    {/* Orbital Nodes */}
                                    {[
                                        { title: "Telecomm", icon: Signal, pos: "top-0", delay: "0" },
                                        { title: "Power", icon: Zap, pos: "right-0", delay: "100" },
                                        { title: "Civil", icon: Building2, pos: "bottom-0", delay: "200" },
                                        { title: "Turnkey", icon: Briefcase, pos: "left-0", delay: "300" },
                                        { title: "Survey", icon: Globe, pos: "top-12 right-12", delay: "400" },
                                        { title: "EHS", icon: Shield, pos: "bottom-12 left-12", delay: "500" }
                                    ].map((s, i) => (
                                        <div
                                            key={i}
                                            className={`absolute ${s.pos} p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex flex-col items-center gap-2 group hover:bg-white hover:text-slate-900 transition-all cursor-default z-30 animate-in fade-in zoom-in duration-700`}
                                            style={{ animationDelay: `${s.delay}ms` }}
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <s.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{s.title}</span>
                                        </div>
                                    ))}

                                    {/* Connection Arcs (Visual SVG) */}
                                    <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.2" />
                                    </svg>
                                </div>
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Meet The Experts Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
                <div className="container-narrow">
                    <RevealSection>
                        <div className="text-center mb-16">
                            <p className="text-blue-600 font-black uppercase tracking-[0.2em] mb-4 text-sm">Leadership</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Meet the Experts Behind Meach</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Bishwas Shah", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
                                { name: "Engineering Team", role: "Site Acquisition & BTSI", img: turnkeyEngineer },
                                { name: "Operations Crew", role: "Nationwide Maintenance", img: towerLandscape }
                            ].map((m, i) => (
                                <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all">
                                    <div className="h-80 overflow-hidden">
                                        <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent text-white">
                                        <h3 className="text-xl font-bold mb-1">{m.name}</h3>
                                        <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">{m.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container-narrow">
                    <RevealSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Clear answers to your most common infrastructure inquiries.</p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                { q: "When was Meach Group established?", a: "Meach Group was established in January 2011, initially focusing on telecommunications before expanding into power and civil sectors." },
                                { q: "How many team members do you have?", a: "We currently have over 800+ dedicated industry experts including engineers, technicians, and project managers." },
                                { q: "Where is Meach Group headquartered?", a: "Our main headquarters is located in Sankhamul-34, Kathmandu, Nepal, with regional operational hubs nationwide." },
                                { q: "What is your safety compliance record?", a: "We maintain a 100% certified EHS (Environment, Health, and Safety) record, adhering strictly to occupational safety standards." }
                            ].map((faq, i) => {
                                const [isOpen, setIsOpen] = React.useState(false);
                                return (
                                    <div key={i} className={`group border ${isOpen ? 'border-blue-200 bg-slate-50/50 dark:bg-white/[0.02]' : 'border-slate-100 dark:border-white/5'} rounded-2xl overflow-hidden transition-all`}>
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full p-6 text-left flex items-center justify-between bg-transparent hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors"
                                        >
                                            <span className={`font-bold ${isOpen ? 'text-blue-600' : 'text-slate-900 dark:text-slate-200'}`}>{faq.q}</span>
                                            {isOpen ? <X className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />}
                                        </button>
                                        {isOpen && (
                                            <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* 8. Modern Dark CTA */}
            <section className="pb-24 pt-12">
                <div className="container-narrow">
                    <div className="relative rounded-[3rem] bg-[#0a0f1a] overflow-hidden p-12 md:p-20 group">
                        {/* High-fidelity background pattern/image */}
                        <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700">
                            <img src={microwaveDish} alt="Technology Banner" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Ready To Simplify Your <br /> <span className="text-blue-400">Network Rollout?</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                                Partner with Meach Group for world-class infrastructure solutions that are
                                secure, reliable, and future-ready.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all">
                                    Consult Our Experts
                                </button>
                                <button className="px-10 py-5 rounded-2xl bg-white text-slate-900 font-black hover:bg-slate-100 transition-all">
                                    Our Services
                                </button>
                            </div>
                        </div>

                        {/* Person placeholder for template fidelity */}
                        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block translate-y-10 group-hover:translate-y-5 transition-transform duration-700">
                            <img
                                src={turnkeyEngineer}
                                alt="Expert Engineer"
                                className="h-full w-full object-cover object-top mask-gradient-bottom"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
