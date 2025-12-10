import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with your estimate.",
    });
    setFormData({ name: "", email: "", phone: "", zipCode: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(718) 719-6171", link: "tel:+17187196171" },
    { icon: Mail, label: "Email", value: "info@phoenixestimating.com", link: "mailto:info@phoenixestimating.com" },
    { icon: MapPin, label: "Location", value: "Phoenix, Arizona, USA" },
  ];

  const features = [
    "9-24 hour turnaround",
    "Free consultation",
    "100% confidential",
    "Certified estimators"
  ];

  return (
    <section id="contact" className="py-20 bg-hero relative overflow-hidden">
      {/* Amazing Animated Background */}

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/15 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-hero/50 to-hero" />

      {/* Diagonal lines accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgb(var(--primary)) 35px, rgb(var(--primary)) 36px)',
        }} />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            GET YOUR <span className="text-primary">FREE QUOTE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Submit your plans and receive an accurate estimate within 24 hours
          </p>
        </div>

        <div>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Contact Info (Smaller) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.link || "#"}
                    className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs mb-1">{item.label}</p>
                      <p className="text-foreground font-medium text-sm truncate">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Features */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-6 text-base">Why Choose Us?</h3>
                <div className="">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Compact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email in one row */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                  </div>

                  {/* Phone and ZIP in one row */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-10"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        ZIP Code
                      </label>
                      <Input
                        name="zipCode"
                        placeholder="85001"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="h-10"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Project Details
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="resize-none text-sm"
                    />
                  </div>

                  {/* Compact File Upload */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Upload Plans (Optional)
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                      <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1 group-hover:text-primary transition-colors" />
                      <p className="text-muted-foreground text-xs">
                        Drop files or <span className="text-primary font-medium">browse</span>
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button variant="hero" size="lg" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Get Free Quote
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-muted-foreground text-xs text-center">
                    🔒 Your information is secure. We respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
