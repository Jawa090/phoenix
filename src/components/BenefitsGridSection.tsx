import React from 'react';
import {
    Calculator,
    BarChart3,
    CalendarClock,
    Briefcase,
    FileText,
    ShieldCheck,
    Clock,
    TrendingDown
} from 'lucide-react';

const benefits = [
    {
        title: "Better Cost Understanding",
        description: "You can understand project costs, including direct expense, indirect expense, material cost, labor wages, etc, in a better way using our cost estimating services.",
        icon: Calculator
    },
    {
        title: "Efficient Resource Allocation",
        description: "Contractors can efficiently allocate resources and wisely use materials available for construction. You can choose materials according to the nature of your construction project.",
        icon: BarChart3
    },
    {
        title: "Perfect Construction Planning",
        description: "We enable you to plan the construction by making the right decisions. With our assistance, you can design your project efficiently without financial hindrances.",
        icon: CalendarClock
    },
    {
        title: "Excellent Tasks Management",
        description: "At one of the best cost estimating firms, our professionals help you manage your tasks excellently without fear of low-quality executions, project delays, and mismanagement.",
        icon: Briefcase
    },
    {
        title: "Complete Bid Assistance",
        description: "Creating and submitting bids is no longer a tension. We are here to assist you in this matter. Now, you can confidently bid on multiple projects efficiently.",
        icon: FileText
    },
    {
        title: "No Budget Overruns",
        description: "The construction budget shakes when sudden expenses arise during the project's processing. With our support, you can eliminate all the chances of budget overruns.",
        icon: ShieldCheck
    },
    {
        title: "Timely Deliveries",
        description: "No more construction project delays. Our cost estimators make budget plans that follow strict deadlines and never cross the boundaries, whatever the reason behind them.",
        icon: Clock
    },
    {
        title: "Cost Optimization",
        description: "You can get optimized budget plans by hiring our estimator for cost estimating services. We help you reduce costs without damaging the project's quality.",
        icon: TrendingDown
    }
];

interface BenefitsGridSectionProps {
    title?: string;
    benefits?: string[];
}

const BenefitsGridSection: React.FC<BenefitsGridSectionProps> = ({ title, benefits: propBenefits }) => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Benefits Of Getting Our Construction Cost Estimates
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our building estimating firm offers services to various professionals, including contractors, builders, engineers, architects, developers, homeowners, project managers, etc. Whoever you are, we ensure you get precise and accurate cost estimates that can help you in different ways. Simply put, you can simultaneously open the doors of multiple opportunities using our budget estimating services. See what benefits you can enjoy with our expert assistance!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-card p-8 rounded-xl border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {benefit.title}
                                </h3>

                                <div className="w-12 h-1 bg-primary/20 rounded-full mb-4 group-hover:bg-primary group-hover:w-20 transition-all duration-300" />

                                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsGridSection;
