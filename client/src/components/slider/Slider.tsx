import React from 'react'

interface IProps {
    children: React.ReactNode;
}

// scroll padding left

export default function Slider({ children }: IProps) {

    const getChildrenArray = (children: React.ReactNode) => {
        return React.Children.toArray(children);
    }

    return (
        <div className="">
            <div className="relative overflow-hidden">
                <div className="flex space-x-4 overflow-x-scroll -mb-[17px] pb-[17px]">
                    { getChildrenArray(children).map(slide => slide) }
                </div>
            </div>
            <div className="">
                <button>Назад</button>
                <button>Вперед</button>
            </div>
        </div>
    )
}
