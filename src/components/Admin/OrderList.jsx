import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        setCurrentPage(1);
    }, [keyword]);

    return (
        <div className="p-4 sm:p-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                📋 Danh sách đơn hàng
            </h2>

            {/* Tìm kiếm */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="🔍 Tìm theo Mã đơn hoặc ID khách..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                />
            </div>

            {/* Bảng hoặc danh sách đơn hàng */}
            <div className="bg-white rounded shadow overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full table-auto text-sm">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-3">Mã đơn</th>
                                <th className="p-3">Khách hàng (ID)</th>
                                <th className="p-3">Tổng tiền</th>
                                <th className="p-3">Trạng thái</th>
                                <th className="p-3">Ngày tạo</th>
                                <th className="p-3">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((order) => (
                                <tr key={order.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-medium">#{order.id}</td>
                                    <td className="p-3">{order.user_id}</td>
                                    <td className="p-3 text-red-500">{order.total_amount.toLocaleString()}₫</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${order.status === 'Đã giao'
                                                ? 'bg-green-100 text-green-700'
                                                : order.status === 'Đang xử lý'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-red-100 text-red-600'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-3">{order.created_at}</td>
                                    <td className="p-3">
                                        <Link
                                            to={`/admin/orders/${order.id}`}
                                            className="text-blue-600 hover:underline text-sm"
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {paginated.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-gray-500">
                                        Không tìm thấy đơn hàng
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile List */}
                <div className="md:hidden divide-y">
                    {paginated.length === 0 && (
                        <div className="p-4 text-center text-gray-500">Không tìm thấy đơn hàng</div>
                    )}
                    {paginated.map((order) => (
                        <div key={order.id} className="p-4">
                            <div className="flex justify-between font-medium">
                                <span>#{order.id}</span>
                                <span className="text-red-500">{order.total_amount.toLocaleString()}₫</span>
                            </div>
                            <div className="text-sm text-gray-500">Khách: {order.user_id}</div>
                            <div className="text-sm text-gray-500">Ngày: {order.created_at}</div>
                            <div className="text-sm">
                                <span className={`px-2 py-1 text-xs rounded-full font-semibold inline-block mt-1 ${order.status === 'Đã giao'
                                        ? 'bg-green-100 text-green-700'
                                        : order.status === 'Đang xử lý'
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-600'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                            <div className="mt-2">
                                <Link
                                    to={`/admin/orders/${order.id}`}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    Xem chi tiết →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
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
