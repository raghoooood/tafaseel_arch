export interface Post {
  _id: string

  title: string
  description: string

  slug: {
    current: string
  }

  mainImage?: any

  body?: any[]   // Portable Text

  _createdAt: string
  _updatedAt?: string
  publishedAt?: string

  author?: {
    name: string
  }

  categories?: {
    _id: string
    title: string
  }[]
}
