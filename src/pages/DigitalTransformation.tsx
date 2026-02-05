import { motion } from 'framer-motion';
import { Database, Cloud, Code, BarChart } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import CTA from '../components/home/CTA';
import dtImg from '../assets/digital-transformation.png';

export default function DigitalTransformation() {
    const services = [
        { icon: Cloud, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure.' },
        { icon: Database, title: 'Big Data', desc: 'Data-driven insights.' },
        { icon: Code, title: 'App Development', desc: 'Custom software solutions.' },
        { icon: BarChart, title: 'Analytics', desc: 'Business intelligence.' },
    ];

    return (
        <>
            <PageHeader title="Digital Transformation" subtitle="Innovating for the Future" />

            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                Transforming Business <span className="text-accent">Digitally</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                In today's fast-paced world, digital transformation is not just an option; it's a necessity. We help organizations embrace the power of technology to streamline operations, enhance customer experiences, and unlock new revenue streams.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                From cloud migration to AI-driven analytics, our holistic approach ensures that your technology investment aligns perfectly with your business goals.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <img src={dtImg} alt="Digital Transformation" className="rounded-xl shadow-2xl border border-white/10" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#111] p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-all text-center"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                                    <s.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-400">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
