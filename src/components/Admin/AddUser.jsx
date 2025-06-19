import React, { useState } from 'react';
import { FaPlus, FaCloudUploadAlt } from 'react-icons/fa';

const initialForm = {
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: 'male',
    role_id: '',
    avatar: null,
};

const AddUser = () => {
    const [form, setForm] = useState(initialForm);
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin', slug: 'admin' },
        { id: 2, name: 'User', slug: 'user' },
        { id: 2, name: 'Staff', slug: 'staff' },
    ]);
    const [avatarPreview, setAvatarPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm(prev => ({ ...prev, avatar: file }));
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('🧾 Dữ liệu gửi:', form);

        // const formData = new FormData();
        // Object.entries(form).forEach(([key, value]) => {
        //     formData.append(key, value);
        // });
        // axios.post('/api/users', formData);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow max-w-3xl mx-auto font-sans">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaPlus /> Thêm người dùng
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Họ và tên</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                        className="w-full border px-4 py-2 rounded" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                            className="w-full border px-4 py-2 rounded" required />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Số điện thoại</label>
                        <input type="text" name="phone" value={form.phone} onChange={handleChange}
                            className="w-full border px-4 py-2 rounded" />
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Địa chỉ</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}
                        className="w-full border px-4 py-2 rounded" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Giới tính</label>
                        <select name="gender" value={form.gender} onChange={handleChange}
                            className="w-full border px-4 py-2 rounded">
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Vai trò (Role)</label>
                        <select name="role_id" value={form.role_id} onChange={handleChange}
                            className="w-full border px-4 py-2 rounded" required>
                            <option value="">-- Chọn vai trò --</option>
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* 👉 Thay bằng upload file ảnh */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ảnh đại diện (bắt buộc)</label>
                    <label className="border-2 border-dashed border-red-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 block">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                            required
                        />
                        <div className="flex flex-col items-center justify-center text-red-500">
                            <FaCloudUploadAlt className="text-3xl" />
                            <span className="mt-2">Kéo thả ảnh hoặc click để chọn (Tối đa 5MB)</span>
                            {avatarPreview && (
                                <img
                                    src={avatarPreview}
                                    alt="Xem trước avatar"
                                    className="mt-4 w-20 h-20 object-cover rounded-full border"
                                />
                            )}
                        </div>
                    </label>
                </div>

                <button type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
                    Thêm người dùng
                </button>
            </form>
        </div>
    );
};

export default AddUser;
