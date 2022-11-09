import React from 'react'
import { Link } from 'react-router-dom'
import ImageLazyLoader from '../../utils/ImageLazyLoader'

interface IProps {
    onClick: () => void;
}

export default function SearchProductPreview({ onClick }: IProps) {
    return (
        <Link to="/products/example" className="flex" onClick={ onClick }>
            <ImageLazyLoader className="relative w-24" src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
            <div className="ml-4">
                <div className="text-xxs">NIKE</div>
                <h2 className="text-sm font-semibold">Dunk Low "Off-White - Lot 42"</h2>
                <div className="text-sm">64 000 ₽</div>
            </div>
        </Link>
    )
}
