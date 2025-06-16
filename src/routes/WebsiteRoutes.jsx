// routes/WebsiteRoutes.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import WebsiteLayout from '../components/websitelayout';


const WebsiteRoutes = () => (
    <Route path="/" element={<WebsiteLayout />} />
);

export default WebsiteRoutes;