import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const LoginPage = () => {
    const [form, setForm] = useState({ login: '', password: '', remember: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đăng nhập với:', form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-5xl shadow-2xl rounded-lg overflow-hidden bg-white">
                {/* Left image with gradient overlay */}
                <div className="w-1/2 hidden md:block relative">
                    <img
                        src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"
                        alt="Electronic Banner"
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent flex items-end p-6">
                        <h2 className="text-white text-xl font-semibold">Welcome back to ElectroShop</h2>
                    </div>
                </div>

                {/* Login form */}
                <div className="w-full md:w-1/2 p-8 bg-white">
                    <div className="text-center mb-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
                            alt="Logo"
                            className="h-12 mx-auto mb-2"
                        />
                        <h2 className="text-2xl font-bold text-gray-800">Sign in to your account</h2>
                        <p className="text-sm text-gray-500">Manage your devices, orders and more</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email or phone</label>
                            <input
                                type="text"
                                name="login"
                                value={form.login}
                                onChange={handleChange}
                                placeholder="Email or phone number"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={form.remember}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
                        >
                            Sign in
                        </button>

                        <div className="flex flex-col gap-2">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100"
                            >
                                <FaGoogle className="text-red-500" /> Sign in with Google
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100"
                            >
                                <FaFacebookF className="text-blue-600" /> Sign in with Facebook
                            </button>
                        </div>
                    </form>

                    <p className="text-sm text-center text-gray-600 mt-6">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-blue-600 hover:underline">Sign up now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
