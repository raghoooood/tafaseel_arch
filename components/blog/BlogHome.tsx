// components/blog/BlogHome.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Post } from '@/types';
import Container from '../container/Container';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BlogCard from './BlogCard';

interface Props {
  posts: Post[];
  title?: string;
}

const BlogHome: React.FC<Props> = ({ posts, title = 'Latest Blog Posts' }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setPageSize(1);
      else if (window.innerWidth < 768) setPageSize(2);
      else setPageSize(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxStart = Math.max(posts.length - pageSize, 0);
    setCurrentIndex((i) => Math.min(i, maxStart));
  }, [pageSize, posts.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - pageSize, 0));
  };

  const handleNext = () => {
    const maxStart = Math.max(posts.length - pageSize, 0);
    setCurrentIndex((prev) => Math.min(prev + pageSize, maxStart));
  };

  const showPrev = currentIndex > 0;
  const showNext = currentIndex < posts.length - pageSize;

  return (
    <Container>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 px-5">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>

        <button
          onClick={() => router.push('/blog')}
          className="hidden md:block text-sm font-medium text-orange-600 hover:underline"
        >
          More Posts
        </button>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      {/* Mobile slider (pager) */}
      <div className="relative md:hidden px-6">
        {showPrev && (
          <button
            onClick={handlePrev}
            className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
            aria-label="Previous post"
          >
            <FaChevronLeft size={14} />
          </button>
        )}

        <div className="flex justify-center">
          <div className="w-full sm:w-[390px]">
            {posts.slice(currentIndex, currentIndex + pageSize).map((post) => (
              <div key={post._id} className="mb-6">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {showNext && (
          <button
            onClick={handleNext}
            className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
            aria-label="Next post"
          >
            <FaChevronRight size={14} />
          </button>
        )}
      </div>

      {/* Mobile button */}
      <div className="md:hidden flex justify-center mt-5 px-6">
        <button
          onClick={() => router.push('/blog')}
          className="text-sm font-medium text-orange-600 hover:underline"
        >
          More Posts
        </button>
      </div>
    </Container>
  );
};

export default BlogHome;
