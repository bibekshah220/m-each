import { ReactNode, useEffect, useState } from "react";
import heroPoster from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
    children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) {
            setVideoLoaded(true);
        }
    }, []);

    return (
        <section className="hero-video-wrapper">
            {/* Background Video */}
            <video
                className={`hero-video ${videoLoaded ? "hero-video--loaded" : ""}`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={heroPoster}
                onCanPlayThrough={() => setVideoLoaded(true)}
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Dark Gradient Overlay */}
            <div className="hero-video-overlay" />

            {/* Content */}
            <div className="hero-video-content pt-32 pb-20 md:pt-40 md:pb-32">
                {children}
            </div>
        </section>
    );
};

export default HeroSection;
