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
        name: "Single Trade Package",
        price: "$150 - $250",
        period: "per Project",
        subtitle: "Single Trade",
        description: "Perfect for specific trade needs with quick turnaround.",
        features: [
            "Turnaround within 2 Working Days",
            "Any Single Trade or Project",
            "Multiple Revisions",
            "No Hidden Charges",
            "24/7 Email Client Support"
        ],
        popular: false,
        theme: "light"
    },
    {
        name: "Standard Packages",
        price: "$400 - $600",
        period: "per Project",
        subtitle: "Multiple Trades",
        description: "Comprehensive solution for multiple trades and cost management.",
        features: [
            "Turnaround within 4 Working Days",
            "Multiple Trades and Projects",
            "Material Takeoffs",
            "Cost Management",
            "Multiple Revisions",
            "24/7 Email Client Support",
            "No Hidden Charges"
        ],
        popular: true,
        theme: "dark"
    },
    {
        name: "Premium Packages",
        price: "$1000 - $1500",
        period: "per Project",
        subtitle: "Dedicated Service",
        description: "Top-tier service with dedicated resources and feasibility studies.",
        features: [
            "Dedicated Resources",
            "Feasibility Studies",
            "Prioritized Estimates",
            "Project Timeline Planning",
            "Cost Control"
        ],
        popular: false,
        theme: "light"
    },
    {
        name: "Residential Monthly Bundle",
        price: "$2500 - $3500",
        period: "per Month",
        subtitle: "Residential Scale",
        description: "Ideal for ongoing residential projects up to 2 storeys.",
        features: [
            "Up to 15 Projects",
            "Project Size: 2 Storey Buildings",
            "Turnaround: 3 Days per Project",
            "Multiple Revisions Allowed",
            "Constant Call & Chat Support",
            "Project Management",
            "Budget Oversight"
        ],
        popular: false,
        theme: "light"
    },
    {
        name: "Commercial Monthly Bundle",
        price: "$3500 - $4500",
        period: "per Month",
        subtitle: "Commercial Scale",
        description: "High-volume commercial estimating for large projects.",
        features: [
            "Up to 15 Projects",
            "Project Size: 10k - 20k SF",
            "Turnaround: 3 Days per Project",
            "Multiple Revisions Allowed"
        ],
        popular: false,
        theme: "light"
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
                            OUR <span className="text-gradient">PRICING</span> PLANS
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-4xl mx-auto animate-fade-up delay-200 mb-8">
                            We are now a reputed construction estimating company in Phoenix. Like our estimations, we aim to serve you value at affordable prices. We have multiple plans with flexible pricing to suit every budget and goal. You can choose a plan from among these and benefit from our exceptional services within your affordability.
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

            {/* Pricing Cards */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto items-start">
                        {plans.map((plan, index) => {
                            const isDark = plan.theme === "dark";

                            return (
                                <div
                                    key={index}
                                    className={`
                                        relative flex flex-col items-center rounded-2xl overflow-hidden transition-all duration-300
                                        w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1rem)]
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
            <FAQ items={[
                {
                    question: "Are there any hidden costs apart from the estimate given by your firm?",
                    answer: "No, we do not charge extra after giving you an  estimate. Our policy is based on transparency and effective communication with clients.",
                },
                {
                    question: "Can I ask for a personalized response according to my specific goals?",
                    answer: "Yes, you can ask for a quote based on  your personal goals. Our team of professionals looks toward identifying unique elements of your project to help you build a plan.",
                },
                {
                    question: "Through what ways can I pay securely for your services?",
                    answer: "We have multiple payment options for your convenience. You can pay through a credit card, payPal or Debit Card to ensure secure payments.",
                },
                {
                    question: "In what format do you give the final estimate to the clients?",
                    answer: "We provide the estimates according to client demand in many formats. These include formats such as PDF, DWF and other specialized software. Among these, we ensure the data lays out in a way that is easy to understand.",
                },
            ]} />

            <Footer />
        </div>
    );
};

export default Pricing;
