import React, { useState } from 'react';
import { FaImages } from 'react-icons/fa';

const AddBrand = () => {
    const [form, setForm] = useState({
        name: '',
        country: '',
        logo: null,
    });

    const [logoPreview, setLogoPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'logo') {
            const file = files[0];
            if (file && file.size <= 2 * 1024 * 1024) {
                setForm((prev) => ({ ...prev, logo: file }));
                setLogoPreview(URL.createObjectURL(file));
            } else {
                alert('Ảnh logo phải nhỏ hơn hoặc bằng 2MB');
            }
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('📦 Dữ liệu chuẩn bị gửi:', form);
        alert('Form đã được tạo, sẵn sàng tích hợp API!');
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-700">➕ Thêm thương hiệu</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Tên thương hiệu */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên thương hiệu *</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Ví dụ: Samsung, Apple..."
                    />
                </div>

                {/* Quốc gia */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quốc gia *</label>
                    <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Ví dụ: Hàn Quốc, Mỹ..."
                    />
                </div>

                {/* Logo (giao diện upload đẹp) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Logo (tùy chọn, ≤ 2MB)</label>
                    <label className="border-2 border-dashed border-blue-400 rounded-lg p-4 text-center cursor-pointer bg-blue-50 block">
                        <input
                            type="file"
                            name="logo"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />
                        <div className="flex flex-col items-center justify-center text-blue-500">
                            <FaImages className="text-3xl" />
                            <span className="mt-2 text-sm">Tải lên 1 ảnh logo</span>
                        </div>
                    </label>

                    {logoPreview && (
                        <div className="mt-2">
                            <img
                                src={logoPreview}
                                alt="Logo preview"
                                className="w-24 h-24 object-contain border rounded"
                            />
                        </div>
                    )}
                </div>

                {/* Nút submit */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Lưu thương hiệu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBrand;
