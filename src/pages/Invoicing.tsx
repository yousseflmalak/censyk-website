import { motion } from 'framer-motion';
import { FileText, ShieldCheck, RefreshCw } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import CTA from '../components/home/CTA';
import invoicingImg from '../assets/invoicing.png';

export default function Invoicing() {
    return (
        <>
            <PageHeader title="E-Invoicing" subtitle="Seamless & Compliant Solutions" />

            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                Simplify Your <span className="text-accent">Billing Process</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Transition to electronic invoicing with Censyk. Our solutions are fully compliant with ZATCA regulations and integrated seamlessly with your existing ERP systems.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Reduce errors, save time, and ensure compliance with our robust E-Invoicing platform.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { icon: FileText, title: 'Compliance', desc: 'ZATCA Approved' },
                                    { icon: ShieldCheck, title: 'Security', desc: 'Encrypted Data' },
                                    { icon: RefreshCw, title: 'Integration', desc: 'Seamless Sync' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#111] p-4 rounded-lg border border-white/5 text-center">
                                        <div className="text-accent mb-2 flex justify-center"><item.icon size={24} /></div>
                                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                        <p className="text-xs text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <img src={invoicingImg} alt="E-Invoicing" className="rounded-xl shadow-2xl border border-white/10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
