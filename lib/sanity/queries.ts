export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage,
    "date": coalesce(publishedAt, _createdAt),
    author->{ name },
    categories[]->{ _id, title }
  }
`

