import React from 'react';
import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaBoxOpen,
  FaChartPie,
  FaStar
} from 'react-icons/fa';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import mockData from './mock/MockDashBoard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white rounded shadow p-4 flex items-center space-x-4">
    <div className="text-3xl text-primary">{icon}</div>
    <div>
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="text-lg font-bold text-gray-800">{value}</div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Tổng quan hệ thống</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<FaDollarSign />} label="Tổng doanh thu" value={mockData.totalRevenue} />
        <StatCard icon={<FaShoppingCart />} label="Đơn hàng đang xử lý" value={mockData.processingOrders} />
        <StatCard icon={<FaUsers />} label="Khách hàng mới" value={mockData.newUsers} />
        <StatCard icon={<FaChartLine />} label="Tăng trưởng hàng tháng" value={mockData.monthlyGrowth} />
        <StatCard icon={<FaBoxOpen />} label="Sản phẩm đã bán" value={mockData.productsSold} />
        <StatCard icon={<FaStar />} label="Đánh giá trung bình" value={mockData.averageRating} />
      </div>

      {/* Biểu đồ doanh thu theo ngày */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Doanh thu theo ngày</h2>
        <Line data={mockData.revenueLineData} options={{ responsive: true }} />
      </div>

      {/* Biểu đồ đơn hàng theo tuần */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Số lượng đơn hàng theo tuần</h2>
        <Bar data={mockData.ordersBarData} options={{ responsive: true }} />
      </div>

      {/* Biểu đồ phân phối loại sản phẩm */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Tỷ lệ sản phẩm bán theo loại</h2>
        <Doughnut data={mockData.productTypeDoughnut} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Dashboard;
