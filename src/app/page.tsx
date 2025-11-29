import HeroSection from "@/src/components/ui/HeroSection"
import FeaturesSection from "@/src/components/ui/FeaturesSection"
import TestimonialsSection from "@/src/components/ui/TestimonialsSection";
import PricingSection from "@/src/components/ui/PricingSection";
import Footer from "@/src/components/ui/Footer";



export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
