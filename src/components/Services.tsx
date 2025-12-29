import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  // Only display the first 3 services on the home page
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            OUR CONSTRUCTION ESTIMATING SERVICES in <span className="text-gradient">
               Phoenix
            </span> 
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {featuredServices.map((service, index) => (
            <div
              // to={`/services/${service.slug}`}
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col"
            >
              {/* Image or Icon Header */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow line-clamp-4 leading-relaxed">{service.description}</p>
                <Link to={`/${service.slug}`}>
                  <Button variant="link" className="p-0 h-auto text-primary mt-auto self-start font-bold uppercase tracking-wide">
                    Read More →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="hero"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Estimation Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
