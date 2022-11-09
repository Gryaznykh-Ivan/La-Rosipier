import React from 'react'
import { Link } from 'react-router-dom'
import ImageLazyLoader from '../../utils/ImageLazyLoader'

export default function RecommendedProduct() {
    return (
        <Link to="/products/example" className="flex items-center">
            <ImageLazyLoader className="relative w-40 md:w-56" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
            <div className="ml-4">
                <div className="text-xxs">OFF-WHITE</div>
                <h2 className="text-sm font-semibold">Шнурки off-white</h2>
                <div className="text-sm">8 500 ₽</div>
            </div>
        </Link>
    )
}
