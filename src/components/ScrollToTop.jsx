import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95"
            title="Back to top"
        >
            <FaArrowUp className="text-xl" />
        </button>
    );
}
