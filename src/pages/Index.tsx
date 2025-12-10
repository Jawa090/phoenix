import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CoreServices from "@/components/CoreServices";
import SpecializedTradeServices from "@/components/SpecializedTradeServices";
import TrustworthySection from "@/components/TrustworthySection";
import Strategies from "@/components/Strategies";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <CoreServices />
      <SpecializedTradeServices />
      <TrustworthySection />
      <Strategies />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
