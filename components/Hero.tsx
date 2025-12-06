'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import RegisterButton from "./form/RegisterButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import type { Swiper as SwiperType } from "swiper";

const Hero = () => {
  const thumbsSwiperRef = useRef<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Same design images — just optimized
  const slides = [
    "/images/interior1.webp",
    "/images/interior2.webp",
    "/images/interior3.webp",
    "/images/interior4.webp",
  ];

  const handleThumbClick = (index: number) => {
    mainSwiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden bg-offwhite">

      {/* MAIN SLIDER — same design */}
      <Swiper
        modules={[Thumbs, Autoplay]}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        thumbs={{ swiper: thumbsSwiperRef.current ?? undefined }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 z-0"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[90vh] sm:h-screen">
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                priority={i === 0}             // Only first slide gets LCP boost
                loading={i === 0 ? "eager" : "lazy"}
                sizes="100vw"                  // Tells browser best resolution
                placeholder="blur"             // Smooth, fast loading
                blurDataURL="/images/blur.jpg" // Tiny blur image
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXT CONTENT — unchanged */}
      <div className="absolute inset-0 flexCenter z-10 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="uppercase tracking-[0.25em] text-gold-light font-montserrat font-semibold text-sm sm:text-base mb-4">
            Luxury Interior Studio
          </p>

          <h1 className="text-white font-montserrat font-bold leading-tight text-3xl sm:text-5xl md:text-6xl mb-6">
            Make Your Home <br />
            <span className="text-gold">Modern & Stylish</span>
          </h1>

          <p className="text-gray-10 text-body text-sm sm:text-base md:text-lg mb-8">
            Transform your living space with our award-winning interior design
            solutions. We merge beauty, comfort, and luxury functionality.
          </p>

          <div className="flexCenter sm:flexStart flex-col sm:flex-row gap-4">
            <RegisterButton />
          </div>
        </motion.div>
      </div>

      {/* THUMBNAIL SLIDER — unchanged visually */}
      <div
        className="
          absolute bottom-4 sm:bottom-6 right-1/2 sm:right-6 
          translate-x-1/2 sm:translate-x-0
          w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%]
          z-[2]
        "
      >
        <Swiper
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
          modules={[Navigation, Thumbs]}
          slidesPerView={4}
          spaceBetween={12}
          watchSlidesProgress
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
              <div
                onClick={() => handleThumbClick(i)}
                className="relative h-24 sm:h-28 md:h-32 cursor-pointer rounded-md overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-gold"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${i}`}
                  fill
                  loading="lazy"      // Faster initial load
                  sizes="200px"
                  placeholder="blur"
                  blurDataURL="/images/blur-thumb.jpg"
                  className="object-cover rounded-md hover:opacity-80 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
