"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaCubes, FaHardHat, FaPaintBrush, FaRulerCombined } from "react-icons/fa";

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
✨ MOTION VARIANTS
======================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 }
  }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const floatCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.3 }
  }
};

/* =======================
✨ COMPONENT
======================= */

const Guide = () => {
  return (
    <section className="max-container padding-container w-full py-20">

      {/* ================= LEFT TEXT SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] font-montserrat text-gold-light mb-4 text-sm">
            Where Art Lives in Every Detail
          </p>

          <h2 className="font-montserrat font-bold text-4xl lg:text-6xl text-charcoal mb-6 leading-tight">
            At Tafaseel
          </h2>

          <p className="font-poppins text-textMuted text-lg leading-relaxed">
            We believe that true beauty begins in the smallest details that make the biggest
            difference. We transform ideas into spaces that radiate elegance and harmony,
            blending modern innovation with Arabic identity to reflect your personality.
            Our architects and designers combine vision with precision to deliver an
            exceptional journey — from the first concept to the final handover.
          </p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-8 p-2 sm:p-4"
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
                transition: { type: "spring", stiffness: 200, damping: 12 }
              }}
              className="
                p-6 bg-white rounded-2xl shadow-md border border-gold-light/30
                hover:border-gold transition-all duration-500
                relative group overflow-hidden
              "
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-20 transition"
              />

              {/* Icon */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center rounded-2xl mb-4 
                  bg-gold/10 group-hover:bg-gold/20 transition duration-300
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-montserrat font-semibold text-charcoal group-hover:text-gold text-lg tracking-wide transition">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="flexCenter relative w-full mt-20">

        {/* Background Image with fade motion */}
        <motion.div
          variants={fadeImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full"
        >
          <Image 
            src="/images/interior5.jpg"
            alt="interior"
            width={1440}
            height={580}
            className="w-full object-cover 2xl:rounded-5xl shadow-2xl"
          />
        </motion.div>

        {/* Floating Info Card */}
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
            Premium Interiors
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
              <p className="font-poppins text-textMuted text-sm">Project Timeline</p>
              <p className="font-montserrat font-semibold text-gold mt-1 text-lg">
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
