import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CollateBar from '../../components/filters/CollateBar'

import ProductCard from '../../components/products/ProductCard'
import { IProductGridCols } from '../../types'

export default function Collection() {
    const { collectionId } = useParams()

    const [productGridCols, setProductGridCols] = useState<IProductGridCols>({
        mobile: 2,
        laptop: 4
    })

    const onProductGridColsChange = (name: string, value: number) => {
        setProductGridCols(prev => ({ ...prev, [name]: value }))
    }

    return (
        <>
            <div className="text-3xl font-semibold mt-10 md:ml-10 text-center">Collection Name</div>
            <div className={`container grid grid-cols-${productGridCols.mobile} md:grid-cols-${productGridCols.laptop} py-10`}>
                <ProductCard
                    isSale={false}
                />
                <ProductCard
                    isSale={true}
                />
                <ProductCard
                    isSale={true}
                />
                <ProductCard
                    isSale={true}
                />
                <ProductCard
                    isSale={true}
                />
                <ProductCard
                    isSale={true}
                />
                <ProductCard
                    isSale={false}
                />
                <ProductCard
                    isSale={false}
                />
                <ProductCard
                    isSale={false}
                />
                <ProductCard
                    isSale={false}
                />
                <ProductCard
                    isSale={false}
                />
                <ProductCard
                    isSale={false}
                />
            </div>
            <CollateBar
                productGridCols={productGridCols}
                onProductGridColsChange={onProductGridColsChange}
            />
        </>
    )
}
