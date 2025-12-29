import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Trades list remains hardcoded for now as requested only services update
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
    } else {
      navigate("/contact");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Phoenix Logo" className="w-[60px] h-[60px] object-contain group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <span className="font-display text-2xl text-primary font-bold tracking-normal leading-none block">
                PHOENIX
              </span>
              <span className="block text-[0.6rem] text-white tracking-[0.54em] uppercase font-medium leading-none ml-[1px] mt-1">
                ESTIMATING
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
              className="relative h-full flex items-center"
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
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-up">
                  <div className="bg-card border border-border rounded-xl shadow-elevated py-2 max-h-[80vh] overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/${service.slug}`}
                        className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className={`relative px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/portfolio") ? "text-primary" : ""
                }`}
            >
              Portfolio
              {isActive("/portfolio") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            {/* Samples */}
            {/* Samples */}
            {/* <Link
              to="/samples"
              className={`relative px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/samples") ? "text-primary" : ""
                }`}
            >
              Samples
              {isActive("/samples") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link> */}

            {/* Pricing */}
            <Link
              to="/pricing"
              className={`relative px-4 py-2 text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium group ${isActive("/pricing") ? "text-primary" : ""
                }`}
            >
              Pricing
              {isActive("/pricing") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

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
            <a href="tel:+12128122993" className="flex items-center gap-2 text-primary font-semibold hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" />
              <span>(212) 812-2993</span>
            </a>
            <Button variant="hero" size="default" onClick={scrollToContact}>
              Get Estimation Now
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
              
              {/* Services Mobile Dropdown */}
              <div className="py-2">
                <Link
                  to="/services"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium block mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <div className="ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/portfolio"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              {/* <Link
                to="/samples"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Samples
              </Link> */}
              <Link
                to="/pricing"
                className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
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
                  Get Estimation Now
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
