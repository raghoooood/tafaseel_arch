import React from "react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">

      {categories.map((cat) => {
        const isActive = selectedCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`
              px-5 py-2.5 rounded-full font-poppins text-sm md:text-base
              transition-all duration-300 border 
              ${
                isActive
                  ? "gold-gradient text-white border-transparent shadow-md shadow-[#D4AF3725]"
                  : "bg-white text-charcoal border-gold-light hover:bg-gold-light/10 hover:border-gold-light hover:text-gold-dark"
              }
            `}
          >
            {cat}
          </button>
        );
      })}

    </div>
  );
};

export default FilterBar;
