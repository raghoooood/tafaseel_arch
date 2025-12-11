'use client';

import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import GalleryGrid from "./GalleryGrid";
import LightboxModal from "./LightboxModal";
import { GalleryImage } from "@/utils/types";
import { fetchProjectsByCategory, Project } from "@/actions/projects";
import { motion } from "framer-motion";

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

const ITEMS_PER_PAGE = 12;

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Data
  useEffect(() => {
    fetchProjectsByCategory(selectedCategory)
      .then((data: Project[]) => {
        setProjects(data);

        const galleryImages: GalleryImage[] = data.flatMap((proj, projIndex) =>
          proj.images.projectImages.map((imgSrc, imgIndex) => ({
            id: projIndex * 1000 + imgIndex,
            src: imgSrc,
            alt: proj.name,
            category: proj.category,
          }))
        );

        setImages(galleryImages);
        setCurrentPage(1); // reset on category change
      })
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  const handleImageClick = (image: GalleryImage) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  // Pagination logic
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = images.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto pt-20 pb-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="font-montserrat font-bold text-charcoal text-4xl md:text-5xl tracking-tight">
          Tafaseel Project Gallery
        </h1>
        <p className="font-poppins text-textMuted mt-3 text-lg">
          Explore our finest luxury interior and architectural projects
        </p>
        <div className="mx-auto mt-4 h-1 w-24 gold-gradient rounded-full" />
      </div>

      {/* FILTER BAR */}
      <div className="mb-12">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* IMAGE GRID */}
      <GalleryGrid images={currentImages} onImageClick={handleImageClick} />

      {/* LUXURY PAGINATION */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-3 mt-16 select-none"
        >
          {/* PREVIOUS */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="
              px-6 py-3 border border-gold-light/60 rounded-full
              text-charcoal font-medium
              hover:bg-gold hover:text-white transition
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            ← Previous
          </button>

          {/* SMART PAGE NUMBERS */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isNear =
                page === currentPage ||
                page === currentPage - 1 ||
                page === currentPage + 1;

              const isEdge = page === 1 || page === totalPages;

              if (isNear || isEdge) {
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      w-10 h-10 flexCenter rounded-full transition-all font-semibold
                      ${
                        currentPage === page
                          ? "bg-gold text-white shadow-lg shadow-gold/30"
                          : "border border-gold-light text-charcoal hover:bg-gold hover:text-white"
                      }
                    `}
                  >
                    {page}
                  </button>
                );
              }

              if (
                (page === currentPage - 2 && page > 1) ||
                (page === currentPage + 2 && page < totalPages)
              ) {
                return (
                  <span key={`dots-${page}`} className="px-2 text-charcoal/60">
                    …
                  </span>
                );
              }

              return null;
            })}
          </div>

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="
              px-6 py-3 border border-gold-light/60 rounded-full
              text-charcoal font-medium
              hover:bg-gold hover:text-white transition
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            Next →
          </button>
        </motion.div>
      )}

      {/* LIGHTBOX */}
      <LightboxModal image={lightboxImage} onClose={closeLightbox} />
    </div>
  );
};

export default GalleryPage;
