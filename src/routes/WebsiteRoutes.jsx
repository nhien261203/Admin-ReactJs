// src/routes/WebsiteRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../components/WebsiteLayout';
import LoginPage from '../components/LoginPage';

const WebsiteRoutes = () => {
    return (
        <Routes>
            {/* 👉 Login là route riêng không dùng WebsiteLayout */}
            <Route path="/login" element={<LoginPage />} />

            {/* 👉 Tất cả các route còn lại dùng layout chính */}
            <Route path="/*" element={<WebsiteLayout />} />
        </Routes>
    );
};

export default WebsiteRoutes;
