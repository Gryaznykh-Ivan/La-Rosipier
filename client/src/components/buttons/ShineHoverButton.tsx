import React from 'react'

interface IProps {
    children: React.ReactNode;
}

export default function ShineHoverButton({ children }: IProps) {
    return (
        <button className="group flex justify-center items-center relative cursor-pointer py-3 px-8 bg-black text-white rounded-lg font-semibold overflow-hidden hover:scale-[102%]">
            <div>{ children }</div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        </button>
    );
}
