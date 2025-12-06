
import TestimonialContainer from "@/components/testimonial/TestimonialContainer";
import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/interior2.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white">
            Client Testimonials
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-poppins">
            Hear what our clients say about their experience with Tafaseel —
            where luxury, creativity, and precision shape every detail.
          </p>
        </div>
      </section>

      {/* PAGE INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-charcoal">
          What Our Clients Say
        </h2>

        <p className="text-textMuted text-lg font-poppins max-w-3xl mx-auto mt-4 leading-relaxed">
          Our reputation is built on trust, craftsmanship, communication, and commitment.
          Every project reflects our dedication to quality, luxury, and timeless design.
        </p>

        {/* Gold divider */}
        <div className="w-24 h-1 gold-gradient mx-auto mt-6 rounded-full"></div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <TestimonialContainer />
      </section>

    </>
  );
}
