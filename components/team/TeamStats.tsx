"use client";

import { motion } from "framer-motion";
import { h3 } from "framer-motion/client";
import CountUp from "react-countup";

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function TeamStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
      {/* ================= TITLE ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-charcoal">
          Our Professional Team
        </h2>
        <p className="text-lg text-textMuted mt-4 max-w-3xl mx-auto leading-relaxed">
          A multidisciplinary team combining creativity, engineering precision,
          and execution expertise—bringing every design to life with excellence.
        </p>
      </motion.div>

      {/* ================= COUNTERS ================= */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
      >
        {/* ENGINEERS */}
        <motion.div variants={fadeUp} className="group">
          <h3 className="text-5xl font-bold text-gold drop-shadow-sm">
            <CountUp end={8} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium group-hover:text-gold transition">
            Engineers
          </p>
        </motion.div>

        {/* WORKERS */}
        <motion.div variants={fadeUp} className="group">
          <h3 className="text-5xl font-bold text-gold drop-shadow-sm">
            <CountUp end={32} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium group-hover:text-gold transition">
            Skilled Workers
          </p>
        </motion.div>

        {/* COMPLETED PROJECTS */}
        <motion.div variants={fadeUp} className="group">
          <h3 className="text-5xl font-bold text-gold drop-shadow-sm">
            <CountUp end={120} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium group-hover:text-gold transition">
            Completed Projects
          </p>
        </motion.div>

        {/* ONGOING PROJECTS */}
        <motion.div variants={fadeUp} className="group">
          <h3 className="text-5xl font-bold text-gold drop-shadow-sm">
            <CountUp end={9} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium group-hover:text-gold transition">
            Ongoing Projects
          </p>
        </motion.div>
      </motion.div>

      {/* ================= TEAM BREAKDOWN ================= */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mt-24"
      >
{/* ENGINEERING CARD */}
<motion.div
  variants={fadeUp}
  className="bg-white p-10 rounded-3xl shadow-xl border border-gold-light/40
             hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
>
  <h3 className="text-2xl font-semibold font-montserrat text-gold mb-8 text-center">
    Engineering Team
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

    {/* ARCHITECTURAL */}
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-4 shadow-md">
        <svg
          className="w-10 h-10 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18M3 10l9-7 9 7M9 21v-6h6v6" />
        </svg>
      </div>
      <p className="font-montserrat font-medium text-charcoal">
        Architectural Engineering
      </p>
    </motion.div>

    {/* INTERIOR DESIGN */}
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-4 shadow-md">
        <svg
          className="w-10 h-10 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M4 3h16M4 21h16M4 3v18M20 3v18M8 7h8M8 12h8M8 17h8" />
        </svg>
      </div>
      <p className="font-montserrat font-medium text-charcoal">
        Interior Design Engineering
      </p>
    </motion.div>

    {/* CIVIL ENGINEERING */}
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-4 shadow-md">
        <svg
          className="w-10 h-10 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M3 17l9-14 9 14H3zm2 4h14" />
        </svg>
      </div>
      <p className="font-montserrat font-medium text-charcoal">
        Civil Engineering
      </p>
    </motion.div>

  </div>
</motion.div>


        {/* EXECUTION CARD */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-10 rounded-3xl shadow-xl border border-gold-light/40
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold font-montserrat text-gold mb-5">
            Execution & Labor Team
          </h3>
          <ul className="space-y-3 text-lg text-charcoal leading-relaxed">
            <li>• Carpentry & Joinery</li>
            <li>• Painting & Finishing</li>
            <li>• Gypsum & Partitions</li>
            <li>• Flooring & Tiling</li>
            <li>• MEP Support</li>
            <li>• On-Site Installations</li>
          </ul>
        </motion.div>
      </motion.div>

    </section>
  );
}
