"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// =======================
// MOTION VARIANTS (Fixed)
// =======================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -70 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
} satisfies Variants;

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// =======================
// CAMP SITE CARD
// =======================

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  index: number;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  index,
}: CampProps) => {
  return (
    <motion.div
      variants={fadeInLeft}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`
        h-full w-full min-w-[1100px] 
        ${backgroundImage} bg-cover bg-no-repeat
        lg:rounded-r-5xl 2xl:rounded-5xl
        relative overflow-hidden
      `}
    >
      {/* GOLD OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">

        {/* TITLE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flexCenter gap-4"
        >
          <div className="rounded-full gold-gradient p-4 shadow-xl backdrop-blur-sm">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
              className="brightness-0 invert"
            />
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-white text-xl tracking-wide">
              {title}
            </h4>
            <p className="font-poppins text-textMuted text-sm">{subtitle}</p>
          </div>
        </motion.div>

        {/* PEOPLE JOINED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flexCenter gap-6"
        >
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="h-10 w-10 rounded-full border-2 border-gold-light"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>

          <p className="font-montserrat font-semibold text-white text-lg">
            {peopleJoined}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

// =======================
// MAIN CAMP SECTION
// =======================

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-12 lg:py-20 xl:py-24">

      {/* SLIDER SECTION */}
      <div
        className="
          hide-scrollbar 
          flex h-[340px] w-full items-start justify-start gap-8 
          overflow-x-auto lg:h-[400px] xl:h-[640px]
        "
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Luxury Living Space"
          subtitle="Custom-designed elegant interiors"
          peopleJoined="150+ Clients"
          index={0}
        />

        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Modern Architectural Vision"
          subtitle="Premium spaces crafted with precision"
          peopleJoined="120+ Projects"
          index={1}
        />
      </div>

      {/* PROMO BOX */}
      <motion.div
        variants={fadeInScale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6"
      >
        <div
          className="
            gold-gradient-light
            p-8 xl:px-16 xl:py-20 relative w-full 
            lg:max-w-[500px] xl:max-w-[734px] 
            rounded-3xl xl:rounded-5xl shadow-xl text-white
          "
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl xl:text-5xl leading-tight">
            Tafaseel Interior Design & Architecture
          </h2>

          <p className="font-poppins text-lg mt-4 opacity-95">
            Where Art Lives in Every Detail
          </p>

          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote opacity-50 absolute bottom-4 right-4"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Camp;
