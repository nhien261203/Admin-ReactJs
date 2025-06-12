import React from "react";
import Card from "../ListCard/Cart";
import PhoneCard from "../../assets/wesite/phone-card.jpg";
import LapCard from "../../assets/wesite/lap-card.jpg";
import DhCard from "../../assets/wesite/dh-card.png";
import IpCard from "../../assets/wesite/ipad-card.jpg";
import PkCard from "../../assets/wesite/phu-kien.jpg";
import PcCard from "../../assets/wesite/pc.jpg";

const categories = [
    { title: "Điện thoại", image: PhoneCard },
    { title: "Laptop", image: LapCard },
    { title: "Máy tính bảng", image: IpCard },
    { title: "Phụ kiện", image: PkCard },
    { title: "Đồng hồ", image: DhCard },
    { title: "PC, Màn hình", image: PcCard },
];

const ListCard = () => {
    return (
        <div className="container">
            {/* Desktop view */}
            <div className="hidden xl:grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {categories.map((cat, index) => (
                    <Card key={index} title={cat.title} image={cat.image} />
                ))}
            </div>

            {/* Mobile & Tablet view: 2 hàng, mỗi hàng 3 card */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 xl:hidden mt-4">
                {categories.map((cat, index) => (
                    <Card key={index} title={cat.title} image={cat.image} />
                ))}
            </div>
        </div>
    );
};

export default ListCard;
