"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TeamStats from "@/components/team/TeamStats";
import { PROJECT_TYPES_DATA } from "@/utils/projectTypes";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
};

export default function AboutPage() {
  const router = useRouter();

  return (
    <>
      {/* HERO */}
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

      {/* ABOUT US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-charcoal mb-6">
              About Us
            </h2>
            <p className="text-lg text-textMuted leading-relaxed font-poppins">
              At Tafaseel, we believe beauty begins in the smallest details.
              Every line, curve, and material tells a story.  
              Our mission is to transform ideas into luxurious spaces that radiate elegance,
              harmony and authentic personality.
              <br /><br />
              With architects, designers and engineers collaborating together, we offer a
              seamless journey from concept to execution.
            </p>
          </div>

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

      {/* PROJECT TYPES */}
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

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {PROJECT_TYPES_DATA.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => router.push(`/project-types/${card.slug}`)}
                className="
                  group bg-offwhite rounded-2xl overflow-hidden shadow-md 
                  hover:shadow-xl hover:-translate-y-2 transition-all 
                  cursor-pointer
                "
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                  <p className="text-textMuted">{card.short}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <TeamStats />
    </>
  );
}
