import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const highlights = [
    "97% Bid Winning Rate",
    "24-Hour Turnaround",
    "AACE Certified Estimators",
  ];

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
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">
              Phoenix's #1 Construction Estimating Firm
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            ACCURATE ESTIMATES.{" "}
            <span className="text-gradient">WINNING BIDS.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mb-8 animate-fade-up delay-200">
            Partner with our construction estimating firm for the most accurate
            estimation and takeoffs. We help you win more bids with skilled
            experts and the latest tools.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-secondary-foreground/90"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="lg">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="lg">
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-up delay-500">
            <p className="text-secondary-foreground/60 text-sm mb-4">
              Trusted by 500+ contractors nationwide
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-60">
              <div className="font-display text-2xl text-primary-foreground/60">
                ABC CONSTRUCTION
              </div>
              <div className="font-display text-2xl text-primary-foreground/60">
                BUILDMAX
              </div>
              <div className="font-display text-2xl text-primary-foreground/60">
                PHOENIX BUILDS
              </div>
            </div>
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
