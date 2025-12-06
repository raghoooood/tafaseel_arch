"use client";

import React from "react";
import { FaUserCircle, FaQuoteRight, FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  date: string;
  testimonialTitle: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  date,
  testimonialTitle,
  testimonial,
  rating,
}) => {
  return (
    <div
      className="
        relative bg-white/90 backdrop-blur-lg
        border border-gold-light/40
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        rounded-3xl p-10 flex flex-col
        transition-all duration-300
      "
    >
      {/* Floating Quote Icon */}
      <FaQuoteRight className="
        absolute top-6 right-6 
        text-gold-light/40
        text-5xl
      " />

      {/* User Info */}
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-gold-light/20 flex items-center justify-center">
          <FaUserCircle className="text-gold-dark text-4xl" />
        </div>

        <div>
          <h3 className="font-montserrat font-bold text-charcoal text-xl">{name}</h3>
          <p className="text-sm text-textMuted">{date}</p>

          {/* Rating */}
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`
                  ${i < rating ? "text-gold" : "text-gray-300"}
                  text-lg
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-7 text-xl font-montserrat font-semibold text-charcoal">
        {testimonialTitle}
      </h2>

      {/* Text */}
      <p className="mt-3 text-textMuted font-poppins leading-relaxed text-md">
        {testimonial}
      </p>

      {/* Gold Accent Line */}
      <div className="mt-7 w-24 h-[3px] gold-gradient rounded-full"></div>
    </div>
  );
};

export default TestimonialCard;
