import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const statusOptions = ['Đang xử lý', 'Đã giao', 'Đã hủy'];

const mockOrder = {
    id: 1001,
    user_id: 1,
    total_amount: 15600000,
    status: 'Đang xử lý',
    created_at: '2024-06-17',
    items: [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/305659/iphone-15-pro-max-xanh-1.jpg',
            quantity: 1,
            unit_price: 35000000,
        },
        {
            id: 2,
            name: 'Apple Watch Series 9',
            thumbnail: 'https://cdn.tgdd.vn/Products/Images/7077/305755/applewatch9.jpg',
            quantity: 2,
            unit_price: 12000000,
        }
    ]
};

const OrderDetail = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState('');
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        setOrder(mockOrder);
        setStatus(mockOrder.status);
    }, [id]);

    const handleUpdateStatus = () => {
        setUpdating(true);
        setTimeout(() => {
            setOrder(prev => ({ ...prev, status }));
            setUpdating(false);
            alert('✅ Trạng thái đã cập nhật!');
        }, 1000);
    };

    if (!order) return <div className="p-6">Đang tải đơn hàng...</div>;

    return (
        <div className="p-4 sm:p-6 font-sans">
            <div className="mb-4">
                <Link to="/admin/orders" className="text-blue-600 hover:underline text-sm">← Quay lại danh sách</Link>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                🧾 Chi tiết đơn hàng #{order.id}
            </h2>

            {/* Thông tin chung */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6 space-y-4 text-sm sm:text-base">
                <p><strong>Khách hàng (ID):</strong> {order.user_id}</p>
                <p><strong>Ngày đặt:</strong> {order.created_at}</p>

                {/* Dropdown trạng thái */}
                <div>
                    <label className="block font-medium mb-1">Trạng thái đơn hàng:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border px-4 py-2 rounded w-full max-w-sm"
                    >
                        {statusOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleUpdateStatus}
                    disabled={updating}
                    className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow text-sm"
                >
                    {updating ? 'Đang cập nhật...' : '💾 Cập nhật trạng thái'}
                </button>

                <p className="pt-4"><strong>Tổng tiền:</strong> {order.total_amount.toLocaleString()}₫</p>
            </div>

            {/* Danh sách sản phẩm */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">📦 Sản phẩm trong đơn</h3>

                {/* Bảng desktop */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full table-auto text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 text-left">Ảnh</th>
                                <th className="p-3 text-left">Tên</th>
                                <th className="p-3 text-left">SL</th>
                                <th className="p-3 text-left">Đơn giá</th>
                                <th className="p-3 text-left">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item) => (
                                <tr key={item.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3">
                                        <img src={item.thumbnail} alt={item.name} className="w-14 h-14 object-cover rounded" />
                                    </td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.quantity}</td>
                                    <td className="p-3">{item.unit_price.toLocaleString()}₫</td>
                                    <td className="p-3 text-red-500">
                                        {(item.unit_price * item.quantity).toLocaleString()}₫
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile view */}
                <div className="md:hidden space-y-4">
                    {order.items.map((item) => (
                        <div key={item.id} className="flex items-start space-x-4 border-t pt-4">
                            <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1 space-y-1 text-sm">
                                <p className="font-medium">{item.name}</p>
                                <p>SL: {item.quantity}</p>
                                <p>Giá: {item.unit_price.toLocaleString()}₫</p>
                                <p className="text-red-500">
                                    Tổng: {(item.unit_price * item.quantity).toLocaleString()}₫
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
