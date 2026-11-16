import {ShoppingCart} from 'lucide-react'

export function ProductCard({ product }) {
    return (
        <div className="w-64 bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
                <img src={product?.image} alt={product?.name} className="w-full h-full object-cover mb-4" />
            </div>
            <h2 className="text-lg font-bold mb-2">{product?.name}</h2>
            <p className="text-gray-600 mb-4">{product?.description}</p>
            <p className="text-xl font-bold">${product?.price?.toFixed(2)}</p>

            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
                <ShoppingCart />
            </button>
        </div>
    )
}
