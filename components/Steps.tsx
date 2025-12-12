"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import ListPropContent from "./ListPropContent";

/* ===============================
✨ Motion Variants
=============================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const Steps = () => {
  return (
    <section className="w-full py-24 bg-offwhite">
      <div className="max-container padding-container">

        {/* =========================
            TOP GRID SECTION
        ========================== */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >

          {/* LEFT TEXT BLOCK */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="uppercase tracking-[0.2em] font-montserrat text-gold-light text-sm">
              Where Art Lives in Every Detail
            </p>

            <h2 className="font-montserrat font-bold text-4xl lg:text-6xl text-charcoal leading-tight">
              At Tafaseel
            </h2>

            <p className="font-poppins text-textMuted text-lg leading-relaxed max-w-xl">
              We believe that true beauty begins in the smallest details that make the biggest
              difference. We transform ideas into spaces that radiate elegance and harmony,
              blending modern innovation with Arabic identity to reflect your personality.
              Our team combines creative vision with technical precision — delivering an
              exceptional journey from concept to handover.
            </p>
          </motion.div>

          {/* RIGHT IMAGE WITH MOTION */}
          <motion.div
            variants={fadeImage}
            className="relative w-full flex justify-center items-center"
          >
            <Image
              src="/images/interior1.jpg"
              alt="interior design"
              width={900}
              height={600}
              priority
              className="
                w-full object-cover object-center 
                rounded-3xl shadow-2xl 
                border border-gold-light/60
              "
            />
          </motion.div>

        </motion.div>

        {/* =========================
            STEPS CONTENT (Centered)
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: "easeOut" }
          }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center w-full"
        >
          <div className="w-full max-w-7xl">
            <ListPropContent />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Steps;
