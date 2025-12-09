"use client";

import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "../Portal";

const RegisterButton = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);

  // Prevent page scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setShow(true)}
        className="btn-gold px-10 py-4 text-lg font-montserrat rounded-xl shadow-lg hover:shadow-xl transition"
      >
        Register Your Interest Now
      </button>

      {/* MODAL */}
      <Portal>
   <AnimatePresence>
    {show && (
      <motion.div
        className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="
            relative bg-white rounded-2xl shadow-2xl
            w-full max-w-4xl max-h-[90vh] overflow-y-auto p-5 sm:p-8
          "
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={closeModal}
            className="
              absolute top-3 right-3 p-2 bg-white/70
              rounded-full shadow-md hover:text-gold
            "
          >
            <MdClose size={26} />
          </button>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold">Get your consulting services from <span className="font-montserrat text-gold">Tafaseel</span></h2>
              <p className="text-textMuted text-sm mt-2 mb-4">
                Fill in your information and one of our specialists will assist you shortly.
              </p>
              <ContactForm />
            </div>

            <div className="hidden lg:block rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/register.jpg"
                alt="Consultation"
                width={700}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</Portal>

    </>
  );
};

export default RegisterButton;
