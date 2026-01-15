import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PackageCard } from '@/components/PackageCard';
import { packages } from '@/data/packages';
import { Globe, MapPin, Plane, Shield, Clock, Heart, Users, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { EnquiryForm } from '@/components/EnquiryForm';
import { TravelPackage } from '@/data/packages';
const highlights = [{
  icon: Globe,
  title: 'International Packages',
  description: 'Curated travel experiences to the world\'s most exciting destinations.',
  link: '/international'
}, {
  icon: MapPin,
  title: 'Local Tours',
  description: 'Discover Tanzania\'s safari, beaches, and mountains with Rushtrek Tours.',
  link: '/local-tours'
}, {
  icon: Plane,
  title: 'Air Ticketing',
  description: 'Fast and reliable flight bookings with best route suggestions.',
  link: '/air-ticketing'
}];
const whyUs = [{
  icon: Shield,
  title: 'Trusted Service',
  description: 'We handle every detail with care and professionalism.'
}, {
  icon: Clock,
  title: 'Seamless Planning',
  description: 'From enquiry to return, we manage it all.'
}, {
  icon: Heart,
  title: 'Dedicated Support',
  description: '24/7 assistance throughout your journey.'
}, {
  icon: Users,
  title: 'Personal Touch',
  description: 'Tailored itineraries to match your preferences.'
}];
export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const featuredPackages = packages.filter(p => p.featured).slice(0, 6);
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80" alt="Travel adventure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-medium mb-4 animate-fade-up opacity-0 stagger-1">
              ✈️ Your Journey Starts Here
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up opacity-0 stagger-2">
              Plan Your Holiday with{' '}
              <span className="text-primary">Rushtrek Travel</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
              We plan everything for you: ticketing, hotel reservations, transfers, and full travel support. Experience seamless journeys to your dream destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/international">View International Packages</Link>
              </Button>
              <Button asChild size="lg" className="text-base px-8 bg-charcoal text-white border-2 border-white hover:bg-white hover:text-charcoal">
                <Link to="/air-ticketing">Request Air Ticket</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative plane icon - flying across */}
        <div className="absolute bottom-12 left-0 w-full overflow-hidden pointer-events-none">
          <div className="animate-[fly-across_8s_linear_infinite]">
            <Plane className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => <Link key={item.title} to={item.link} className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Why Rushtrek Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Travel with Confidence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Rushtrek Travelling, we bring flexibility, dedication, and seamless service to every journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => <div key={item.title} className="text-center p-6 bg-card rounded-2xl shadow-sm border border-border" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
              <span className="text-primary-foreground font-medium">
                Trusted by travellers, corporates, and public figures
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <span className="text-primary-foreground/80">
              Your seamless journey partner since day one
            </span>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Popular Destinations
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/international">
                View All Packages <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg, index) => <div key={pkg.id} style={{
            animationDelay: `${index * 0.1}s`
          }} className="animate-fade-up opacity-0">
                <PackageCard pkg={pkg} onEnquire={setSelectedPackage} />
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" alt="Beach destination" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today and let us plan your perfect holiday experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/international">Explore Packages</Link>
            </Button>
            <Button asChild size="lg" className="text-base px-8 bg-[#25D366] text-white border-0 hover:bg-[#20BD5A]">
              <a href="https://wa.me/255746772277" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Dialog */}
      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="w-[calc(100%-1.5rem)] sm:max-w-lg p-0 max-h-[92vh] overflow-hidden flex flex-col">
          <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 pt-12 sm:px-6 sm:pb-6 sm:pt-12 overscroll-contain touch-pan-y [-webkit-overflow-scrolling:touch]">
            <EnquiryForm prefilledDestination={selectedPackage?.destination} />
          </div>
        </DialogContent>
      </Dialog>
    </Layout>;
}