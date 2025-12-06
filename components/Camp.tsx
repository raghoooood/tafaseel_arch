import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`
        h-full w-full min-w-[1100px] 
        ${backgroundImage} bg-cover bg-no-repeat
        lg:rounded-r-5xl 2xl:rounded-5xl
        relative overflow-hidden
      `}
    >
      {/* Gold overlay for luxury feel */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        
        {/* TITLE BLOCK */}
        <div className="flexCenter gap-4">
          <div className="rounded-full gold-gradient p-4 shadow-lg">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
              className="brightness-0 invert"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-montserrat font-semibold text-white text-xl tracking-wide">
              {title}
            </h4>
            <p className="font-poppins text-textMuted text-sm">
              {subtitle}
            </p>
          </div>
        </div>

        {/* PEOPLE JOINED */}
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full border-2 border-gold-light"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>

          <p className="font-montserrat font-semibold text-white text-lg">
            {peopleJoined}
          </p>
        </div>

      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-12 lg:py-20 xl:py-24">
      
      {/* SLIDER SECTION */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Luxury Living Space"
          subtitle="Custom-designed elegant interiors"
          peopleJoined="150+ Clients"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Modern Architectural Vision"
          subtitle="Premium spaces crafted with precision"
          peopleJoined="120+ Projects"
        />
      </div>

      {/* PROMO BOX */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div
          className="
            gold-gradient-light
            p-8 xl:px-16 xl:py-20 relative w-full 
            lg:max-w-[500px] xl:max-w-[734px] 
            rounded-3xl xl:rounded-5xl shadow-lg text-white
          "
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl xl:text-5xl leading-tight">
            Tafaseel Interior Design & Architecture
          </h2>

          <p className="font-poppins text-lg mt-4 opacity-95">
            Where Art Lives in Every Detail
          </p>

          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote opacity-50"
          />
        </div>
      </div>

    </section>
  );
};

export default Camp;
