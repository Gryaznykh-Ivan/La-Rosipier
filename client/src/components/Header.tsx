import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useSetBodyScroll from '../hooks/useSetBodyScroll'

import CrossIcon from './icons/Cross'
import BurgerIcon from './icons/Burger'
import SearchIcon from './icons/Search'
import BagIcon from './icons/Bag'

import BurgerNavMenu from './navigations/BurgerNavMenu'
import NavMenu from './navigations/NavMenu'

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
        <div className="relative">
            <div className="fixed w-full max-h-[112px] z-30">
                <div className="h-16 border-b-[1px] bg-white">
                    <div className="container grid grid-cols-3 px-3 items-center h-full">
                        <div className="flex">
                            <button className="p-2 transform hover:scale-110 md:hidden" onClick={onBurgerToggle}>
                                {isBurgerOpened ? <CrossIcon /> : <BurgerIcon />}
                            </button>
                            <button className="p-2 transform hover:scale-110 hidden md:block">
                                <SearchIcon />
                            </button>
                        </div>
                        <Link to="/" className="text-center text-xl font-bold">
                            La Rosipier
                        </Link>
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
                <NavMenu />
            </div>
            <div className={`fixed w-full h-screen ${isBurgerOpened ? "bg-black" : "h-0"} bg-opacity-30 transform transition-colors duration-300 md:hidden z-10`} onClick={onBurgerClose}>
                <div className={`${isBurgerOpened ? "w-5/6" : "w-0"} max-w-sm bg-white h-screen transform transition-all duration-300 overflow-hidden`} onClick={e => e.stopPropagation()}>
                    <div className="h-[calc(100vh-146px)] overflow-y-auto" hidden={!isBurgerOpened}>
                        <BurgerNavMenu
                            onBurgerClose={ onBurgerClose }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
