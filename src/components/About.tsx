import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";
import estimatingImage from "@/assets/estimating-plans.jpg";
import ceoImage from "@/assets/ceo.jpeg";

const About = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/contact');
    }
  };
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

            <Button variant="default" size="lg" onClick={scrollToContact}>
              Get Estimation Now
            </Button>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="mt-24">
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              {/* CEO Image */}
              <div className="mx-auto md:mx-0">
                <div className="relative">
                  <img
                    src={ceoImage}
                    alt="Usman Chaudhary - CEO"
                    className="w-48 h-48 rounded-xl object-cover shadow-elevated"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                    <p className="font-display text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>

              {/* CEO Message Content */}
              <div>
                <h3 className="font-display text-3xl text-foreground mb-6">
                  A Message from Our <span className="text-gradient">CEO</span>
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Phoenix estimating started with a clear goal to make bidding easier for contractors. After 20 years of experience in the industry, Usman Chaudhary saw a common problem. Contractors were under constant pressure to create the right bids. This was to be done while they also managed projects and deadlines. He founded Phoenix Estimating to solve this challenge. The idea was to take the estimating burden off of contractors' shoulders. They could then focus on their business growth.
                  </p>
                  <p>
                    Today, Phoenix Estimating helps you prepare strong bids faster. This gives them a better chance to win without the added stress.
                  </p>
                  <div className="mt-8 p-6 bg-card/50 rounded-xl border-l-4 border-primary">
                    <p className="font-display text-lg text-foreground mb-2">
                      "YOU'RE FREE TO BE DIFFERENT"
                    </p>
                    <p className="text-muted-foreground italic">
                      True innovation comes not from technology alone, but from the courage to embrace change, empower people, and envision a future where possibilities are limitless. Together, we don't just adapt to the digital age - we define it.
                    </p>
                    <p className="text-foreground font-semibold mt-4">
                      - Usman Chaudhary
                    </p>
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

export default About;
