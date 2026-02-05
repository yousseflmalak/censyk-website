import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import headerBg from '../../assets/page-header.png';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="relative h-[40vh] min-h-[300px] flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${headerBg})` }}
            />
            <div className="absolute inset-0 bg-[#050505]/80 z-10" />

            {/* Content */}
            <div className="relative z-20 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-300 mb-6"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center gap-2 text-sm text-gray-400 uppercase tracking-widest"
                >
                    <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return (
                            <span key={name} className="flex items-center gap-2">
                                <span>/</span>
                                {isLast ? (
                                    <span className="text-accent">{name.replace('-', ' ')}</span>
                                ) : (
                                    <Link to={routeTo} className="hover:text-accent transition-colors">
                                        {name.replace('-', ' ')}
                                    </Link>
                                )}
                            </span>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
