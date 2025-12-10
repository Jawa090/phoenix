import React from 'react';

interface RangeOfServicesSectionProps {
    title: string;
    description: string;
    items: string[];
}

const RangeOfServicesSection: React.FC<RangeOfServicesSectionProps> = ({ title, description, items }) => {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-5" />

            {/* Decorative Element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-orange-400 flex-shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(255,165,0,0.5)]" />
                            <span className="text-gray-100 font-medium text-lg">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RangeOfServicesSection;
