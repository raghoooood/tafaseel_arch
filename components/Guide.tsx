import Image from 'next/image';
import React from 'react';
import { FaCubes, FaHardHat, FaPaintBrush, FaRulerCombined } from 'react-icons/fa';

const servicesData = [
  {
    title: "Interior & Exterior Design",
    icon: <FaPaintBrush className="text-gold w-12 h-12 drop-shadow-md" />,
  },
  {
    title: "Realistic Rendering",
    icon: <FaCubes className="text-gold w-12 h-12 drop-shadow-md" />,
  },
  {
    title: "Décor & Fit-Out Execution",
    icon: <FaRulerCombined className="text-gold w-12 h-12 drop-shadow-md" />,
  },
  {
    title: "Project Supervision",
    icon: <FaHardHat className="text-gold w-12 h-12 drop-shadow-md" />,
  },
];

const Guide = () => {
  return (
    <section className="max-container padding-container w-full py-20">

      {/* TOP GRID SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE – DESCRIPTION */}
        <div>
          <p className="uppercase tracking-[0.2em] font-montserrat text-gold-light mb-4 text-sm">
            Where Art Lives in Every Detail
          </p>

          <h2 className="font-montserrat font-bold text-4xl lg:text-6xl text-charcoal mb-6 leading-tight">
            At Tafaseel
          </h2>

          <p className="font-poppins text-textMuted text-lg leading-relaxed">
            We believe that true beauty begins in the smallest details that make 
            the biggest difference. We transform ideas into spaces that radiate 
            elegance and harmony, blending modern innovation with Arabic identity 
            to reflect your personality and tell your story through design.  
            Our architects and designers combine vision with precision to deliver 
            an exceptional journey — from the first concept to the final handover.
          </p>
        </div>

        {/* RIGHT SIDE – SERVICES */}
        <div className="grid grid-cols-2 gap-8 p-2 sm:p-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="
                p-6 bg-white rounded-2xl shadow-md border border-gold-light/30
                hover:shadow-xl hover:border-gold hover:-translate-y-2
                transition-all duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center rounded-2xl mb-4 
                  bg-gold/10 hover:bg-gold/20 transition duration-300
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-montserrat font-semibold text-charcoal text-lg tracking-wide">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* IMAGE SECTION */}
      <div className="flexCenter relative w-full mt-20">

        {/* Background Image */}
        <div className="relative w-full">
          <Image 
            src="/images/interior1.jpg"
            alt="interior"
            width={1440}
            height={580}
            className="
              w-full object-cover object-center 2xl:rounded-5xl shadow-2xl
            "
          />
        </div>

        {/* LUXURY INFO CARD */}
        <div 
          className="
            absolute bg-white 
            py-8 px-6 gap-4 rounded-3xl shadow-xl border border-gold-light
            md:left-[5%] lg:top-20 max-w-[280px] w-full flex flex-col
            backdrop-blur-[2px]
          "
        >
          <h4 className="font-montserrat font-bold text-charcoal text-xl">
            Premium Interiors
          </h4>

          <p className="font-poppins text-textMuted text-sm">
            Design Excellence Delivered
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Image 
              src="/meter.svg"
              alt="meter"
              width={20}
              height={160}
              className="h-12 w-auto opacity-60"
            />

            <div>
              <p className="font-poppins text-textMuted text-sm">
                Project Timeline
              </p>
              <p className="font-montserrat font-semibold text-gold mt-1 text-lg">
                6–12 Weeks
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Guide;
