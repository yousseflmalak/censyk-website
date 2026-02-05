import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import CTA from '../components/home/CTA';
import trainingImg from '../assets/training.png';

export default function Training() {
    return (
        <>
            <PageHeader title="Corporate Training" subtitle="Empowering Your Workforce" />

            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <img src={trainingImg} alt="Corporate Training" className="rounded-xl shadow-2xl border border-white/10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                Invest in Your <span className="text-accent">People</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Our comprehensive training programs are designed to upskill your workforce and drive organizational success. From technical skills to leadership development, we offer a wide range of courses tailored to your needs.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: BookOpen, title: 'Technical Training', desc: 'SAP, Cloud, Cybersecurity' },
                                    { icon: Users, title: 'Soft Skills', desc: 'Leadership, Communication, Management' },
                                    { icon: Award, title: 'Certification Prep', desc: 'PMP, ITIL, Scrum Master' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="bg-gradient-to-br from-accent to-blue-900 p-2 rounded-lg text-white shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
