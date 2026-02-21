import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    { label: "Contact", to: "/contact" },
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

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-border"
                : "bg-transparent"
                }`}
        >
            <div className="container-narrow flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link to="/" className={`relative z-10 ${scrolled ? "text-foreground" : "text-white"}`}>
                    <Logo size="sm" variant={scrolled ? "default" : "light"} />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled
                                    ? isActive
                                        ? "text-primary bg-accent"
                                        : "text-foreground/70 hover:text-primary hover:bg-accent/60"
                                    : isActive
                                        ? "text-white bg-white/20"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Theme Toggle + Mobile Hamburger */}
                <div className="flex items-center gap-1">
                    <div className={scrolled ? "text-foreground" : "text-white"}>
                        <ThemeToggle />
                    </div>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${scrolled
                            ? "text-foreground hover:bg-muted"
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
                className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <Logo size="sm" variant="default" />
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-lg hover:bg-muted text-foreground"
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
                                    ? "text-primary bg-accent"
                                    : "text-foreground/70 hover:text-primary hover:bg-accent/50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
