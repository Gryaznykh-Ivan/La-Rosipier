import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useSetBodyScroll from '../hooks/useSetBodyScroll'

import BurgerIcon from './icons/Burger'
import SearchIcon from './icons/Search'
import BagIcon from './icons/Bag'

import NavBar from './navigations/NavBar'
import Burger from './navigations/Burger'

export default function Header() {
    const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);
    const setBodyScroll = useSetBodyScroll(true);

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
            <div className="fixed w-full z-20">
                <div className="h-16 border-b-[1px] bg-white">
                    <div className="container grid grid-cols-3 px-3 items-center h-full">
                        <div className="flex">
                            <button className="p-2 transform hover:scale-110 md:hidden" onClick={onBurgerToggle}>
                                <BurgerIcon />
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
                <NavBar />
            </div>
            <Burger
                isActive={ isBurgerOpened }
                onClose={ onBurgerClose }
            />
        </div>
    )
}
