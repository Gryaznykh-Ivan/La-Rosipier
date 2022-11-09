import { Link } from 'react-router-dom'
import ImageLazyLoader from '../../utils/ImageLazyLoader';

interface IProps {
    isSale: boolean;
}

export default function ProductCard({ isSale }: IProps) {
    return (
        <Link to="/products/example" className="block group p-2">
            <div className="relative">
                <div className="transition-transform duration-300 group-hover:scale-[102%] w-full aspect-5/3">
                    <ImageLazyLoader src={`${process.env.PUBLIC_URL}/assets/images/air-force0.jpg`} alt={""} />
                    <ImageLazyLoader showLoading={false} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:md:block" src={`${process.env.PUBLIC_URL}/assets/images/air-force1.jpg`} alt={""} />
                </div>
                {isSale &&
                    <div className="absolute bottom-0 left-0">
                        <div className="font-bold text-white bg-red-600 md:px-3 md:py-2 py-1 px-2 z-20 rounded-sm md:text-md text-sm">SALE</div>
                    </div>
                }
            </div>
            <div className="flex flex-col items-center mt-2">
                <div className="mb-2 space-y-1">
                    <div className="text-center text-sm tracking-wide">Dunk Low SP "Undefeated Canteen Dunk vs. AF1 Pack</div>
                    <div className="uppercase text-gray-600 text-center text-xs">NIKE</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className={`last-price mr-2 text-gray-400 line-through text-sm ${!isSale && "hidden"}`}>35.000₽</div>
                    <div className={`current-price ${isSale && "text-red-600"}`}>От 26.000 ₽</div>
                </div>
            </div>
        </Link>
    )
}
