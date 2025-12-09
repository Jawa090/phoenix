import { Building2, Home, Factory, Hammer, ClipboardList, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import commercialImage from "@/assets/commercial-building.jpg";
import residentialImage from "@/assets/residential-home.jpg";
import industrialImage from "@/assets/industrial-project.jpg";

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Industrial Estimating",
      description:
        "Our trained engineers and estimators deliver accurate results for industrial work. We understand the complexity of these projects, so we estimate with great care.",
      image: industrialImage,
    },
    {
      icon: Home,
      title: "Residential Estimating",
      description:
        "If you are a residential contractor or homebuilder, we can help. Our expert construction estimators prepare detailed material lists and clear cost estimates.",
      image: residentialImage,
    },
    {
      icon: Building2,
      title: "Commercial Estimating",
      description:
        "To win your next commercial project, you need reliable estimates. We provide estimates for fitness centers, resorts, and many other commercial buildings.",
      image: commercialImage,
    },
    {
      icon: Hammer,
      title: "Remodeling & Renovation",
      description:
        "For remodeling and repair jobs, our specialized team offers detailed and accurate estimates. We give you fast results and take into consideration your timeline.",
      image: null,
    },
    {
      icon: ClipboardList,
      title: "Preliminary Estimating",
      description:
        "If you are still in the early planning stage, our preliminary estimates guide your budget. You save time and avoid costly design mistakes.",
      image: null,
    },
    {
      icon: HardHat,
      title: "Material Takeoffs",
      description:
        "We ensure you have a clear view of your project budget with detailed material takeoffs. Our construction cost estimator is proficient in delivering estimates for all trades.",
      image: null,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            COMPREHENSIVE CONSTRUCTION ESTIMATING SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide accurate cost estimates for all types of construction
            projects, helping you win more bids and complete projects on budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Image or Icon Header */}
              {service.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
              ) : (
                <div className="h-32 bg-hero flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
