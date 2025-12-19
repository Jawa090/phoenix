import { useParams } from "react-router-dom";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { Phone, Mail, CheckCircle, ArrowRight, MapPin, Clock, Award, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroConstruction from "@/assets/hero-construction.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import estimatingPlans from "@/assets/estimating-plans.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import industrialProject from "@/assets/industrial-project.jpg";
import residentialHome from "@/assets/residential-home.jpg";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find(loc => loc.slug === slug);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <p className="text-gray-600">The location you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-20 mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroConstruction} 
            alt="Construction site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">{location.slug.charAt(0).toUpperCase() + location.slug.slice(1)}, Arizona</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              {location.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {location.shortDesc}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">24-48h</div>
                <div className="text-sm text-white/80">Fast Turnaround</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Projects Done</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-white/80">Accuracy Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                <Phone className="mr-2 w-5 h-5" />
                (212) 812-2993
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Construction Estimating in {location.slug.charAt(0).toUpperCase() + location.slug.slice(1)}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {location.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Licensed & Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Local Expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={estimatingPlans} 
                  alt="Construction estimating plans" 
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Estimating and Takeoff Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While you look for a dependable construction partner, we are here to support you. Our certified professionals deliver accurate numbers for estimation as well as takeoff quantities.
              </p>
            </div>
            
            {/* Featured Services with Images */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={commercialBuilding} 
                  alt="Commercial construction" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Commercial Projects</h3>
                  <p className="text-white/90">Office buildings, retail centers, and more</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={industrialProject} 
                  alt="Industrial construction" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Industrial & Residential</h3>
                  <p className="text-white/90">Manufacturing plants, homes, and facilities</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.services.map((service, index) => (
                <div key={index} className="group p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us for Construction Estimating Services?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You can increase your chance to get more projects by working with us. We help you win bids and save time and cost.
              </p>
            </div>
            
            {/* Hero Image for Why Choose Us */}
            <div className="relative mb-12 rounded-2xl overflow-hidden">
              <img 
                src={servicesHero} 
                alt="Professional team working" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by 1000+ Contractors</h3>
                  <p className="text-lg text-white/90">Professional estimating services you can rely on</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {location.whyChooseUs.map((reason, index) => (
                <div key={index} className="group p-8 bg-card rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio of Past Projects</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Take a look at some projects we have carried out with success
              </p>
            </div>
            
            {location.portfolio.map((section, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary">{section.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {section.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-foreground leading-relaxed group-hover:text-primary/80 transition-colors">
                          {service}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us the Best Construction Estimating Services?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If you are looking for the best construction estimating firm, we have good news for you. We are the best construction estimating site for accurate results for project success.
              </p>
            </div>
            
            {/* Strategies with Side Image */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {location.strategies.slice(0, 6).map((strategy, index) => (
                    <div key={index} className="p-6 bg-card rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                      <h3 className="text-xl font-semibold mb-4 text-primary">{strategy.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{strategy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={heroConstruction} 
                  alt="Construction strategies" 
                  className="w-full h-full object-cover rounded-2xl min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Proven Strategies</h3>
                  <p className="text-white/90">20+ years of construction expertise</p>
                </div>
              </div>
            </div>
            
            {/* Remaining Strategies */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.strategies.slice(6).map((strategy, index) => (
                <div key={index + 6} className="p-6 bg-card rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{strategy.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get an Estimate? Where to Start?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our simple 4-step process makes getting your construction estimate quick and easy
              </p>
            </div>
            
            {/* Process Timeline with Images */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
              
              <div className="space-y-12">
                {location.process.map((step, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <div className="group p-8 bg-card rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Circle */}
                    <div className="hidden md:block w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                    
                    {/* Image */}
                    <div className="flex-1 md:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden">
                        <img 
                          src={index % 2 === 0 ? estimatingPlans : residentialHome} 
                          alt={`Step ${index + 1}`} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              {location.faqs.map((faq, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas We Cover</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide professional construction estimating services across {location.slug.charAt(0).toUpperCase() + location.slug.slice(1)} and surrounding areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { area: location.slug.charAt(0).toUpperCase() + location.slug.slice(1), type: 'Primary Service Area' },
                { area: 'Phoenix', type: 'Metropolitan Area' },
                { area: 'Scottsdale', type: 'Extended Coverage' },
                { area: 'Tempe', type: 'Local Service' },
                { area: 'Gilbert', type: 'Residential Focus' },
                { area: 'Glendale', type: 'Commercial Projects' },
                { area: 'Peoria', type: 'Industrial Sites' },
                { area: 'Arizona Statewide', type: 'Special Projects' }
              ].map((area, index) => (
                <div key={index} className="group p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover:border-primary/20 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{area.area}</h3>
                  <p className="text-sm text-muted-foreground">{area.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why {location.slug.charAt(0).toUpperCase() + location.slug.slice(1)} Contractors Trust Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our local expertise combined with advanced technology ensures accurate estimates every time.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Target, title: 'Precision Accuracy', desc: '99% accurate estimates with detailed breakdowns' },
                    { icon: Clock, title: 'Fast Turnaround', desc: 'Most estimates delivered within 24-48 hours' },
                    { icon: Users, title: 'Expert Team', desc: '20+ years of combined estimating experience' },
                    { icon: Award, title: 'Proven Results', desc: 'Helped contractors win 1000+ projects' }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={estimatingPlans} 
                  alt="Construction estimating process" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Average Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it - hear from contractors who've grown their business with our estimating services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Mike Rodriguez',
                  company: 'Rodriguez Construction',
                  text: 'Phoenix Estimating helped us win 40% more bids with their accurate takeoffs. Their turnaround time is incredible.',
                  rating: 5
                },
                {
                  name: 'Sarah Johnson',
                  company: 'Desert Valley Builders',
                  text: 'The detailed breakdowns and local pricing knowledge have been game-changers for our commercial projects.',
                  rating: 5
                },
                {
                  name: 'David Chen',
                  company: 'Chen Development Group',
                  text: 'Professional service, accurate estimates, and always delivered on time. Highly recommend for any contractor.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="group p-8 bg-card rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={commercialBuilding} 
            alt="Construction project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started with Your {location.title}?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Get your free quote today and see why contractors choose Phoenix Estimating
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-white/90">(212) 812-2993</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-white/90">info@phoenixestimating.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-white/90">24-48 Hours</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={scrollToContact} className="text-lg px-8 py-4">
                Get Free Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LocationPage;