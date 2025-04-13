"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "../_components/ProductCard";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get("q") || "";
  const searchType = searchParams.get("type") || "text";

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);

      try {
        if (searchType === "image") {
          const storedResults = localStorage.getItem("imageSearchResults");
          if (storedResults) {
            const parsedResults = JSON.parse(storedResults);
            setProducts(parsedResults.products || []);
            localStorage.removeItem("imageSearchResults");
            return;
          }
        }

        if (query) {
          const response = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(
              query
            )}`,
            { cache: "no-store" }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch search results");
          }

          const data = await response.json();
          setProducts(data.products || []);
        }
      } catch (err) {
        console.error("Search error:", err);
        setError("Failed to load search results. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query, searchType]);

  const pageTitle =
    searchType === "image"
      ? "Image Search Results"
      : `Search Results for "${query}"`;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-lg">
        <div className="text-red-500 mb-4">{error}</div>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home Page
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <p className="text-gray-600">{products.length} products found</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-gray-500 mb-4">
            {searchType === "image"
              ? "No products match your image"
              : `No products found for "${query}"`}
          </div>
          <p className="text-gray-600 mb-6">
            Try using different search terms or browse our categories
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Return to Home Page
          </Link>
        </div>
      )}
    </div>
  );
}
