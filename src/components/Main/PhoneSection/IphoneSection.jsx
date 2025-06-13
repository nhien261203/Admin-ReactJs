import React from "react";
import IphoneProductCard from "./IphoneProductCard";
import { useDragScroll } from "../../../hooks/useDragScroll";

const IphoneSection = ({ products }) => {
    const { containerRef, eventHandlers } = useDragScroll();

    return (
        <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Thế giới iPhone trong tầm tay</h2>
            <div
                ref={containerRef}
                className="flex overflow-x-auto space-x-4 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
                {...eventHandlers}
            >
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[250px]"
                    >
                        <IphoneProductCard {...product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IphoneSection;
