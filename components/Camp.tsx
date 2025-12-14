"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// =======================
// Motion Variants
// =======================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// =======================
// CampSite Card
// =======================

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`
        relative h-[340px] lg:h-[400px] xl:h-[640px]
        w-full rounded-3xl overflow-hidden bg-cover bg-center
        ${backgroundImage}
      `}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between px-8 py-8 lg:px-16">
        
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="rounded-full gold-gradient p-4 shadow-xl backdrop-blur-sm">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={30}
              height={30}
              className="brightness-0 invert"
            />
          </div>

          <div>
            <h4 className="font-montserrat text-white font-semibold text-xl">
              {title}
            </h4>
            <p className="text-textMuted text-sm">{subtitle}</p>
          </div>
        </div>

        {/* People */}
        <div className="flex items-center gap-5">
          <span className="flex -space-x-4">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={45}
                height={45}
                className="rounded-full border-2 border-gold-light"
              />
            ))}
          </span>

          <p className="text-white font-montserrat text-lg font-semibold">
            {peopleJoined}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// =======================
// Main Section
// =======================

const Camp = () => {
  return (
    <section className="relative flex flex-col py-16 lg:py-24">

      {/* ===== SLIDER (Swiper) ===== */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full 2xl:max-container px-6"
      >
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Luxury Living Space"
            subtitle="Custom-designed elegant interiors"
            peopleJoined="150+ Clients"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Modern Architectural Vision"
            subtitle="Premium spaces crafted with precision"
            peopleJoined="120+ Projects"
          />
        </SwiperSlide>
      </Swiper>

      {/* ===== PROMO BOX ===== */}
      <motion.div
        variants={fadeInScale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-end mt-12 px-6 lg:-mt-60 lg:mr-6"
      >
        <div
          className="
            gold-gradient-light text-white p-8 xl:px-16 xl:py-2
            w-full max-w-[600px] xl:max-w-[750px]
            rounded-3xl xl:rounded-5xl relative shadow-2xl z-50
          "
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl xl:text-5xl">
            Tafaseel Interior Design & Architecture
          </h2>

          <p className="mt-4 text-lg opacity-90">
            Where Art Lives in Every Detail
          </p>

          <Image
            src="/quote.svg"
            alt="quote"
            width={180}
            height={200}
            className="opacity-40 absolute bottom-6 right-6"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Camp;
