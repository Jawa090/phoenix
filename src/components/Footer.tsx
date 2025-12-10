import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Footer = () => {
  // We'll show the same 6 services
  const footerServices = services.slice(0, 6);

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">P</span>
              </div>
              <div>
                <span className="font-display text-xl text-primary-foreground">PHOENIX</span>
                <span className="block text-xs text-muted-foreground -mt-1">
                  Construction Estimating
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Your trusted partner for accurate construction estimates. Over 20
              years of experience helping contractors win more bids.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl text-primary-foreground mb-6">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl text-primary-foreground mb-6">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl text-primary-foreground mb-6">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-secondary-foreground/70 text-sm">Phone</p>
                  <a href="tel:+17187196171" className="hover:text-primary transition-colors">
                    (718) 719-6171
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-secondary-foreground/70 text-sm">Email</p>
                  <a href="mailto:info@phoenixestimating.com" className="hover:text-primary transition-colors">
                    info@phoenixestimating.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-secondary-foreground/70 text-sm">Location</p>
                  <p>Phoenix, Arizona, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Phoenix Construction Estimating Services. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Serving contractors in Phoenix, Arizona and nationwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
