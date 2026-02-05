import { motion } from 'framer-motion';
import heroBg from '../../assets/hero-bg.png';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#050505]/70 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
                >
                    YOUR STRATEGIC <br />
                    <span className="text-accent">BUSINESS ALLY</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    We help you drive business performance through digital transformation
                    and expert consultancy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#services"
                        className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,123,255,0.4)]"
                    >
                        Read More
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
