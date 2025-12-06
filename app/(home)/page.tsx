import Camp from "@/components/Camp";
import Features from "@/components/Features";
import StartProjectCTA from "@/components/StartProjectCTA";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import TestimonialContainer from "@/components/testimonial/TestimonialContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Steps/>
      <Features />
      <StartProjectCTA />
      <TestimonialContainer/>
    </>
  )
}
