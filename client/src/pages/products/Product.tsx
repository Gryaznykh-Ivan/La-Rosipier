import React, { useEffect } from 'react'
import ShineHoverButton from '../../components/buttons/ShineHoverButton'
import Slider from '../../components/slider/Slider'
import ImageLazyLoader from '../../utils/ImageLazyLoader'
import JSXAccordion from '../../components/accordions/JSXAccordion'
import WaysOfPayment from '../information/WaysOfPayment'
import CollectionPreview from '../../components/collections/CollectionPreview'
import CheckIcon from '../../components/icons/Check'
import VanIcon from '../../components/icons/Van'
import RefundIcon from '../../components/icons/Refund'
import RecentlyViewed from '../../components/collections/RecentlyViewed'
import Recommendation from '../../components/collections/Recommendation'
import useScrollToTop from '../../hooks/useScrollToTop'
import FeaturedProductsBlock from '../../components/products/FeaturedProductsBlock'

export default function Product() {
    const { scrollToTop } = useScrollToTop()

    useEffect(() => {
        scrollToTop("auto")
    }, [])

    return (
        <div className="mx-3 my-4">
            <div className="container md:grid xl:grid-cols-3 md:grid-cols-8">
                <div className="relative xl:col-span-2 md:col-span-5">
                    <div className="sticky md:top-24 xl:top-10">
                        <Slider
                            className="w-full"
                            slidesPerView={1}
                        >
                            <ImageLazyLoader src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                            <ImageLazyLoader src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                            <ImageLazyLoader src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                        </Slider>
                        <FeaturedProductsBlock className="hidden md:block" />
                    </div>
                </div>
                <div className="md:pl-6 xl:col-span-1 md:col-span-3">
                    <div className="text-xxs font-semibold">NIKE</div>
                    <h1 className="text-3xl tracking-normal">Air Jordan 1 High OG Stash "White Black"</h1>
                    <div className="text-xl font-semibold my-3">32 000 ₽</div>
                    <div className="flex justify-end">
                        <button className="text-sm font-semibold py-2">Таблица размеров</button>
                    </div>
                    <div className="py-4 border-y-[1px] grid grid-cols-4 gap-4">
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                        <button className="flex flex-col items-center tracking-tight">
                            <div className="font-semibold">US 5W</div>
                            <div className="text-sm">32 000</div>
                        </button>
                    </div>
                    <div className="space-y-3 mt-4">
                        <ShineHoverButton className="w-full text-black bg-white border-2 border-black">Добавить в корзину</ShineHoverButton>
                        <ShineHoverButton className="w-full text-white bg-black">Купить</ShineHoverButton>
                    </div>
                    <div className="mt-4">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="border-[1px] border-gray-300 p-3 font-semibold">Артикул бренда</th>
                                    <th className="border-[1px] border-gray-300 p-3 font-semibold">Дата выхода</th>
                                    <th className="border-[1px] border-gray-300 p-3 font-semibold">Размерная сетка</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-[1px] border-gray-300 p-3 text-center">1234</td>
                                    <td className="border-[1px] border-gray-300 p-3 text-center">1234</td>
                                    <td className="border-[1px] border-gray-300 p-3 text-center">1234</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4">
                        <JSXAccordion
                            icon={<CheckIcon />}
                            question="Гарантия лучшей цены"
                            answer={<WaysOfPayment />}
                        />
                        <JSXAccordion
                            icon={<VanIcon />}
                            question="Способы доставки и оплаты"
                            answer={<WaysOfPayment />}
                        />
                        <JSXAccordion
                            icon={<RefundIcon />}
                            question="Обмен и возврат"
                            answer={<WaysOfPayment />}
                        />
                    </div>
                </div>
            </div>
            <FeaturedProductsBlock className="md:hidden" />
            <RecentlyViewed />
            <Recommendation />
            <CollectionPreview
                title="Встречаем Хэллоуин 2022 вместе с Sortage"
                collectionId="123"
            />
        </div>
    )
}
