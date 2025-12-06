"use client";

import CountUp from "react-countup";

export default function TeamStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-montserrat font-bold text-charcoal">
          Our Professional Team
        </h2>
        <p className="text-lg text-textMuted mt-4 max-w-3xl mx-auto">
          Tafaseel Interiors is powered by a highly skilled, multidisciplinary team
          combining creativity, engineering precision, and execution expertise.
        </p>
      </div>

      {/* COUNTERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        
        <div>
          <h3 className="text-5xl font-bold text-gold">
            <CountUp end={15} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium">Engineers</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-gold">
            <CountUp end={32} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium">Skilled Workers</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-gold">
            <CountUp end={120} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium">Completed Projects</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-gold">
            <CountUp end={9} duration={2} />+
          </h3>
          <p className="text-charcoal mt-2 font-medium">Ongoing Projects</p>
        </div>

      </div>

      {/* TEAM BREAKDOWN */}
      <div className="grid md:grid-cols-2 gap-12 mt-20">

        {/* ENGINEERING CARD */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-gold-light/40">
          <h3 className="text-2xl font-semibold font-montserrat text-gold mb-5">
            Engineering Team
          </h3>
          <ul className="space-y-3 text-lg text-charcoal">
            <li>• Architectural Engineering</li>
            <li>• Interior Design Engineering</li>
            <li>• Civil Engineering</li>
          </ul>
        </div>

        {/* EXECUTION CARD */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-gold-light/40">
          <h3 className="text-2xl font-semibold font-montserrat text-gold mb-5">
            Execution & Labor Team
          </h3>
          <ul className="space-y-3 text-lg text-charcoal">
            <li>• Carpentry & Joinery</li>
            <li>• Painting & Finishing</li>
            <li>• Gypsum & Partitions</li>
            <li>• Flooring & Tiling</li>
            <li>• MEP Support</li>
            <li>• On-Site Installations</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
