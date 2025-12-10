import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const services = [
    { label: "Construction Estimating", href: "/services/construction-estimating" },
    { label: "Residential Estimating", href: "/services/residential-estimating" },
    { label: "Commercial Estimating", href: "/services/commercial-estimating" },
    { label: "Industrial Estimating", href: "/services/industrial-estimating" },
    { label: "Remodeling Estimating", href: "/services/remodeling-estimating" },
  ];

  const trades = [
    { label: "Plumbing Takeoffs", href: "/trades/plumbing" },
    { label: "Metal & Steel", href: "/trades/metal-steel" },
    { label: "Door & Windows", href: "/trades/doors-windows" },
    { label: "Earthwork Estimation", href: "/trades/earthwork" },
    { label: "Thermal/Moisture", href: "/trades/thermal-moisture" },
    { label: "Electrical Estimating", href: "/trades/electrical" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-display text-xl text-primary-foreground">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-2xl text-primary-foreground tracking-wide">
                PHOENIX
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">
                Construction Estimating
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className={`relative px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/") && location.pathname === "/" ? "text-primary" : ""
                }`}
            >
              Home
              {isActive("/") && location.pathname === "/" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/services") ? "text-primary" : ""
                  }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
                {isActive("/services") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>

              {/* Services Dropdown Menu */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-elevated py-2 animate-fade-up">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Trades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("trades")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/trades"
                className={`flex items-center gap-1 px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/trades") ? "text-primary" : ""
                  }`}
              >
                Trades
                <ChevronDown className="w-4 h-4" />
                {isActive("/trades") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>

              {/* Trades Dropdown Menu */}
              {activeDropdown === "trades" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-elevated py-2 animate-fade-up">
                  {trades.map((trade) => (
                    <Link
                      key={trade.href}
                      to={trade.href}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {trade.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about"
              className={`relative px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/about") ? "text-primary" : ""
                }`}
            >
              About Us
              {isActive("/about") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/contact") ? "text-primary" : ""
                }`}
            >
              Contact
              {isActive("/contact") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+17187196171" className="flex items-center gap-2 text-primary font-semibold hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" />
              <span>(718) 719-6171</span>
            </a>
            <Button variant="hero" size="default" onClick={scrollToContact}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10 animate-fade-up">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/trades"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Trades
              </Link>
              <Link
                to="/about"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-primary/10">
                <Button variant="hero" className="w-full" onClick={() => { scrollToContact(); setIsMenuOpen(false); }}>
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
