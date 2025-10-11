import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import WhyHappr from "@/components/landing-page/WhyHappr";
import HowItWorks from "@/components/landing-page/HowItWorks";
import CreatorStories from "@/components/landing-page/CreatorStories";
import PricingSection from "@/components/landing-page/PricingSection";
import JoinUsSection from "@/components/landing-page/JoinUsSection";
import FooterSection from "@/components/landing-page/FooterSection";

const LandingPage = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
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
