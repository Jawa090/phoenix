import { useNavigate } from "react-router-dom";
import {
  Thermometer,
  DoorOpen,
  Layers,
  Box,
  Paintbrush,
  Home,
  Wrench,
  Building,
  Frame,
  Mountain,
  Droplets,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CoreServices = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/contact');
    }
  };
  const services = [
    {
      icon: Thermometer,
      title: "HVAC Estimating Services",
      description: "Get accurate takeoff and estimation services in Phoenix with detailed cost of heating and ventilation. We cover estimations of HVAC installations in constructions, including commercial and industrial ones. Hence, residential heating and cooling system estimates are also included.",
    },
    {
      icon: DoorOpen,
      title: "Opening Takeoffs and Estimations",
      description: "You will get all the opening estimates including skylights, doors and windows. Thus, have more control over your time and money. Save your resources with the best takeoff decisions in Phoenix.",
    },
    {
      icon: Layers,
      title: "Insulation Estimates",
      description: "Get an precise estimates for all your insulation gear, including fiberglass and cellulose insulation. Identify all the areas that need insulation, you can get a complete cost estimation in Phoenix. Also, this will include the labor and equipment cost as well. So, use these estimations with our accurate construction estimating services Phoenix.",
    },
    {
      icon: Box,
      title: "Lumber and Framing Takeoffs",
      description: "We provide specific material takeoffs and estimated cost for various kinds of lumber. For example, for lumber to the use in framing, decking or structural work. You will get accurate estimate in Phoenix for carrying out your projects with great success.",
    },
    {
      icon: Paintbrush,
      title: "Finishing Estimating Services",
      description: "Find reliable estimates and takeoffs for your external as well as interior finishes in Phoenix. For instance, in residential or commercial setups, you can avoid cost overflows. In this way, you can stay on schedule. Above all, you can deliver your project with efficient results on time.",
    },
    {
      icon: Home,
      title: "Roofing Estimation",
      description: "We give you estimations by specialized experts and tools for roofing systems. For example, roofing materials include metal, flat and others as well. So, decrease waste and get better measurements and breakdowns for projects.",
    },

  ];

  return (
    <section className="py-24 bg-background pattern-grid">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            CORE <span className="text-primary">CONSTRUCTION</span> ESTIMATION SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a specific service not listed here? We cover all construction trades.
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Get Estimation Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
