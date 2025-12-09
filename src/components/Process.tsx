import { Upload, FileText, CreditCard, FileCheck } from "lucide-react";

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
    <section id="process" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-diagonal opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mt-4 mb-6">
            HOW TO GET STARTED
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            Get your accurate construction estimate in just 4 simple steps.
            Our streamlined process ensures quick turnaround times.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
              )}
              
              <div className="relative bg-secondary/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 group">
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
                <p className="text-secondary-foreground/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
