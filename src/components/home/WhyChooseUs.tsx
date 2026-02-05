import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Clock } from 'lucide-react';

const reasons = [
    {
        icon: Target,
        title: 'Precision & Expertise',
        description: 'We deliver exact solutions tailored to your specific business needs with unmatched accuracy.'
    },
    {
        icon: Lightbulb,
        title: 'Innovative Thinking',
        description: 'We bring fresh perspectives and modern technologies to solve traditional business problems.'
    },
    {
        icon: ShieldCheck,
        title: 'Reliable Partnership',
        description: 'We build long-term relationships based on trust, transparency, and consistent results.'
    },
    {
        icon: Clock,
        title: 'Timely Delivery',
        description: 'We respect your time and ensure all projects are delivered within the agreed deadlines.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Select <span className="text-accent">Censyk</span>?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Your Reliable Partner for Transformative Solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-primary p-8 rounded-xl border border-white/5 hover:border-accent/40 transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                                <reason.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
