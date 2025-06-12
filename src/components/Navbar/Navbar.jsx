import React, { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import SearchOverlay from './SearchOverlay';

const MenuLinks = [
    { id: 1, name: 'Điện thoại', link: '/#' },
    { id: 2, name: 'Laptop', link: '/#shop' },
    { id: 3, name: 'Ipad', link: '/#about' },
    { id: 4, name: 'Đồng hồ', link: '/#about' },
    { id: 5, name: 'PC, Màn hình', link: '/#about' },
    
];

const DropdownLinks = [
    { id: 1, name: 'Phụ kiện di động', link: '/#' },
    { id: 2, name: 'Thiết bị âm thanh', link: '/#' },
    { id: 3, name: 'Phụ kiện laptop', link: '/#' },
];

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const [isLoggedIn, setIsLoggedIn] = useState(false); // giả lập trạng thái đăng nhập
    const [isPersonDropdownOpen, setIsPersonDropdownOpen] = useState(false);



    return (
        <>
            <div className="bg-[#515154] duration-200 w-full z-40 shadow-xl">
                <div >
                    <div className="container mx-auto flex justify-between items-center">
                        {/* Left: Logo + Menu */}
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <button
                                ref={buttonRef}
                                onClick={() => setMobileMenuOpen(true)}
                                className="md:hidden"
                            >
                                <FiMenu className="text-xl text-white" />
                            </button>

                            {/* Logo */}
                            <a
                                href="#"
                                className="text-white font-semibold font-poppins tracking-wider text-2xl uppercase sm:text-3xl mx-auto md:mx-0"
                            >
                                Cyzy
                            </a>

                            {/* Menu (Desktop) */}
                            <ul className="hidden md:flex items-center gap-4">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block py-4 px-4 font-arial text-white hover:bg-gray-400 text-base md:text-sm lg:text-base"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                {/* Dropdown */}
                                <li className="relative cursor-pointer group">
                                    <a
                                        href="#"
                                        className="flex items-center gap-1 font-[13px] font-arial text-white py-4 px-4 hover:bg-gray-400"
                                    >
                                        Phụ kiện
                                        <FaCaretDown className="transition-transform duration-300 group-hover:rotate-180" />
                                    </a>
                                    <div className="absolute hidden group-hover:block w-[200px] rounded-md bg-white shadow-md z-50">
                                        <ul className="space-y-2 px-2 py-2">
                                            {DropdownLinks.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        href={item.link}
                                                        className="block p-2 rounded-md text-gray-500 hover:bg-gray-100 font-semibold"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Search + Cart + User */}
                        <div className="flex items-center gap-4">
                            <IoMdSearch
                                className="text-xl text-white cursor-pointer hover:text-slate-300"
                                onClick={() => setShowSearch(true)}
                            />
                            <button className="relative py-3">
                                <FiShoppingCart className="text-xl text-white hover:text-slate-300" />
                                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 left-[9px] flex items-center justify-center text-xs">
                                    4
                                </div>
                            </button>

                            {/* Auth login  */}
                            <div className="relative group cursor-pointer py-5">
                                <IoPersonOutline className="text-xl text-white hover:text-slate-300" />

                                <div className="absolute right-0 mt-3 w-[200px] rounded-md bg-white shadow-md z-50 hidden group-hover:block">
                                    <ul className="py-2 text-sm text-gray-700">
                                        {!isLoggedIn ? (
                                            <>
                                                <li>
                                                    <a href="/register" className="block px-4 py-2 hover:bg-gray-100 text-blue-600 font-semibold">
                                                        Tạo tài khoản ngay
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                                                        Đăng nhập
                                                    </a>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li>
                                                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</a>
                                                </li>
                                                <li>
                                                    <a href="/logout" className="block px-4 py-2 hover:bg-gray-100 text-red-500">Logout</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay mờ */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sidebar từ trái sang */}
            <div
                ref={menuRef}
                className={`fixed top-0 left-0 h-full w-64 bg-[#222] z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-white/10">
                    <span className="text-white font-semibold text-xl">Cyzy</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white text-2xl hover:text-red-400"
                    >
                        &times;
                    </button>
                </div>

                <ul className="flex flex-col gap-2 p-4">
                    {MenuLinks.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.link}
                                className="block text-white py-2 font-medium border-b border-white/10"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                            className="w-full flex items-center justify-between text-white font-semibold py-2 border-b border-white/10"
                        >
                            <span>Phụ kiện</span>
                            <FaCaretDown
                                className={`transition-transform duration-300 ${isQuickLinksOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <ul
                            className={`pl-4 overflow-hidden transition-all duration-300 ${isQuickLinksOpen ? 'max-h-[500px] mt-2' : 'max-h-0'
                                }`}
                        >
                            {DropdownLinks.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link} className="block text-white/80 py-1 text-sm">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Search Overlay */}
            {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
        </>
    );
};

export default Navbar;
