// src/components/Admin/ProductForm.jsx
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaImages } from 'react-icons/fa';

const SlideManager = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    position: '',
    is_active: true,
    image_desktop: null,
    image_mobile: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFileChange = (e, type) => {
    setFormData({ ...formData, [type]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sliderData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      sliderData.append(key, value);
    });
    // send sliderData to API
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🎞️ Thêm Slider mới</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tiêu đề *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="input" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mô tả</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="input resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Đường dẫn (link)</label>
          <input type="text" name="link" value={formData.link} onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Vị trí</label>
          <input type="number" name="position" value={formData.position} onChange={handleChange} className="input" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Trạng thái</label>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="accent-primary"
            />
            Hiển thị slider
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ảnh desktop *</label>
          <label className="border-2 border-dashed border-red-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 block">
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'image_desktop')} className="hidden" required />
            <div className="flex flex-col items-center justify-center text-red-500">
              <FaCloudUploadAlt className="text-3xl" />
              <span className="mt-2">Kéo thả hoặc click để chọn (JPG, PNG - Tối đa 5MB)</span>
            </div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ảnh mobile (tuỳ chọn)</label>
          <label className="border-2 border-dashed border-red-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 block">
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'image_mobile')} className="hidden" />
            <div className="flex flex-col items-center justify-center text-red-500">
              <FaImages className="text-3xl" />
              <span className="mt-2">Kéo thả hoặc click để chọn (tuỳ chọn)</span>
            </div>
          </label>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            💾 Lưu slider
          </button>
        </div>
      </form>
    </div>
  );
};

export default SlideManager;

// Tailwind class "input" có thể định nghĩa trong CSS:
// .input { @apply w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500; }
