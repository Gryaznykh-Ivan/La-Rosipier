import { useState, useEffect } from "react";

export default function useSetBodyScroll() {
    const [bodyScroll, setBodyScroll] = useState(true);

    useEffect(() => {
        const resetOnResize = () => {
            if (window.innerWidth <= 767) document.body.style.overflow = "hidden";
            if (window.innerWidth >= 768) document.body.style.overflow = "auto";
        };

        if (!bodyScroll) {
            document.body.style.overflow = "hidden";
            window.addEventListener("resize", resetOnResize);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("resize", resetOnResize);
        };
    }, [bodyScroll]);

    return setBodyScroll;
}