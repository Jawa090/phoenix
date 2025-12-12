import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import commercialBuilding from "@/assets/commercial-building.jpg";
import industrialProject from "@/assets/industrial-project.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import roofing from "@/assets/portfolio/roofing.png";
import masonry from "@/assets/portfolio/masonry.png";
import drywall from "@/assets/portfolio/drywall.png";
import mechanical from "@/assets/portfolio/mechanical.png";
import electrical from "@/assets/portfolio/electrical.png";
import plumbing from "@/assets/portfolio/plumbing.png";
import ContactForm from "@/components/ContactForm";

const projects = [
    {
        title: "GENERAL CONTACTOR (GC)",
        subtitle: "",
        items: [
            "75 UNIT AFFORDABLE ED-1 HOUSING PROJECT – $13.29M",
            "McDonald’s - 2438 W. CERMAK ROAD – $1.256M",
            "THE GREEN BERRY – $1.025M",
            "4415 IOWA AVA NW WASHINGTON DC – $2.565M",
        ],
        image: heroConstruction
    },
    {
        title: "CONCRETE ESTIMATING",
        subtitle: "",
        items: [
            "7 ELEVEN– $0.723M",
            "CHICK FIL-A– $0.582M",
            "TO-ROGERS FLEX WAREHOUSE– $0.475M",
            "Lipp America Tank Sytem – $0.3156M",
        ],
        image: industrialProject
    },
    {
        title: "MASONARY ESTIMATING",
        subtitle: "",
        items: [
            "High Point Treatment Center– $0.323M",
            "Cape St Claire Firestation – $0.392M",
            "Civitas Georgetown – $0.525M",
            "O'REILLY AUTO PARTS GROUND UP– $0.215M"
        ],
        image: masonry
    },
    {
        title: "DRYWALL ESTIMATING",
        subtitle: "",
        items: [
            "KIDS EMPIRE– $0.523M",
            "GERBER COLLISION & GLASS– $0.312M",
            "Pop Mart Danbury Fair– $0.415M",
            "Planet fitness– $0.315M"
        ],
        image: drywall
    },
    {
        title: "ROOFING ESTIMATING",
        subtitle: "",
        items: [
            "5925 Woodland Avenue – $0.232M",
            "Newnan City Church – $0.322M",
            "RENOVATION AND EXPANSION OF SPS– $0.475M",
            "AVANZA AT HYDE PARK– $0.3215M"
        ],
        image: roofing
    },
    {
        title: "MECHANICAL ESTIMATING",
        subtitle: "",
        items: [
            "MECHANICAL (HVAC)",
            "Planet Fitness– $0.15M",
            "ID PICKLR - FREMONT– $0.375M",
            "Chevron– $0.4215M"
        ],
        image: mechanical
    },
    {
        title: "ELECTRICAL ESTIMATING",
        subtitle: "",
        items: [
            "Transition Learning Center 18+– $0.242M",
            "Whiteville Community Center– $0.16M",
            "Solid waste convenience center– $0.245M",
            "AutoZone Store No. 9361– $0.1215M"
        ],
        image: electrical
    },
    {
        title: "PLUMBING ESTIMATING",
        subtitle: "",
        items: [
            "Snarf's Sandwiches – $0.142M",
            "Civitas Georgetown– $0.265M",
            "Voter Registration – $0.345M",
            "LensCrafter – $0.112M"
        ],
        image: plumbing
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
                                    Get Estimation Now
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button variant="heroOutline" size="lg" asChild>
                                <a href="tel:+12128122993">
                                    <Phone className="w-5 h-5 mr-2" />
                                    (212) 812-2993
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
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                        <h3 className="font-display text-2xl font-bold text-white mb-1">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-white/80 text-sm">{project.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <ul className="space-y-3">
                                        {project.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-secondary-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                                <span className="leading-tight text-black">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
