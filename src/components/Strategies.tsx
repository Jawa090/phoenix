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
      description: "We ensure that every interaction with all our clients is clear and meaningful. Therefore, our professionals focus on finding the best solutions for you.",
    },
    {
      icon: FileSearch,
      title: "Thorough Project Preparation",
      description: "Our professionals have in-depth understanding of the market to study the project specifications. As per the client requirements, they too provide services and reliable estimates ",
    },
    {
      icon: Settings2,
      title: "Advanced Tool Use",
      description: "Our firm uses modern industry tools and softwares for optimal speed and results. Thus, make your project a success with construction cost estimating services Phoenix.",
    },
    {
      icon: Database,
      title: "Updated Cost Databases",
      description: "We ensure right pricing in the estimation process according to regions. Likewise, our team uses the latest databases for labour and material cost.",
    },
    {
      icon: GraduationCap,
      title: "Expert Training",
      description: "Training sessions are regularly held to keep our estimators and data specialists updated. Hence, it helps them align with the evolving industry trends.",
    },
    {
      icon: RefreshCw,
      title: "Regular Revisions",
      description: "We are aware of the changing trends and requirements of the construction industry. So, we refine our methods and techniques to keep up with  market competition.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "One of our top-most priorities is better assessment and risk management. In a similar manner, we strive to come up with safe cost projections, which you can rely upon.",
    },
    {
      icon: TrendingUp,
      title: "Continued Growth",
      description: "With every project adding to our experience, we improve efficiency. For example, we analyse past outcomes, becoming one of the top construction estimating services in Phoenix.",
    },
    {
      icon: Handshake,
      title: "Building Client Relationships",
      description: "Our main focus is building trust through transparency and consistent service. In conclusion, we aim to build lasting relationships with our clients.",
    },
    {
      icon: Sparkles,
      title: "Customized Solutions",
      description: "We specialize in identifying the unique needs of every project such as budgets. Then, we provide tailored estimates and takeoffs to match the clients needs.",
    },
    {
      icon: CheckCircle,
      title: "Quality Control Checks",
      description: "Each of our estimates goes through an internal review. Hence, we ensure that it is according to the project requirements.",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

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
