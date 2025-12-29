import { Upload, FileText, CreditCard, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Process = () => {
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Upload Drawings",
      description: "Upload your project blueprints in PDF format. Our experts will analyze requirements and start the process.",
    },
    {
      icon: FileText,
      step: "02",
      title: "Receive a Quote",
      description: "Once done with plan submission, we provide an estimated time for your report with all charges after consulting with our experts.",
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Pay Invoice",
      description: "When you have clarified the quote with our team, pay the invoice using any online payment method.",
    },
    {
      icon: FileCheck,
      step: "04",
      title: "Receive Estimate",
      description: "Our team reviews project details and starts the process. You'll receive the estimation report within hours.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-hero relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-diagonal opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mt-4 mb-6">
            Our Simple <span className="text-primary"> Estimation Process in Phoenix?</span>
          </h2>

        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative h-full">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
              )}

              <div className="relative h-full bg-secondary/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 group flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gradient px-4 py-1 rounded-full">
                  <span className="font-display text-lg text-primary-foreground">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-primary-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground/70 flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {
              const contactForm = document.getElementById('contact');
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group relative px-12 py-5 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] animate-gradient" />

            {/* Pulsing glow effect */}
            <div className="absolute inset-0 bg-primary/40 blur-xl animate-pulse" />

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              <span className="font-display text-xl">Get Estimation Now</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
