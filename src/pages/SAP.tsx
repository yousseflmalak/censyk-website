
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { Settings, RefreshCw, Users, ShieldCheck, HeartPulse, PieChart } from 'lucide-react';

const sapServices = [
    {
        icon: Settings,
        title: "SAP Implementation",
        description: "From installation to complete configuration, we provide bespoke SAP solutions tailored to your business needs."
    },
    {
        icon: RefreshCw,
        title: "Integration & Updates",
        description: "Seamlessly integrate SAP into your existing ecosystem and stay current with the latest features and security updates."
    },
    {
        icon: Users,
        title: "Employee Training",
        description: "Empower your workforce with expert-led training programs to maximize the value of your SAP investment."
    },
    {
        icon: HeartPulse,
        title: "Maintenance & Support",
        description: "Ongoing 24/7 technical assistance and maintenance to ensure your SAP systems run smoothly and efficiently."
    }
];

const features = [
    {
        title: "Qualified SAP Experts",
        description: "Our certified team accompanies you with expertise and professionalism through every phase of the project."
    },
    {
        icon: ShieldCheck,
        title: "Guaranteed Security",
        description: "Your data and processes are protected with the highest standards and industry-leading security protocols."
    },
    {
        icon: PieChart,
        title: "Customized Solutions",
        description: "Bespoke SAP solutions adapted specifically to your business requirements and performance goals."
    }
];

export default function SAP() {
    return (
        <div className="min-h-screen bg-[#050505]">
            <PageHeader
                title="Complete SAP Solutions"
                subtitle="Empowering your business with intelligent, customized SAP strategies."
            />

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose <span className="text-accent">SAP</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            With qualified SAP experts, 24/7 support, and secure, high-performance customized solutions, we guarantee a simple and sustainable digital transformation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0A0A0A] p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                    {feature.icon ? (
                                        <feature.icon className="text-accent" size={28} />
                                    ) : (
                                        <span className="text-accent font-bold text-xl">SAP</span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our SAP <span className="text-accent">Services</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From implementation to maintenance, we accompany you at every stage of your digital transformation journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sapServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-6 p-8 bg-white/5 rounded-xl border border-white/5"
                            >
                                <div className="shrink-0 bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center">
                                    <service.icon className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Business with SAP?
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        Join the leading organizations that have chosen us for their SAP digital transformation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:info@censyk.com"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="/support"
                            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all border border-white/10"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
