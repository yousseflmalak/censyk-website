import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy,
    Zap,
    Calendar,
    ArrowUpRight,
    Activity,
    Clock,
    CheckCircle2,
    CircleDashed
} from 'lucide-react';
import { clsx } from 'clsx';
import {
    PROJECT_DATA,
    JOURNAL_DATA,
    PROGRESS_DATA
} from '../../data/hubData';
import HubLayout from './HubLayout';

const HubDashboard: React.FC = () => {
    return (
        <HubLayout>
            <div className="space-y-8 pb-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Architect Portal</h1>
                        <p className="text-gray-500">Welcome back. Here is your current DRC implementation overview.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                        <Activity className="text-accent" size={18} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">System Status: Optimal</span>
                    </div>
                </div>

                {/* Top Grid: Progress & Target */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Expert Progress Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 bg-gradient-to-br from-accent/20 to-blue-600/10 border border-accent/20 p-8 rounded-[2rem] relative overflow-hidden group shadow-2xl shadow-accent/5"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Trophy size={120} />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-2 text-accent mb-6">
                                <Zap size={20} fill="currentColor" />
                                <span className="text-sm font-bold uppercase tracking-[0.2em]">Expert Level Expansion</span>
                            </div>

                            <h2 className="text-4xl font-black text-white mb-8">
                                Mastering the <br /> Belgian DRC Framework
                            </h2>

                            <div className="mt-auto space-y-6">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm font-medium text-gray-300">Hub Curriculum Completion</span>
                                    <span className="text-2xl font-black text-accent">100%</span>
                                </div>
                                <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-accent to-blue-400"
                                    />
                                </div>
                                <div className="flex gap-6 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        <span className="text-xs text-gray-400 font-medium">15 Specialized Modules Live</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <CheckCircle2 size={14} className="text-accent" />
                                        <span className="text-xs font-medium italic">Verified by Global Portals</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certification Target Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                <Calendar size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-blue-400/50 bg-blue-400/10 px-3 py-1 rounded-full uppercase tracking-tighter">Next Milestone</span>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest font-bold">Certification Goal</p>
                            <h3 className="text-2xl font-bold text-white leading-tight">{PROGRESS_DATA.examTarget}</h3>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                                <Clock size={16} className="text-blue-500" />
                                <span>Target: {PROGRESS_DATA.examDate}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Projects At A Glance */}
                <section>
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Activity size={18} className="text-accent" />
                        Live Implementation Tracking
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECT_DATA.map((project, idx) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                className="group bg-white/5 border border-white/5 hover:border-accent/30 p-6 rounded-3xl transition-all cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors" />

                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 p-2 flex items-center justify-center">
                                            <img src={project.logo} alt={project.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover:text-accent transition-colors">{project.name}</h4>
                                            <p className="text-xs text-gray-500">Updated {project.lastUpdate}</p>
                                        </div>
                                    </div>
                                    <span className={clsx(
                                        "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                                        project.status.includes('Go-Live') ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
                                    )}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Role</p>
                                        <p className="text-xs font-semibold text-gray-300">{project.role}</p>
                                    </div>
                                    <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Focus</p>
                                        <div className="flex gap-1 flex-wrap">
                                            {project.focus.slice(0, 2).map((f, i) => (
                                                <span key={i} className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-gray-400">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Journal Feed */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Activity size={18} className="text-accent" />
                            Technical Journal Feed
                        </h3>
                        <button className="text-xs text-accent font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                            View All Entries <ArrowUpRight size={14} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {JOURNAL_DATA.map((entry, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.4 }}
                                className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:bg-white/[0.07] transition-all cursor-pointer group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <CircleDashed size={14} className="animate-spin-slow" />
                                        </div>
                                        <span className="text-xs font-bold text-accent uppercase tracking-tighter">{entry.project}</span>
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-600 tracking-widest">{entry.date}</span>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {entry.title}
                                </h4>
                                <div className="text-sm text-gray-400 line-clamp-2 prose prose-invert max-w-none prose-p:leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: entry.content }} />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </HubLayout>
    );
};

export default HubDashboard;
