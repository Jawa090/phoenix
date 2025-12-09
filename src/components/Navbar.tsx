import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { label: "Home", href: isHomePage ? "#hero" : "/", isRoute: !isHomePage },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Why Us", href: isHomePage ? "#why-us" : "/#why-us", isRoute: !isHomePage },
    { label: "Process", href: isHomePage ? "#process" : "/#process", isRoute: !isHomePage },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact", isRoute: !isHomePage },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
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
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
            <Button variant="hero" size="default">
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
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-primary/10">
                <Button variant="hero" className="w-full">
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
