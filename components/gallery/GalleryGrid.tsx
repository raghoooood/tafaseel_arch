import React from "react";
import { GalleryImage } from "@/utils/types";
import GalleryItem from "./GalleryItem";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <div
      className="
        columns-1 sm:columns-2 md:columns-3 lg:columns-4 
        gap-6 
        space-y-6 
        animate-fadeIn
      "
    >
      {images.map((img) => (
        <GalleryItem 
          key={img.id} 
          image={img} 
          onClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
