import React from "react";
import {
    CheckCircle2,
    Users,
    TrendingUp,
    MapPin,
    Clock,
    ShieldCheck,
    Signal,
    Layers,
    Check
} from "lucide-react";

const NetworkStatusHUD = () => {
    return (
        <div className="relative w-full max-w-2xl mx-auto py-12 px-6 bg-slate-50/50 dark:bg-slate-950/20 rounded-[3rem] border border-slate-200/50 dark:border-white/5">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Floating Card: Staff (Top Left) */}
            <div className="absolute -top-6 -left-4 z-20 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-blue-600 shadow-inner">
                        <Users className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-black text-slate-900 dark:text-white leading-tight">800+</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Industry Experts</span>
                    </div>
                </div>
            </div>

            {/* Floating Card: Experience (Bottom Right) */}
            <div className="absolute -bottom-8 -right-4 z-20 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/5 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Market Tenure</span>
                    <div className="flex items-end justify-between gap-4">
                        <span className="text-3xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">15+ Yrs</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs bg-emerald-500/10 px-2 py-1 rounded-lg self-start">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Since Jan 2011</span>
                    </div>
                </div>
            </div>

            {/* Main Report Card */}
            <div className="relative bg-white dark:bg-slate-900/90 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_40px_80px_rgba(30,41,59,0.12)] border border-slate-100 dark:border-white/10 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                {/* Checkmark Accent (Top Right) */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-emerald-500 rounded-3xl flex items-center justify-center text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)] rotate-12 transform hover:rotate-0 transition-transform duration-500">
                    <Check className="w-8 h-8 stroke-[3]" />
                </div>

                {/* Card Header */}
                <div className="mb-10">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 text-left">Infrastructure Report</h3>
                    <p className="text-slate-400 font-bold text-sm tracking-widest uppercase text-left">Meach Group Operational Analytics</p>
                </div>

                {/* Table-like Content */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-white/5">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Metric Focus</span>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-8">Operational Value</span>
                            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                                Active
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-700 dark:text-slate-200">Regional Branches</span>
                        </div>
                        <span className="text-xl font-black text-slate-900 dark:text-white">80+ Locations</span>
                    </div>

                    <div className="flex justify-between items-center group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600">
                                <Layers className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-700 dark:text-slate-200">Total Projects</span>
                        </div>
                        <span className="text-xl font-black text-slate-900 dark:text-white">1000+ Done</span>
                    </div>

                    <div className="flex justify-between items-center group cursor-default">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600">
                                <Signal className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-700 dark:text-slate-200">Network Uptime</span>
                        </div>
                        <span className="text-xl font-black text-slate-900 dark:text-white">99.9% SLA</span>
                    </div>

                    {/* Subtotal Style Footer */}
                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 font-bold text-sm">Underground Fiber Network</span>
                            <span className="text-slate-900 dark:text-white font-black text-xl">Nationwide</span>
                        </div>
                        <div className="flex justify-between items-center opacity-40 text-left w-full">
                            <span className="text-slate-400 font-bold text-sm lowercase">EHS Compliance</span>
                            <span className="text-slate-900 dark:text-white font-black text-sm">100% Certified</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Background Accents */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Stacked Cards Effect (Background) */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-[90%] h-[80%] bg-blue-500/10 dark:bg-white/5 rounded-[3rem] -rotate-3 -z-10 translate-x-4 opacity-40" />
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-[85%] h-[70%] bg-blue-500/10 dark:bg-white/5 rounded-[3rem] rotate-2 -z-20 translate-x-8 opacity-20" />
        </div>
    );
};

export default NetworkStatusHUD;
