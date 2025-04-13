import Link from "next/link";
import Search from "./Search";
import { ShoppingCart, User, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ShopHub
            </Link>
          </div>

          {/* Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/men"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/women"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="/phones"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Phones
                </Link>
              </li>
              <li>
                <Link
                  href="/furniture"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Furniture
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search */}
          <div className="w-full md:w-auto">
            <Search />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/wishlist"
              className="text-gray-700 hover:text-blue-600"
            >
              <Heart size={24} />
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-blue-600 relative"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600">
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
