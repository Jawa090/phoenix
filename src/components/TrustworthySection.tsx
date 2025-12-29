import { CheckCircle2, Award, Clock, Target, Users, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustworthySection = () => {
    const trustPoints = [
        {
            icon: Award,
            text: "A proven record of providing accurate estimates.",
        },
        {
            icon: Clock,
            text: "One of the fastest turnaround times to ensure project success.",
        },
        {
            icon: Target,
            text: "Very precise estimations to help you win bids.",
        },
        {
            icon: Users,
            text: "A team of skilled consultants to guide you over project estimations.",
        },
        {
            icon: FileText,
            text: "Reports with detailed cost breakdowns and easy to read layouts.",
        },
    ];

    return (
        <section className="py-12 bg-background relative overflow-hidden">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                        WHAT MAKES US A <span className="text-primary">TRUSTWORTHY CONSTRUCTION ESTIMATING COMPANY</span>  IN PHOENIX?
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We are a reputed name in the industry and we aim to provide the most accurate estimates for all your construction projects in Phoenix. Therefore, our smart and unique estimating softwares make us a good choice for estimating construction costs in Phoenix. Moreover, we use advanced estimating techniques to ensure precise results for insightful planning. Here's what we deliver, making us the #1 estimating company in Phoenix:
                    </p>
                </div>

                {/* Trust Points - Two Column Grid Layout */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
                    {trustPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group relative bg-card border-l-4 border-primary/30 hover:border-primary rounded-r-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative flex items-center gap-4 p-5">
                                {/* Number Badge */}
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                                        <span className="text-primary font-bold text-base">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                        <point.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-foreground leading-relaxed">
                                        {point.text}
                                    </p>
                                </div>

                                {/* Check Icon */}
                                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Animated bottom border - Absolutely positioned */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={() => {
                            const contactForm = document.getElementById('contact');
                            if (contactForm) {
                                contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        className="group"
                    >
                        Get Estimation Now
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.location.href = 'tel:+12128122993'}
                        className="group"
                    >
                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Call Us Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TrustworthySection;
