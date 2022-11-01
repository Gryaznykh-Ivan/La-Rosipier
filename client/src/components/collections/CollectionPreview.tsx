import React from 'react'
import { Link } from 'react-router-dom';
import ShineHoverButton from '../buttons/ShineHoverButton';
import ProductCard from '../products/ProductCard'
import Slider from '../slider/Slider'

interface IProps {
    title: string;
    collectionId: string;
}

export default function CollectionPreview({ title, collectionId }: IProps) {
    return (
        <div className="my-12">
            <h2 className="my-6 text-2xl font-semibold text-center">{title}</h2>
            <Slider
                className="my-10"
                breakpoints={({
                    768: {
                        slidesPerView: 4
                    }
                })}
            >
                <ProductCard isSale={true} />
                <ProductCard isSale={false} />
                <ProductCard isSale={false} />
                <ProductCard isSale={false} />
                <ProductCard isSale={true} />
                <ProductCard isSale={false} />
                <ProductCard isSale={false} />
                <ProductCard isSale={true} />
                <ProductCard isSale={true} />
            </Slider>
            <div className="flex justify-center">
                <Link to="#">
                    <ShineHoverButton>Посмотреть все</ShineHoverButton>
                </Link>
            </div>
        </div>
    )
}
