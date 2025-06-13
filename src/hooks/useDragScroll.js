import { useRef, useState } from "react";

export const useDragScroll = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Ngăn chọn text khi kéo
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 0.5;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return {
        containerRef,
        eventHandlers: {
            onMouseDown,
            onMouseLeave,
            onMouseUp,
            onMouseMove,
        },
    };
};
