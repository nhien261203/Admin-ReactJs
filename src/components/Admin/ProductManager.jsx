// src/components/Admin/ProductForm.jsx
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaImages } from 'react-icons/fa';

const ProductManager = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    original_price: '',
    quantity: '',
    category_id: '',
    brand_id: '',
    status: '1',
    thumbnail: null,
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  const handleImagesChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        value.forEach((img) => productData.append('images[]', img));
      } else {
        productData.append(key, value);
      }
    });
    // send productData to API
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Thêm sản phẩm mới</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Giá bán</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} className="input" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Giá gốc</label>
            <input type="number" name="original_price" value={formData.original_price} onChange={handleChange} className="input" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Số lượng</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="input" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Danh mục (ID)</label>
            <input type="text" name="category_id" value={formData.category_id} onChange={handleChange} className="input" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Thương hiệu (ID)</label>
            <input type="text" name="brand_id" value={formData.brand_id} onChange={handleChange} className="input" required />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mô tả</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="6" className="input resize-none" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ảnh đại diện (bắt buộc)</label>
            <label className="border-2 border-dashed border-red-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 block">
              <input type="file" accept="image/*" onChange={handleThumbnailChange} className="hidden" required />
              <div className="flex flex-col items-center justify-center text-red-500">
                <FaCloudUploadAlt className="text-3xl" />
                <span className="mt-2">Kéo thả ảnh hoặc click để chọn (Tối đa 5MB)</span>
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ảnh bổ sung (nhiều ảnh)</label>
            <label className="border-2 border-dashed border-red-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 block">
              <input type="file" multiple accept="image/*" onChange={handleImagesChange} className="hidden" />
              <div className="flex flex-col items-center justify-center text-red-500">
                <FaImages className="text-3xl" />
                <span className="mt-2">Tải lên tối đa 10 ảnh, mỗi ảnh ≤ 5MB</span>
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Trạng thái</label>
            <select name="status" value={formData.status} onChange={handleChange} className="input">
              <option value="1">Hiển thị</option>
              <option value="0">Ẩn</option>
            </select>
          </div>
        </div>

        <div className="col-span-full flex justify-end">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">💾 Lưu sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default ProductManager;

// Tailwind class "input" có thể định nghĩa trong CSS:
// .input { @apply w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500; }