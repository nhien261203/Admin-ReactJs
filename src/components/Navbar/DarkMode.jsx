import React, { useState, useEffect } from 'react';
import LightButton from '../../assets/wesite/btn-light-mode.png';
import DarkButton from '../../assets/wesite/btn-dark-mode.png';

const DarkMode = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Lấy giá trị từ localStorage khi component được mount
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // Nếu không có giá trị trong localStorage, đặt mặc định là "dark"
            localStorage.setItem("theme", "dark");
        }

        // Thay đổi lớp cho body dựa trên theme
        document.body.classList.toggle("dark", theme === "dark");
        document.body.classList.toggle("light", theme === "light");
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Lưu trạng thái vào localStorage
    };

    return (
        <div>
            <img 
                src={theme === "dark" ? DarkButton : LightButton} 
                alt="Toggle Theme" 
                className="w-12 cursor-pointer transition-all duration-300" 
                onClick={toggleTheme} 
            />
        </div>
    );
};

export default DarkMode;