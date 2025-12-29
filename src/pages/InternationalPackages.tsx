import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { PackageCard } from '@/components/PackageCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { EnquiryForm } from '@/components/EnquiryForm';
import { packages, TravelPackage } from '@/data/packages';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'beach', label: 'Beach' },
  { id: 'city', label: 'City' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'sports', label: 'Sports Events' },
  { id: 'family', label: 'Family' },
];

export default function InternationalPackages() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="International travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block text-primary font-medium mb-4">🌍 Explore the World</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            International Packages
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Discover our handpicked international travel packages. From tropical beaches to vibrant cities, we've got your dream destination covered.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground hover:bg-muted'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <div key={pkg.id} style={{ animationDelay: `${index * 0.05}s` }} className="animate-fade-up opacity-0">
                  <PackageCard pkg={pkg} onEnquire={setSelectedPackage} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No packages found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
          <p className="text-center text-muted-foreground">
            Showing {filteredPackages.length} of {packages.length} packages
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Lead Capture Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Ready to Book Your Trip?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fill out the form and our travel experts will get back to you with a personalized quote. We'll work with you to create the perfect itinerary for your dream destination.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Free consultation and itinerary planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Best price guarantee on packages
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  24/7 support during your journey
                </li>
              </ul>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Enquiry Dialog */}
      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <EnquiryForm prefilledDestination={selectedPackage?.destination} />
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
