import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ShineHoverButton from '../components/buttons/ShineHoverButton'
import RecentlyViewed from '../components/collections/RecentlyViewed'
import Recommendation from '../components/collections/Recommendation'
import TrashIcon from '../components/icons/Trash'
import useScrollToTop from '../hooks/useScrollToTop'
import ImageLazyLoader from '../utils/ImageLazyLoader'

export default function Cart() {
    const { scrollToTop } = useScrollToTop()

    useEffect(() => {
        scrollToTop("auto")
    }, [])

    return (
        <div className="mx-3 my-10">
            <div className="container">
                <h1 className="font-semibold text-3xl">Корзина</h1>
                <table className="w-full mt-3 border-b-[1px]">
                    <thead>
                        <tr className="border-b-[1px]">
                            <th className="py-4 text-xxs font-semibold text-start">ТОВАР</th>
                            <th className="py-4 text-xxs font-semibold text-center w-32 hidden md:table-cell">КОЛИЧЕСТВО</th>
                            <th className="py-4 text-xxs font-semibold text-center w-32">ВСЕГО</th>
                            <th className="py-4 text-xxs font-semibold text-center w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="py-4">
                                <div className="flex">
                                    <ImageLazyLoader className="relative w-36" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                                    <div className="ml-4">
                                        <div className="text-xxs">NIKE</div>
                                        <Link to="/products/example" className="text-sm font-semibold">Dunk Low "Off-White - Lot 42"</Link>
                                        <div className="text-sm">64 000</div>
                                        <div className="text-sm">Размер: US 7 <span className="md:hidden">× 2</span></div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 text-center hidden md:table-cell">1</td>
                            <td className="py-4 text-center">64 000</td>
                            <td className="">
                                <button className="flex items-center justify-center p-3"><TrashIcon w={16} h={16} /></button>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="py-4">
                                <div className="flex">
                                    <ImageLazyLoader className="relative w-36" src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                                    <div className="ml-4">
                                        <div className="text-xxs">NIKE</div>
                                        <Link to="/products/example" className="text-sm font-semibold">Dunk Low "Off-White - Lot 42"</Link>
                                        <div className="text-sm">64 000</div>
                                        <div className="text-sm">Размер: US 7 <span className="md:hidden">× 2</span></div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 text-center hidden md:table-cell">1</td>
                            <td className="py-4 text-center">64 000</td>
                            <td className="">
                                <button className="flex items-center justify-center p-3"><TrashIcon w={16} h={16} /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="flex flex-col items-end space-y-4 mt-16">
                    <div className="text-xl font-semibold">Промежуточный итог 109.000 ₽</div>
                    <div className="text-xs md:w-80 w-full text-end text-gray-400">Все налоги и таможенные сборы включены. Стоимость доставки рассчитывается на этапе оформления заказа.</div>
                    <Link to="/checkout" className="">
                        <ShineHoverButton className="md:w-96 w-full text-white bg-black">Оформить заказ</ShineHoverButton>
                    </Link>
                </div>
            </div>
            <RecentlyViewed />
            <Recommendation />
        </div>
    )
}
