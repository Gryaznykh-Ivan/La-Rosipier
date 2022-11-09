import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import CollateBar from '../../components/filters/CollateBar'
import Pagination from '../../components/pagination/Pagination'
import ProductCard from '../../components/products/ProductCard'
import useScrollToTop from '../../hooks/useScrollToTop'
import { IProductGridCols } from '../../types'

export default function Collection() {
    const { collectionId } = useParams()
    
    const { scrollToTop } = useScrollToTop()
    const [productGridCols, setProductGridCols] = useState<IProductGridCols>({
        mobile: 2,
        laptop: 4
    })

    const onPageChange = (skip: number, limit: number) => {
        scrollToTop("smooth")
        console.log("pageChange", skip, limit)
    }

    const onProductGridColsChange = (name: string, value: number) => {
        setProductGridCols(prev => ({ ...prev, [name]: value }))
    }

    return (
        <>
            <div className="text-3xl font-semibold mt-10 text-center">Collection Name</div>
            <div className={`container grid ${productGridCols.mobile === 2 ? "grid-cols-2" : "grid-cols-1"} ${productGridCols.laptop === 4 ? "md:grid-cols-4" : "md:grid-cols-3"} py-10`}>
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
            <Pagination
                productPerPage={24}
                totalProductCount={1490}
                onPageChange={ onPageChange }
            />
            <CollateBar
                productGridCols={productGridCols}
                onProductGridColsChange={onProductGridColsChange}
            />
        </>
    )
}
