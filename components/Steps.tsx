import Image from 'next/image';
import React from 'react';
import ListPropContent from './ListPropContent';

const Steps = () => {
  return (
    <section className="w-full py-24 bg-offwhite">
      <div className="max-container padding-container">

        {/* TOP GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE – DESCRIPTION */}
          <div className="space-y-6">
            <p className="uppercase tracking-[0.2em] font-montserrat text-gold-light text-sm">
              Where Art Lives in Every Detail
            </p>

            <h2 className="font-montserrat font-bold text-4xl lg:text-6xl text-charcoal leading-tight">
              At Tafaseel
            </h2>

            <p className="font-poppins text-textMuted text-lg leading-relaxed max-w-xl">
              We believe that true beauty begins in the smallest details that make the biggest
              difference. We transform ideas into spaces that radiate elegance and harmony,
              blending modern innovation with Arabic identity to reflect your personality
              and tell your story through design. Our team combines creative vision with
              technical precision — delivering an exceptional journey from concept to handover.
            </p>
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="relative w-full flex justify-center items-center">
            <Image
              src="/images/interior1.jpg"
              alt="interior design"
              width={900}
              height={600}
              priority
              className="
                w-full object-cover object-center 
                rounded-3xl shadow-2xl 
                border border-gold-light/60
              "
            />
          </div>

        </div>

        {/* STEPS CONTENT — FIXED + CENTERED */}
        <div className="mt-24 flex justify-center w-full">
          <div className="w-full max-w-7xl">
            <ListPropContent />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;
