// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteLayout from './components/websitelayout';
import AdminLayout from './components/Admin/adminlayout';
import Dashboard from './components/Admin/Dashboard';
import ProductManager from './components/Admin/ProductManager';

function App() {
  return (
    <Router>
      <Routes>
        {/* Website layout */}
        <Route path="/" element={<WebsiteLayout />} />

        {/* Admin layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManager />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
