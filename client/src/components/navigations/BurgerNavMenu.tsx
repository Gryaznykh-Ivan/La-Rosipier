import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { IBurgerNavMenuState, NavMenuType } from '../../types'
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import { BurgerNavMenuData } from './NavMenuData'

export default function BurgerNavMenu() {
    const [menu, setMenu] = useState<IBurgerNavMenuState>({
        current: BurgerNavMenuData,
        history: []
    });

    const onBackMenu = () => {
        const history = menu.history;
        const current = history.at(-1)?.menu || BurgerNavMenuData;
        history.pop();
        setMenu(prev => ({ ...prev, history, current }))
    }

    const onSelectMenu = (menu: NavMenuType, title: string) => {
        setMenu(prev => ({ ...prev, current: menu, history: [...prev.history, { title, menu: prev.current }] }));
    }

    return (
        <div className="divide-y-[1px] divide-gray-200 transform transition-all duration-500">
            {menu.history.length > 0 &&
                <div className="flex items-center text-sm font-semibold pl-2 py-2 h-10 cursor-pointer whitespace-nowrap" onClick={onBackMenu}>
                    <ArrowLeft w={16} h={16} />
                    <span className="ml-2">{menu.history.at(-1)?.title}</span>
                </div>
            }
            {menu.current.map(item => {
                if (item.menu.length !== 0) {
                    return (
                        <div key={item.title} className="flex items-center justify-between text-sm font-semibold pl-8 pr-2 py-2 h-10 cursor-pointer hover:text-gray-600 whitespace-nowrap" onClick={() => onSelectMenu(item.menu, item.title)}>
                            {item.title}
                            <ArrowRight w={16} h={16} />
                        </div>
                    )
                }

                return (
                    <Link to={item.link} key={item.title} className="block text-sm font-semibold px-8 py-2 h-10 hover:text-gray-600 whitespace-nowrap">
                        {item.title}
                    </Link>
                )
            })}
        </div>
    )
}
