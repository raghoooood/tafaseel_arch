"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  LuPenTool,
  LuCamera,
  LuRuler,
  LuTrees,
  LuFileText,
  LuCalculator,
  LuHardHat,
} from "react-icons/lu";

const SERVICES = [
  {
    title: "Interior & Exterior Design",
    icon: LuPenTool,
    description:
      "Tailored luxury design blending modern aesthetics with cultural identity.",
  },
  {
    title: "Realistic 3D Rendering",
    icon: LuCamera,
    description:
      "Photorealistic visuals allowing you to explore your project before execution.",
  },
  {
    title: "Décor & Fit-Out Execution",
    icon: LuRuler,
    description: "Flawless execution with luxury finishing and precision.",
  },
  {
    title: "Landscape Design",
    icon: LuTrees,
    description:
      "Outdoor sanctuaries built with serenity, balance, and architectural harmony.",
  },
  {
    title: "Construction Drawings",
    icon: LuFileText,
    description:
      "Detailed technical documentation ensuring smooth project workflow.",
  },
  {
    title: "Quantity Surveying",
    icon: LuCalculator,
    description: "Accurate cost estimation and transparent budgeting.",
  },
  {
    title: "Project Supervision",
    icon: LuHardHat,
    description: "Expert on-site supervision guaranteeing design integrity.",
  },
];

const ServicesSection = () => {
  const [cards, setCards] = useState(SERVICES);

  const removeTopCard = () => {
    setCards((prev) => {
      const updated = [...prev];
      const first = updated.shift(); // remove first card
      if (first) updated.push(first); // move it to the end
      return updated;
    });
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-[50%] h-full hidden lg:block"
      >
        <Image
          src="/images/design2.jpg"
          alt="Luxury Interior"
          fill
          className="object-cover rounded-r-[40px]"
        />
      </motion.div>

      {/* CONTENT RIGHT SIDE */}
      <div className="relative max-w-7xl mx-auto px-6 lg:pl-[55%] z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="uppercase tracking-[0.25em] text-gold-light text-sm mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-charcoal">
            Our Luxury Services
          </h2>
          <div className="w-20 h-[3px] gold-gradient mt-4 rounded-full"></div>
        </motion.div>

        {/* Stacked Swipeable Cards */}
        <div className="relative h-[420px] max-w-md mx-auto mt-10">
          {cards.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 120 || info.offset.x < -120) {
                    removeTopCard();
                  }
                }}
                className="
                  absolute w-full bg-white p-8 rounded-3xl shadow-xl border border-gold-light/40 
                  cursor-grab active:cursor-grabbing
                "
                style={{
                  zIndex: SERVICES.length - index,
                  rotate: index === 0 ? 0 : (index % 2 ? 2 : -2),
                  top: index * 15,
                  scale: 1 - index * 0.03,
                  opacity: index < 4 ? 1 : 0,
                }}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* ICON */}
                <div
                  className="
                    w-16 h-16 flex items-center justify-center rounded-xl
                    bg-gradient-to-br from-gold to-gold-light text-white text-3xl shadow-lg
                  "
                >
                  <Icon />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-charcoal">
                  {service.title}
                </h3>

                <p className="mt-3 text-textMuted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Swipe Hint */}
        <p className="text-center mt-6 text-textMuted text-sm">
          Swipe the cards → to explore our services
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
