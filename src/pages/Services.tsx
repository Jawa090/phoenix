import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, Home, Factory, Hammer, ClipboardList, HardHat,
  Zap, Droplets, Flame, Paintbrush, FileSpreadsheet, Calculator,
  ArrowRight, CheckCircle2, Phone
} from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    slug: "construction-estimating",
    icon: Building2,
    title: "Construction Estimating Services",
    shortDesc: "Accurate cost estimates for all construction projects",
    description: "Get precise construction cost estimates that help you win more bids. Our expert estimators analyze blueprints, specifications, and market conditions to deliver reliable estimates.",
    features: ["Detailed cost breakdown", "Material takeoffs", "Labor estimates", "Market analysis"],
  },
  {
    slug: "residential-estimating",
    icon: Home,
    title: "Residential Estimating",
    shortDesc: "Expert estimates for homes and residential projects",
    description: "From single-family homes to multi-unit developments, we provide detailed residential construction estimates that ensure project success.",
    features: ["New construction", "Custom homes", "Multi-family units", "Renovations"],
  },
  {
    slug: "commercial-estimating",
    icon: Factory,
    title: "Commercial Estimating",
    shortDesc: "Commercial building cost analysis and estimates",
    description: "Win more commercial bids with our accurate estimating services for offices, retail spaces, and commercial developments.",
    features: ["Office buildings", "Retail spaces", "Warehouses", "Mixed-use"],
  },
  {
    slug: "remodeling-estimating",
    icon: Hammer,
    title: "Remodeling Estimating",
    shortDesc: "Renovation and remodeling project estimates",
    description: "Accurate estimates for remodeling projects of any size. We account for demolition, new construction, and finishing costs.",
    features: ["Kitchen remodels", "Bathroom renovations", "Room additions", "Full renovations"],
  },
  {
    slug: "material-takeoffs",
    icon: ClipboardList,
    title: "Material Takeoffs",
    shortDesc: "Comprehensive material quantity calculations",
    description: "Detailed material takeoffs ensure you order the right quantities, reducing waste and preventing project delays.",
    features: ["Quantity surveys", "Waste calculations", "Vendor quotes", "Cost optimization"],
  },
  {
    slug: "preliminary-estimating",
    icon: Calculator,
    title: "Preliminary Estimating",
    shortDesc: "Early-stage budget planning estimates",
    description: "Get preliminary estimates during the design phase to guide your budget decisions and avoid costly changes later.",
    features: ["Concept estimates", "Budget planning", "Feasibility studies", "Cost comparisons"],
  },
  {
    slug: "electrical-estimating",
    icon: Zap,
    title: "Electrical Estimating",
    shortDesc: "Electrical systems cost estimation",
    description: "Comprehensive electrical estimating covering wiring, fixtures, panels, and all electrical components.",
    features: ["Wiring systems", "Lighting", "Panels & breakers", "Low voltage"],
  },
  {
    slug: "plumbing-estimating",
    icon: Droplets,
    title: "Plumbing Estimating",
    shortDesc: "Plumbing systems and fixtures estimates",
    description: "Detailed plumbing estimates for residential and commercial projects, including fixtures, piping, and labor.",
    features: ["Pipe systems", "Fixtures", "Water heaters", "Drainage"],
  },
  {
    slug: "hvac-estimating",
    icon: Flame,
    title: "HVAC Estimating",
    shortDesc: "Heating, ventilation, and AC estimates",
    description: "Accurate HVAC estimates covering equipment, ductwork, controls, and installation labor.",
    features: ["HVAC units", "Ductwork", "Controls", "Ventilation"],
  },
  {
    slug: "painting-estimating",
    icon: Paintbrush,
    title: "Painting Estimating",
    shortDesc: "Interior and exterior painting estimates",
    description: "Comprehensive painting estimates for commercial and residential projects, including prep work and materials.",
    features: ["Interior painting", "Exterior painting", "Surface prep", "Specialty finishes"],
  },
  {
    slug: "drywall-estimating",
    icon: FileSpreadsheet,
    title: "Drywall Estimating",
    shortDesc: "Drywall installation and finishing estimates",
    description: "Detailed drywall estimates covering materials, installation, taping, and finishing for all project types.",
    features: ["Installation", "Taping & mudding", "Texturing", "Repairs"],
  },
  {
    slug: "industrial-estimating",
    icon: HardHat,
    title: "Industrial Estimating",
    shortDesc: "Industrial facility construction estimates",
    description: "Specialized estimates for industrial projects including factories, plants, and heavy construction.",
    features: ["Manufacturing plants", "Warehouses", "Processing facilities", "Infrastructure"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl pt-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              PROFESSIONAL CONSTRUCTION <span className="text-primary">ESTIMATING SERVICES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From residential to commercial and industrial projects, we provide accurate, 
              detailed cost estimates that help you win more bids and complete projects on budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#all-services">Explore Services</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/#contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-3xl md:text-4xl text-secondary">98%</div>
              <div className="text-secondary/80 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-secondary">24hrs</div>
              <div className="text-secondary/80 text-sm">Turnaround</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-secondary">5000+</div>
              <div className="text-secondary/80 text-sm">Projects Done</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-secondary">15+</div>
              <div className="text-secondary/80 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section id="all-services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              COMPLETE ESTIMATING SOLUTIONS
            </h2>
            <p className="text-muted-foreground text-lg">
              We cover all trades and project types with our comprehensive estimating services. 
              Click on any service to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.shortDesc}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6">
                THE TRUSTED CHOICE FOR <span className="text-primary">ACCURATE ESTIMATES</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                With over 15 years of experience and thousands of successful projects, 
                we deliver estimates that help contractors win bids and complete projects profitably.
              </p>
              
              <div className="space-y-4">
                {[
                  "98% accuracy rate on all estimates",
                  "24-48 hour turnaround time",
                  "Certified professional estimators",
                  "All trades and project types covered",
                  "Detailed breakdowns and takeoffs",
                  "Competitive pricing with no hidden fees",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free consultation and quote on your next project.
              </p>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/#contact">Request Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="tel:+1234567890">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            LET'S BUILD YOUR SUCCESS TOGETHER
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get accurate estimates that help you win more bids and complete projects on budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Get Your Free Estimate</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+1234567890">Call (123) 456-7890</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { services };
export default Services;
