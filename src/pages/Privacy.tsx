
import PageHeader from '../components/common/PageHeader';
import { Shield, Lock, FileText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-neutral-900">
            <PageHeader
                title="Privacy Policy"
                subtitle="Your privacy is important to us. Learn how we handle your data."
            />

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-12 text-gray-300">

                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Shield className="text-accent" /> Introduction
                            </h2>
                            <p className="leading-relaxed">
                                At Censyk, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                            </p>
                        </motion.div>

                        {/* Data Collection */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="text-accent" /> Information We Collect
                            </h2>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                                <li>Business information provided during consultation requests.</li>
                                <li>Usage data and cookies to improve website performance and user experience.</li>
                            </ul>
                        </motion.div>

                        {/* How We Use Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Eye className="text-accent" /> How We Use Your Information
                            </h2>
                            <p className="leading-relaxed mb-4">We use the collected data for the following purposes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>To provide and manage our consulting and digital transformation services.</li>
                                <li>To communicate with you regarding your inquiries and support requests.</li>
                                <li>To send relevant updates, newsletters, and promotional material (you can opt-out at any time).</li>
                                <li>To improve our website functionality and security.</li>
                            </ul>
                        </motion.div>

                        {/* Data Security */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Lock className="text-accent" /> Data Security
                            </h2>
                            <p className="leading-relaxed">
                                We implement industry-standard security measures to unauthorized access, alteration, disclosure, or destruction of your personal data.
                                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </motion.div>

                        {/* Contact Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <a href="mailto:info@censyk.com" className="text-accent hover:underline mt-2 inline-block">
                                info@censyk.com
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
