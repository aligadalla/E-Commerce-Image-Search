"use client";

import { useState } from "react";
import { Search as SearchIcon, Camera } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showImageSearch, setShowImageSearch] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleTextSearch(e) {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  }

  async function handleImageSearch(e) {
    e.preventDefault();

    if (!imageFile) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch("https://api.example.com/image-search", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image search failed");
      }

      const searchResults = await response.json();

      localStorage.setItem("imageSearchResults", JSON.stringify(searchResults));

      router.push("/search?type=image");
    } catch (error) {
      console.error("Error searching with image:", error);
    } finally {
      setIsLoading(false);
      setShowImageSearch(false);
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleTextSearch} className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-2 pl-10 pr-12 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          disabled={isLoading}
        >
          <SearchIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => setShowImageSearch(!showImageSearch)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
          disabled={isLoading}
        >
          <Camera size={18} />
        </button>
      </form>

      {showImageSearch && (
        <form
          onSubmit={handleImageSearch}
          className="mt-2 p-3 bg-white border border-gray-200 rounded-md shadow-md"
        >
          <div className="text-sm font-medium mb-2">Search with image</div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            disabled={isLoading}
          />
          {imageFile && (
            <button
              type="submit"
              className={`mt-2 ${
                isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-4 py-2 rounded-md text-sm font-medium w-full`}
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          )}
        </form>
      )}
    </div>
  );
}
