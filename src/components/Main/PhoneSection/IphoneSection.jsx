// components/IphoneShowcase.jsx
import React, { useEffect, useState } from 'react';
import IphoneCardList from './IphoneCardList';
import mockIphoneProducts from './MockIphoneProducts';
// import axios from 'axios'; // Nếu dùng API Laravel

const IphoneSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Với API Laravel:
        // axios.get('/api/iphones').then(res => setProducts(res.data));
        setProducts(mockIphoneProducts); // Dùng mock tạm thời
    }, []);

    return (
        <div className="container">
            <section className="bg-white my-8 p-4 rounded-lg shadow">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Thế giới iPhone trong tầm tay
                    </h2>
                    <IphoneCardList products={products} />
                </div>
            </section>
        </div>

    );
};

export default IphoneSection;
