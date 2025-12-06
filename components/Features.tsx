import Image from 'next/image';
import React from 'react';
import { 
  FaPaintBrush, 
  FaCubes, 
  FaRulerCombined, 
  FaTree, 
  FaFileAlt, 
  FaCalculator, 
  FaHardHat 
} from "react-icons/fa";

const SERVICES = [
  {
    title: "Interior & Exterior Design",
    icon: FaPaintBrush,
    description: "Beautiful and functional designs tailored to your lifestyle.",
  },
  {
    title: "Realistic Rendering",
    icon: FaCubes,
    description: "High-quality 3D images to visualize your project clearly.",
  },
  {
    title: "Décor & Fit-Out Execution",
    icon: FaRulerCombined,
    description: "Premium finishing quality from concept to completion.",
  },
  {
    title: "Landscape Design",
    icon: FaTree,
    description: "Elegant outdoor spaces designed with harmony and balance.",
  },
  {
    title: "Construction Drawings",
    icon: FaFileAlt,
    description: "Precise and accurate drawings ensuring seamless execution.",
  },
  {
    title: "Quantity Surveying",
    icon: FaCalculator,
    description: "Transparent budgeting with accurate material costing.",
  },
  {
    title: "Project Supervision",
    icon: FaHardHat,
    description: "Professional on-site supervision guaranteeing quality delivery.",
  },
];

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-offwhite py-28 relative">
      
      {/* Soft gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF3755] to-transparent pointer-events-none" />

      <div className="max-container padding-container relative z-10 flex justify-end">
        
        {/* Phone Image */}
        <div className="flex flex-1 lg:min-h-[900px] opacity-80">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          
          {/* TITLE */}
          <div className="relative">
            <h2 className="font-montserrat font-bold text-charcoal text-4xl lg:text-6xl tracking-tight">
              Our Luxury Services
            </h2>
            <span className="block w-20 h-1 mt-3 gold-gradient rounded-full" />
          </div>

          {/* SERVICES LIST */}
          <ul className="mt-16 grid gap-14 md:grid-cols-2 lg:gap-20">
            {SERVICES.map((service) => (
              <FeatureItem
                key={service.title}
                title={service.title}
                icon={<service.icon className="text-gold text-4xl drop-shadow-md" />}
                description={service.description}
              />
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li
      className="
        flex flex-col items-start p-6 rounded-3xl bg-white shadow-md
        transition-all duration-300 border border-gold-light/40
        hover:-translate-y-2 hover:shadow-xl hover:border-gold
      "
    >
      {/* Icon */}
      <div className="
        rounded-full p-5 gold-gradient shadow-lg text-white flex items-center justify-center
        w-20 h-20
      ">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-montserrat font-semibold text-charcoal text-xl mt-6 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="font-poppins text-textMuted text-[15px] mt-4 leading-relaxed">
        {description}
      </p>
    </li>
  );
};

export default Features;
