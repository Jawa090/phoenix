import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle2, FileSpreadsheet, Eye, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import estimatingPlans from "@/assets/estimating-plans.jpg";
import ContactForm from "@/components/ContactForm";

const samples = [
    {
        title: "Commercial Building Electrical Estimate",
        type: "Electrical",
        format: "Excel & PDF",
        pages: "12 Pages",
        description: "A detailed electrical takeoff for a commercial office complex including lighting, power distribution, and low voltage systems.",
        icon: FileSpreadsheet
    },
    {
        title: "Residential Framing Takeoff",
        type: "Lumber",
        format: "PDF Report",
        pages: "8 Pages",
        description: "Comprehensive lumber and framing material list for a 3,500 sq ft custom home, broken down by phase.",
        icon: FileText
    },
    {
        title: "HVAC System Cost Analysis",
        type: "Mechanical",
        format: "Excel",
        pages: "5 Sheets",
        description: "Detailed breakdown of HVAC equipment, ductwork, and labor costs for an industrial warehouse facility.",
        icon: FileSpreadsheet
    },
    {
        title: "Plumbing Fixture Schedule",
        type: "Plumbing",
        format: "PDF Report",
        pages: "15 Pages",
        description: "Complete plumbing takeoff covering fixtures, piping, and drainage systems for a multi-family apartment complex.",
        icon: FileText
    },
    {
        title: "Concrete Foundation Estimate",
        type: "Concrete",
        format: "Excels",
        pages: "4 Sheets",
        description: "Volume calculations and rebar requirements for a commercial foundation and slab-on-grade project.",
        icon: FileSpreadsheet
    },
    {
        title: "Drywall & Insulation Budget",
        type: "Finishes",
        format: "PDF",
        pages: "6 Pages",
        description: "Room-by-room drywall and insulation material takeoff for a high-end detailed renovation.",
        icon: FileText
    }
];

const Samples = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    // Extract unique types/categories
    const categories = ["All", ...new Set(samples.map(s => s.type))];

    const filteredSamples = activeFilter === "All"
        ? samples
        : samples.filter(s => s.type === activeFilter);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={estimatingPlans}
                        alt="Samples Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-hero opacity-90" />
                    <div className="absolute inset-0 pattern-diagonal" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4 block animate-fade-up">
                            Our Expertise
                        </span>
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
                            SAMPLE <span className="text-gradient">ESTIMATES</span>
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200 mb-8">
                            Review our sample deliverables to understand the detail, accuracy, and professionalism we bring to every estimating project.
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

            {/* Samples Grid with Filter */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === category
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-white text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSamples.map((sample, index) => (
                            <div key={index} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full animate-fade-in">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <sample.icon className="w-32 h-32 text-primary rotate-12" />
                                </div>

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <sample.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-primary uppercase tracking-wide">{sample.type}</div>
                                        <div className="text-xs text-muted-foreground">{sample.format} • {sample.pages}</div>
                                    </div>
                                </div>

                                <h3 className="font-display text-xl font-bold text-foreground mb-4 relative z-10 min-h-[56px]">
                                    {sample.title}
                                </h3>

                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed relative z-10 flex-1">
                                    {sample.description}
                                </p>

                                <div className="mt-auto relative z-10">
                                    <Button className="w-full bg-primary hover:bg-primary/90">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Sample
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                Why Our Estimates Stand Out
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We don't just provide numbers; we provide a complete roadmap for your project's financial planning.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "CSI Division standard formatting",
                                    "Detailed material & labor breakdowns",
                                    "Local zip-code based pricing adjusted monthly",
                                    "Color-coded takeoff markups included",
                                    "Excel source files available for editing",
                                    "24-48 hour standard turnaround"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-foreground text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105" />
                            <img
                                src={estimatingPlans}
                                alt="Detailed Estimate Plan"
                                className="relative rounded-3xl shadow-2xl border border-border"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form CTA */}
            <ContactForm />

            <Footer />
        </div>
    );
};

export default Samples;
