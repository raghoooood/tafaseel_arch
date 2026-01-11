import BlogContent from "@/components/blog/BlogContent";
import { client } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { Post } from "@/types";

export const revalidate = 60; // ISR

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <section className="bg-offwhite py-20">
      <div className="max-container padding-container">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="heading-main bold-40 mb-4">
            Our Blog
          </h1>
          <p className="text-body max-w-2xl mx-auto">
            Insights, design inspiration, and architectural perspectives from
            Tafaseel.
          </p>
        </div>

        {/* Blog Content */}
        <BlogContent posts={posts} />
      </div>
    </section>
  );
}
