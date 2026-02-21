import { useEffect, useRef, useState } from "react";

interface CounterOptions {
    duration?: number;
    threshold?: number;
}

export function useAnimatedCounter(
    target: number,
    options: CounterOptions = {}
) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) {
            setCount(target);
            return;
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    observer.unobserve(el);
                }
            },
            { threshold: options.threshold ?? 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, hasStarted, options.threshold]);

    useEffect(() => {
        if (!hasStarted) return;

        const duration = options.duration ?? 1800;
        const startTime = performance.now();
        let frameId: number;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        frameId = requestAnimationFrame(animate);
        return () => {
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [hasStarted, target, options.duration]);

    return { ref, count };
}
