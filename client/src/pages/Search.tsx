import React, { useState } from 'react'
import CollateBar from '../components/filters/CollateBar'
import Pagination from '../components/pagination/Pagination'
import ProductCard from '../components/products/ProductCard'
import useScrollToTop from '../hooks/useScrollToTop'

import SearchIcon from '../components/icons/Search'

import { IProductGridCols } from '../types'

export default function Search() {
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
        <div className="">
            <div className="px-3 md:px-0">
                <div className="text-3xl font-semibold mt-10 text-center">Поиск по товарам</div>
                <div className="relative flex w-full max-w-2xl m-auto mt-4 md:mt-8">
                    <div className="absolute bottom-0 top-0 left-2 flex items-center">
                        <SearchIcon />
                    </div>
                    <input type="text" className="flex-1 pl-10 py-2 focus:ring-0 pr-2 border-0 border-b-2 focus:border-black bg-transparent" placeholder="Поиск по товарам" />
                </div>
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
            </div>
            <Pagination
                productPerPage={24}
                totalProductCount={1490}
                onPageChange={onPageChange}
            />
            <CollateBar
                productGridCols={productGridCols}
                onProductGridColsChange={onProductGridColsChange}
            />
        </div>
    )
}
