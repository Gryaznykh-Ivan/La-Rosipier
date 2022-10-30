import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="bg-gray-100 p-8">
            <div className="container grid grid-cols-1 gap-10 md:grid-cols-4">
                <div className="max-w-[200px] md:max-w-none">
                    <div className="uppercase font-bold text-xxs mb-5">ПОМОЩЬ</div>
                    <div className="text-base">
                        <NavLink to="/ways-of-payment" className={({ isActive }) => `block leading-6 text-${ isActive ? "black" : "gray-600" }`}>Способ оплаты</NavLink>
                        <NavLink to="/delivery" className={({ isActive }) => `block leading-6 text-${ isActive ? "black" : "gray-600" }`}>Доставка и самовывоз</NavLink>
                        <NavLink to="/faq" className={({ isActive }) => `block leading-6 text-${ isActive ? "black" : "gray-600" }`}>Частные вопросы</NavLink>
                    </div>
                </div>
                <div className="max-w-[200px] md:max-w-none">
                    <div className="uppercase font-bold text-xxs mb-5">ПОЛИТИКИ И УСЛОВИЯ</div>
                    <div className="text-base">
                        <NavLink to="/refund-policy" className={({ isActive }) => `block leading-6 text-${ isActive ? "black" : "gray-600" }`}>Обмен и возврат</NavLink>
                        <NavLink to="/privacy-policy" className={({ isActive }) => `block leading-6 text-${ isActive ? "black" : "gray-600" }`}>Политика конфиденциальности</NavLink>
                        <NavLink to="/terms-of-service" className={({ isActive }) => `block leading-6 text-${ isActive ? "black" : "gray-600" }`}>Условия предоставления услуг</NavLink>
                    </div>
                </div>
                <div className="max-w-[200px] md:max-w-none">
                    <div className="uppercase font-bold text-xxs mb-5">СЛУЖБА КЛИЕНТСКОЙ ПОДДЕРЖКИ</div>
                    <div className="text-base">
                        <a href="mailto:support@thesortage.com" className="block leading-6">support@thesortage.com</a>
                        <a href="tel:+7(995)788-00-58" className="block leading-6">+7(995)788-00-58</a>
                        <div className="block leading-6 mt-3">Звонки принимаются ежедневно</div>
                        <div className="block leading-6">с 10:00 до 22:00 по МСК.</div>
                    </div>
                </div>
                <div className="max-w-[250px] md:max-w-none">
                    <div className="uppercase font-bold text-xxs mb-5">АДРЕС МАГАЗИНА</div>
                    <div className="text-base">
                        <div className="block leading-6">Москва, Кутузовский проспект 48 Галереи "Времена Года", 3 этаж.</div>
                        <div className="block leading-6 mt-3">Время работы: ежедневно с 11:00 до 22:00.</div>
                    </div>
                </div>
            </div>
            <div className="text-xxs text-center mt-8">© 2022, La Rosipier</div>
        </div>
    )
}
