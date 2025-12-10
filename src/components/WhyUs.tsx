import { Trophy, Award, MapPin, Percent, Users, Clock, Headphones } from "lucide-react";

interface CounterProps {
  end: number;
  start?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, start, suffix = "", prefix = "" }: CounterProps) => {
  if (start !== undefined) {
    return (
      <span className="counter-animate">
        {prefix}<span className="counter-value">{start}</span> - <span className="counter-value">{end}</span>{suffix}
      </span>
    );
  }
  return (
    <span className="counter-animate" style={{ '--end': end } as React.CSSProperties}>
      {prefix}<span className="counter-value">{end}</span>{suffix}
    </span>
  );
};

const WhyUs = () => {
  const benefits = [
    {
      icon: Trophy,
      value: 97,
      suffix: "%",
      title: "Project Winning Rate",
      description: "Increase your chances of winning bid proposals significantly",
    },
    {
      icon: Award,
      value: 100,
      suffix: "%",
      title: "Certified Estimators",
      description: "All team members have AACE and AIQS certifications",
    },
    {
      icon: MapPin,
      value: 50,
      suffix: "+",
      title: "ZIP-Code Based Prices",
      description: "Material and labor pricing specific to your project location",
    },
    {
      icon: Percent,
      value: 60,
      suffix: "%",
      title: "Project Cost Savings",
      description: "We help you save significantly on project costs",
    },
    {
      icon: Users,
      value: 70,
      suffix: "%",
      title: "Higher Client Retention",
      description: "Increase your client success rate with our services",
    },
    {
      icon: Clock,
      value: 24,
      startValue: 9,
      suffix: " hr",
      title: "Rapid Turnaround",
      description: "Fast turnaround time ranging from 9 to 24 hours",
    },
    {
      icon: Headphones,
      value: 24,
      suffix: "/7",
      title: "Customer Support",
      description: "Expert construction estimators provide quality support around the clock",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mt-4 mb-6">
            WHY <span className="text-primary">OUTSOURCE</span>  PHOENIX CONSTRUCTION ESTIMATING?
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            You can save time and resources by working with our construction estimating company. In other words, we will take care of this difficult task while you focus on other things. Here’s how we are the best choice for you:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.slice(0, 4).map((benefit) => (
            <div
              key={benefit.title}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-4xl text-primary mb-2">
                <Counter end={benefit.value} start={(benefit as any).startValue} suffix={benefit.suffix} />
              </p>
              <h3 className="font-semibold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {benefits.slice(4).map((benefit) => (
            <div
              key={benefit.title}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-4xl text-primary mb-2">
                <Counter end={benefit.value} start={(benefit as any).startValue} suffix={benefit.suffix} />
              </p>
              <h3 className="font-semibold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
