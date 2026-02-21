import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => setMounted(true), []);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    if (!mounted) return <div className="w-10 h-10" />;

    const isDark = theme === "dark";
    const isSystem = theme === "system";

    return (
        <div ref={dropdownRef} className="relative">
            {/* Main Toggle Button */}
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="theme-toggle-btn group"
                aria-label="Toggle theme"
            >
                <span className="theme-toggle-track">
                    {/* Sun icon */}
                    <Sun
                        className={`theme-toggle-icon theme-toggle-sun ${isDark ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
                            }`}
                    />
                    {/* Moon icon */}
                    <Moon
                        className={`theme-toggle-icon theme-toggle-moon ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
                            }`}
                    />
                    {/* Sliding knob */}
                    <span
                        className={`theme-toggle-knob ${isDark ? "translate-x-[18px]" : "translate-x-0"}`}
                    />
                </span>
            </button>

            {/* Dropdown */}
            <div
                className={`theme-toggle-dropdown ${showDropdown ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                {[
                    { key: "light", label: "Light", Icon: Sun },
                    { key: "dark", label: "Dark", Icon: Moon },
                    { key: "system", label: "System", Icon: Monitor },
                ].map(({ key, label, Icon }) => (
                    <button
                        key={key}
                        onClick={() => {
                            setTheme(key);
                            setShowDropdown(false);
                        }}
                        className={`theme-toggle-option ${theme === key ? "theme-toggle-option--active" : ""
                            }`}
                    >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                        {theme === key && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-current" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeToggle;
