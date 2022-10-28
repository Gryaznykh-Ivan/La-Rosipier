import React from 'react'

import BurgerIcon from './icons/Burger'
import SearchIcon from './icons/Search'
import BagIcon from './icons/Bag'

export default function Header() {
    return (
        <div className="h-16 border-b-2 border-red">
            <div className="container flex px-3 items-center h-full">
                <div className="flex">
                    <button className="p-2 md:hidden">
                        <BurgerIcon />
                    </button>
                    <button className="p-2 hidden md:block">
                        <SearchIcon />
                    </button>
                </div>
                <div className="flex-1 text-center text-xl font-bold">
                    La Rosipier
                </div>
                <div className="flex">
                    <button className="p-2 md:hidden">
                        <SearchIcon />
                    </button>
                    <button className="p-2">
                        <BagIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}
