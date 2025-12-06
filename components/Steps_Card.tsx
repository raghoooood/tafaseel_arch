"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface StepCardProps {
  step_number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Steps_Card: React.FC<StepCardProps> = ({
  step_number,
  title,
  description,
  icon,
}) => {
  // Parallax effect
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -10]); 
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <motion.div
      style={{
        y: parallaxY,
        opacity: parallaxOpacity,
      }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      }}
      className="
        relative flex flex-col justify-between
        bg-white rounded-3xl 
        px-7 py-10
        shadow-md hover:shadow-xl
        border border-gold-light/30 hover:border-gold
        transition-all duration-300
        w-[300px] h-[320px]
        overflow-visible
      "
    >
      {/* Icon Badge INSIDE card so it never gets clipped */}
      <div
        className="
          absolute top-4 left-4
          w-14 h-14 rounded-2xl 
          gold-gradient text-white flex items-center justify-center
          shadow-lg
        "
      >
        {icon}
      </div>

      {/* Card Content */}
      <div className="pt-20">
        <p className="font-montserrat text-gold text-xs tracking-wide mb-3">
          {step_number}
        </p>

        <h3 className="font-montserrat font-semibold text-charcoal text-xl leading-snug">
          {title}
        </h3>

        <p className="font-poppins text-textMuted text-sm leading-relaxed mt-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Steps_Card;
