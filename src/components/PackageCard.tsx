import { TravelPackage } from '@/data/packages';
import { Clock, DollarSign, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  pkg: TravelPackage;
  onEnquire: (pkg: TravelPackage) => void;
}

export function PackageCard({ pkg, onEnquire }: PackageCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover border border-border">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.destination}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full capitalize">
            {pkg.category}
          </span>
        </div>
        {pkg.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {pkg.destination}
          </h3>
          <p className="text-sm text-muted-foreground">{pkg.country}</p>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            {pkg.duration}
          </span>
        </div>

        {/* Inclusions */}
        <ul className="space-y-2 mb-4">
          {pkg.inclusions.map((inclusion, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{inclusion}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-xl font-bold text-foreground">{pkg.startingPrice.toLocaleString()}</span>
            </p>
          </div>
          <Button
            onClick={() => onEnquire(pkg)}
            className="bg-primary hover:bg-gold-dark text-primary-foreground"
          >
            Enquire Now
          </Button>
        </div>

        {/* Validity */}
        {pkg.validFrom && pkg.validTo && (
          <p className="mt-3 text-xs text-muted-foreground text-center">
            Valid: {pkg.validFrom} – {pkg.validTo}
          </p>
        )}
      </div>
    </div>
  );
}
