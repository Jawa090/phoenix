import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Check, ClipboardList } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import { services } from "@/data/services"; // Import centralized data

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
              PHOENIX CONSTRUCTION <span className="text-primary">ESTIMATING SERVICES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From residential to commercial and industrial projects, we provide accurate,
              detailed cost estimates that help you win more bids and complete projects on budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#all-services">Explore Services</a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="flex items-center text-primary font-bold tracking-wide text-sm uppercase mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="contact" className="py-24 bg-[#1e2b4d] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-bold uppercase tracking-wider text-xs mb-6 border border-primary/20">
                Why Choose Phoenix
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                ACCURACY MEETS <br /><span className="text-primary italic">SPEED</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                We combine decades of construction experience with cutting-edge technology to deliver estimates that are spot-on and on time. Stop guessing and start winning.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "98% Accuracy", desc: "Proven track record across 5000+ projects" },
                  { title: "24h Turnaround", desc: "Get bids out faster than your competitors" },
                  { title: "Certified Team", desc: "Experts in all CSI divisions" },
                  { title: "Cost Effective", desc: "Save 60% compared to in-house estimators" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Embedded Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none"></div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1e2b4d] font-display">Get Your Free Quote</h3>
                <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50" placeholder="(123) 456-7890" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase">Zip Code</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50" placeholder="12345" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">Project Details</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50 min-h-[100px]" placeholder="Tell us about your project scope..."></textarea>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Upload Plans</p>
                  <p className="text-xs text-gray-400">PDF, Excel, or CAD files</p>
                </div>

                <Button className="w-full bg-[#1e2b4d] hover:bg-[#1e2b4d]/90 text-white font-bold h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                  Request Quote Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Out / Enhanced Details Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2b4d]/95 via-[#1e2b4d]/90 to-[#1e2b4d]/80 mix-blend-multiply" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
          <div className="max-w-5xl">
            <div className="h-1 w-20 bg-primary mb-8" />

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Reach Out For Construction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
                Estimating Services Near Me...
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
              We are a proud, competent estimating firm operating nationwide. We provide you with the best possible services that come with precision and detail. This is due to various factors. We provide comprehensive construction estimating services tailored for projects of all scales. These are products of our client expertise:
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 border-t border-white/10 pt-8">
              {[
                "Cost Accuracy",
                "Advanced Features",
                "Teams of Experts",
                "Subsidiary Services",
                "Local Knowledge"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Check className="w-5 h-5 text-primary group-hover:text-[#1e2b4d] transition-colors" />
                  </div>
                  <span className="font-semibold text-white/90 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-primary p-6 rounded-r-xl max-w-2xl">
              <p className="text-xl font-medium text-white">
                So, do not wait around and contact us to have reliable estimation help for your building projects!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation CTA */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1e2b4d] px-6 py-10 text-center shadow-xl">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary rounded-full blur-[60px]"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full blur-[60px]"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                Take The Next Step
              </span>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                READY TO ELEVATE YOUR <br className="hidden md:block" />
                <span className="text-primary">CONSTRUCTION BUSINESS?</span>
              </h2>

              <p className="text-base text-gray-300 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                Stop leaving money on the table. Partner with Phoenix to get the accurate numbers you need to bid with absolute confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="w-full sm:w-52 h-12 text-sm font-bold bg-primary text-[#1e2b4d] hover:bg-white hover:text-[#1e2b4d] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link to="/contact">
                    START YOUR JOURNEY
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  className="w-full sm:w-52 h-12 text-sm font-bold bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#1e2b4d] hover:border-white transition-all duration-300 rounded-lg"
                  asChild
                >
                  <a href="tel:+17187196171">
                    <Phone className="w-4 h-4 mr-2" />
                    CALL (718) 719-6171
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { services };
export default Services;
