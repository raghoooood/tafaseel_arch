"use client";

import { motion } from "framer-motion";
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
            <CountUp end={15} duration={2} />+
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
          <h3 className="text-2xl font-semibold font-montserrat text-gold mb-5">
            Engineering Team
          </h3>
          <ul className="space-y-3 text-lg text-charcoal leading-relaxed">
            <li>• Architectural Engineering</li>
            <li>• Interior Design Engineering</li>
            <li>• Civil Engineering</li>
          </ul>
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
