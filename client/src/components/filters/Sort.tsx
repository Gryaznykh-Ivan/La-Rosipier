import React from 'react'

interface IProps {
    isActive: boolean;
    onSort: () => void;
    onClose: () => void;
}

export default function Sort({ isActive, onSort, onClose }: IProps) {
    return (
        <div className={`fixed inset-0 bg-black ${isActive ? "bg-opacity-30 visible" : "bg-opacity-0 invisible"} flex justify-end transition-all duration-300 z-30`} onClick={onClose}>
            <div className={`${isActive ? "w-5/6" : "w-0"} max-w-sm bg-white h-screen transform transition-all duration-300 overflow-hidden`} onClick={e => e.stopPropagation()}>
                123
            </div>
        </div>
    )
}
