import TeamStats from "@/components/team/TeamStats";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src="/images/interior1.jpg"
          alt="Tafaseel Interiors"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white">
            Tafaseel Interior Design & Architecture
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Where Art Lives in Every Detail
          </p>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-montserrat font-bold text-charcoal mb-6">
          About Us
        </h2>
        <p className="text-lg leading-relaxed text-textMuted font-poppins">
          At Tafaseel, we believe that true beauty begins in the smallest details
          that make the biggest difference. We transform ideas into spaces that
          radiate elegance and harmony, blending modern innovation with Arabic
          identity to reflect your personality and tell your story through design.
          Our team of architects and designers combines creative vision with
          technical precision to deliver an exceptional design journey — from the
          first concept to the final handover.
        </p>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="bg-offwhite py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-montserrat font-bold text-charcoal mb-10 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Interior & Exterior Design",
                desc: "We create spaces that reflect your taste and lifestyle with harmony and elegance.",
              },
              {
                title: "Realistic Rendering",
                desc: "High-quality 3D visualizations to preview your project before execution.",
              },
              {
                title: "Décor & Fit-Out Execution",
                desc: "Luxury execution with top-quality finishing and craftsmanship.",
              },
              {
                title: "Landscape Design",
                desc: "Outdoor spaces that enhance beauty and architectural identity.",
              },
              {
                title: "Construction Drawings",
                desc: "Professional detailed drawings ensuring smooth construction workflow.",
              },
              {
                title: "Quantity Surveying",
                desc: "Accurate material calculations for budget transparency.",
              },
              {
                title: "Project Supervision",
                desc: "On-site supervision ensuring precision and quality.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gold-light/30"
              >
                <h3 className="font-semibold text-xl text-charcoal mb-3">
                  {s.title}
                </h3>
                <p className="text-textMuted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WOOD MANUFACTURING ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold font-montserrat text-charcoal mb-6">
          Wood Manufacturing & Joinery
        </h2>
        <p className="text-lg leading-relaxed text-textMuted font-poppins mb-6">
          Tafaseel Interiors provides high-quality wood fabrication supported by our
          fully equipped UAE-based factory—where craftsmanship meets precision,
          durability, and luxury.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-3">Our Woodwork Services Include:</h3>
            <ul className="space-y-2 text-textMuted">
              <li>• Custom wooden décor & wall cladding</li>
              <li>• Interior & exterior wooden doors</li>
              <li>• Walk-in closets & wardrobes</li>
              <li>• Custom wooden furniture</li>
              <li>• Complete joinery & carpentry solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3">Why Our Woodwork Stands Out:</h3>
            <ul className="space-y-2 text-textMuted">
              <li>• In-house UAE factory</li>
              <li>• High-end finishing quality</li>
              <li>• Accurate measurements & installation</li>
              <li>• Attention to fine details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECT TYPES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-montserrat font-bold text-charcoal mb-10 text-center">
            Project Types
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Residential Projects",
                desc: "Elegant villas & apartments combining luxury with comfort.",
              },
              {
                title: "Commercial Projects",
                desc: "Offices, shops, cafés & restaurants designed with brand identity.",
              },
              {
                title: "Architectural Projects",
                desc: "Facades & buildings that blend modern style with local identity.",
              },
              {
                title: "Landscape Projects",
                desc: "Harmonious outdoor spaces blending architecture with nature.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 bg-offwhite rounded-xl shadow-md hover:shadow-xl transition border border-gold-light/20"
              >
                <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                <p className="text-textMuted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold font-montserrat text-charcoal mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-textMuted leading-relaxed max-w-3xl">
          We create spaces that inspire and reflect your identity — because every
          detail holds meaning, and every project tells a story worthy of its owner.
        </p>
      </section>

      {/* TEAM SECTION */}
      <TeamStats />

      {/* ================= CONTACT CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-charcoal mb-4">Contact Us</h2>
        <p className="text-textMuted mb-6">
          Have questions? Reach us anytime — we’re here to help bring your vision to life.
        </p>

        <p className="font-semibold text-lg">📍 Al Barsha Heights, Dubai</p>
        <p>📞 +971 58 995 6754</p>
        <p>💬 WhatsApp: +971 58 192 7153</p>
        <p>✉ info@tafaseel.com</p>
      </section>
    </>
  );
};

export default Page;

