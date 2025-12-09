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
  const services = [
    {
      icon: Thermometer,
      title: "HVAC Estimating",
      description: "Get accurate takeoff and estimation services with detailed cost of heating and ventilation for all construction types.",
    },
    {
      icon: DoorOpen,
      title: "Opening Takeoffs",
      description: "All opening estimates including skylights, doors and windows. Have more control over your time and money.",
    },
    {
      icon: Layers,
      title: "Insulation Estimates",
      description: "Estimation for all insulation gear, including fiberglass and cellulose insulation with labor and equipment costs.",
    },
    {
      icon: Box,
      title: "Lumber & Framing",
      description: "Specific material takeoffs and estimated cost for various kinds of lumber for framing, decking, or structural work.",
    },
    {
      icon: Paintbrush,
      title: "Finishing Estimates",
      description: "Reliable estimates and takeoffs for external as well as interior finishes in residential or commercial setups.",
    },
    {
      icon: Home,
      title: "Roofing Estimation",
      description: "Estimations by specialized experts for roofing systems including metal, flat, and other roofing materials.",
    },
    {
      icon: Wrench,
      title: "Plumbing Takeoffs",
      description: "Plumbing takeoffs for all pipes, fittings and accessories to help you plan and control costs.",
    },
    {
      icon: Building,
      title: "Metal & Steel",
      description: "Good estimations for steel and metal work with breakdown for connections and fabrications.",
    },
    {
      icon: Frame,
      title: "Door & Windows",
      description: "Exact takeoff measurements and cost estimation of doors and windows, covering frames and installation.",
    },
    {
      icon: Mountain,
      title: "Earthwork Estimation",
      description: "Estimation for earthwork processes like grading and soil preparation with quantity takeoff estimates.",
    },
    {
      icon: Droplets,
      title: "Thermal/Moisture",
      description: "Exact estimation of thermal control equipment including moisture barriers, insulation, and waterproofing.",
    },
    {
      icon: Zap,
      title: "Electrical Estimating",
      description: "Detailed breakdowns of wiring, fixture panels, and all electrical components for reliable project planning.",
    },
  ];

  return (
    <section className="py-24 bg-background pattern-grid">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Specialized Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            CORE CONSTRUCTION ESTIMATION SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">
            We cover all CSI divisions with specialized expertise in every trade
            to deliver comprehensive and accurate estimates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
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
          <Button variant="outline" size="lg">
            Contact Us for Custom Estimates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
