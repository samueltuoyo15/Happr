import Navbar from "@/features/landing/components/Navbar";
import HeroSection from "@/features/landing/components/HeroSection";
import WhyHappr from "@/features/landing/components/WhyHappr";
import HowItWorks from "@/features/landing/components/HowItWorks";
import CreatorStories from "@/features/landing/components/CreatorStories";
import PricingSection from "@/features/landing/components/PricingSection";
import JoinUsSection from "@/features/landing/components/JoinUsSection";
import FooterSection from "@/features/landing/components/FooterSection";

const LandingPage = () => {
  return (
    <div
      data-page="landing"
      className="w-screen flex flex-col items-center justify-center"
    >
      <header>
        <Navbar />
      </header>

      <main className="w-full flex flex-col items-center gap-20 p-[5%] mt-[7rem]">
        <HeroSection />
        <HowItWorks />
        <WhyHappr />
        <CreatorStories />
        <PricingSection />
        <JoinUsSection />
      </main>

      <footer className="w-full flex flex-col items-center p-[5%] -mt-6">
        <FooterSection />
      </footer>
    </div>
  );
};
export default LandingPage;
