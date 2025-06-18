import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import WebsiteRoutes from './routes/WebsiteRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {WebsiteRoutes()}
        {AdminRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
