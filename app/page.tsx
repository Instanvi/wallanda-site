import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BrandsGrid from "../components/BrandsGrid";
import PartnersSection from "../components/PartnersSection";
import CareersSection from "../components/CareersSection";
import PressSection from "../components/PressSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BrandsGrid />
        <PartnersSection />
        <CareersSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  );
}
