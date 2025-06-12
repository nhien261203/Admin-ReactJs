// components/PromotionSection.jsx
import React, { useState } from 'react';
import PromotionTabs from './PromotionTabs';
import CountdownTimer from './CountdownTimer';
import PromotionProductCard from './PromotionProductCard';

const mockCategories = ['Flash Sale', 'Điện Thoại', 'Laptop'];

const mockProducts = [
    // Flash Sale
    {
        id: 1,
        name: 'Camera giám sát thông minh',
        image: 'https://cdn.tgdd.vn/Products/Images/44/310839/asus-vivobook-15-oled-a1505va-i5-l1341w-3-750x500.jpg',
        price: '890.000',
        originalPrice: '1.390.000',
        discountPercent: 36,
        statusText: 'Vừa mở bán',
        statusColor: 'bg-yellow-100 text-yellow-700',
        category: 'Flash Sale'
    },
    {
        id: 2,
        name: 'Đèn LED cảm biến thông minh',
        image: 'https://via.placeholder.com/150',
        price: '250.000',
        originalPrice: '400.000',
        discountPercent: 38,
        statusText: 'Hàng mới về',
        category: 'Flash Sale'
    },
    {
        id: 3,
        name: 'Ổ cắm điện đa năng WiFi',
        image: 'https://via.placeholder.com/150',
        price: '199.000',
        originalPrice: '299.000',
        discountPercent: 34,
        category: 'Flash Sale'
    },

    // Điện Thoại
    {
        id: 4,
        name: 'Tai nghe Bluetooth Pro',
        image: 'https://via.placeholder.com/150',
        price: '1.290.000',
        originalPrice: '1.990.000',
        discountPercent: 35,
        statusText: 'Giảm sốc cuối tuần',
        category: 'Điện Thoại'
    },
    {
        id: 5,
        name: 'Sạc nhanh 65W đa cổng',
        image: 'https://via.placeholder.com/150',
        price: '590.000',
        originalPrice: '890.000',
        discountPercent: 34,
        category: 'Điện Thoại'
    },
    {
        id: 6,
        name: 'Ốp lưng iPhone chống sốc',
        image: 'https://via.placeholder.com/150',
        price: '99.000',
        originalPrice: '150.000',
        discountPercent: 34,
        category: 'Điện Thoại'
    },
    {
        id: 10,
        name: 'Miếng dán cường lực iPhone',
        image: 'https://via.placeholder.com/150',
        price: '50.000',
        originalPrice: '100.000',
        discountPercent: 50,
        category: 'Điện Thoại'
    },

    // Laptop
    {
        id: 7,
        name: 'Laptop Gaming RTX',
        image: 'https://via.placeholder.com/150',
        price: '15.990.000',
        originalPrice: '18.990.000',
        discountPercent: 16,
        statusText: 'Giảm mạnh hôm nay',
        category: 'Laptop'
    },
    {
        id: 8,
        name: 'Balo laptop chống nước',
        image: 'https://via.placeholder.com/150',
        price: '490.000',
        originalPrice: '750.000',
        discountPercent: 35,
        category: 'Laptop'
    },
    {
        id: 9,
        name: 'Bàn kê laptop thông minh',
        image: 'https://via.placeholder.com/150',
        price: '320.000',
        originalPrice: '490.000',
        discountPercent: 30,
        category: 'Laptop'
    },
    {
        id: 11,
        name: 'Chuột không dây văn phòng',
        image: 'https://via.placeholder.com/150',
        price: '290.000',
        originalPrice: '450.000',
        discountPercent: 36,
        category: 'Laptop'
    }
];

const PromotionSection = () => {
    const [activeTab, setActiveTab] = useState(mockCategories[0]);

    const filteredProducts = mockProducts.filter((item) => item.category === activeTab);

    return (
        <div className="container">
            <section className="bg-white my-8 p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Khuyến mãi Online</h2>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <PromotionTabs tabs={mockCategories} activeTab={activeTab} onTabChange={setActiveTab} />
                    <CountdownTimer endTime="2025-06-13T18:00:00" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {filteredProducts.map((product) => (
                        <PromotionProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PromotionSection;