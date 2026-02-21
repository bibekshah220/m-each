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
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0f172a]/98 backdrop-blur-md shadow-lg shadow-black/5"
                    : "bg-[#0f172a]"
                }`}
        >
            <div className="container-narrow flex items-center justify-between h-[72px]">
                {/* Logo */}
                <Link to="/" className="relative z-10 text-white">
                    <Logo size="sm" variant="light" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? "text-white bg-white/15"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA + Theme Toggle + Mobile Hamburger */}
                <div className="flex items-center gap-3">
                    <div className="text-white">
                        <ThemeToggle />
                    </div>
                    <Link
                        to="/contact"
                        className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative z-10 p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
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
