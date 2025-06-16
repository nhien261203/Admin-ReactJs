// src/components/admin/Header.jsx
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const Header = ({ onToggleSidebar }) => {
    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-[#fff] text-slate-500 z-50 shadow flex items-center  px-4">

            <div className="container flex items-center justify-between">
                <button
                    onClick={onToggleSidebar}
                    className="hover:text-blue-400 transition"
                >
                    <FiMenu size={22} />
                </button>

                {/* Tên cửa hàng */}
                <h1 className="text-xl font-bold">Nexus - Admin Panel</h1>

                {/* Icon người dùng */}
                <FaUser size={20} />
            </div>
        </header>
    );
};

export default Header;
