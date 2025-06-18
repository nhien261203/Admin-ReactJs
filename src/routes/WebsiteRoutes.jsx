// src/routes/WebsiteRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../components/WebsiteLayout';

// 👉 Bạn có thể thêm các trang khác tại đây

const WebsiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                
                {/* Thêm các route khác ở đây */}
            </Route>
        </Routes>
    );
};

export default WebsiteRoutes;
