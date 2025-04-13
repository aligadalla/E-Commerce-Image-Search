import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  // const res = await fetch("https://dummyjson.com/products/category-list");
  // const data = await res.json();
  // console.log(data);
  // return null;
  // For demo purposes - in a real app, you'd fetch this data from an API
  const featuredCategories = [
    {
      id: 1,
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Phones",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Furniture",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500&auto=format&fit=crop",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
      category: "Men",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop",
      category: "Women",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Smartphone Pro Max",
      price: 999.99,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop",
      category: "Phones",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Modern Sofa",
      price: 599.99,
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=500&auto=format&fit=crop",
      category: "Furniture",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=500&auto=format&fit=crop",
      category: "Electronics",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Smart Watch",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=500&auto=format&fit=crop",
      category: "Electronics",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 119.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
      category: "Men",
      rating: 4.3,
    },
    {
      id: 8,
      name: "Coffee Table",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=500&auto=format&fit=crop",
      category: "Furniture",
      rating: 4.2,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden rounded-2xl my-8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop"
            alt="Shopping Hero"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Summer Collection 2024
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-md">
                Discover the latest trends and styles for the summer season.
              </p>
              <Link
                href="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium inline-block"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Link key={category.id} href={`/${category.name.toLowerCase()}`}>
              <div className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6 w-full">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="my-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-gray-500">
                  {product.category}
                </span>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★★★★</span>
                  <span className="text-yellow-400">
                    {product.rating >= 4.5 ? "★" : "☆"}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="my-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Summer Sale Up to 50% Off
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Limited time offer on selected items. Hurry while stocks last!
        </p>
        <Link
          href="/sale"
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium inline-block"
        >
          Shop the Sale
        </Link>
      </section>

      {/* Features Section */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Free shipping on all orders over $50. Get your items delivered in
              2-3 business days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              All transactions are secure and encrypted. We accept all major
              credit cards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600">
              Not satisfied with your purchase? Return it within 30 days for a
              full refund.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
