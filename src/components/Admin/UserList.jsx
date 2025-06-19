import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const roles = ['Admin', 'Nhân viên', 'Khách hàng'];
const statuses = ['Hoạt động', 'Bị khóa'];

const users = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Người dùng ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `090${Math.floor(1000000 + Math.random() * 900000)}`,
    address: `Địa chỉ số ${i + 1}, Quận ${1 + (i % 5)}, TP.HCM`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    created_at: `2024-06-${(i % 28 + 1).toString().padStart(2, '0')}`,
}));

const UserList = () => {
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;

    const filteredUsers = users.filter(
        (user) =>
            user.id.toString().includes(keyword.toLowerCase()) ||
            user.name.toLowerCase().includes(keyword.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsers.length / perPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [keyword]);

    return (
        <div className="p-4 sm:p-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                👤 Danh sách người dùng
            </h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="🔍 Tìm theo ID hoặc tên người dùng..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                />
            </div>

            <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Tên</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">SĐT</th>
                            <th className="p-3">Vai trò</th>
                            <th className="p-3">Trạng thái</th>
                            <th className="p-3">Ngày tạo</th>
                            <th className="p-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map((user) => (
                            <tr key={user.id} className="border-t hover:bg-gray-50">
                                <td className="p-3 font-medium">#{user.id}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.phone}</td>
                                <td className="p-3">{user.role}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs rounded-full font-semibold 
                                        ${user.status === 'Hoạt động' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-3">{user.created_at}</td>
                                <td className="p-3">
                                    <Link
                                        to={`/admin/users/${user.id}`}
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        Xem chi tiết
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {paginatedUsers.length === 0 && (
                            <tr>
                                <td colSpan="8" className="p-4 text-center text-gray-500">
                                    Không tìm thấy người dùng
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden divide-y bg-white rounded shadow mt-4">
                {paginatedUsers.length === 0 && (
                    <div className="p-4 text-center text-gray-500">Không tìm thấy người dùng</div>
                )}
                {paginatedUsers.map((user) => (
                    <div key={user.id} className="p-4">
                        <div className="flex justify-between font-medium">
                            <span>#{user.id}</span>
                            <span className="text-blue-700">{user.name}</span>
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-sm text-gray-500">📞 {user.phone}</div>
                        <div className="text-sm text-gray-500">🔑 {user.role}</div>
                        <div className="text-sm mt-1">
                            <td className="p-3">
                                <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full font-semibold 
                                    ${user.status === 'Hoạt động' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                    {user.status === 'Hoạt động' ? '🟢' : '🔴'} {user.status}
                                </span>
                            </td>

                        </div>
                        <div className="text-sm text-gray-500">📅 {user.created_at}</div>
                        <div className="mt-2">
                            <Link
                                to={`/admin/users/${user.id}`}
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Xem chi tiết →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

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

export default UserList;
