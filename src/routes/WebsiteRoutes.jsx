// src/routes/WebsiteRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../components/WebsiteLayout';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../RegisterPage';

const WebsiteRoutes = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Chỉ áp dụng WebsiteLayout cho các path bắt đầu từ '/' ngoại trừ '/admin' */}
        <Route path="/" element={<WebsiteLayout />}>
            {/* Các route con như Home, About,... đặt ở đây nếu có */}
        </Route>
    </Routes>
);

export default WebsiteRoutes;
