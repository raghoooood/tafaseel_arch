import React from "react";
import { GalleryImage } from "@/utils/types";

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[90%] max-w-[90%] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold"
      >
        &times;
      </button>
    </div>
  );
};

export default LightboxModal;
