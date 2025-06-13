// components/CountdownTimer.jsx
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState('');
    const [endTime] = useState(new Date(Date.now() + 3 * 60 * 1000).getTime()); // Tính luôn endTime = now + 3 phút

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = endTime - now;

            if (diff <= 0) {
                setTimeLeft('00:00:00');
                clearInterval(timer);
                return;
            }

            const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

            setTimeLeft(`${hours}:${minutes}:${seconds}`);
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-bold w-fit mx-auto">
            Chỉ còn: {timeLeft}
        </div>
    );
};

export default CountdownTimer;
