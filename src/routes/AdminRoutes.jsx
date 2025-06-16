// routes/AdminRoutes.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import AdminLayout from '../components/Admin/adminlayout';
import Dashboard from '../components/Admin/Dashboard';
import ProductManager from '../components/Admin/ProductManager';

const AdminRoutes = () => (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="products" element={<ProductManager />} />
  </Route>
);

export default AdminRoutes;
