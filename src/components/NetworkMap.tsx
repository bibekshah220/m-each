import React, { useState } from "react";

interface Node {
    id: string;
    name: string;
    x: number;
    y: number;
    type: "hub" | "node";
    region: string;
}

const nodes: Node[] = [
    { id: "ktm", name: "Kathmandu Valley", x: 550, y: 350, type: "hub", region: "Central" },
    { id: "pkr", name: "Pokhara Valley", x: 400, y: 320, type: "hub", region: "Western" },
    { id: "lmb", name: "Lumbini Province", x: 300, y: 450, type: "node", region: "West-South" },
    { id: "brt", name: "Biratnagar / Eastern", x: 800, y: 500, type: "hub", region: "Eastern" },
    { id: "npl", name: "Nepalgunj / Western", x: 150, y: 400, type: "node", region: "Far-Western" },
    { id: "chi", name: "Chitwan / Terai", x: 480, y: 420, type: "node", region: "South" },
    { id: "hth", name: "Hetauda", x: 580, y: 430, type: "node", region: "Central" },
];

const connections = [
    { from: "ktm", to: "pkr" },
    { from: "ktm", to: "brt" },
    { from: "ktm", to: "hth" },
    { from: "pkr", to: "npl" },
    { from: "pkr", to: "lmb" },
    { from: "hth", to: "chi" },
    { from: "chi", to: "lmb" },
];

const NetworkMap = () => {
    const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

    return (
        <div className="relative w-full aspect-[16/9] bg-slate-900 rounded-[2.5rem] border-2 border-blue-500/20 overflow-hidden group shadow-[0_0_50px_rgba(37,99,235,0.15)]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulse-ring {
                    0% { transform: scale(0.6); opacity: 1; }
                    100% { transform: scale(2.2); opacity: 0; }
                }
                .node-pulse {
                    transform-origin: center;
                    animation: pulse-ring 2.5s infinite ease-out;
                }
            `}} />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent)] pointer-events-none" />

            <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Nepal Abstract Outline - High Visibility White/Blue */}
                <path
                    d="M100 200 L250 150 L450 100 L650 120 L850 150 L950 250 L900 450 L750 550 L550 500 L350 520 L150 480 L100 350 Z"
                    className="stroke-blue-400/60 fill-blue-500/10"
                    strokeWidth="3"
                    strokeDasharray="12 8"
                />

                {/* Connection Lines - Vibrant Blue */}
                {connections.map((conn, i) => {
                    const from = nodes.find(n => n.id === conn.from)!;
                    const to = nodes.find(n => n.id === conn.to)!;
                    return (
                        <line
                            key={`line-${i}`}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            className="stroke-blue-400"
                            strokeWidth="2"
                            strokeOpacity="0.6"
                        />
                    );
                })}

                {/* Hotspots - Larger & Brighter */}
                {nodes.map((node) => (
                    <g
                        key={node.id}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        {/* Animated Outer Ring */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.type === "hub" ? 18 : 13}
                            className="fill-blue-400/40 node-pulse"
                            style={{ transformBox: 'fill-box' }}
                        />

                        {/* Solid Glow Layer */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.type === "hub" ? 10 : 7}
                            className="fill-blue-400/30 blur-[4px]"
                        />

                        {/* Core Node - Pure Blue/White */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.type === "hub" ? 7 : 5}
                            className={`${node.type === "hub" ? "fill-blue-300" : "fill-blue-200"} shadow-lg`}
                            style={{ filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))" }}
                        />
                    </g>
                ))}
            </svg>

            {/* Info Overlay - Premium Glossy */}
            {hoveredNode && (
                <div className="absolute bottom-6 right-6 bg-slate-800/95 backdrop-blur-3xl border-2 border-blue-400/40 p-6 rounded-[2rem] shadow-[0_0_40px_rgba(37,99,235,0.3)] z-20 min-w-[260px] animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-3 h-3 rounded-full ${hoveredNode.type === 'hub' ? 'bg-blue-300' : 'bg-blue-200'} shadow-[0_0_12px_rgba(147,197,253,0.8)]`} />
                        <span className="text-blue-300 text-xs font-black uppercase tracking-[0.25em]">{hoveredNode.region}</span>
                    </div>
                    <h4 className="text-white font-bold text-2xl leading-none">{hoveredNode.name}</h4>
                    <div className="h-0.5 w-12 bg-blue-500/50 my-4 rounded-full" />
                    <p className="text-blue-100/60 text-xs font-bold leading-relaxed uppercase tracking-wider">Primary Infrastructure Hub</p>
                </div>
            )}

            {/* HUD Elements - High Contrast White/Blue */}
            <div className="absolute top-10 left-10 space-y-4 pointer-events-none">
                <div className="h-1.5 w-20 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
                <h3 className="text-white text-lg font-black uppercase tracking-[0.4em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Network Grid</h3>

                <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                        <span className="text-white text-[11px] font-black uppercase tracking-widest">Core Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400/50 border border-blue-300/30" />
                        <span className="text-white/80 text-[11px] font-black uppercase tracking-widest">Regional Site</span>
                    </div>
                </div>
            </div>

            {/* Corner Decorative Glows */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
    );
};

export default NetworkMap;
