import React from 'react'
import { Link } from 'react-router-dom'
import ShineHoverButton from '../buttons/ShineHoverButton'

export default function SaleUpTo30Precent() {
    return (
        <div className="relative w-full aspect-[1903/732]">
            <img src={`${process.env.PUBLIC_URL}/assets/images/sale-up-to-30-precent.jpg`} alt="" />
            <div className="flex flex-col items-center p-4 md:absolute md:justify-center inset-0">
                <div className="text-2xl font-bold drop-shadow-xl">SALE UP TO 30%</div>
                <div className="text-xs font-semibold drop-shadow-md mt-2">СЕЗОН ОСЕННИХ СКИДОК НА LA ROSIPIER</div>
                <Link to="#" className="mt-4">
                    <ShineHoverButton>К коллекции</ShineHoverButton>
                </Link>
            </div>
        </div>
    )
}
