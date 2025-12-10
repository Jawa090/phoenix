import { Building2, Home, Factory, Hammer, ClipboardList, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import commercialImage from "@/assets/commercial-building.jpg";
import residentialImage from "@/assets/residential-home.jpg";
import industrialImage from "@/assets/industrial-project.jpg";

const Services = () => {
  const services = [
    {
      slug: "industrial-estimating",
      icon: Factory,
      title: "Phoenix Industrial Estimating Services",
      description:
        "Our trained engineers and estimators deliver accurate results for industrial work. We understand the complexity of these projects, so we estimate with great care. You receive a solid financial plan that helps you win projects and save time and resources.",
      image: industrialImage,
    },
    {
      slug: "residential-estimating",
      icon: Home,
      title: "Residential Estimating Services in Phoenix",
      description:
        "If you are a residential contractor or homebuilder, we can help. Our expert construction estimators Phoenix prepare detailed material lists and clear cost estimates. Each takeoff is based on the exact needs of your project.",
      image: residentialImage,
    },
    {
      slug: "commercial-estimating",
      icon: Building2,
      title: "Phoenix Commercial Estimating Services",
      description:
        "To win your next commercial project, you need reliable estimates. We provide estimates for fitness centers, resorts, and many other commercial buildings. You receive budget estimates, labor costs, and timelines. Our team delivers results that help you secure more bids.",
      image: commercialImage,
    },
    {
      slug: "remodeling-estimating",
      icon: Hammer,
      title: "Remodeling and Renovation Estimating Services",
      description:
        "For remodeling and repair jobs, our specialized team offers detailed and accurate estimates. As one of the Top Construction Estimating Services in phoenix, we give you fast results. We also take into consideration your own timeline.",
      image: residentialImage,
    },
    {
      slug: "preliminary-estimating",
      icon: ClipboardList,
      title: "Preliminary Phoenix Estimating Services",
      description:
        "If you are still in the early planning stage, our preliminary estimates guide your budget. You save time and avoid costly design mistakes. Our feasibility studies and quantity takeoffs also reduce the risk of errors.",
      image: industrialImage,
    },

  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            OUR CONSTRUCTION ESTIMATING <span className="text-gradient">
              COMPREHENSIVE
            </span> SERVICES
          </h2>

        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col"
            >
              {/* Image or Icon Header */}
              {service.image ? (
                <div className="relative h-48 overflow-hidden flex-shrink-0">
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
                <div className="h-32 bg-hero flex items-center justify-center flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary mt-auto self-start">
                  Learn More →
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
