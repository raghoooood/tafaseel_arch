import Services from "@/components/Services";
import Steps from "@/components/Steps";
import RegisterButton from "@/components/form/RegisterButton";

const Page = () => {
  return (
    <>
      <Services />

      {/* --- Register CTA Section --- */}
<div className="w-full text-center mt-20 mb-10 px-6">
  <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal">
    Ready to Transform Your Space?
  </h3>

  <p className="font-poppins text-textMuted text-lg max-w-2xl mx-auto mt-4">
    Register your interest today and let our award-winning design team help you 
    create a luxurious interior that reflects your identity, lifestyle, and vision.
  </p>

  <p className="font-poppins text-textMuted text-lg max-w-2xl mx-auto mt-1">
    From the first sketch to the final handover — Tafaseel ensures precision, beauty, 
    and excellence in every detail.
  </p>

  <div className="mt-8 flex justify-center">
    <RegisterButton />
  </div>
</div>


      <Steps />
    </>
  );
};

export default Page;
