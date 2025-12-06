import Image from "next/image";
import Link from "next/link";

const StartProjectCTA = () => {
  return (
    <section className="relative w-full py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.25em] text-gold-light font-semibold">
            Start Your Journey
          </p>

          <h2 className="text-charcoal font-montserrat font-bold text-4xl leading-tight">
            Transform Your Space With Tafaseel
          </h2>

          <p className="text-textMuted font-poppins text-lg leading-relaxed">
            Begin your luxury design experience today. Whether residential,
            commercial, or architectural — our team brings your vision to life 
            with precision, creativity, and elegant craftsmanship.
          </p>

          <Link
            href="/contact"
            className="
              inline-block mt-4 px-8 py-4
              gold-gradient text-white rounded-xl
              font-semibold shadow-lg
              hover:opacity-90 transition-all duration-300
            "
          >
            Start Your Project
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[380px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gold-light/40">
          <Image
            src="/images/interior3.jpg"
            alt="luxury interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  );
};

export default StartProjectCTA;
