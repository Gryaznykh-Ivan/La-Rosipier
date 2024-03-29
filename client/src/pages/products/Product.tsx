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
                <div className="xl:col-span-2 md:col-span-5">
                    <div className="sticky md:top-24 xl:top-10">
                        <Slider
                            className="w-full md:hidden block"
                            slidesPerView={1}
                        >
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                        </Slider>
                        <div className="hidden md:block">
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                            <ImageLazyLoader className="relative aspect-5/3" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                            <div className="">
                                <h2 className="text-center text-2xl font-semibold mb-4">Наши преимущества</h2>
                                <div className="border-y-[1px] py-5">
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
                    </div>
                </div>
                <div className="flex flex-col self-start sticky md:top-32 md:pl-6 xl:col-span-1 md:col-span-3">

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
                    <div className="mt-4 text-base tracking-normal">
                        Эти нескончаемые данки! Простая и минималистичная эстетика ещё сохраняется в некоторых моделях, не смотря на иногда сумасшедшие решения. Кожаная белая основа, перфорация на носке и пудрово-розовые детали - все очень сдержанно и стильно. Аутсоль также сделана в нежно-розовом цвете, как и шнурки с подкладкой. Пара вышла в женской размерной сетке в 2022 году.
                    </div>
                    <div className="mt-4 md:hidden">
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
            <RecentlyViewed />
            <Recommendation />
            <CollectionPreview
                title="Встречаем Хэллоуин 2022 вместе с Sortage"
                collectionId="123"
            />
        </div>
    )
}
