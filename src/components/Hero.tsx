import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-85" />
        <div className="absolute inset-0 pattern-diagonal" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">


          {/* Headline */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl  text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            PHOENIX CONSTRUCTION
            <span className="text-gradient"> ESTIMATING </span>
            SERVICES
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 animate-fade-up delay-200">
            Partner with our construction estimating company for the most accurate estimation and takeoffsfor the most affordable prices. We help Contractor and Sub-contractors win more bids with skilled estimating experts and the latest estimating tools. With our support, you can take your construction to new heights. Get all types of estimates and takeoffs with high precision!.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Get Estimation Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+12128122993">Call Now</a>
            </Button>
          </div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
