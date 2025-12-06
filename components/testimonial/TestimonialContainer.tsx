"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/testimonial/TestimonialCard";
import { testimonials } from "@/utils/testimonialsData";
import Container from "../container/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialContainer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play slider
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Container>
      <div
        className="mt-24 flex justify-center items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="
            absolute left-2 sm:left-10 z-10
            bg-white gold-gradient hover:bg-gold-light 
            p-4 rounded-full shadow-lg
            transition-all hover:scale-110
          "
        >
          <FaChevronLeft className="text-white text-lg" />
        </button>

        {/* Slider */}
        <div className="w-full max-w-3xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="
            absolute right-2 sm:right-10 z-10
            gold-gradient p-4 rounded-full shadow-lg
            transition-all hover:scale-110
          "
        >
          <FaChevronRight className="text-white text-lg" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center space-x-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition-all 
              ${i === index ? "bg-gold scale-125 shadow-md" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialContainer;
