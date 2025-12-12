import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wrench, Building, Frame, Mountain, Droplets, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TradesPage = () => {
    const navigate = useNavigate();

    const trades = [
        {
            icon: Wrench,
            title: "Plumbing Takeoffs",
            description: "Comprehensive plumbing takeoffs for all pipes, fittings and accessories. We help you plan and control costs with detailed material lists and labor estimates.",
            features: ["Pipe systems", "Fixtures", "Fittings", "Labor costs"],
            href: "/trades/plumbing"
        },
        {
            icon: Building,
            title: "Metal & Steel Estimation",
            description: "Precise estimations for steel and metal work with detailed breakdowns for connections and fabrications. Ensure clear cost projections for structural elements.",
            features: ["Structural steel", "Metal framing", "Connections", "Fabrication"],
            href: "/trades/metal-steel"
        },
        {
            icon: Frame,
            title: "Door & Windows Estimation",
            description: "Exact takeoff measurements and cost estimation of doors and windows, covering frames and installation. Get reliable estimates for all opening types.",
            features: ["Entry doors", "Windows", "Frames", "Installation"],
            href: "/trades/doors-windows"
        },
        {
            icon: Mountain,
            title: "Earthwork Estimation",
            description: "Detailed estimation for earthwork processes like grading and soil preparation with quantity takeoff estimates. Plan your site work accurately.",
            features: ["Grading", "Excavation", "Soil prep", "Site work"],
            href: "/trades/earthwork"
        },
        {
            icon: Droplets,
            title: "Thermal/Moisture Protection",
            description: "Exact estimation of thermal control equipment including moisture barriers, insulation, and waterproofing. Protect your investment with accurate estimates.",
            features: ["Insulation", "Moisture barriers", "Waterproofing", "Thermal control"],
            href: "/trades/thermal-moisture"
        },
        {
            icon: Zap,
            title: "Electrical Estimating",
            description: "Detailed breakdowns of wiring, fixture panels, and all electrical components for reliable project planning. Complete electrical system estimates.",
            features: ["Wiring", "Panels", "Fixtures", "Components"],
            href: "/trades/electrical"
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-hero overflow-hidden">
                <div className="absolute inset-0 pattern-diagonal opacity-30" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-6">
                            SPECIALIZED <span className="text-primary">TRADES</span>
                        </h1>
                        <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                            Expert estimating services across specialized construction trades with precision and industry expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trades Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trades.map((trade, index) => (
                            <div
                                key={index}
                                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 flex flex-col"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <trade.icon className="w-8 h-8 text-primary" />
                                </div>

                                <h3 className="font-display text-2xl text-foreground mb-4">
                                    {trade.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {trade.description}
                                </p>

                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-foreground mb-3">What we cover:</p>
                                    <ul className="space-y-2">
                                        {trade.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                    onClick={() => navigate(trade.href)}
                                >
                                    Learn More →
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl text-foreground mb-6">
                            NEED MULTIPLE TRADE ESTIMATES?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            We provide comprehensive multi-trade estimating packages tailored to your project needs.
                        </p>
                        <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
                            Get Estimation Now
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TradesPage;
