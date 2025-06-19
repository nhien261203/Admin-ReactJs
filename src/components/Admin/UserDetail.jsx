import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const roles = ['Admin', 'Nhân viên', 'Khách hàng'];
const statuses = ['Hoạt động', 'Bị khóa'];

const mockUsers = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Người dùng ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `090${Math.floor(1000000 + Math.random() * 900000)}`,
    address: `Địa chỉ số ${i + 1}, Quận ${1 + (i % 5)}, TP.HCM`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
    created_at: `2024-06-${(i % 28 + 1).toString().padStart(2, '0')}`,
}));

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const foundUser = mockUsers.find((u) => u.id === parseInt(id));
        if (foundUser) {
            setUser(foundUser);
            setFormData({ ...foundUser }); // Clone để edit
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const saveChanges = () => {
        // Giả lập API gọi PUT
        setUser(formData);
        alert("Cập nhật thành công!");
    };

    const toggleStatus = () => {
        setShowConfirm(false);
        const newStatus = user.status === 'Hoạt động' ? 'Bị khóa' : 'Hoạt động';
        setUser({ ...user, status: newStatus });
    };

    if (!user) return <div className="p-4 text-red-500">Không tìm thấy người dùng.</div>;

    return (
        <div className="p-4 sm:p-6 max-w-3xl mx-auto font-sans">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">👤 Chỉnh sửa người dùng</h2>

            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full object-cover border" />
                    <div className="space-y-3 w-full">
                        <input name="name" value={formData.name} onChange={handleChange}
                            className="w-full border px-3 py-2 rounded" placeholder="Họ tên" />
                        <input name="email" value={formData.email} onChange={handleChange}
                            className="w-full border px-3 py-2 rounded" placeholder="Email" />
                        <input name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full border px-3 py-2 rounded" placeholder="Số điện thoại" />
                        <input name="address" value={formData.address} onChange={handleChange}
                            className="w-full border px-3 py-2 rounded" placeholder="Địa chỉ" />

                        <select name="role" value={formData.role} onChange={handleChange}
                            className="w-full border px-3 py-2 rounded">
                            {roles.map(r => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-between mt-6 items-center">
                    <div>
                        <span className="font-semibold">Trạng thái:</span>
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full font-semibold
              ${user.status === 'Hoạt động' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                            {user.status}
                        </span>
                    </div>

                    <button
                        onClick={() => setShowConfirm(true)}
                        className={`px-4 py-2 text-white rounded 
              ${user.status === 'Hoạt động' ? 'bg-red-600' : 'bg-green-600'}`}>
                        {user.status === 'Hoạt động' ? 'Khóa tài khoản' : 'Mở khóa'}
                    </button>
                </div>

                <button onClick={saveChanges} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    💾 Lưu thay đổi
                </button>
            </div>

            <Link to="/admin/users" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
                ← Quay lại danh sách
            </Link>

            {/* Xác nhận popup */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center space-y-4 max-w-sm w-full">
                        <h3 className="text-lg font-semibold text-gray-700">
                            {user.status === 'Hoạt động' ? 'Bạn có chắc chắn muốn KHÓA tài khoản này?' : 'Bạn có muốn MỞ KHÓA tài khoản này?'}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button onClick={toggleStatus} className="px-4 py-2 bg-green-600 text-white rounded">Xác nhận</button>
                            <button onClick={() => setShowConfirm(false)} className="px-4 py-2 bg-gray-300 rounded">Hủy</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetail;
