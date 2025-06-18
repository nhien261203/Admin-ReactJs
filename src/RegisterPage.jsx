import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Đăng ký với:", form);
        // Gửi form qua API: axios.post('/api/register', form)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl space-y-6">
                <div className="text-center">
                    <img
                        src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"
                        alt="Logo"
                        className="h-12 mx-auto mb-2 rounded-md object-cover"
                    />
                    <h2 className="text-xl font-bold text-gray-800">Tạo tài khoản mới</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Họ và tên"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:outline-none"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
                    >
                        Đăng ký
                    </button>
                </form>

                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100"
                    >
                        <FaGoogle className="text-red-500" /> Đăng ký với Google
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100"
                    >
                        <FaFacebookF className="text-blue-600" /> Đăng ký với Facebook
                    </button>
                </div>

                <p className="text-sm text-center text-gray-600">
                    Đã có tài khoản?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">Đăng nhập</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
