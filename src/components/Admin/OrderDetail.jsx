import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const statusOptions = ['Đang xử lý', 'Đã giao', 'Đã hủy'];

const mockOrder = {
    id: 1001,
    user_id: 1,
    total_amount: 15600000,
    status: 'Đang xử lý',
    created_at: '2024-06-17',
    items: [ /* ... */]
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
        // 🛠️ Giả lập API
        setTimeout(() => {
            setOrder(prev => ({ ...prev, status }));
            setUpdating(false);
            alert('Cập nhật trạng thái thành công!');
        }, 1000);

        // ✅ Sau này dùng:
        // axios.put(`/api/orders/${id}`, { status }).then(res => ...)
    };

    if (!order) return <div className="p-6">Đang tải đơn hàng...</div>;

    return (
        <div className="p-6 font-sans">
            <div className="mb-6">
                <Link to="/admin/orders" className="text-blue-600 hover:underline">← Quay lại danh sách</Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">🧾 Chi tiết đơn hàng #{order.id}</h2>

            {/* THÔNG TIN CHUNG */}
            <div className="bg-white p-6 rounded-lg shadow mb-6 space-y-4">
                <p><strong>Khách hàng (ID):</strong> {order.user_id}</p>
                <p><strong>Ngày đặt:</strong> {order.created_at}</p>

                {/* TRẠNG THÁI + DROPDOWN */}
                <div>
                    <label className="block font-medium mb-1">Trạng thái đơn hàng:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border px-4 py-2 rounded w-full md:w-1/2"
                    >
                        {statusOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                {/* NÚT CẬP NHẬT */}
                <button
                    onClick={handleUpdateStatus}
                    disabled={updating}
                    className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
                >
                    {updating ? 'Đang cập nhật...' : '💾 Cập nhật trạng thái'}
                </button>

                {/* Tổng tiền */}
                <p className="mt-4"><strong>Tổng tiền:</strong> {order.total_amount.toLocaleString()}₫</p>
            </div>

            {/* DANH SÁCH SẢN PHẨM */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">📦 Sản phẩm trong đơn</h3>
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
                                <td className="p-3"><img src={item.thumbnail} alt={item.name} className="w-14 h-14 object-cover rounded" /></td>
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.quantity}</td>
                                <td className="p-3">{item.unit_price.toLocaleString()}₫</td>
                                <td className="p-3 text-red-500">
                                    {(item.quantity * item.unit_price).toLocaleString()}₫
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
