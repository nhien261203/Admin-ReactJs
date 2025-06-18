import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WebsiteRoutes from './routes/WebsiteRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <Router>
      <WebsiteRoutes />
      <AdminRoutes />
    </Router>
  );
}

export default App;
