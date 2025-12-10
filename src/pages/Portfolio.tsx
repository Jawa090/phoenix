import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import commercialBuilding from "@/assets/commercial-building.jpg";
import residentialHome from "@/assets/residential-home.jpg";
import industrialProject from "@/assets/industrial-project.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import ContactForm from "@/components/ContactForm";

const projects = [
    {
        title: "Modern Office Complex",
        category: "Commercial",
        location: "Phoenix, AZ",
        date: "2024",
        image: commercialBuilding,
        description: "Full electrical and plumbing takeoff for a 5-story office building.",
        pricing: "Starting at $450"
    },
    {
        title: "Luxury Residential Estate",
        category: "Residential",
        location: "Scottsdale, AZ",
        date: "2023",
        image: residentialHome,
        description: "Comprehensive material estimation for a 6,000 sq ft custom home.",
        pricing: "Starting at $350"
    },
    {
        title: "Industrial Warehouse",
        category: "Industrial",
        location: "Chandler, AZ",
        date: "2024",
        image: industrialProject,
        description: "Structural steel and concrete takeoff for a 50k sq ft logistics center.",
        pricing: "Starting at $800"
    },
    {
        title: "Urban Mixed-Use Development",
        category: "Commercial",
        location: "Tempe, AZ",
        date: "2023",
        image: heroConstruction,
        description: "Complete cost estimation for a mixed retail and residential complex.",
        pricing: "Starting at $1,200"
    },
    {
        title: "Medical Center Renovation",
        category: "Healthcare",
        location: "Mesa, AZ",
        date: "2024",
        image: commercialBuilding,
        description: "HVAC and mechanical estimation for a hospital wing renovation.",
        pricing: "Starting at $600"
    },
    {
        title: "Custom Home Development",
        category: "Residential",
        location: "Gilbert, AZ",
        date: "2023",
        image: residentialHome,
        description: "Lumber and framing takeoff for a new gated community project.",
        pricing: "Starting at $300"
    }
];

const Portfolio = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={commercialBuilding}
                        alt="Portfolio Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-hero opacity-90" />
                    <div className="absolute inset-0 pattern-diagonal" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4 block animate-fade-up">
                            Our Work
                        </span>
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
                            PROJECT <span className="text-gradient">PORTFOLIO</span>
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200 mb-8">
                            Explore our track record of accurate estimates and successful projects across residential, commercial, and industrial sectors.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
                            <Button variant="hero" size="lg" asChild>
                                <Link to="/contact">
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button variant="heroOutline" size="lg" asChild>
                                <a href="tel:+17187196171">
                                    <Phone className="w-5 h-5 mr-2" />
                                    (718) 719-6171
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {project.date}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mb-6 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-border">
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-sm text-primary font-semibold">
                                                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                                                {project.pricing}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form CTA */}
            <ContactForm />

            <Footer />
        </div>
    );
};

export default Portfolio;
