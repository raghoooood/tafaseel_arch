import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/createClient";
import Container from "@/components/blog/BlogContainer";
import { RichText } from "./RichText";
import { Post } from "@/types";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

/* =========================
   STATIC PARAMS
========================= */
export async function generateStaticParams() {
  const query = groq`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }
  `;

  const slugs: { slug: string }[] = await client.fetch(query);

  return slugs.map(({ slug }) => ({
    slug,
  }));
}

/* =========================
   PAGE
========================= */
export default async function SlugPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      mainImage,
      publishedAt,
      _updatedAt,
      author->{
        name
      }
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <section className="py-32 text-center">
        <p className="text-gray-500">Post not found</p>
      </section>
    );
  }

  const displayDate =
    post.publishedAt?.split("T")[0] ??
    post._updatedAt?.split("T")[0];

  return (
    <section className="bg-offwhite py-20">
      <Container className="max-container padding-container">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="heading-main bold-40 mb-4">
            {post.title}
          </h1>

          <div className="text-sm text-gray-500 tracking-wide">
            <span className="font-medium text-charcoal">
              {post.author?.name || "Tafaseel Team"}
            </span>
            <span className="mx-2 text-gold">•</span>
            <span>{displayDate}</span>
          </div>
        </div>

        {/* ================= MAIN IMAGE ================= */}
        {post.mainImage && (
          <div className="relative w-full h-[420px] mb-20 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.mainImage).width(1600).height(900).url()}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* ================= CONTENT ================= */}
        <article className="blog-content max-w-4xl mx-auto">
          <PortableText value={post.body} components={RichText} />
        </article>

      </Container>
    </section>
  );
}
