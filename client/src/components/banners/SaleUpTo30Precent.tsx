import React from 'react'

export default function SaleUpTo30Precent() {
  return (
    <div className="relative h-full">
        <img src={`${ process.env.PUBLIC_URL }/assets/images/sale-up-to-30-precent.jpg`} alt="" />
        <div className="flex flex-col items-center space-y-4 p-4 md:absolute md:justify-center inset-0">
            <div className="text-3xl font-bold drop-shadow-xl">SALE UP TO 30%</div>
            <div className="text-xs font-semibold drop-shadow-md">СЕЗОН ОСЕННИХ СКИДОК НА LA ROSIPIER</div>
            <button className="py-3 px-8 bg-black text-white rounded-lg font-semibold">К коллекции</button>
        </div>
    </div>
  )
}
