import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Sparkles, Headphones, Settings, Target, TrendingUp, Zap, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceo from "@/assets/ceo.jpeg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutUs = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-form');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const whyChoosePoints = [
        {
            title: "24/7 Client Support",
            description: "You can contact us at any time as per your comfort.",
            icon: Headphones
        },
        {
            title: "Tailored Estimations",
            description: "We listen to your concerns and tailor the results as per your demand.",
            icon: Settings
        },
        {
            title: "98% Accuracy Rate",
            description: "You will have a better chance at winning bids with our high accuracy rate.",
            icon: Target
        },
        {
            title: "Smart Budget Strategies",
            description: "Our smart budgeting will help you plan projects with less errors.",
            icon: TrendingUp
        },
        {
            title: "Rapid Turnaround",
            description: "With our fast turnaround time, meet your bid deadlines.",
            icon: Zap
        },
        {
            title: "Flexible Deliverables",
            description: "Besides, your final estimate will be delivered in the format of your liking.",
            icon: FileCheck
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section - Bold & Attractive */}
            <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 pattern-diagonal opacity-20" />
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Badge */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                    About Us
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-center text-white leading-tight mb-8">
                            ABOUT <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">PHOENIX</span> CONSTRUCTION ESTIMATING SERVICES
                        </h1>

                        {/* Description */}
                        <div className="bg-card/10 backdrop-blur-md border border-primary/20 rounded-2xl p-8 md:p-10">
                            <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed text-center">
                                Are you in search of the best construction estimating services? We're here to help. We are a team of experts, handpicked exclusively for smart cost estimations. Thus, our firm wants to make your project a success. With over 20 years of experience, we will help you make the best budget plans. While you work with us, you can make budgets and timelines without worrying about the project quality. Moreover, we will help you take care of the construction process without having to plan out the budget at the same time.
                            </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="flex justify-center gap-4 mt-12">
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                        </div>

                        {/* Get A Quote Button */}
                        <div className="flex justify-center mt-12">
                            <Button
                                onClick={scrollToContact}
                                size="lg"
                                className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
                            >
                                Get Estimation Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Bold Design */}
            <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, rgb(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(var(--primary)) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }} />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-block mb-6">
                                <div className="flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/30">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                        Our Advantages
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                </div>
                            </div>

                            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8">
                                Why Choose <span className="text-primary">Us?</span>
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                                When you start looking for construction estimating firms, you will have many options. Nevertheless, we assure you that we could be the best one for you with our skilled professionals. We have a large team who understand market trends. So, here are some reasons to choose Phoenix construction estimating services:
                            </p>
                        </div>

                        {/* Bullet Points Grid - Attractive Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChoosePoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-card hover:bg-card/80 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                                >
                                    {/* Abstract background shape */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10" />

                                    {/* Icon Background */}
                                    <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/20">
                                        <point.icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {point.title}
                                    </h3>

                                    <p className="relative text-muted-foreground leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Decorative Element */}
                        <div className="mt-16 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                                <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-full px-8 py-4">
                                    <p className="text-foreground font-semibold text-lg">
                                        ⭐ Trusted by 2000+ Construction Professionals
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEO Message Section */}
            <section className="py-24 bg-card border-y border-border overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Leadership Message</span>
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
                                BUILDING TRUST THROUGH <span className="text-primary">ACCURACY</span>
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p className="font-semibold text-lg text-foreground">Phoenix Estimating began with a simple idea from Usman Chaudary: make bidding easier for contractors.</p>

                                <p>
                                    After 20 years in construction management, estimating, and field operations, Usman saw contractors struggling to prepare accurate, competitive bids while juggling heavy workloads. He founded Phoenix Estimating to bridge that gap—helping teams win more projects without sacrificing time.
                                </p>

                                <p>
                                    Usman holds a BA in Architecture, is LEED‑certified, and is active in the American Society of Professional Estimators. His work includes projects for Bacardi, the University of Miami, private developers, and the U.S. Embassy in Jerusalem. He leads a team of engineers and architects with deep field experience.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-border">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <h4 className="font-display text-xl text-foreground">Usman Chaudary</h4>
                                        <p className="text-primary font-medium">Founder & CEO</p>
                                    </div>
                                    <div className="ml-auto">
                                        {/* Signature placeholder (can be an image or styled text) */}
                                        <div className="font-handwriting text-3xl text-muted-foreground opacity-50 rotate-[-5deg]">
                                            Usman Ch.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                {/* Placeholder for CEO Image - Replace with actual image asset when available */}
                                {/* <div className="bg-muted w-full h-[500px] flex items-center justify-center text-muted-foreground">
                                    <span className="text-lg">CEO Portrait</span>
                                </div> */}


                                <img
                                    src={ceo}
                                    alt="Chaudhary Usman - CEO"
                                    className="w-full h-[600px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                />


                                <div className="absolute bottom-8 left-8 right-8 z-20">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                                        <p className="text-white font-medium italic">"Accuracy is the foundation of trust."</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Background Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                            Common Questions
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                            FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "What makes Phoenix construction estimating services different?",
                                a: "We stand out due to our 98% accuracy rate, 24-hour turnaround time, and a dedicated team of certified estimators who specialize in all CSI divisions."
                            },
                            {
                                q: "How do you ensure the accuracy of your estimates?",
                                a: "We use the latest estimating software combined with local market labor and material pricing databases. Our dual-layer review process ensures every number is double-checked."
                            },
                            {
                                q: "What types of projects do you estimate?",
                                a: "We handle everything from small residential renovations to large-scale commercial and industrial complexes. No project is too big or too small for our team."
                            },
                            {
                                q: "Can you help if I have a rush deadline?",
                                a: "Absolutely. We offer rush services for urgent bids. Contact us immediately, and we will prioritize your project to ensure you meet your submission deadline."
                            },
                            {
                                q: "Do you provide estimates for all US states?",
                                a: "Yes, we provide construction estimating services nationwide. We adjust our pricing data based on the specific zip code of your project location."
                            },
                            {
                                q: "Is my project information kept confidential?",
                                a: "Yes, 100%. We adhere to strict non-disclosure agreements (NDAs) and ensure your plans and project details are never shared with third parties."
                            }
                        ].map((faq, index) => (
                            <Accordion key={index} type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="bg-card rounded-xl border border-border px-6 shadow-sm">
                                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-4">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </section>

            <div id="contact-form">
                <ContactForm />
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
