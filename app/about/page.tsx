"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TeamStats from "@/components/team/TeamStats";

// Icons
import {
  LuPenTool,
  LuRuler,
  LuLayers,
  LuHammer,
  LuTrees,
  LuBuilding2
} from "react-icons/lu";

// ================= Motion Variants =================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/images/design2.jpg"
          alt="Luxury Interior"
          fill
          className="object-cover brightness-[0.45]"
          priority
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-white text-4xl md:text-6xl font-montserrat font-bold drop-shadow-2xl">
            Tafaseel Interior Design & Architecture
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-4 tracking-wide">
            Where Art Lives in Every Detail
          </p>
        </motion.div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-charcoal mb-6">
              About Us
            </h2>
            <p className="text-lg text-textMuted leading-relaxed font-poppins">
              At Tafaseel, we believe beauty begins in the smallest details.  
              Every line, curve, and material tells a story.  
              Our mission is to transform ideas into spaces that radiate elegance, harmony,  
              and cultural authenticity — blending modern innovation with subtle Arabic identity.
              <br /><br />
              With a multidisciplinary team of architects, designers, and engineers,  
              we deliver a seamless journey from concept to execution with precision,
              creativity, and craftsmanship.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/interior2.jpg"
              alt="About Tafaseel"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-montserrat font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <LuPenTool size={44} className="text-gold" />,
                title: "Interior & Exterior Design",
                desc: "Spaces designed with balance, elegance, and your unique identity.",
              },
              {
                icon: <LuLayers size={44} className="text-gold" />,
                title: "Realistic Rendering",
                desc: "High-end 3D visuals that let you experience your space before execution.",
              },
              {
                icon: <LuHammer size={44} className="text-gold" />,
                title: "Fit-Out & Décor Execution",
                desc: "Craftsmanship and precise execution for luxurious final results.",
              },
              {
                icon: <LuTrees size={44} className="text-gold" />,
                title: "Landscape Design",
                desc: "Outdoor spaces designed with architectural harmony and serenity.",
              },
              {
                icon: <LuRuler size={44} className="text-gold" />,
                title: "Construction Drawings",
                desc: "Detailed technical documentation ensuring flawless execution.",
              },
              {
                icon: <LuBuilding2 size={44} className="text-gold" />,
                title: "Project Supervision",
                desc: "On-site quality control from start to handover.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-gold-light/30 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-textMuted">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      {/* ================= PROJECT TYPES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl text-center font-bold mb-12"
          >
            Project Types
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                img: "/images/residential.jpg",
                title: "Residential Projects",
                desc: "Villas & apartments designed for harmony, beauty, and comfort.",
              },
              {
                img: "/images/about_bg.jpg",
                title: "Commercial Projects",
                desc: "Offices, shops & cafés reflecting strong brand identity.",
              },
              {
                img: "/images/design.jpg",
                title: "Architectural Projects",
                desc: "Modern facades and structures with cultural expression.",
              },
              {
                img: "/images/landscape.jpg",
                title: "Landscape Projects",
                desc: "Outdoor spaces blending nature with architectural elegance.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="group bg-offwhite rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                  <p className="text-textMuted">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WOOD MANUFACTURING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold mb-6"
        >
          Wood Manufacturing & Joinery
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-lg text-textMuted leading-relaxed mb-10"
        >
          Our UAE-based wood factory produces high-end woodwork with craftsmanship,  
          precision, and luxury finishing — ensuring seamless integration across all projects.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-3">Our Services Include:</h3>
            <ul className="space-y-2 text-textMuted">
              <li>• Custom wall cladding & décor</li>
              <li>• Interior & exterior wooden doors</li>
              <li>• Walk-in closets & wardrobes</li>
              <li>• Bespoke furniture production</li>
              <li>• Full joinery & carpentry solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-3">Why Our Woodwork Stands Out:</h3>
            <ul className="space-y-2 text-textMuted">
              <li>• In-house UAE manufacturing</li>
              <li>• Premium finishing quality</li>
              <li>• Accurate measurements</li>
              <li>• Exceptional attention to detail</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ================= MISSION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold mb-6"
        >
          Our Mission
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-lg text-textMuted leading-relaxed max-w-3xl"
        >
          We create spaces that reflect your identity —  
          because every detail holds meaning, and every project should be a masterpiece  
          worthy of its owner.
        </motion.p>
      </section>

      {/* ================= TEAM ================= */}
      <TeamStats />
    </>
  );
}
