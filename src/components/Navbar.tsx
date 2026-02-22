import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "/careers" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => {
            // Adaptive threshold: change after hero section (approx innerHeight)
            // or a fixed high threshold if innerHeight is unknown
            const threshold = window.innerHeight * 0.8;
            setScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    const isHomePage = location.pathname === "/";
    const isSolid = scrolled || !isHomePage;

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isSolid
                ? "bg-white/98 dark:bg-slate-900/98 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-white/10"
                : "bg-transparent py-2"
                }`}
        >
            <div className={`w-full px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${isSolid ? "h-[70px]" : "h-[100px]"}`}>
                {/* Logo - Left Aligned */}
                <Link to="/" className={`relative z-10 shrink-0 transition-colors duration-500 ${isSolid ? "text-transparent" : "text-white"}`}>
                    <Logo size="md" variant={isSolid ? "default" : "light"} />
                </Link>

                {/* Desktop Nav - Centered */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${isSolid
                                    ? isActive
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                                        : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                                    : isActive
                                        ? "text-white bg-white/20 backdrop-blur-sm"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side: CTA + Toggle + Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <div className={`transition-colors duration-300 ${isSolid ? "text-slate-900 dark:text-white" : "text-white"}`}>
                        <ThemeToggle />
                    </div>
                    <Link
                        to="/contact"
                        className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${isSolid
                            ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                            : "text-white hover:bg-white/10"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <nav
                className={`fixed top-0 right-0 h-full w-72 bg-[#0f172a] z-50 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <Logo size="sm" variant="light" />
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-4 space-y-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                    ? "text-white bg-white/15"
                                    : "text-white/70 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        to="/contact"
                        className="block mt-4 px-4 py-3 rounded-lg bg-blue-500 text-center text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
