import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    Wrench,
    Settings,
    LogOut,
    ChevronRight,
    Home
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { clsx } from 'clsx';

const HubLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const sidebarLinks = [
        { name: 'Dashboard', path: '/hub', icon: LayoutDashboard },
        { name: 'Training', path: '/hub/training', icon: BookOpen },
        { name: 'Toolkit', path: '/hub/toolkit', icon: Wrench },
        { name: 'Settings', path: '/hub/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#0a0c10] flex text-gray-300">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-black/20 flex flex-col fixed inset-y-0 pt-20">
                <div className="flex-1 px-4 py-8 space-y-2">
                    {sidebarLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === '/hub'}
                            className={({ isActive }) => clsx(
                                "flex items-center justify-between px-4 py-3 rounded-xl transition-all group",
                                isActive
                                    ? "bg-accent/10 text-accent font-semibold border border-accent/20"
                                    : "hover:bg-white/5 text-gray-500 hover:text-white"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <link.icon size={18} />
                                <span className="text-sm">{link.name}</span>
                            </div>
                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </NavLink>
                    ))}
                </div>

                <div className="p-4 border-t border-white/5 space-y-2">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors text-sm"
                    >
                        <Home size={18} />
                        Back to Website
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500/70 hover:text-red-500 hover:bg-red-500/5 transition-colors text-sm"
                    >
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen pt-20">
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default HubLayout;
