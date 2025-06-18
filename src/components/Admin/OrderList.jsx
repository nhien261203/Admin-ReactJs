import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Dữ liệu mock
const orders = Array.from({ length: 25 }, (_, i) => ({
    id: 1000 + i,
    user_id: 1 + (i % 5),
    total_amount: Math.floor(3000000 + Math.random() * 10000000),
    status: i % 3 === 0 ? 'Đã giao' : i % 3 === 1 ? 'Đang xử lý' : 'Đã hủy',
    created_at: `2024-06-${(i % 28 + 1).toString().padStart(2, '0')}`,
}));

const OrderList = () => {
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;

    const filteredOrders = orders.filter(
        (order) =>
            order.id.toString().includes(keyword) ||
            order.user_id.toString().includes(keyword)
    );

    const totalPages = Math.ceil(filteredOrders.length / perPage);

    const paginated = filteredOrders.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    useEffect(() => {
        setCurrentPage(1); // Reset page khi tìm kiếm
    }, [keyword]);

    return (
        <div className="p-6 font-sans">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Danh sách đơn hàng</h2>

            {/* Tìm kiếm */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="🔍 Tìm kiếm theo Mã đơn hoặc ID khách..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full max-w-md focus:outline-none focus:ring focus:border-blue-400"
                />
            </div>

            {/* Bảng đơn hàng */}
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="min-w-full table-auto text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Mã đơn</th>
                            <th className="p-3 text-left">Khách hàng (ID)</th>
                            <th className="p-3 text-left">Tổng tiền</th>
                            <th className="p-3 text-left">Trạng thái</th>
                            <th className="p-3 text-left">Ngày tạo</th>
                            <th className="p-3 text-left">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.length > 0 ? (
                            paginated.map((order) => (
                                <tr key={order.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-medium">#{order.id}</td>
                                    <td className="p-3">{order.user_id}</td>
                                    <td className="p-3 text-red-500">{order.total_amount.toLocaleString()}₫</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 text-xs rounded-full font-semibold 
                                                ${order.status === 'Đã giao'
                                                ? 'bg-green-100 text-green-700'
                                                : order.status === 'Đang xử lý'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-red-100 text-red-600'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-3">{order.created_at}</td>
                                    <td className="p-3">
                                        <Link
                                            to={`/admin/orders/${order.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">
                                    Không tìm thấy đơn hàng
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Phân trang */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600">
                    Trang {currentPage} / {totalPages}
                </span>
                <div className="space-x-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                        ◀️ Trước
                    </button>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                        Tiếp ▶️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
