import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    CheckCircle2, ArrowRight, Phone, Mail, Clock,
    FileCheck, Users, Award, Target, Lightbulb
} from "lucide-react";
import { services } from "@/data/services";
import heroConstruction from "@/assets/hero-construction.jpg";
import residentialHome from "@/assets/residential-home.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import estimatingPlans from "@/assets/estimating-plans.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import WhyImportantSection from "@/components/WhyImportantSection";
import RangeOfServicesSection from "@/components/RangeOfServicesSection";
import BenefitsGridSection from "@/components/BenefitsGridSection";
import ProcessFormSection from "@/components/ProcessFormSection";

interface ServiceDetail {
    heroImage: string;
    benefits: string[];
    process: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    whyImportant?: { title: string; description: string; image: string };
    rangeOfServices?: { title: string; description: string; items: string[] };
    stats?: { value: string; label: string; icon: any }[];
}

// Default details removed as all data is now centralized in @/data/services
// ServiceDetails object removed

const ServiceDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // Direct access to service properties now that everything is in one object
    const ServiceIcon = service.icon;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-secondary overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.heroImage}
                        alt="Background"
                        className="w-full h-full object-cover opacity-5"
                    />
                    <div className="absolute inset-0 bg-secondary/95" />
                </div>

                <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div>
                            <Link
                                to="/services"
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 font-medium group"
                            >
                                <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                Back to All Services
                            </Link>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl border border-primary/20">
                                    <ServiceIcon className="w-8 h-8 text-primary" />
                                </span>
                                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase border border-primary/20">
                                    Professional Service
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {service.title}
                            </h1>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <Button variant="hero" size="lg" asChild className="h-14 px-8 text-lg">
                                    <Link to="/contact">Get Free Estimate</Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/10 text-white hover:text-primary" asChild>
                                    <a href="tel:+12128122993">
                                        <Phone className="w-5 h-5 mr-2" />
                                        (212) 812-2993
                                    </a>
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {service.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-2" />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative mt-8 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                <img
                                    src={service.heroImage}
                                    alt={service.title}
                                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between">
                                        <div>
                                            <p className="text-white font-semibold">Accuracy Guaranteed</p>
                                            <p className="text-white/70 text-sm">98% Success Rate on Bids</p>
                                        </div>
                                        <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
                                            <Target className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements around image */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            {service.stats && (
                <section className="bg-card border-b border-border py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {service.stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <stat.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                                        <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Important Section */}
            {service.whyImportant && (
                <WhyImportantSection
                    title={service.whyImportant.title}
                    description={service.whyImportant.description}
                    image={service.whyImportant.image}
                />
            )}

            {/* Range of Services Section */}
            {service.rangeOfServices && (
                <RangeOfServicesSection
                    title={service.rangeOfServices.title}
                    description={service.rangeOfServices.description}
                    items={service.rangeOfServices.items}
                />
            )}

            {/* Benefits Grid Section */}
            <BenefitsGridSection
                title={service.title}
                benefits={service.benefits}
            />



            {/* Process & Form Section */}
            <ProcessFormSection steps={service.process} />

            {/* FAQ Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                Common Questions
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-12 gap-y-6 w-full">
                            {service.faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 py-2 bg-card shadow-sm hover:shadow-md transition-shadow">
                                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/90 z-10" />
                <img
                    src={commercialBuilding}
                    alt="Construction"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 z-0"
                />

                <div className="container mx-auto px-4 lg:px-8 text-center relative z-20">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        READY TO GET YOUR CONSTRUCTION SERVICES ESTIMATE?
                    </h2>
                    <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium">
                        Contact us today for a free consultation and quote on your project.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button
                            variant="secondary"
                            size="lg"
                            asChild
                            className="h-16 px-10 text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300 animate-pulse hover:animate-none"
                        >
                            <Link to="/#contact">Get Free Estimate</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="h-16 px-10 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 bg-transparent"
                        >
                            <a href="tel:+12128122993">
                                <Phone className="w-5 h-5 mr-3" />
                                (212) 812-2993
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

export default ServiceDetailPage;
