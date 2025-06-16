import React from 'react';
import {
    FaStore,
    FaThList,
    FaTags,
    FaImage,
    FaTruckLoading,
    FaClipboardList,
    FaBoxes,
    FaChartLine,
    FaUsers,
    FaUserShield,
    FaCog
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed, isMobile }) => {
    const isHidden = isMobile && collapsed;
    const sidebarWidth = collapsed && !isMobile ? 'w-20' : 'w-64';

    return (
        <div
            className={`sidebar bg-[#070707] text-white h-screen fixed top-16 left-0 z-40 transform transition-all duration-700 ease-in-out
                ${isHidden ? '-translate-x-full' : 'translate-x-0'}
                ${sidebarWidth} md:translate-x-0 md:static overflow-y-auto scrollbar-hide`}
        >
            {/* <div className={`p-4 flex items-center space-x-2 border-b border-gray-800 h-16 transition-all duration-700 ease-in-out ${collapsed ? 'justify-center' : ''}`}>
                <FaStore className="text-primary text-2xl transition-transform duration-700 ease-in-out" />
                <span
                    className={`logo-text text-xl font-bold transition-opacity duration-700 ease-in-out ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 ml-2 w-auto'}`}
                >
                    Nexus<span className="text-primary">Admin</span>
                </span>
            </div> */}

            <div className="p-4 pt-5 md:pt-20">
                <FadeInWhenVisible show={!collapsed}>
                    <div className="text-gray-400 uppercase text-xs font-bold mb-4">BẢNG ĐIỀU KHIỂN</div>
                </FadeInWhenVisible>

                <nav className="space-y-1">
                    <SidebarLink to="/admin" icon={<FaChartLine />} label="Tổng quan" collapsed={collapsed} />

                    <FadeInWhenVisible show={!collapsed}>
                        <SectionTitle title="QUẢN LÝ HỆ THỐNG" />
                    </FadeInWhenVisible>

                    <SidebarLink to="/admin/products" icon={<FaThList />} label="Sản phẩm" collapsed={collapsed} />
                    <SidebarLink to="/admin/categories" icon={<FaBoxes />} label="Danh mục" collapsed={collapsed} />
                    <SidebarLink to="/admin/brands" icon={<FaTags />} label="Thương hiệu" collapsed={collapsed} />
                    <SidebarLink to="/admin/product-images" icon={<FaImage />} label="Hình ảnh" collapsed={collapsed} />
                    <SidebarLink to="/admin/sliders" icon={<FaImage />} label="Slider" collapsed={collapsed} />
                    <SidebarLink to="/admin/suppliers" icon={<FaTruckLoading />} label="Nhà cung cấp" collapsed={collapsed} />

                    <FadeInWhenVisible show={!collapsed}>
                        <SectionTitle title="QUẢN LÝ ĐƠN HÀNG" />
                    </FadeInWhenVisible>

                    <SidebarLink to="/admin/orders" icon={<FaClipboardList />} label="Đơn hàng" collapsed={collapsed} />
                    <SidebarLink to="/admin/imports" icon={<FaTruckLoading />} label="Nhập hàng" collapsed={collapsed} />

                    <FadeInWhenVisible show={!collapsed}>
                        <SectionTitle title="NGƯỜI DÙNG" />
                    </FadeInWhenVisible>

                    <SidebarLink to="/admin/users" icon={<FaUsers />} label="Khách hàng" collapsed={collapsed} />
                    <SidebarLink to="/admin/admins" icon={<FaUserShield />} label="Quản trị viên" collapsed={collapsed} />

                    <FadeInWhenVisible show={!collapsed}>
                        <SectionTitle title="KHÁC" />
                    </FadeInWhenVisible>

                    <SidebarLink to="/admin/settings" icon={<FaCog />} label="Cài đặt" collapsed={collapsed} />
                </nav>
            </div>
        </div>
    );
};

const SidebarLink = ({ to, icon, label, collapsed }) => (
    <Link
        to={to}
        className="flex items-center space-x-3 py-3 px-4 text-gray-300 hover:bg-gray-800 rounded-lg transition-all duration-700 ease-in-out"
    >
        <div className="w-5 text-center">{icon}</div>
        <span
            className={`transition-all duration-700 ease-in-out origin-left ${collapsed ? 'opacity-0 scale-95 w-0 overflow-hidden' : 'opacity-100 scale-100 ml-2'}`}
        >
            {label}
        </span>
    </Link>
);

const SectionTitle = ({ title }) => (
    <div className="text-gray-400 uppercase text-xs font-bold mt-6 mb-4 transition-opacity duration-700 ease-in-out">
        {title}
    </div>
);

const FadeInWhenVisible = ({ show, children }) => (
    <div
        className={`transition-all duration-700 ease-in-out transform ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 h-0 overflow-hidden'}`}
    >
        {children}
    </div>
);

export default Sidebar;
