import { ReactNode } from "react";
import heroPoster from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
    children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
    return (
        <section className="hero-section">
            {/* Video Background */}
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroPoster}
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay */}
            <div className="hero-overlay" />

            <div className="container-narrow relative z-10 py-20 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
