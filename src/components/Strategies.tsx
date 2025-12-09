import { 
  MessageSquare, 
  FileSearch, 
  Settings2, 
  Database, 
  GraduationCap,
  RefreshCw,
  Shield,
  TrendingUp,
  Handshake,
  Sparkles,
  CheckCircle
} from "lucide-react";

const Strategies = () => {
  const strategies = [
    {
      icon: MessageSquare,
      title: "Effective Communication",
      description: "Every interaction with clients is clear and meaningful. Our professionals focus on finding the best solutions for you.",
    },
    {
      icon: FileSearch,
      title: "Thorough Project Preparation",
      description: "In-depth understanding of the market to study project specifications and provide reliable estimates.",
    },
    {
      icon: Settings2,
      title: "Advanced Tool Use",
      description: "Modern industry tools and software for optimal speed and accurate results on your projects.",
    },
    {
      icon: Database,
      title: "Updated Cost Databases",
      description: "Right pricing in the estimation process according to regions using the latest labour and material databases.",
    },
    {
      icon: GraduationCap,
      title: "Expert Training",
      description: "Regular training sessions keep our estimators updated and aligned with evolving industry trends.",
    },
    {
      icon: RefreshCw,
      title: "Regular Revisions",
      description: "We refine our methods and techniques to keep up with changing trends and market competition.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Better assessment and risk management with safe cost projections you can rely upon.",
    },
    {
      icon: TrendingUp,
      title: "Continued Growth",
      description: "Every project adds to our experience. We analyze past outcomes to improve efficiency.",
    },
    {
      icon: Handshake,
      title: "Building Relationships",
      description: "Building trust through transparency and consistent service for lasting client relationships.",
    },
    {
      icon: Sparkles,
      title: "Customized Solutions",
      description: "Identifying unique needs of every project and providing tailored estimates to match your requirements.",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Each estimate goes through internal review to ensure it meets project requirements.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Approach
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            OUR STRATEGIES FOR SUCCESS
          </h2>
          <p className="text-muted-foreground text-lg">
            We use smart strategies and advanced techniques to ensure precise
            results for insightful project planning.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={strategy.title}
              className="flex gap-4 items-start group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <strategy.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
