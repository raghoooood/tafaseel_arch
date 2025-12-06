import Image from "next/image";
import {
  FaPaintBrush,
  FaCubes,
  FaRulerCombined,
  FaTree,
  FaFileAlt,
  FaCalculator,
  FaHardHat,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Interior & Exterior Design",
    icon: FaPaintBrush,
    desc: "We create spaces that reflect your taste and lifestyle, balancing comfort, beauty, and functionality while keeping up with the latest global design trends.",
  },
  {
    title: "Realistic Rendering",
    icon: FaCubes,
    desc: "We bring your vision to life with high-quality 3D renderings that showcase every angle of your project for confident decision-making.",
  },
  {
    title: "Décor & Fit-Out Execution",
    icon: FaRulerCombined,
    desc: "Turning design into reality through premium execution, delivering ready-to-use spaces with precision and craftsmanship.",
  },
  {
    title: "Landscape Design",
    icon: FaTree,
    desc: "Creating outdoor spaces and gardens that enhance the beauty and identity of your property with elegant harmony.",
  },
  {
    title: "Construction Drawings",
    icon: FaFileAlt,
    desc: "Professional, detailed drawings that ensure seamless site work, technical clarity, and smooth coordination.",
  },
  {
    title: "Quantity Surveying",
    icon: FaCalculator,
    desc: "Accurate material calculations ensuring transparency, efficient budgeting, and correct project planning.",
  },
  {
    title: "Project Supervision",
    icon: FaHardHat,
    desc: "Expert engineering supervision ensuring every detail matches the approved design with the highest quality standards.",
  },
];

const Services = () => {
  return (
    <div className="bg-offwhite text-charcoal font-poppins">

      {/* Hero Banner */}
      <section className="relative h-[55vh] flex items-center justify-center">
        <Image
          src="/img/services-banner.jpg"
          alt="Services Banner"
          fill
          className="object-cover brightness-[0.45]"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

        <div className="relative z-10 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white tracking-wide">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gold-light">
            Excellence from concept to completion.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-5xl font-semibold text-charcoal mb-4">
            What We Do
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-textMuted leading-relaxed">
            At Tafaseel, we provide comprehensive design and construction services
            that blend creativity, precision, and luxury. From concept to handover,
            every project reflects beauty, harmony, and the highest craftsmanship.
          </p>

          {/* Gold divider */}
          <div className="w-24 mx-auto mt-6 h-1 gold-gradient rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className="
                bg-white p-10 rounded-3xl shadow-md border border-gold-light/40 
                hover:shadow-xl hover:-translate-y-2 hover:border-gold 
                transition-all duration-500 group
              "
            >
              {/* Icon */}
              <div
                className="
                  w-20 h-20 mb-6 rounded-full flex items-center justify-center 
                  gold-gradient text-white shadow-lg group-hover:scale-110 transition-all duration-500
                "
              >
                <service.icon className="text-4xl drop-shadow-md" />
              </div>

              {/* Title */}
              <h3 className="font-montserrat text-2xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-textMuted leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Services;
