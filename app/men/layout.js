import Link from "next/link";

export default function MenLayout({ children }) {
  return (
    <div className="container mx-auto px-4">
      {/* Sub-navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav
          className="flex -mb-px overflow-x-auto"
          aria-label="Men's categories"
        >
          <Link
            href="/men"
            className="py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap border-transparent hover:border-gray-300 text-gray-700 hover:text-blue-600"
          >
            All Men
          </Link>
          <Link
            href="/men/shirts"
            className="py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap border-transparent hover:border-gray-300 text-gray-700 hover:text-blue-600"
          >
            Shirts
          </Link>
          <Link
            href="/men/shoes"
            className="py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap border-transparent hover:border-gray-300 text-gray-700 hover:text-blue-600"
          >
            Shoes
          </Link>
          <Link
            href="/men/watches"
            className="py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap border-transparent hover:border-gray-300 text-gray-700 hover:text-blue-600"
          >
            Watches
          </Link>
        </nav>
      </div>

      {/* Children content */}
      <div>{children}</div>
    </div>
  );
}
