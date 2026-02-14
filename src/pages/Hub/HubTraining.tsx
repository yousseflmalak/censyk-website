import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    BookOpen,
    CheckCircle2,
    MonitorPlay
} from 'lucide-react';
import { TRAINING_DATA } from '../../data/hubData';
import HubLayout from './HubLayout';

const HubTraining: React.FC = () => {
    const [currentSession, setCurrentSession] = useState(0);

    const nextSession = () => {
        if (currentSession < TRAINING_DATA.length - 1) {
            setCurrentSession(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevSession = () => {
        if (currentSession > 0) {
            setCurrentSession(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const currentModule = TRAINING_DATA[currentSession];

    return (
        <HubLayout>
            <div className="max-w-4xl mx-auto pb-20">
                {/* Progress Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent shadow-lg shadow-accent/10">
                            <MonitorPlay size={28} />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest leading-none mb-1">DRC Masterclass</h2>
                            <h1 className="text-3xl font-black text-white">Technical Training</h1>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-[2rem] flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Current Progress</p>
                            <p className="text-xl font-black text-white leading-none">
                                Session {currentSession + 1} <span className="text-gray-600 text-sm font-medium">of {TRAINING_DATA.length}</span>
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-white/5 border-t-accent flex items-center justify-center text-[10px] font-bold text-accent">
                            {Math.round(((currentSession + 1) / TRAINING_DATA.length) * 100)}%
                        </div>
                    </div>
                </div>

                {/* Session Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSession}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                    >
                        <div className="p-10 md:p-14">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">
                                    Module {currentSession + 1}
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-10 leading-tight">
                                {currentModule.title}
                            </h3>

                            <div className="prose prose-invert max-w-none 
                                prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg
                                prose-strong:text-white prose-strong:font-bold
                                prose-code:text-accent prose-code:bg-accent/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                                prose-h4:text-white prose-h4:font-bold prose-h4:text-xl prose-h4:mt-8
                                prose-ul:list-none prose-ul:pl-0
                                prose-li:flex prose-li:items-start prose-li:gap-4 prose-li:mb-4
                                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl"
                                dangerouslySetInnerHTML={{ __html: currentModule.content }} />
                        </div>

                        {/* Navigation Footer */}
                        <div className="bg-black/40 border-t border-white/5 px-10 py-8 flex items-center justify-between gap-4">
                            <button
                                onClick={prevSession}
                                disabled={currentSession === 0}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 text-white font-bold hover:bg-white/10 transition-all disabled:opacity-30 disabled:hover:bg-white/5"
                            >
                                <ChevronLeft size={20} />
                                <span className="hidden md:inline">Previous Module</span>
                            </button>

                            <button
                                onClick={nextSession}
                                disabled={currentSession === TRAINING_DATA.length - 1}
                                className="flex-1 max-w-xs flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-accent text-primary font-bold hover:bg-accent-light transition-all shadow-lg shadow-accent/20 disabled:opacity-30"
                            >
                                <span className="hidden md:inline">Next Module</span>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Footer Tips */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10 flex items-start gap-4">
                        <BookOpen className="text-blue-400 shrink-0" size={24} />
                        <div>
                            <h4 className="text-sm font-bold text-white mb-1">Documentation Link</h4>
                            <p className="text-xs text-gray-500">Access the full SAP Help hierarchy for this module in the ToolKit section.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 flex items-start gap-4">
                        <CheckCircle2 className="text-emerald-400 shrink-0" size={24} />
                        <div>
                            <h4 className="text-sm font-bold text-white mb-1">Expert Certification</h4>
                            <p className="text-xs text-gray-500">This module is part of the S4F08 SAP DRC implementation path.</p>
                        </div>
                    </div>
                </div>
            </div>
        </HubLayout>
    );
};

export default HubTraining;
