import { Monitor, Users, LifeBuoy, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Monitor,
        title: 'Digital Transformation',
        description: 'Modernizing your business with cutting-edge digital solutions.',
        link: '/digital-transformation'
    },
    {
        icon: Users,
        title: 'Business Consulting',
        description: 'Expert advice to optimize your strategy and operations.',
        link: '/consulting'
    },
    {
        icon: LifeBuoy,
        title: 'IT Support',
        description: 'Reliable 24/7 technical support for your infrastructure.',
        link: '/support'
    },
    {
        icon: FileText,
        title: 'E-Invoicing',
        description: 'Seamless electronic invoicing solutions compliant with regulations.',
        link: '/invoicing'
    }
];

export default function ServicesOverview() {
    return (
        <section id="services" className="py-24 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all hover:bg-[#161616] group"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link to={service.link} className="text-accent text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Read More &rarr;
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
