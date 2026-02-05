import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import whoWeAreImg from '../../assets/who-we-are.png';

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-primary overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-accent font-bold tracking-widest uppercase mb-2 text-sm">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            A Partner for Your <br />
                            <span className="text-gray-500">Business Growth</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Censyk is a leading consultancy firm dedicated to empowering businesses with innovative digital solutions and strategic guidance. We bridge the gap between complex technology and tangible business results.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Our team of experts works tirelessly to ensure your digital transformation journey is smooth, efficient, and profitable.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {['Strategic Planning', 'Process Optimization', 'Digital Innovation'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-accent" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="/about" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Discover More
                        </a>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src={whoWeAreImg}
                                alt="Censyk Team"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
