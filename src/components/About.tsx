import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";
import estimatingImage from "@/assets/estimating-plans.jpg";

const About = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "24hr", label: "Turnaround Time" },
    { icon: Target, value: "100%", label: "Precision" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={estimatingImage}
                alt="Construction estimating blueprints"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-elevated border border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-gradient rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">97%</p>
                  <p className="text-muted-foreground text-sm">Bid Win Rate</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>

            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              BEST <span className="text-gradient">CONSTRUCTION </span>ESTIMATING SERVICES IN PHOENIX
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              With over <span className="text-gradient font-bold">20 years</span> of experience, we know how hard it is for contractors to manage projects and save time. That is why we are here. At phoenix construction estimating services, we offer clear and accurate estimates for projects. You get fast turnaround times and competitive prices. These benefits make us one of the best construction estimating services phoenix. We are a trusted choice among local firms.
            </p>
            <p className="text-muted-foreground mb-8">
              Each takeoff report includes a full material list based on your project needs. We cover all CSI divisions, including lumber and concrete. Our work helps you avoid miscalculations and keeps your project under control.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-muted/50">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Get a Qoute
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
