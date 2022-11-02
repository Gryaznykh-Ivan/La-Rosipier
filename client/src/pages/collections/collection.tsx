import React from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/products/ProductCard'

export default function Collection() {
    const { collectionId } = useParams()
    
    return (
        <div className="container">
            <div className="text-3xl font-semibold mt-10 md:ml-10 text-center">Collection Name</div>
            <div className="grid grid-cols-2 md:grid-cols-3 py-10">
                <ProductCard
                    isSale={ false }
                />
                <ProductCard
                    isSale={ true }
                />
                <ProductCard
                    isSale={ true }
                />
                <ProductCard
                    isSale={ true }
                />
                <ProductCard
                    isSale={ true }
                />
                <ProductCard
                    isSale={ true }
                />
                <ProductCard
                    isSale={ false }
                />
                <ProductCard
                    isSale={ false }
                />
                <ProductCard
                    isSale={ false }
                />
                <ProductCard
                    isSale={ false }
                />
                <ProductCard
                    isSale={ false }
                />
                <ProductCard
                    isSale={ false }
                />
            </div>
        </div>
    )
}
