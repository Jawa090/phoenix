import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, ArrowRight, Phone, Mail, Clock, 
  FileCheck, Users, Award, Target, Lightbulb
} from "lucide-react";
import { services } from "./Services";

const serviceDetails: Record<string, {
  heroImage: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  "construction-estimating": {
    heroImage: "/placeholder.svg",
    benefits: [
      "Accurate cost projections for informed bidding decisions",
      "Detailed material and labor breakdowns",
      "Risk identification and mitigation strategies",
      "Competitive pricing analysis",
      "Fast turnaround times",
      "Expert support throughout your project",
    ],
    process: [
      { title: "Submit Plans", description: "Upload your blueprints, specifications, and project details through our secure portal." },
      { title: "Expert Review", description: "Our certified estimators analyze every aspect of your project requirements." },
      { title: "Detailed Estimate", description: "Receive a comprehensive cost breakdown with material takeoffs and labor costs." },
      { title: "Ongoing Support", description: "Get clarifications and adjustments as your project evolves." },
    ],
    faqs: [
      { question: "How accurate are your construction estimates?", answer: "Our estimates achieve 98% accuracy through detailed analysis, current market pricing, and experienced estimators." },
      { question: "What's the typical turnaround time?", answer: "Most estimates are completed within 24-48 hours, depending on project complexity." },
      { question: "Do you work with all types of construction projects?", answer: "Yes, we handle residential, commercial, industrial, and specialty construction projects of all sizes." },
    ],
  },
  "residential-estimating": {
    heroImage: "/placeholder.svg",
    benefits: [
      "Specialized expertise in residential construction",
      "Accurate estimates for custom homes and developments",
      "Material optimization to reduce waste",
      "Labor cost analysis specific to residential work",
      "Support for permit and financing applications",
      "Renovation and addition estimates",
    ],
    process: [
      { title: "Project Submission", description: "Share your residential plans, specs, and any specific requirements." },
      { title: "Detailed Analysis", description: "We analyze floor plans, finishes, and local building requirements." },
      { title: "Cost Breakdown", description: "Receive itemized estimates for each phase of construction." },
      { title: "Revision Support", description: "Adjust estimates as design changes occur." },
    ],
    faqs: [
      { question: "Do you estimate custom homes?", answer: "Yes, we specialize in custom home estimates with detailed finish specifications." },
      { question: "Can you help with multi-family projects?", answer: "Absolutely, we handle duplexes, townhomes, and apartment complexes." },
      { question: "Do you include landscaping in estimates?", answer: "We can include landscaping and exterior improvements upon request." },
    ],
  },
  "commercial-estimating": {
    heroImage: "/placeholder.svg",
    benefits: [
      "Experience with complex commercial projects",
      "Understanding of commercial building codes",
      "Accurate MEP cost projections",
      "Tenant improvement estimates",
      "Value engineering recommendations",
      "Bid document preparation support",
    ],
    process: [
      { title: "Bid Package Review", description: "We analyze complete bid documents and specifications." },
      { title: "Quantity Takeoffs", description: "Detailed measurements for all building components." },
      { title: "Cost Development", description: "Current market pricing for materials and labor." },
      { title: "Bid Preparation", description: "Formatted estimates ready for submission." },
    ],
    faqs: [
      { question: "What types of commercial projects do you estimate?", answer: "We cover offices, retail, restaurants, warehouses, and mixed-use developments." },
      { question: "Do you provide value engineering?", answer: "Yes, we identify cost-saving alternatives without sacrificing quality." },
      { question: "Can you meet tight bid deadlines?", answer: "We offer expedited services for urgent bid requirements." },
    ],
  },
  "remodeling-estimating": {
    heroImage: "/placeholder.svg",
    benefits: [
      "Expertise in renovation complexities",
      "Accurate demolition cost estimates",
      "Hidden condition allowances",
      "Phased construction planning",
      "Occupied space considerations",
      "Code compliance cost factors",
    ],
    process: [
      { title: "Site Assessment", description: "Review existing conditions and renovation scope." },
      { title: "Scope Definition", description: "Document all work required including demo and new construction." },
      { title: "Detailed Pricing", description: "Itemized costs for each renovation phase." },
      { title: "Contingency Planning", description: "Built-in allowances for unforeseen conditions." },
    ],
    faqs: [
      { question: "How do you handle unknown conditions?", answer: "We include contingency allowances based on building age and scope." },
      { question: "Do you estimate kitchen and bath remodels?", answer: "Yes, these are among our most common residential renovation estimates." },
      { question: "Can you work with architect drawings?", answer: "We work with professional drawings or detailed descriptions." },
    ],
  },
};

// Default details for services without specific content
const defaultDetails = {
  heroImage: "/placeholder.svg",
  benefits: [
    "Accurate and detailed cost projections",
    "Fast turnaround times",
    "Expert certified estimators",
    "Comprehensive material takeoffs",
    "Competitive market pricing",
    "Ongoing project support",
  ],
  process: [
    { title: "Submit Your Project", description: "Share your plans, specifications, and project requirements with our team." },
    { title: "Expert Analysis", description: "Our certified estimators review every detail of your project." },
    { title: "Detailed Estimate", description: "Receive a comprehensive breakdown of all costs and quantities." },
    { title: "Support & Revisions", description: "Get clarifications and updates as your project evolves." },
  ],
  faqs: [
    { question: "How accurate are your estimates?", answer: "We maintain a 98% accuracy rate through detailed analysis and current market pricing." },
    { question: "What's the turnaround time?", answer: "Most estimates are completed within 24-48 hours depending on complexity." },
    { question: "Do you offer revisions?", answer: "Yes, we provide revisions as your project scope changes." },
  ],
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const details = serviceDetails[slug || ""] || defaultDetails;
  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl pt-16">
            <Link 
              to="/services" 
              className="inline-flex items-center text-gray-300 hover:text-primary transition-colors mb-6"
            >
              ← Back to All Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <ServiceIcon className="w-8 h-8 text-primary" />
              </div>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                Professional Service
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {service.title.toUpperCase()}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {service.features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 text-white rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/#contact">Get Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+1234567890">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">98%</div>
                <div className="text-muted-foreground text-sm">Accuracy</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">24-48 hrs</div>
                <div className="text-muted-foreground text-sm">Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">5000+</div>
                <div className="text-muted-foreground text-sm">Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">15+</div>
                <div className="text-muted-foreground text-sm">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Service Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
                WHY CHOOSE OUR <span className="text-primary">{service.title.toUpperCase()}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our specialized {service.title.toLowerCase()} delivers accurate, detailed estimates 
                that help you win more bids and complete projects on budget.
              </p>
              
              <div className="space-y-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <FileCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">Detailed Reports</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive breakdowns with all quantities and pricing.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Quick turnaround to meet your bid deadlines.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">Expert Team</h3>
                <p className="text-muted-foreground text-sm">
                  Certified estimators with years of experience.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">Smart Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Value engineering to optimize your costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-4 mb-6">
              HOW IT WORKS
            </h2>
            <p className="text-gray-300 text-lg">
              Our streamlined process ensures you get accurate estimates quickly and efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <span className="font-display text-xl text-secondary">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < details.process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-primary -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Common Questions
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            
            <div className="space-y-6">
              {details.faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display text-lg text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            READY TO GET YOUR {service.title.toUpperCase().replace(" ESTIMATING", "")} ESTIMATE?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Get Free Estimate</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-4 h-4 mr-2" />
                Call (123) 456-7890
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-display text-2xl text-foreground text-center mb-8">
            Explore Related Services
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 4)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  to={`/services/${relatedService.slug}`}
                  className="group flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <relatedService.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {relatedService.title.replace(" Estimating", "")}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
