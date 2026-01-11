"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/createClient";
import { Post } from "@/types";

/* =========================
   DATE HELPER (SAFE)
========================= */
const getPostDate = (post: Post) => {
  const date = post.publishedAt || post._createdAt;
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/post/${post.slug.current}`}
      className="group block h-full"
    >
      <article
        className="relative flex flex-col h-full bg-white rounded-3xl 
                   overflow-hidden shadow-md transition-all duration-500
                   hover:shadow-2xl hover:-translate-y-1"
      >
        {/* ================= IMAGE ================= */}
        <div className="relative h-[240px] overflow-hidden">
          {post.mainImage && (
            <>
              <Image
                src={urlFor(post.mainImage).width(900).height(600).url()}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 
                           group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 
                              group-hover:opacity-100 transition duration-500" />

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 
                              gold-gradient group-hover:w-full transition-all duration-700" />
            </>
          )}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col flex-grow p-6">
          {/* Title */}
          <h3
            className="font-montserrat text-lg font-semibold text-charcoal 
                       mb-3 leading-snug transition-colors
                       group-hover:text-gold"
          >
            {post.title}
          </h3>

          {/* Author */}
          <p className="text-sm text-gray-500 mb-4">
            By{" "}
            <span className="font-medium text-charcoal">
              {post.author?.name || "Tafaseel Team"}
            </span>
          </p>

          {/* Description */}
          <p className="text-body text-sm text-gray-600 line-clamp-3 mb-6">
            {post.description}
          </p>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-400 tracking-wide">
              {getPostDate(post)}
            </span>

            <span
              className="text-sm font-montserrat font-medium text-gold
                         group-hover:translate-x-1 transition-transform"
            >
              Read More →
            </span>
          </div>
        </div>

        {/* ================= CORNER DECOR ================= */}
        <span
          className="absolute top-4 right-4 w-8 h-8 border 
                     border-gold/40 rounded-full opacity-0
                     group-hover:opacity-100 transition"
        />
      </article>
    </Link>
  );
}
