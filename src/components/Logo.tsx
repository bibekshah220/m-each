interface LogoProps {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "light";
    showText?: boolean;
}

const sizes = {
    sm: { svg: 36, text: "text-sm" },
    md: { svg: 48, text: "text-base" },
    lg: { svg: 64, text: "text-lg" },
};

const Logo = ({ size = "md", variant = "default", showText = true }: LogoProps) => {
    const { svg, text } = sizes[size];
    const strokeColor = variant === "light" ? "#ffffff" : "#0000CD";
    const textColor = variant === "light" ? "text-white" : "text-[#0000CD]";

    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            {/* Tower SVG */}
            <svg
                width={svg}
                height={svg * 1.1}
                viewBox="0 0 100 110"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                <style>
                    {`
                        @keyframes transmit {
                            0% { opacity: 0.3; transform: scale(0.9); }
                            50% { opacity: 1; transform: scale(1); }
                            100% { opacity: 0.3; transform: scale(0.9); }
                        }
                        .signal-wave {
                            animation: transmit 2s infinite ease-in-out;
                            transform-origin: center;
                        }
                        .wave-1 { animation-delay: 0s; }
                        .wave-2 { animation-delay: 0.5s; }
                    `}
                </style>
                {/* Signal waves left */}
                <path d="M28 22 Q18 30 18 40 Q18 50 28 58" className="signal-wave wave-1" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                <path d="M22 15 Q8 26 8 40 Q8 54 22 65" className="signal-wave wave-2" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

                {/* Signal waves right */}
                <path d="M72 22 Q82 30 82 40 Q82 50 72 58" className="signal-wave wave-1" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                <path d="M78 15 Q92 26 92 40 Q92 54 78 65" className="signal-wave wave-2" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

                {/* Tower top vertical mast */}
                <line x1="50" y1="8" x2="50" y2="35" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

                {/* Left tower leg */}
                <line x1="50" y1="35" x2="22" y2="100" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                {/* Right tower leg */}
                <line x1="50" y1="35" x2="78" y2="100" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

                {/* Cross braces */}
                <line x1="33" y1="58" x2="67" y2="58" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
                <line x1="27" y1="75" x2="73" y2="75" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
                <line x1="21" y1="93" x2="79" y2="93" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />

                {/* Inner diagonals upper section */}
                <line x1="50" y1="35" x2="33" y2="58" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
                <line x1="50" y1="35" x2="67" y2="58" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />

                {/* Inner diagonals middle section */}
                <line x1="33" y1="58" x2="27" y2="75" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
                <line x1="33" y1="58" x2="43" y2="75" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
                <line x1="67" y1="58" x2="73" y2="75" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
                <line x1="67" y1="58" x2="57" y2="75" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />

                {/* X cross upper middle */}
                <line x1="33" y1="58" x2="67" y2="75" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="67" y1="58" x2="33" y2="75" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />

                {/* X cross lower */}
                <line x1="27" y1="75" x2="73" y2="93" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="73" y1="75" x2="27" y2="93" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />

                {/* Base feet */}
                <line x1="22" y1="100" x2="14" y2="106" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
                <line x1="78" y1="100" x2="86" y2="106" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            </svg>

            {showText && (
                <div className="flex flex-col leading-tight transition-transform duration-300 group-hover:translate-x-1">
                    <span className={`font-bold tracking-wide ${text} ${textColor}`}>
                        M-EACH GROUP OF
                    </span>
                    <span className={`font-bold tracking-wide ${text} ${textColor}`}>
                        TECHNOLOGY PVT. LTD.
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
