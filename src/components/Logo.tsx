import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
    const isLight = variant === 'light';

    return (
        <Link to="/" className={`flex items-center gap-2 group ${className}`}>
            {/* Icon Symbol */}
            <div className="relative w-8 h-8 flex items-center justify-center bg-accent rounded-lg shadow-lg group-hover:bg-accent-dark transition-colors duration-300">
                <span className="text-white font-bold text-xl leading-none">C</span>
            </div>

            {/* Text */}
            <span className={`font-bold text-xl tracking-wide ${isLight ? 'text-white' : 'text-primary'}`}>
                CENSYK
            </span>
        </Link>
    );
};

export default Logo;
