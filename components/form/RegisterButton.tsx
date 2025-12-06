'use client';

import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import ContactForm from './ContactForm';
import Image from 'next/image';

const RegisterButton = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);

  return (
    <div className="flex flex-col items-center">
      
      {/* BRAND BUTTON */}
      <button
        onClick={() => setShow(true)}
        className="btn-gold px-10 py-4 text-lg font-montserrat"
      >
        Register Your Interest Now
      </button>

      {show && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center p-4 
            bg-black/60 backdrop-blur-md
          "
          onClick={closeModal}
        >
          <div
            className="
              relative bg-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]
              w-full max-w-7xl p-6 lg:p-10 border border-gold-light
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="
                absolute top-4 right-4 
                text-charcoal hover:text-gold-dark 
                transition-colors duration-200
              "
            >
              <MdClose size={32} />
            </button>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* FORM SIDE */}
              <div>
                <h2 className="font-montserrat font-bold text-3xl text-charcoal mb-2">
                  Register Your Interest
                </h2>

                <p className="text-textMuted font-poppins mb-6">
                  Fill in your information and one of our specialists will assist you shortly.
                </p>

                <ContactForm />
              </div>

              {/* IMAGE SIDE */}
              <div className="hidden lg:block w-full h-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/register.jpg"
                  alt="Consultation"
                  width={700}
                  height={700}
                  className="object-cover w-full h-full"
                />
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterButton;
