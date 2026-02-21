import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: ScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) {
            setIsRevealed(true);
            return;
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(el);
                }
            },
            {
                threshold: options.threshold ?? 0.15,
                rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return { ref, isRevealed };
}
