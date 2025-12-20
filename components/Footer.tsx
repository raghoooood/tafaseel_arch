import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/constants";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-offwhite pt-20 pb-10 overflow-hidden">

      {/* GOLD TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] gold-gradient" />

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">

          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <Image
                src="/logo.svg"
                alt="Tafaseel Logo"
                width={220}
                height={90}
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>

            <p className="font-poppins text-offwhite text-center md:text-left leading-relaxed">
              Tafaseel delivers luxury interior design & construction services with
              precision, innovation, and artistry—bringing your vision to life.
            </p>

            {/* SOCIAL ICONS */}
          {/* SOCIAL ICONS */}
<div className="mt-6 flex justify-center md:justify-start gap-4">
  {SOCIALS.links.map((item, idx) => (
    <Link
      key={idx}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2 rounded-full bg-white/10 border border-white/10 
        hover:bg-gold hover:border-gold-light 
        hover:scale-110 transition-all duration-300 shadow-md
      "
    >
      <Image
        src={item.icon}
        alt="Social Icon"
        width={22}
        height={22}
      />
    </Link>
  ))}
</div>

          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col">
            <h4 className="uppercase font-montserrat font-semibold text-xl text-gold-light mb-6 tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3 font-poppins text-offwhite">
              <li><Link href="/about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition">Projects</Link></li>
              <li><Link href="/testimonials" className="hover:text-gold transition">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col">
            <h4 className="uppercase font-montserrat font-semibold text-xl text-gold-light mb-6 tracking-wide">
              Contact Us
            </h4>

            <div className="space-y-4 font-poppins text-offwhite">

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-gold text-xl" />
                <p className="ml-3 leading-relaxed">
                  Al Barsha Heights, Dubai, UAE
                </p>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-gold text-lg" />
                <a href="mailto:info@tafaseelarch.com" className="ml-3 hover:text-gold transition">
                  info@tafaseelarch.com
                </a>
              </div>

              <div className="flex items-start">
                <FaPhoneAlt className="text-gold text-lg" />
                <div className="ml-3 flex flex-col">
                  <a href="tel:+971588509776" className="hover:text-gold transition">
                    +971 588 509 776
                  </a>
                  <a href="tel:+971589956754" className="hover:text-gold transition">
                    +971 589 956 754
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="flex flex-col">
            <h4 className="uppercase font-montserrat font-semibold text-xl text-gold-light mb-6 tracking-wide">
              Google Map
            </h4>

            <div className="rounded-2xl shadow-xl border border-gold-light/30 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.209805292286!2d55.17910517549625!3d25.09939197777566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d0c12b189d1%3A0x8b8f85a0e72b2b3!2sAl%20Barsha%20Heights%20-%20Dubai!5e0!3m2!1sen!2sae!4v1693999999999!5m2!1sen!2sae"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 text-center border-t border-white/10 pt-6">
          <p className="text-sm text-textMuted font-poppins">
            © {currentYear} <span className="text-gold font-semibold">Tafaseel</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* GOLD GLOW DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-[140px] opacity-20 bg-gold w-[580px] h-[580px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
