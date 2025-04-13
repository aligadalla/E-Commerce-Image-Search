import Link from "next/link";
import ProductCard from "../../_components/ProductCard";

export const revalidate = 3600;

export default async function MenShirtsPage() {
  const res = await fetch(
    "https://dummyjson.com/products/category/mens-shirts"
  );

  const data = await res.json();
  const products = data.products || [];

  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Men&apos;s Shirts</h1>
        <p className="text-gray-600">{products.length} products available</p>
      </div>

      {/* Products grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-gray-500 mb-4">No shirts found</div>
          <Link href="/men" className="text-blue-600 hover:underline">
            Browse all men&apos;s products
          </Link>
        </div>
      )}
    </div>
  );
}
