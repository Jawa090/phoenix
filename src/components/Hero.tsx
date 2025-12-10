import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {


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
            Partner with our construction estimating firm for the most accurate estimation and takeoffs. We help you win more bids with skilled experts and the latest tools. With our support, you can take your construction business to new heights. Use this chance to get all types of estimates and takeoffs with high precision.
          </p>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
            <Button variant="hero" size="lg">
              Schedule a Meeting
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Call Now
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
