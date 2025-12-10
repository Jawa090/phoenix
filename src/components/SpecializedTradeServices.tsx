import {
    Wrench,
    Building,
    Frame,
    Mountain,
    Droplets,
    Zap
} from "lucide-react";

const SpecializedTradeServices = () => {
    const specializedServices = [
        {
            icon: Wrench,
            title: "Plumbing Takeoffs",
            description: "We include plumbing takeoffs in our services for all pipes, fittings and accessories. This includes all the equipment needed in the process. Hence, you can plan control costs with it to avoid miscalculations. You can work towards success by using our trustworthy construction estimating company.",
        },
        {
            icon: Building,
            title: "Metal and Steel Estimation",
            description: "Our service will provide good estimations for steel and metal work. Besides, we will give you a breakdown for everything including connections and fabrications. Likewise, ensure clear cost projection with reliable estimations for a smoother project execution.",
        },
        {
            icon: Frame,
            title: "Door and Windows Estimation",
            description: "You will get exact takeoff measurements and cost estimation of the doors and windows. Similarly, we give you a complete estimation, covering frames and installation process. So, get the reliable Phoenix construction estimating services and win projects.",
        },
        {
            icon: Mountain,
            title: "Earthwork Estimation and Takeoffs",
            description: "For the earthwork, get an estimation for processes like grading and soil preparation. This also includes all other tasks to ensure accurate estimations. In this way, you can lead smoother projects. In addition, get takeoff quantity estimates, when dealing with construction estimating Phoenix.",
        },
        {
            icon: Droplets,
            title: "Thermal/Moisture Protection",
            description: "Get an exact estimation of thermal control equipment, including moisture barriers. In fact, find the most reliable estimations for insulation and waterproofing. Thus, you will always carry out on-time projects. In other words, you get an accurate estimate for the labour cost of all the roofing equipment.",
        },
        {
            icon: Zap,
            title: "Electrical Estimating",
            description: "From wiring and fixture panels, we provide detailed breakdowns of all the components. In the same way, our team analyses drawings and materials to give you reliable data to plan with.",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                        SPECIALIZED <span className="text-gradient">TRADE</span> SERVICES
                    </h2>

                </div>

                {/* Services Grid - Different Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {specializedServices.map((service, index) => (
                        <div
                            key={service.title}
                            className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon with Animated Background */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Decorative Bottom Line */}
                                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default SpecializedTradeServices;
