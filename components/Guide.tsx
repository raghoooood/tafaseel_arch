"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  FaCubes, 
  FaHardHat, 
  FaPaintBrush, 
  FaRulerCombined 
} from "react-icons/fa";

/* =======================
✨ SERVICES DATA
======================= */
const servicesData = [
  {
    title: "Interior & Exterior Design",
    icon: <FaPaintBrush className="text-gold w-12 h-12 drop-shadow-md" />,
  },
  {
    title: "Realistic Rendering",
    icon: <FaCubes className="text-gold w-12 h-12 drop-shadow-md" />,
  },
  {
    title: "Décor & Fit-Out Execution",
    icon: <FaRulerCombined className="text-gold w-12 h-12 drop-shadow-md" />,
  },
  {
    title: "Project Supervision",
    icon: <FaHardHat className="text-gold w-12 h-12 drop-shadow-md" />,
  },
];

/* =======================
✨ SLIDER IMAGES — Folder A
======================= */
const sliderImages = Array.from({ length: 12 }, (_, i) =>
  `/images/exterior/exterior-${i + 1}.png`
);

/* =======================
✨ ANIMATION VARIANTS
======================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0.5, transition: { duration: 0.9 } }
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.20 } }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0, transition: { duration: 0.8 }
  }
};

const fadeImage: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.5 } }
};

const floatCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.6 }
  }
};

/* =======================
✨ COMPONENT
======================= */

const Guide = () => {

  const [current, setCurrent] = React.useState(0);

  /* ⏳ SLIDE SPEED = 6 seconds */
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /* Arrow Functions */
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="max-container padding-container w-full py-20">

      {/* ================= LEFT TEXT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-gold-light mb-4 text-sm">
            Where Art Lives in Every Detail
          </p>

          <h2 className="font-montserrat font-bold text-4xl lg:text-6xl text-charcoal mb-6">
            At Tafaseel
          </h2>

          <p className="font-poppins text-textMuted text-lg leading-relaxed">
            We believe that true beauty begins in the smallest details...
          </p>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0 25px 50px rgba(0,0,0,0.18)",
              }}
              className="p-6 bg-white rounded-2xl shadow-md border border-gold-light group transition"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition">
                {service.icon}
              </div>

              <h3 className="font-semibold text-charcoal group-hover:text-gold transition">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ================= LUXURY SLIDER SECTION ================= */}
      <div className="relative w-full mt-20">

        {/* SLIDER WRAPPER */}
        <motion.div
          variants={fadeImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full h-[680px] overflow-hidden rounded-3xl shadow-2xl"
        >
          {sliderImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.08,
              }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute inset-0 p-8"
            >
              <Image
                src={src}
                alt={`exterior-${index}`}
                fill
                quality={100}
                priority={index === 0}
                className="object-cover "
              />
            </motion.div>
          ))}

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              absolute left-6 top-1/2 -translate-y-1/2 
              text-white/90 hover:text-white 
              text-4xl font-light z-20
            "
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              absolute right-6 top-1/2 -translate-y-1/2 
              text-white/90 hover:text-white 
              text-4xl font-light z-20
            "
          >
            →
          </button>

        </motion.div>

        {/* FLOATING INFO CARD — SAME AS YOUR ORIGINAL */}
        <motion.div
          variants={floatCard}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            absolute bg-white 
            py-8 px-6 gap-4 rounded-3xl shadow-xl border border-gold-light
            md:left-[5%] lg:top-20 max-w-[280px] w-full flex flex-col
            backdrop-blur-[2px]
          "
        >
          <h4 className="font-montserrat font-bold text-charcoal text-xl">
            Premium Exterior
          </h4>

          <p className="font-poppins text-textMuted text-sm">
            Design Excellence Delivered
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/meter.svg"
              alt="meter"
              width={20}
              height={160}
              className="h-12 opacity-60"
            />

            <div>
              <p className="text-textMuted text-sm">Project Timeline</p>
              <p className="text-gold font-semibold text-lg mt-1">
                6–12 Weeks
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Guide;
