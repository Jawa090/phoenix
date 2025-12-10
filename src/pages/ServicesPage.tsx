import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import { services } from "@/data/services";

const ServicesPage = () => {
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
                            <Button variant="default" size="lg" asChild className="bg-primary hover:bg-primary/90">
                                <a href="#all-services">Explore Services</a>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white/10 hover:text-white bg-transparent">
                                <Link to="/contact">Get Free Quote</Link>
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
                                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
                                <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90" asChild>
                                    <Link to="/contact">Request Free Quote</Link>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full" asChild>
                                    <a href="tel:+17187196171">
                                        <Phone className="w-4 h-4 mr-2" />
                                        (718) 719-6171
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                        LET'S BUILD YOUR SUCCESS TOGETHER
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Get accurate estimates that help you win more bids and complete projects on budget.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90" asChild>
                            <Link to="/contact">Get Your Free Estimate</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="tel:+17187196171">Call (718) 719-6171</a>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
