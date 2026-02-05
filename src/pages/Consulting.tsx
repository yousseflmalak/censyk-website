import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import CTA from '../components/home/CTA';
import consultingImg from '../assets/consulting.png';

export default function Consulting() {
    return (
        <>
            <PageHeader title="Business Consulting" subtitle="Strategic Advice for Growth" />

            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <img src={consultingImg} alt="Business Consulting" className="rounded-xl shadow-2xl border border-white/10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                Expert Guidance, <span className="text-accent">Tangible Results</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Our consulting services are designed to help you navigate complex business challenges. Whether you're looking to optimize processes, enter new markets, or restructure your organization, our experts are here to guide you.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: Target, text: 'Strategic Planning & Execution' },
                                    { icon: TrendingUp, text: 'Process Optimization & Efficiency' },
                                    { icon: Users, text: 'Organizational Structure & HR' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white bg-[#111] p-4 rounded-lg border border-white/5">
                                        <div className="bg-accent/10 p-2 rounded-full text-accent">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
