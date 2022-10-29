import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useSetBodyScroll from '../hooks/useSetBodyScroll'

import CrossIcon from './icons/Cross'
import BurgerIcon from './icons/Burger'
import SearchIcon from './icons/Search'
import BagIcon from './icons/Bag'

import BurgerNavMenu from './navigations/BurgerNavMenu'

export default function Header() {
    const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);
    const setBodyScroll = useSetBodyScroll();

    useEffect(() => {
        setBodyScroll(!isBurgerOpened);
    }, [isBurgerOpened]);

    const onBurgerClose = () => {
        if (isBurgerOpened === true) {
            setIsBurgerOpened(false);
        }
    }

    const onBurgerToggle = () => {
        setIsBurgerOpened(prev => !prev);
    }

    return (
        <div className="fixed w-full h-screen">
            <div className="relative h-16 border-b-2 bg-white z-30">
                <div className="container grid grid-cols-3 px-3 items-center h-full">
                    <div className="flex">
                        <button className="p-2 transform hover:scale-110 md:hidden" onClick={onBurgerToggle}>
                            {isBurgerOpened ? <CrossIcon /> : <BurgerIcon />}
                        </button>
                        <button className="p-2 transform hover:scale-110 hidden md:block">
                            <SearchIcon />
                        </button>
                    </div>
                    <div className="text-center text-xl font-bold">
                        La Rosipier
                    </div>
                    <div className="flex justify-self-end">
                        <button className="p-2 transform hover:scale-110 md:hidden">
                            <SearchIcon />
                        </button>
                        <button className="p-2 transform hover:scale-110">
                            <BagIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`burger absolute inset-0 ${isBurgerOpened ? "bg-black" : "none"} bg-opacity-30 transform transition-colors duration-300 md:hidden z-10`} onClick={onBurgerClose}>
                <div className={`${isBurgerOpened ? "w-5/6" : "w-0"} max-w-sm bg-white h-screen transform transition-all duration-300 overflow-hidden`} onClick={e => e.stopPropagation()}>
                    <div className="mt-16 h-[calc(100vh-146px)] overflow-y-auto" hidden={!isBurgerOpened}>
                        <BurgerNavMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}
