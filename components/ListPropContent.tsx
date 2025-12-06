"use client";

import Image from "next/image";
import { listingPropSteps } from "@/utils/faq";
import Container from "./container/Container";
import Steps_Card from "./Steps_Card";
import { motion } from "framer-motion";

// NEW ICONS that match each step
import {
  LuMessagesSquare,
  LuMapPinCheck,
  LuPenTool,
  LuCamera,
  LuClipboardCheck,
  LuLayers,
  LuHammer,
  LuBadgeCheck,
} from "react-icons/lu";

const stepIcons = [
  LuMessagesSquare,
  LuMapPinCheck,
  LuPenTool,
  LuCamera,
  LuClipboardCheck,
  LuLayers,
  LuHammer,
  LuBadgeCheck,
];

const ListPropContent = () => {
  return (
    <Container>
      <section className="py-16">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] font-montserrat text-gold-light text-sm mb-3">
            Your Journey With Tafaseel
          </p>

          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            From Vision to Reality
          </h2>

          <p className="font-poppins text-textMuted text-lg max-w-2xl mx-auto mt-4">
            Our process ensures clarity, luxury, and precision at every step—
            delivering a seamless, stress-free experience from concept to completion.
          </p>

          {/* Luxury Divider */}
          <div className="w-24 h-1 mx-auto mt-6 rounded-full gold-gradient shadow-lg" />
        </motion.div>

        {/* ================= STEPS — SCROLLABLE ROW ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="
            flex gap-8 overflow-x-auto overflow-y-visible hide-scrollbar py-6
          "
        >
          {listingPropSteps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <Steps_Card
                  step_number={step.step_number}
                  title={step.title}
                  description={step.description}
                  icon={
                    <Icon
                      className="text-white text-4xl drop-shadow-xl"
                    />
                  }
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </Container>
  );
};

export default ListPropContent;
