import HeroSection from "./hero-section";
import FeaturesOne from "./features-one";
import Testimonials from "./testimonials";
import CallToAction from "./call-to-action";
import FAQs from "./faqs";
import Footer from "./footer";
// Removed pricing component (no payments)

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesOne />
      {/* Pricing section removed */}
      <Testimonials />
      <CallToAction />
      <FAQs />
      <Footer />
    </div>
  );
}
