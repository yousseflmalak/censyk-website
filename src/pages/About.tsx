import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import CTA from '../components/home/CTA';
import whoWeAreImg from '../assets/who-we-are.png';

export default function About() {
    return (
        <>
            <PageHeader title="About Us" subtitle="Who We Are & What We Do" />

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
                            <img
                                src={whoWeAreImg}
                                alt="About Censyk"
                                className="rounded-xl shadow-2xl border border-white/10"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                We Are <span className="text-accent">Censyk</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Censyk is a premier consultancy firm dedicated to driving business excellence through digital transformation and strategic innovation. We partner with organizations to unlock their full potential.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Our team comprises industry veterans and certified experts who bring deep knowledge in IT, business process management, and strategic planning. We don't just advise; we implement solutions that yield measurable results.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <h4 className="text-xl font-bold text-white mb-2">Mission</h4>
                                    <p className="text-sm text-gray-400">To empower businesses with innovative digital solutions that drive sustainable growth.</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <h4 className="text-xl font-bold text-white mb-2">Vision</h4>
                                    <p className="text-sm text-gray-400">To be the most trusted ally for digital transformation in the region.</p>
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
