import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'International Packages', path: '/international' },
  { name: 'Local Tours', path: '/local-tours' },
  { name: 'Air Ticketing', path: '/air-ticketing' },
  { name: 'About', path: '/about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Rushtrek</span>
              <span className="text-primary font-medium ml-1">Travelling</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+255746772277"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+255 746 772 277</span>
            </a>
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/international">Get Started</Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="tel:+255746772277"
                  className="flex items-center gap-2 px-4 py-3 text-foreground"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+255 746 772 277</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
