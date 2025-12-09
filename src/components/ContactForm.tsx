import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Phone, Mail, MapPin } from "lucide-react";
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
    { icon: Phone, label: "Phone", value: "(123) 456-7890" },
    { icon: Mail, label: "Email", value: "info@phoenixestimating.com" },
    { icon: MapPin, label: "Location", value: "Phoenix, Arizona, USA" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              UPLOAD YOUR DRAWINGS & GET A FREE QUOTE
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A quote is prepared once the drawing and specifications have been
              submitted, including the invoice, turnaround time, and delivery
              date. Submit your plans in PDF format.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="p-6 bg-muted/50 rounded-xl border border-border">
              <p className="text-muted-foreground text-sm mb-4">Your data is safe with us</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">SSL</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">NDA</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Confidential</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ZIP Code
                  </label>
                  <Input
                    name="zipCode"
                    placeholder="85001"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Plans (PDF)
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag & drop files here or click to browse
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Supports PDF, DWF, and other formats
                  </p>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Submit Quote Request
              </Button>

              <p className="text-muted-foreground text-sm text-center">
                By submitting, you agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
