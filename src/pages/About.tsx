import { Target, Eye } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import turnkeyEngineer from "@/assets/gallery/turnkey-engineer.png";
import towerLandscape from "@/assets/gallery/telecom-tower-landscape.jpg";

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

const About = () => (
    <>
        <PageHero
            title="About Us"
            description="Building the foundation of Nepal's telecommunications and infrastructure since 2011."
        />

        {/* Company Info */}
        <section className="section-padding bg-background">
            <div className="container-narrow max-w-4xl">
                <RevealSection>
                    <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow">
                        <SectionHeader subtitle="Who We Are" title="About Meach Group" />
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            At Meach Group, established in January 2011, we are dedicated to
                            building the foundation of Nepal's growing telecommunications and
                            infrastructure sectors. Headquartered in Sankhamul-34, Kathmandu,
                            Nepal, Meach Group has earned a reputation for delivering
                            end-to-end, innovative solutions in telecom network deployment,
                            power distribution, and site management.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                            Our highly skilled team works with precision and professionalism,
                            managing large-scale projects that strengthen connectivity and
                            enhance reliability. From telecom site relocations and optical
                            fiber deployments to power backup installations and turnkey
                            solutions, we deliver excellence across every aspect of
                            infrastructure development.
                        </p>
                    </div>
                </RevealSection>
            </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
            <div className="container-narrow">
                <RevealSection>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="group card-interactive bg-card rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={turnkeyEngineer}
                                    alt="Our Mission"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl hero-gradient flex items-center justify-center border border-white/20 shadow-lg">
                                    <Target className="w-6 h-6 text-primary-foreground" />
                                </div>
                            </div>
                            <div className="p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To revolutionize Nepal's telecom and power infrastructure with
                                    cutting-edge solutions, ensuring seamless connectivity, energy
                                    efficiency, and reliable network performance. We are committed to
                                    empowering communities and businesses with robust, future-ready
                                    infrastructure that supports technological advancement and
                                    economic growth. Our mission is rooted in integrity,
                                    sustainability, and long-term partnerships with our clients.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="group card-interactive bg-card rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={towerLandscape}
                                    alt="Our Vision"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl hero-gradient flex items-center justify-center border border-white/20 shadow-lg">
                                    <Eye className="w-6 h-6 text-primary-foreground" />
                                </div>
                            </div>
                            <div className="p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To become the leading infrastructure partner for the telecom and
                                    power sectors in Nepal, known for innovation, quality, and trust.
                                    We envision a future where every corner of Nepal is connected
                                    through state-of-the-art networks, enabling progress and
                                    opportunity for all. Our vision extends beyond building
                                    infrastructure — we aim to be a catalyst for societal development
                                    and digital empowerment.
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealSection>
            </div>
        </section>

        {/* Stats */}
        <section className="section-padding hero-gradient">
            <div className="container-narrow">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCounter value={15} suffix="+" label="Years Experience" />
                    <StatCounter value={500} suffix="+" label="Successful Projects" />
                    <StatCounter value={50} suffix="+" label="Current Projects" />
                    <StatCounter value={100} suffix="+" label="Clients Served" />
                </div>
            </div>
        </section>
    </>
);

export default About;
