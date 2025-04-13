import Link from "next/link";
import Image from "next/image";
import ProductCard from "../_components/ProductCard";

export default async function MenPage() {
  // Parallel fetch requests for all three categories
  const [shirtsRes, shoesRes, watchesRes] = await Promise.all([
    fetch("https://dummyjson.com/products/category/mens-shirts"),
    fetch("https://dummyjson.com/products/category/mens-shoes"),
    fetch("https://dummyjson.com/products/category/mens-watches"),
  ]);

  // Parse JSON responses in parallel
  const [shirtsData, shoesData, watchesData] = await Promise.all([
    shirtsRes.json(),
    shoesRes.json(),
    watchesRes.json(),
  ]);

  const shirts = shirtsData.products || [];
  const shoes = shoesData.products || [];
  const watches = watchesData.products || [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Men&apos;s Collection</h1>

      {/* Shirts Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shirts</h2>
          <Link
            href="/men/shirts"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shirts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shoes Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shoes</h2>
          <Link
            href="/men/shoes"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shoes.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Watches Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Watches</h2>
          <Link
            href="/men/watches"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watches.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Banner */}
      <section className="mt-12 bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl py-10 px-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">New Season, New Style</h2>
          <p className="text-blue-100 text-lg mb-6">
            Discover our latest arrivals for men. Premium quality at affordable
            prices.
          </p>
          <Link
            href="/men/new-arrivals"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
          >
            Explore New Arrivals
          </Link>
        </div>
      </section>
    </div>
  );
}
