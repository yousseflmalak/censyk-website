import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-accent to-blue-900 text-white text-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                        <Mail size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        We’re Delivering The Best <br /> Customer Experience
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Ready to transform your business? Contact us today to discuss your customized solution.
                    </p>
                    <a
                        href="mailto:info@censyk.com"
                        className="inline-block bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl"
                    >
                        info@censyk.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
