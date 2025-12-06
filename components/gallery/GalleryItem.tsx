import React from "react";
import { GalleryImage } from "@/utils/types";

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div
      className="
        break-inside-avoid mb-6 cursor-pointer group relative 
        overflow-hidden rounded-3xl shadow-md 
        transition-all duration-500
      "
      onClick={() => onClick(image)}
    >
      {/* IMAGE */}
      <img
        src={image.src}
        alt={image.alt}
        className="
          w-full object-cover 
          transition-all duration-500 
          group-hover:scale-110
        "
      />

      {/* HOVER GOLD OUTLINE */}
      <div
        className="
          absolute inset-0 rounded-3xl 
          border-2 border-transparent group-hover:border-gold 
          transition-all duration-500
        "
      />

      {/* SOFT GOLD LIGHT ON HOVER */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-20
          bg-gradient-to-br from-gold-light to-gold-dark
          transition-opacity duration-500
        "
      />

      {/* SHADOW LIFT */}
      <div
        className="
          absolute inset-0 
          group-hover:shadow-2xl group-hover:shadow-[#D4AF3733]
          transition-shadow duration-500
        "
      />
    </div>
  );
};

export default GalleryItem;
