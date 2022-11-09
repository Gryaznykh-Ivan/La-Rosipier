import React, { useRef, useState } from 'react'
import { useIntersection } from '../hooks/useIntersection'

import LoadingIcon from '../components/icons/Loading';

interface IProps {
    className?: string;
    src: string;
    alt: string;
    showLoading?: boolean;
}

export default function ImageLazyLoader({ className = "", src, alt, showLoading=true }: IProps) {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useIntersection(imgRef, () => {
        setIsVisible(true);
    });

    const [imageLoading, setImageLoading] = useState(true)

    const onImageLoaded = () => {
        setImageLoading(false)
    }

    return (
        <div className={`flex items-center justify-center ${className}`} ref={imgRef}>
            {isVisible &&
                <>
                    <div className={ (imageLoading && showLoading) ? "absolute inset-0 flex items-center justify-center" : "hidden"}>
                        <LoadingIcon />
                    </div>
                    <img src={src} loading="lazy" alt={alt} onLoad={onImageLoaded} />
                </>
            }
        </div>
    )
}
