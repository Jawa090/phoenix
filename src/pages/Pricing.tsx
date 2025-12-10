import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";
import PricingPaymentSection from "@/components/PricingPaymentSection";
import FAQ from "@/components/FAQ";

const plans = [
    {
        name: "Single Trade Pricing",
        price: "$199",
        period: "Starting From",
        subtitle: "Specific Trade",
        description: "Perfect for specific needs like electrical, plumbing, or masonry takeoffs.",
        features: [
            "Turnaround Time 24 to 48 Hrs",
            "Any Trade or Any Kind of Project",
            "Free Quote Within 5 to 10 Minutes",
            "Free Consultation",
            "Immediate and Unlimited Revisions",
            "24/7 Email Support",
            "Live Chat and Call Support",
            "No Hidden Charges",
            "Refund Policy (Risk Free)"
        ],
        popular: false,
        theme: "light"
    },
    {
        name: "Monthly Packages",
        price: "$1499",
        period: "Starting From",
        subtitle: "Per Month",
        description: "For busy contractors needing consistent, high-volume estimating work.",
        features: [
            "10 to 15 Projects",
            "Bid Filing and Consultation",
            "Material Takeoffs and Cost Management",
            "Turnaround Time 24 to 48 Hrs",
            "Any Trade or Any Kind of Project",
            "Free Quote Within 5 to 10 Minutes",
            "Free Consultation",
            "Immediate and Unlimited Revisions",
            "24/7 Email Support",
            "Live Chat and Call Support",
            "No Hidden Charges",
            "Refund Policy (Risk Free)"
        ],
        popular: true,
        theme: "dark"
    },
    {
        name: "Dedicated Estimator",
        price: "Call For Price",
        period: "Starting From",
        subtitle: "Dedicated Resources",
        description: "Hire a dedicated full-time estimator for your ongoing projects.",
        features: [
            "Dedicated Resources",
            "Feasibility Studies",
            "Consultation on smartly filing bids",
            "Manage the bidding network profiles",
            "Project Scheduling",
            "Material Takeoffs",
            "Cost Management"
        ],
        popular: false,
        theme: "light",
        action: "Read More" // Special button text
    }
];

const Pricing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={servicesHero}
                        alt="Pricing Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-hero opacity-90" />
                    <div className="absolute inset-0 pattern-diagonal" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-4 block animate-fade-up">
                            Transparent Pricing
                        </span>
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
                            COMPETITIVE <span className="text-gradient">RATES</span>
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200 mb-8">
                            We offer flexible pricing options tailored to your project size and complexity. Get a fast, accurate quote today.
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

            {/* Pricing Cards */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
                        {plans.map((plan, index) => {
                            const isDark = plan.theme === "dark";

                            return (
                                <div
                                    key={index}
                                    className={`
                                        relative flex flex-col items-center rounded-2xl overflow-hidden transition-all duration-300
                                        ${isDark
                                            ? "bg-secondary text-white shadow-2xl scale-105 z-10 lg:-mt-3 lg:mb-3 border-2 border-primary/20"
                                            : "bg-white text-foreground shadow-lg border border-border hover:shadow-xl"
                                        }
                                    `}
                                >
                                    {/* Header Section with Chevron Shape */}
                                    <div
                                        className={`
                                            w-full pt-8 pb-14 px-4 text-center relative
                                            ${isDark ? "bg-primary text-white" : "bg-[#1e2b4d] text-white"}
                                        `}
                                        style={{
                                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
                                        }}
                                    >
                                        <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-1 opacity-90">
                                            {plan.name}
                                        </h3>
                                        <p className="text-xs font-medium opacity-80 mb-1">{plan.period}</p>
                                        <div className="text-4xl font-bold mb-1 tracking-tight">
                                            {plan.price}
                                        </div>
                                        <p className="text-xs font-medium opacity-80">{plan.subtitle}</p>
                                    </div>

                                    {/* Body Section */}
                                    <div className={`p-6 w-full flex-1 flex flex-col ${isDark ? "pt-6" : "pt-6"}`}>
                                        <div className="space-y-3 mb-8 flex-1">
                                            {plan.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2.5">
                                                    <div
                                                        className={`
                                                            w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                                            ${isDark ? "bg-white text-secondary" : "bg-[#1e2b4d] text-white"}
                                                        `}
                                                    >
                                                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                                                    </div>
                                                    <span className={`text-xs font-medium ${isDark ? "text-gray-100" : "text-gray-700"}`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="text-center">
                                            {plan.action === "Read More" ? (
                                                <Button
                                                    size="sm"
                                                    className={`
                                                     w-32 rounded-full font-bold h-10
                                                     ${isDark
                                                            ? "bg-white text-secondary hover:bg-gray-100"
                                                            : "bg-[#1e2b4d] text-white hover:bg-[#1e2b4d]/90"
                                                        }
                                                 `}
                                                    asChild
                                                >
                                                    <Link to="/contact">Read More</Link>
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    className={`
                                                        w-full rounded-full h-10 text-sm font-bold
                                                        ${isDark
                                                            ? "bg-white text-secondary hover:bg-gray-100"
                                                            : "bg-[#1e2b4d] text-white hover:bg-[#1e2b4d]/90"
                                                        }
                                                    `}
                                                    asChild
                                                >
                                                    <Link to="/contact">Get Started</Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Payment Section & Form */}
            <PricingPaymentSection />

            {/* FAQ Section */}
            <FAQ />

            <Footer />
        </div>
    );
};

export default Pricing;
