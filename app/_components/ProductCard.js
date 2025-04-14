"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/men/shirts/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            style={{ objectFit: "contain" }}
            className="hover:scale-105 transition-transform duration-300 p-2"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 z-10">
              {Math.round(product.discountPercentage)}% OFF
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/men/shirts/${product.id}`}>
          <h2 className="font-semibold text-lg mb-1 hover:text-blue-600 transition-colors">
            {product.title}
          </h2>
        </Link>

        <div className="text-sm text-gray-600 mb-2">{product.brand}</div>

        <div className="flex items-center">
          <div className="flex text-yellow-400">★★★★★</div>
          <span className="ml-1 text-gray-600 text-sm">({product.rating})</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-bold text-lg text-gray-900">
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2">
                $
                {Math.round(
                  product.price / (1 - product.discountPercentage / 100)
                )}
              </span>
            )}
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-1 text-sm font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              console.log(`Added product ${product.id} to cart`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
