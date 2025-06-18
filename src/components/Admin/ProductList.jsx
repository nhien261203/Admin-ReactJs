import React, { useState, useEffect } from 'react';

const mockProducts = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        description: 'Flagship Apple 2023',
        price: 35000000,
        original_price: 38990000,
        quantity: 20,
        sold: 5,
        category_id: 1,
        brand_id: 1,
        status: 1,
        created_at: '2024-06-01',
        thumbnail: 'data:image/webp;base64,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',
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Camera siêu zoom, chip mạnh',
        price: 28900000,
        original_price: 30900000,
        quantity: 12,
        sold: 3,
        category_id: 1,
        brand_id: 2,
        status: 1,
        created_at: '2024-05-22',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/299034/samsung-galaxy-s24-ultra.jpg',
    },
    {
        id: 3,
        name: 'Laptop ASUS ROG Strix G16',
        description: 'Máy gaming cực mạnh',
        price: 42500000,
        original_price: 44900000,
        quantity: 8,
        sold: 2,
        category_id: 2,
        brand_id: 3,
        status: 0,
        created_at: '2024-05-15',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/313057/rogstrixg16.jpg',
    },
    {
        id: 4,
        name: 'MacBook Pro M3 14 inch',
        price: 48900000,
        original_price: 49900000,
        quantity: 15,
        sold: 6,
        category_id: 2,
        brand_id: 1,
        status: 1,
        created_at: '2024-04-20',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/311244/macbookpro14m3.jpg',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11900000,
        original_price: 12900000,
        quantity: 30,
        sold: 10,
        category_id: 3,
        brand_id: 1,
        status: 1,
        created_at: '2024-03-10',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/7077/305755/applewatch9.jpg',
    },
    {
        id: 6,
        name: 'Xiaomi 13T Pro',
        price: 14900000,
        original_price: 16900000,
        quantity: 18,
        sold: 9,
        category_id: 1,
        brand_id: 4,
        status: 1,
        created_at: '2024-02-12',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/307083/xiaomi-13t-pro.jpg',
    },
    {
        id: 7,
        name: 'Dell XPS 13 Plus',
        price: 35900000,
        original_price: 38900000,
        quantity: 10,
        sold: 4,
        category_id: 2,
        brand_id: 5,
        status: 1,
        created_at: '2024-01-05',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/303289/dellxps13plus.jpg',
    },
    {
        id: 8,
        name: 'Tai nghe AirPods Pro 2',
        price: 5490000,
        original_price: 5990000,
        quantity: 50,
        sold: 20,
        category_id: 4,
        brand_id: 1,
        status: 1,
        created_at: '2023-12-25',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/54/299250/airpodspro2.jpg',
    },
    {
        id: 9,
        name: 'Lenovo Legion 5 Pro',
        price: 38900000,
        original_price: 40900000,
        quantity: 7,
        sold: 2,
        category_id: 2,
        brand_id: 6,
        status: 0,
        created_at: '2023-11-11',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/306153/legion5pro.jpg',
    },
    {
        id: 10,
        name: 'iPad Air 5 M1',
        price: 17900000,
        original_price: 18900000,
        quantity: 14,
        sold: 3,
        category_id: 5,
        brand_id: 1,
        status: 1,
        created_at: '2023-10-01',
        thumbnail: 'https://cdn.tgdd.vn/Products/Images/522/309671/ipadair5.jpg',
    },
];

const ProductList = () => {
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    const filtered = mockProducts.filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );

    const paginated = filtered.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );
    const totalPages = Math.ceil(filtered.length / perPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [keyword]);

    return (
        <div className="p-6 font-sans">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Danh sách sản phẩm</h2>

            {/* Tìm kiếm */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="🔍 Tìm kiếm sản phẩm..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full max-w-md focus:outline-none focus:ring focus:border-blue-400"
                />
            </div>

            {/* Bảng sản phẩm */}
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="min-w-full table-auto text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Ảnh</th>
                            <th className="p-3 text-left">Tên</th>
                            <th className="p-3 text-left">Giá</th>
                            <th className="p-3 text-left">Kho</th>
                            <th className="p-3 text-left">Đã bán</th>
                            <th className="p-3 text-left">Trạng thái</th>
                            <th className="p-3 text-left">Ngày tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.map((product) => (
                            <tr key={product.id} className="border-t hover:bg-gray-50">
                                <td className="p-3">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.name}
                                        className="w-14 h-14 object-cover rounded"
                                    />
                                </td>
                                <td className="p-3 font-medium">{product.name}</td>
                                <td className="p-3 text-red-500">
                                    {product.price.toLocaleString()}₫
                                    <br />
                                    <span className="line-through text-xs text-gray-500">
                                        {product.original_price.toLocaleString()}₫
                                    </span>
                                </td>
                                <td className="p-3">{product.quantity}</td>
                                <td className="p-3">{product.sold}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full font-semibold ${product.status === 1
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-gray-200 text-gray-600'
                                            }`}
                                    >
                                        {product.status === 1 ? 'Hiển thị' : 'Ẩn'}
                                    </span>
                                </td>
                                <td className="p-3">{product.created_at}</td>
                            </tr>
                        ))}
                        {paginated.length === 0 && (
                            <tr>
                                <td colSpan="7" className="p-4 text-center text-gray-500">
                                    Không tìm thấy sản phẩm
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Phân trang */}
            <div className="flex justify-between items-center mt-4">
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

export default ProductList;
