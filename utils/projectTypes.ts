export interface ProjectTypeData {
  slug: string;
  title: string;
  short: string;       // <-- Required field
  description: string;
  image: string;
}

export const PROJECT_TYPES_DATA: ProjectTypeData[] = [
  {
    slug: "residential",
    title: "Residential Projects",
    short: "Luxury villas & apartments designed for harmony and comfort.",
    description: `
We redefine the concept of “home” by creating designs that blend comfort and luxury.
We craft villas and apartments that mirror the client’s lifestyle and personal taste —
through harmony in colors, textures, and lighting to create elegant and serene environments.

Includes:
• Private Villas
• Luxury Apartments
• Family Residences
`,
    image: "/images/residential.jpg",
  },

  {
    slug: "commercial",
    title: "Commercial Projects",
    short: "Shops, offices & cafés crafted with brand-focused design.",
    description: `
We transform brand identity into tangible experiences within commercial spaces.
Our designs elevate customer experience and enhance brand presence — focusing on 
details that leave lasting impressions.

Includes:
• Corporate Offices
• Retail Shops
• Salons
• Restaurants & Cafés
`,
    image: "/images/about_bg.jpg",
  },

  {
    slug: "architectural",
    title: "Architectural Projects",
    short: "Modern facades & structures blending beauty with function.",
    description: `
We design and develop facades and buildings combining aesthetic beauty with functionality.
By merging modern architecture with a touch of cultural identity, we create designs that 
blend naturally with their surroundings.

Includes:
• Facade Design
• Space Planning
• Exterior Development
`,
    image: "/images/design.jpg",
  },

  {
    slug: "landscape",
    title: "Landscape Projects",
    short: "Outdoor environments designed with nature, harmony & elegance.",
    description: `
We create harmony between nature and architecture through outdoor spaces full of life.
Our landscape designs combine greenery, lighting, and water features to produce serene 
and elegant environments.

Includes:
• Private Gardens
• Outdoor Areas
• Pathways
• Courtyards
`,
    image: "/images/landscape.jpg",
  },
];
