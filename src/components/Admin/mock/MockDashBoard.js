// src/mock/mock-dashboard-data.js

const mockData = {
    totalRevenue: '$123,456',
    processingOrders: 32,
    newUsers: 58,
    monthlyGrowth: '12%',
    productsSold: 431,
    averageRating: '4.6 ⭐',

    revenueLineData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Doanh thu ($)',
                data: [12000, 15000, 13000, 17000, 14000, 18000, 20000],
                borderColor: '#E50914',
                backgroundColor: 'rgba(229, 9, 20, 0.1)',
                fill: true,
                tension: 0.4,
            },
        ],
    },

    ordersBarData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Đơn hàng',
                data: [120, 90, 150, 100],
                backgroundColor: '#0ea5e9',
            },
        ],
    },

    productTypeDoughnut: {
        labels: ['Điện thoại', 'Laptop', 'Đồng hồ', 'Phụ kiện'],
        datasets: [
            {
                data: [40, 30, 20, 10],
                backgroundColor: ['#E50914', '#3b82f6', '#10b981', '#f59e0b'],
                hoverOffset: 8,
            },
        ],
    },
};

export default mockData;
