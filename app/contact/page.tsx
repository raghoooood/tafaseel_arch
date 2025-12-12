import Image from "next/image";

export default function ContactPage() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contact.jpg"
          alt="Contact Background"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-poppins">
            We’re here to assist you with inquiries, consultations, or project discussions — reach out anytime.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — CONTACT DETAILS */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-charcoal">
              Get In Touch
            </h2>
            <p className="text-textMuted mt-4 leading-relaxed font-poppins">
              Contact us via WhatsApp, phone, or email, or visit our office.  
              You can also fill the form and our team will reach out shortly.
            </p>

            <div className="mt-10 space-y-6 font-poppins text-lg">
              <div>
                <h4 className="text-gold font-semibold text-xl">Location</h4>
                <p className="text-charcoal mt-1">Al Barsha Heights, Dubai, UAE</p>
              </div>

              <div>
                <h4 className="text-gold font-semibold text-xl">WhatsApp</h4>
                <a
                  href="https://wa.me/971581927153"
                  target="_blank"
                  className="text-charcoal hover:text-gold transition"
                >
                  +971 58 192 7153
                </a>
              </div>

              <div>
                <h4 className="text-gold font-semibold text-xl">Telephone</h4>
                <a
                  href="tel:+971589956754"
                  className="text-charcoal hover:text-gold transition"
                >
                  +971 58 995 6754
                </a>
              </div>

              <div>
                <h4 className="text-gold font-semibold text-xl">Email</h4>
                <a
                  href="mailto:info@tafaseelarch.com"
                  className="text-charcoal hover:text-gold transition"
                >
                  info@tafaseelarch.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-lg border border-gold-light/40 p-10">
            <h3 className="text-2xl font-montserrat font-semibold text-charcoal mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="font-poppins text-charcoal text-sm">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="font-poppins text-charcoal text-sm">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="font-poppins text-charcoal text-sm">Phone</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="font-poppins text-charcoal text-sm">Message</label>
                <textarea
                  rows={4}
                  className="w-full mt-2 p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gold focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 gold-gradient text-white rounded-xl font-montserrat font-semibold shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-montserrat font-bold text-charcoal text-center mb-10">
          Find Us on the Map
        </h3>

        <div
          className="
            w-full h-[350px] sm:h-[420px] lg:h-[500px]
            rounded-3xl overflow-hidden shadow-2xl border border-gold-light/40
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.209805292286!2d55.17910517549625!3d25.09939197777566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d0c12b189d1%3A0x8b8f85a0e72b2b3!2sAl%20Barsha%20Heights%20-%20Dubai!5e0!3m2!1sen!2sae!4v1693999999999!5m2!1sen!2sae"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-gold-light/10 py-14 mt-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-3xl font-montserrat font-bold text-charcoal">
            Prefer WhatsApp?
          </h3>
          <p className="mt-2 text-textMuted font-poppins text-lg">
            Reach us instantly — our team replies quickly.
          </p>

          <a
            href="https://wa.me/971581927153"
            target="_blank"
            className="inline-block mt-6 px-8 py-3 gold-gradient text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </>
  );
}
