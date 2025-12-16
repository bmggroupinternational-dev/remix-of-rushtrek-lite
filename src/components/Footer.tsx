import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'International Packages', path: '/international' },
  { name: 'Local Tours', path: '/local-tours' },
  { name: 'Air Ticketing', path: '/air-ticketing' },
  { name: 'About Us', path: '/about' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div>
                <span className="font-bold text-lg">Rushtrek</span>
                <span className="text-primary font-medium ml-1">Travelling</span>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Your trusted partner for international travel packages, local tours, and air ticketing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:reservations@rushtrektours.com"
                  className="flex items-center gap-2 text-cream/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  reservations@rushtrektours.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+255746772277"
                  className="flex items-center gap-2 text-cream/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +255 746 772 277
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-cream/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Dar es Salaam, Tanzania
                </span>
              </li>
            </ul>
          </div>

          {/* Main Site & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rushtrek Tours</h4>
            <a
              href="https://rushtrektours.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors text-sm mb-6"
            >
              Visit Main Website
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Rushtrek Travelling. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm">
              Part of{' '}
              <a
                href="https://rushtrektours.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-gold-light transition-colors"
              >
                Rushtrek Tours
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
