import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Logo from './Logo';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'SAP', path: '/sap' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    { name: 'Consulting', path: '/consulting' },
    { name: 'Support', path: '/support' },
    { name: 'Invoicing', path: '/invoicing' },
    { name: 'Training', path: '/training' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <header
                className={twMerge(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Logo variant="light" />

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-accent',
                                    location.pathname === link.path ? 'text-accent' : 'text-white/90'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Info / CTA (Hidden on small screens) */}
                    <div className="hidden xl:flex items-center gap-4 text-white/80 text-xs">
                        <a href="mailto:info@censyk.com" className="flex items-center gap-1 hover:text-white">
                            <Mail size={14} /> info@censyk.com
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-primary/98 pt-20 px-6 lg:hidden"
                    >
                        <nav className="flex flex-col gap-4 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-lg font-medium text-white py-2 border-b border-white/10 hover:text-accent"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-8 flex flex-col items-center gap-4 text-white/60">
                            <a href="mailto:info@censyk.com" className="flex items-center gap-2">
                                <Mail size={16} /> info@censyk.com
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
