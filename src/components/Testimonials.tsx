import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "General Contractor",
      company: "Johnson Construction",
      content: "Phoenix Estimating has been instrumental in helping us win more bids. Their accuracy and quick turnaround time have made them our go-to partner for all estimating needs.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      company: "BuildRight Inc.",
      content: "The level of detail in their takeoffs is impressive. We've reduced our estimation time by 60% and improved our bid accuracy significantly since working with them.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Owner",
      company: "Martinez Residential",
      content: "As a residential contractor, having accurate estimates is crucial. Phoenix Estimating delivers every time, and their customer support is outstanding.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what contractors across
            Phoenix have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="font-display text-lg text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
