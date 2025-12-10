'use client';

import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import GalleryGrid from "./GalleryGrid";
import LightboxModal from "./LightboxModal";
import { GalleryImage } from "@/utils/types";
import { fetchProjectsByCategory, Project } from "@/actions/projects";


const categories = [
  "All",
  "Living Room",
  "Landscape",
  "Entrance",
  "Kids Bedrooms",
  "Dress Room",
  "Dining Room",
  "Commercial Design",
  "Bed Room",
  "Bathroom",
  "Architecture",
  "Landscape and Gardens",
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);


 useEffect(() => {
  fetchProjectsByCategory(selectedCategory)
    .then((data) => {
      setProjects(data);

      // Flatten all images from all projects
      const galleryImages: GalleryImage[] = data.flatMap((proj, projIndex) => 
        proj.images.projectImages.map((imgSrc, imgIndex) => ({
          id: projIndex * 1000 + imgIndex, // unique id
          src: imgSrc,                     // each image URL
          alt: proj.name,
          category: proj.category,
        }))
      );

      setImages(galleryImages);
    })
    .catch((err) => console.error(err));
}, [selectedCategory]);



      
  const handleImageClick = (image: GalleryImage) => setLightboxImage(image);
  const handleCloseLightbox = () => setLightboxImage(null);

  return (
    <div className="max-w-7xl mx-auto pt-20 pb-24 px-6" suppressHydrationWarning={true}>
      <div className="text-center mb-14">
        <h1 className="font-montserrat font-bold text-charcoal text-4xl md:text-5xl tracking-tight">
          Tafaseel Project Gallery
        </h1>
        <p className="font-poppins text-textMuted mt-3 text-lg">
          Explore our finest luxury interior and architectural projects
        </p>
        <div className="mx-auto mt-4 h-1 w-24 gold-gradient rounded-full" />
      </div>

      <div className="mb-12">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <GalleryGrid images={images} onImageClick={handleImageClick} />
      <LightboxModal image={lightboxImage} onClose={handleCloseLightbox} />
    </div>
  );
};

export default GalleryPage;