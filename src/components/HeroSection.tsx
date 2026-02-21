import { ReactNode } from "react";
import heroPoster from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
    children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
    return (
        <section className="hero-section pt-[72px]">
            {/* Decorative Elements */}
            <div className="hero-dots top-24 right-12 hidden lg:block" />
            <div className="hero-dots bottom-20 left-8 hidden lg:block" />
            <div className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-blue-500/5 hidden lg:block" />
            <div className="absolute bottom-10 right-[15%] w-40 h-40 rounded-full bg-blue-500/5 hidden lg:block" />

            <div className="container-narrow py-16 md:py-24 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10">
                        {children}
                    </div>

                    {/* Right: Circular Image */}
                    <div className="flex justify-center lg:justify-end relative">
                        <div className="hero-image-circle">
                            <img
                                src={heroPoster}
                                alt="Meach Group - Telecommunications Infrastructure"
                            />
                        </div>
                        {/* Decorative dots around image */}
                        <div className="hero-dots -top-8 -right-4 hidden md:block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
