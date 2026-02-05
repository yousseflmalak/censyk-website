import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Column 1: Company Info */}
                <div>
                    <div className="mb-4">
                        <Logo variant="light" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        We are a group of specialized professionals linked by a passion for business development and digital transformation.
                    </p>

                </div>

                {/* Column 2: Useful Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
                        Useful Links
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                        <li><Link to="/support" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div>
                    <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
                        Our Services
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/sap" className="hover:text-accent transition-colors">SAP Solutions</Link></li>
                        <li><Link to="/digital-transformation" className="hover:text-accent transition-colors">Digital Transformation</Link></li>
                        <li><Link to="/consulting" className="hover:text-accent transition-colors">Business Consulting</Link></li>
                        <li><Link to="/support" className="hover:text-accent transition-colors">IT Support</Link></li>
                        <li><Link to="/invoicing" className="hover:text-accent transition-colors">E-Invoicing</Link></li>
                        <li><Link to="/training" className="hover:text-accent transition-colors">Corporate Training</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
                        Contact Us
                    </h3>
                    <ul className="space-y-4 text-sm text-gray-400">

                        <li className="flex items-center gap-3">
                            <Mail className="text-accent shrink-0" size={18} />
                            <a href="mailto:info@censyk.com" className="hover:text-white">info@censyk.com</a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 mt-16 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Censyk. All rights reserved.</p>
            </div>
        </footer>
    );
}
