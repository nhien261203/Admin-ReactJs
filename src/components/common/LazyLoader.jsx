// src/components/common/LazyLoader.jsx
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LazyLoader = ({ text = 'Đang tải...', overlay = true }) => {
    const loader = (
        <div className="flex items-center space-x-2">
            <FaSpinner className="animate-spin text-blue-600" size={28} />
            <span className="text-sm text-gray-700">{text}</span>
        </div>
    );

    if (overlay) {
        return (
            <div className="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center">
                {loader}
            </div>
        );
    }

    return loader;
};

export default LazyLoader;
