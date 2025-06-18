// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WebsiteRoutes from './routes/WebsiteRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <Router>
      {/* Gọi hai nhóm route riêng biệt như component */}
      <WebsiteRoutes />
      <AdminRoutes />
    </Router>
  );
}

export default App;
