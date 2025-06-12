// components/PromotionTabs.jsx
import React from 'react';

const PromotionTabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="flex gap-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-4 py-1 rounded-full text-sm font-medium border ${activeTab === tab
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-600 border-gray-300'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default PromotionTabs;