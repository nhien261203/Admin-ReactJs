// src/routes/AdminRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../components/Admin/AdminLayout';
import Dashboard from '../components/Admin/Dashboard';
import ProductManager from '../components/Admin/ProductManager';
import SlideManager from '../components/Admin/SlideManager';
import CategoryManager from '../components/Admin/CategoryManager';
import ProductList from '../components/Admin/ProductList';
import OrderDetail from '../components/Admin/OrderDetail';
import OrderList from '../components/Admin/OrderList';
import AddUser from '../components/Admin/AddUser';
import UserList from '../components/Admin/UserList';
import UserDetail from '../components/Admin/UserDetail';
import AddBrand from '../components/Admin/AddBrand';

const AdminRoutes = () => (
  <>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<ProductManager />} />
      <Route path="productList" element={<ProductList />} />
      <Route path="slides" element={<SlideManager />} />
      <Route path="categories" element={<CategoryManager />} />
      <Route path="orders" element={<OrderList />} />
      <Route path="orders/:id" element={<OrderDetail />} />


      <Route path="admins" element={<AddUser />} />
      <Route path="users" element={<UserList />} />
      <Route path="users/:id" element={<UserDetail />} />

      <Route path="brands" element={<AddBrand />} />

    </Route>
  </>


);

export default AdminRoutes;
