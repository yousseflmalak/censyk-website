import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    ExternalLink,
    FileText,
    Linkedin,
    Wrench,
    Briefcase,
    Info,
    ArrowRight
} from 'lucide-react';
import { TOOLKIT_DATA } from '../../data/hubData';
import HubLayout from './HubLayout';
import { clsx } from 'clsx';

const HubToolkit: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<'All' | 'Technical' | 'Career'>('All');

    const filteredToolkit = TOOLKIT_DATA.filter(item => {
        const matchesSearch = item.tcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <HubLayout>
            <div className="space-y-8 pb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Professional Toolkit</h1>
                        <p className="text-gray-500">Essential T-Codes, technical tools, and career optimization assets.</p>
                    </div>

                    <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
                        {['All', 'Technical', 'Career'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat as any)}
                                className={clsx(
                                    "px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                                    activeCategory === cat ? "bg-accent text-primary shadow-lg" : "text-gray-500 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search toolkit by T-Code or description..."
                        className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-5 pl-16 pr-8 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all shadow-xl"
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredToolkit.map((item, idx) => (
                        <motion.div
                            key={item.tcode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-white/5 border border-white/5 hover:border-accent/20 p-6 rounded-3xl transition-all relative overflow-hidden flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={clsx(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center border",
                                    item.category === 'Technical'
                                        ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                                        : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                                )}>
                                    {item.category === 'Technical' ? <Wrench size={24} /> : <Briefcase size={24} />}
                                </div>
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{item.category}</span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {item.tcode}
                            </h3>
                            <p className="text-sm text-gray-500 mb-6 flex-1 italic leading-relaxed">
                                {item.desc}
                            </p>

                            {item.category === 'Technical' && item.howTo && (
                                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Info size={12} className="text-accent" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Usage Guide</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 leading-normal">{item.howTo}</p>
                                </div>
                            )}

                            {item.category === 'Career' && (
                                <div className="space-y-3">
                                    {item.links?.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-accent hover:text-primary transition-all group/link"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FileText size={16} />
                                                <span className="text-xs font-bold">{link.label}</span>
                                            </div>
                                            <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all group/link shadow-lg shadow-[#0077b5]/5"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Linkedin size={16} />
                                                <span className="text-xs font-bold uppercase tracking-widest">Open LinkedIn</span>
                                            </div>
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            )}

                            {item.category === 'Technical' && (
                                <button className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold text-accent uppercase tracking-widest group-hover:gap-2 transition-all">
                                    View Detailed Specs <ArrowRight size={14} />
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredToolkit.length === 0 && (
                    <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
                            <Search size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">No matching tools found</h4>
                        <p className="text-gray-500">Try adjusting your search or category filters.</p>
                    </div>
                )}
            </div>
        </HubLayout>
    );
};

export default HubToolkit;
