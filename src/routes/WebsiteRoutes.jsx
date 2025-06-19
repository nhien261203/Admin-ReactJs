// src/routes/WebsiteRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../components/WebsiteLayout';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../RegisterPage';

const WebsiteRoutes = () => (

    <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<WebsiteLayout />} />
    </>

);

export default WebsiteRoutes;
