"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import RegisterButton from "./form/RegisterButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import type { Swiper as SwiperType } from "swiper";

// ---------- Motion Variants (with correct typings) ----------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
} as const;

const fadeUpDelay = (delay: number): Variants =>
  ({
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const);

// --------------------------------------------------------------

const Hero = () => {
  const thumbsSwiperRef = useRef<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const slides = [
    "/images/interior1.jpg",
    "/images/interior2.jpg",
    "/images/interior3.jpg",
    "/images/interior4.jpg",
  ];

  const handleThumbClick = (index: number) => {
    mainSwiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden bg-offwhite">

      {/* MAIN SLIDER */}
      <Swiper
        modules={[Thumbs, Autoplay]}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        thumbs={{ swiper: thumbsSwiperRef.current ?? undefined }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 z-0"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full h-[90vh] sm:h-screen"
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flexCenter z-10 px-6 sm:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center sm:text-left"
        >
          <motion.p
            variants={fadeUpDelay(0.2)}
            className="uppercase tracking-[0.25em] text-gold-light font-montserrat text-sm sm:text-base mb-4"
          >
            Luxury Interior Studio
          </motion.p>

          <motion.h1
            variants={fadeUpDelay(0.4)}
            className="text-white font-montserrat font-bold leading-tight text-3xl sm:text-5xl md:text-6xl mb-6"
          >
            Make Your Home <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gold inline-block"
            >
              Modern & Stylish
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUpDelay(0.6)}
            className="text-white/90 text-sm sm:text-base md:text-lg mb-8"
          >
            Transform your living space with our award-winning interior design
            solutions. We merge beauty, comfort, and luxury functionality.
          </motion.p>

          <motion.div variants={fadeUpDelay(0.8)}>
            <RegisterButton />
          </motion.div>
        </motion.div>
      </div>

      {/* THUMBNAILS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1 }}
        className="
          absolute bottom-4 sm:bottom-6 right-1/2 sm:right-6 
          translate-x-1/2 sm:translate-x-0
          w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%]
          z-[2]"
      >
        <Swiper
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
          modules={[Navigation, Thumbs]}
          slidesPerView={4}
          spaceBetween={12}
          loop
          className="rounded-xl overflow-hidden"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
          }}
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                onClick={() => handleThumbClick(i)}
                className="relative h-24 sm:h-28 md:h-32 cursor-pointer rounded-md overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-gold"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${i}`}
                  fill
                  className="object-cover rounded-md hover:opacity-80 transition"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Hero;
