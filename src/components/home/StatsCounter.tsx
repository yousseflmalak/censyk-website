import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const stats = [
    { label: 'Happy Clients', value: 75, suffix: '+' },
    { label: 'Finished Projects', value: 100, suffix: '+' },
    { label: 'Skilled Experts', value: 50, suffix: '+' },
    { label: 'Years Experience', value: 25, suffix: '+' } // Added for balance
];

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (to - from) + from));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [from, to, duration]);

    return <>{count}</>;
};

export default function StatsCounter() {
    return (
        <section className="py-20 bg-primary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Subject Matter <span className="text-accent">Experts</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Driving Success with Professional Consultancy
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                <Counter from={0} to={stat.value} duration={2000} />
                                <span className="text-accent">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
