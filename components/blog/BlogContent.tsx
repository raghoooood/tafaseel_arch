'use client';

import { useState, useMemo } from "react";
import { Post } from "@/types";
import BlogContainer from "./BlogContainer";
import BlogCard from "./BlogCard";

interface Props {
  posts: Post[];
}

const POSTS_PER_PAGE = 9;

export default function BlogContent({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  /* =========================
     UNIQUE CATEGORIES
  ========================= */
  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach((post) => {
      post.categories?.forEach((cat) => {
        categories.add(cat.title);
      });
    });
    return Array.from(categories);
  }, [posts]);

  /* =========================
     FILTER POSTS
  ========================= */
  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories?.some(
          (cat) => cat.title === selectedCategory
        )
      )
    : posts;

  /* =========================
     PAGINATION
  ========================= */
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <BlogContainer className="padding-container">

      {/* ================= CATEGORIES ================= */}
      {uniqueCategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`px-6 py-2 rounded-full font-montserrat text-sm transition
              ${
                !selectedCategory
                  ? "gold-gradient text-white shadow-md"
                  : "bg-white text-charcoal border border-gray-300 hover:border-gold"
              }`}
          >
            All
          </button>

          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full font-montserrat text-sm transition
                ${
                  selectedCategory === category
                    ? "gold-gradient text-white shadow-md"
                    : "bg-white text-charcoal border border-gray-300 hover:border-gold"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* ================= POSTS GRID ================= */}
      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-20">
          No posts found.
        </p>
      )}

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt-20">

          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-full font-montserrat text-sm transition
              ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-charcoal text-gold hover:text-white"
              }`}
          >
            Previous
          </button>

          <span className="text-sm text-gray-600 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-full font-montserrat text-sm transition
              ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-charcoal text-gold hover:text-white"
              }`}
          >
            Next
          </button>

        </div>
      )}
    </BlogContainer>
  );
}
