
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyImportantSectionProps {
    title: string;
    description: string;
    image: string;
}

const WhyImportantSection: React.FC<WhyImportantSectionProps> = ({ title, description, image }) => {
    return (
        <section className="py-28 bg-gradient-to-b from-background to-muted/30 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Full Width Heading - Widened to max-w-6xl */}
                <div className="max-w-6xl mx-auto text-center mb-20">

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                        {title}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-8">
                        <div className="h-1 w-12 bg-primary/30 rounded-full" />
                        <div className="h-1.5 w-24 bg-primary rounded-full" />
                        <div className="h-1 w-12 bg-primary/30 rounded-full" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Image Side - Left */}
                    <div className="relative group perspective-1000">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-700" />

                        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-black/5">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            {/* Grid Overlay */}
                            <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />

                            {/* Floating Tech Badge */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                                            <CheckCircle2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Expert Analysis</p>
                                            <p className="text-white/70 text-sm">Professional Grade Accuracy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side - Right */}
                    <div className="flex flex-col justify-center">
                        <div className="prose prose-lg prose-slate text-muted-foreground mb-12">
                            <p className="whitespace-pre-line leading-relaxed text-lg text-muted-foreground">
                                {description}
                            </p>
                        </div>

                        {/* Enhanced Call to Action Box */}
                        <div className="mt-auto relative rounded-2xl overflow-hidden shadow-xl shadow-primary/5 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-card to-background border border-primary/20 rounded-2xl" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative p-8 lg:p-10 z-10">
                                <div className="flex flex-col sm:flex-row gap-8 items-start">
                                    <div className="relative h-16 w-16 flex-shrink-0">
                                        <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-pulse" />
                                        <div className="absolute inset-0 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                            <Phone className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-display text-2xl text-foreground mb-3">
                                            Ready to Get Started?
                                        </h4>
                                        <p className="text-muted-foreground text-base mb-8 max-w-md">
                                            Our experts are standing by to provide you with accurate, reliable estimates for your next project.
                                        </p>

                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                                            >
                                                Upload Drawings
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center px-8 py-3.5 bg-background border border-input text-foreground text-sm font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-0.5"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyImportantSection;
