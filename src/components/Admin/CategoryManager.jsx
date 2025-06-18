import React, { useState } from 'react';

const CategoryManager = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    parent_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Sau này chỉ cần thêm axios.post(...) vào đây
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📂 Thêm danh mục mới</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tên danh mục</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="VD: Laptop, Điện thoại"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Slug (URL)</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="input"
            placeholder="vd: laptop, dien-thoai"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Danh mục cha (ID)</label>
          <input
            type="number"
            name="parent_id"
            value={formData.parent_id}
            onChange={handleChange}
            className="input"
            placeholder="0 nếu là danh mục gốc"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
          >
            💾 Lưu danh mục
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryManager;
