import React from 'react'
import { Link } from 'react-router-dom'
import ShineHoverButton from '../components/buttons/ShineHoverButton'
import CheckIcon from '../components/icons/Check'
import GearIcon from '../components/icons/Gear'
import ImageLazyLoader from '../utils/ImageLazyLoader'

export default function Checkout() {
    return (
        <div className="container px-3">
            <div className="ml-2 mb-6">
                <Link to="/cart" className="text-sm font-semibold text-blue-700 hover:underline">Вернуться в корзину</Link>
                <div className="text-3xl font-bold leading-7">Оформление заказа</div>
            </div>
            <div className="md:flex md:space-x-6">
                <div className="flex-1 space-y-6">
                    <div className="bg-white shadow-sm p-8 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-bold">1. Авторизация</div>
                            <div className="flex space-x-3">
                                <CheckIcon className="stroke-green-600" />
                                <button className="">
                                    <GearIcon />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex md:max-w-md">
                            <div className="space-y-4">
                                <div className="text-2xl font-bold leading-5">Вход в аккаунт</div>
                                <form className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" inputMode="tel" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="code" className="text-gray-600 outline-none">Код из смс</label>
                                        <input type="text" inputMode="numeric" name="code" id="code" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0 cursor-not-allowed" placeholder="Введите код из СМС" disabled />
                                    </div>
                                    <div className="text-xs">Если у вас еще нет аккаунта на нашем сайте - он будет автоматически создан</div>
                                    <ShineHoverButton className="bg-black text-white">Войти в аккаунт</ShineHoverButton>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm p-8 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-bold">2. Данные о доставке</div>
                            <div className="flex space-x-3">
                                <CheckIcon className="stroke-green-600" />
                                <button className="">
                                    <GearIcon />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex m-auto">
                            <form className="flex-1">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="tel" className="text-gray-600 outline-none">Телефон</label>
                                        <input type="text" name="tel" id="tel" className="border-0 border-b-2 focus:border-black py-2 focus:ring-0 px-0" placeholder="Введите телефон" />
                                    </div>
                                </div>
                                <ShineHoverButton className="bg-black text-white">Перейти к вариантам доставки</ShineHoverButton>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm p-8 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-bold">3. Варианты доставки</div>
                            <div className="flex space-x-3">
                                <CheckIcon className="stroke-green-600" />
                                <button className="">
                                    <GearIcon />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 space-y-6">
                            <div className="flex items-center" >
                                <input type="radio" name="delivery" id="free" className="cursor-pointer border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black" />
                                <label htmlFor="free" className="cursor-pointer">
                                    <div className="ml-4">
                                        <div className="text-xl font-semibold">Бесплатная доставка</div>
                                        <div className="text-sm text-gray-500">Приблезительное время доставки 12 дней</div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center cursor-pointer" >
                                <input type="radio" name="delivery" id="affordable" className="cursor-pointer border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black" />
                                <label htmlFor="affordable" className="cursor-pointer">
                                    <div className="ml-4">
                                        <div className="text-xl font-semibold">Эконовная доставка - 350 рублей</div>
                                        <div className="text-sm text-gray-500">Приблезительное время доставки 7 дней</div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center cursor-pointer" >
                                <input type="radio" name="delivery" id="express" className="cursor-pointer border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black" />
                                <label htmlFor="express" className="cursor-pointer">
                                    <div className="ml-4">
                                        <div className="text-xl font-semibold">Экспресс доставка - 1600 рублей</div>
                                        <div className="text-sm text-gray-500">Приблезительное время доставки 30 минут</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:max-w-xs lg:max-w-md w-full mt-6 md:mt-0">
                    <div className="sticky top-6">

                        <div className="bg-white shadow-sm rounded-lg p-8 space-y-4">
                            <div className="text-2xl font-bold leading-6">Итог заказа</div>
                            <div className="text-gray-500">
                                <div className="flex justify-between">
                                    <div className="">Промежуточный итог</div>
                                    <div className="">101 000 ₽</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="">Доставка</div>
                                    <div className="">1 600 ₽</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="">Скидка</div>
                                    <div className="">-11 600 ₽</div>
                                </div>
                            </div>
                            <div className="flex justify-between text-xl font-semibold">
                                <div className="">Итог</div>
                                <div className="">91 000 ₽</div>
                            </div>
                            <ShineHoverButton className="w-full text-white bg-green-700 font-bold">Оплатить</ShineHoverButton>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="flex">
                                <ImageLazyLoader className="relative w-36" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                                <div className="ml-4 flex-1">
                                    <div className="text-xxs">NIKE</div>
                                    <Link to="/products/example" className="text-sm font-semibold">Dunk Low "Off-White - Lot 42"</Link>
                                    <div className="text-sm">64 000 ₽</div>
                                    <div className="text-sm">Размер: US 7 <span>× 2</span></div>
                                </div>
                            </div>
                            <div className="flex">
                                <ImageLazyLoader className="relative w-36" src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                                <div className="ml-4 flex-1">
                                    <div className="text-xxs">NIKE</div>
                                    <Link to="/products/example" className="text-sm font-semibold">Air Jordan 3 Retro Low OG</Link>
                                    <div className="text-sm">32 000 ₽</div>
                                    <div className="text-sm">Размер: US 7 <span>× 2</span></div>
                                </div>
                            </div>
                            <div className="flex">
                                <ImageLazyLoader className="relative w-36" src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                                <div className="ml-4 flex-1">
                                    <div className="text-xxs">NIKE</div>
                                    <Link to="/products/example" className="text-sm font-semibold">Air Jordan 1 Retro High OG</Link>
                                    <div className="text-sm">44 000 ₽</div>
                                    <div className="text-sm">Размер: US 7 <span>× 2</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
