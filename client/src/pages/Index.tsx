import React from 'react'
import SaleUpTo30Precent from '../components/banners/SaleUpTo30Precent'
import Slider from '../components/slider/Slider'

export default function Index() {
    return (
        <div className="">
            <SaleUpTo30Precent />
            <div className="">
                <h2 className="">Новые поступления SS'22</h2>
                <Slider>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                    <div className="w-32 h-32 bg-black shrink-0">123</div>
                </Slider>
            </div>
        </div>
    )
}
