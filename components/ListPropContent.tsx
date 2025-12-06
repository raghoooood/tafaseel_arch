"use client";

import Image from 'next/image';
import { listingPropSteps } from '@/utils/faq';
import Container from './container/Container';
import Steps_Card from './Steps_Card';
import { motion } from 'framer-motion';

const ListPropContent = () => {
  return (
    <Container>
      <section className="py-16">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] font-montserrat text-gold-light text-sm mb-3">
            Your Journey With Tafaseel
          </p>

          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            From Vision to Reality
          </h2>

          <p className="font-poppins text-textMuted text-lg max-w-2xl mx-auto mt-4">
            Our process ensures clarity, luxury, and precision at every step — giving you a seamless experience from concept to completion.
          </p>

          {/* Gold Divider */}
          <div className="w-20 h-1 gold-gradient mx-auto mt-6 rounded-full" />
        </div>

        {/* STEPS SECTION — HORIZONTAL SCROLL */}
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.35, // animate one by one (left → right)
      },
    },
  }}
  className="flex gap-8 overflow-x-auto overflow-y-visible hide-scrollbar py-4"

>
  {listingPropSteps.map((step, index) => (
    <Steps_Card
      key={index}
      step_number={step.step_number}
      title={step.title}
      description={step.description}
      icon={<step.icon className="text-white text-3xl" />}
    />
  ))}
</motion.div>


      </section>
    </Container>
  );
};

export default ListPropContent;
