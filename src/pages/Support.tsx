import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import CTA from '../components/home/CTA';
import supportImg from '../assets/support.png';

export default function Support() {
    return (
        <>
            <PageHeader title="IT Support" subtitle="24/7 Reliable Assistance" />

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
                            <img src={supportImg} alt="IT Support" className="rounded-xl shadow-2xl border border-white/10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                We Are Here <span className="text-accent">For You</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Our dedicated support team is available around the clock to ensure your business operations never miss a beat. From troubleshooting technical issues to proactive system maintenance, we've got you covered.
                            </p>

                            <div className="space-y-6">

                                <div className="flex items-center gap-4 text-white">
                                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email Us</h4>
                                        <p className="text-gray-400 text-sm">support@censyk.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Working Hours</h4>
                                        <p className="text-gray-400 text-sm">24/7 for Critical Issues</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
