import React from 'react'

export default function SaleUpTo30Precent() {
  return (
    <div className="relative">
        <img src={`${ process.env.PUBLIC_URL }/assets/images/sale-up-to-30-precent.jpg`} alt="" />
        <div className="flex flex-col items-center">
            <div className="">SALE UP TO 30%</div>
            <div className="">СЕЗОН ОСЕННИХ СКИДОК НА LA ROSIPIER</div>
        </div>
    </div>
  )
}
