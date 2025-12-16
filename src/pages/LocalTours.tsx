import { Layout } from '@/components/Layout';
import { localExperiences } from '@/data/packages';
import { ExternalLink, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LocalTours() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="Tanzania safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block text-primary font-medium mb-4">🦁 Discover Tanzania</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Tanzania with Rushtrek Tours
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From the endless plains of Serengeti to the pristine beaches of Zanzibar and the majestic peaks of Kilimanjaro – experience the best of Tanzania.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Local Tours by Rushtrek Tours
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our local Tanzania experiences are managed by our parent company, Rushtrek Tours. From world-class safaris to island escapes and mountain adventures, we offer authentic Tanzanian experiences with expert guides and premium service.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <MapPin className="w-5 h-5" />
              <span>Based in Dar es Salaam, Tanzania</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Experiences</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Local Tours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localExperiences.map((experience, index) => (
              <a
                key={experience.id}
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    View on Main Site
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=1920&q=80"
            alt="Mount Kilimanjaro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Tanzanian Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our full range of safari packages, beach getaways, and mountain expeditions on the Rushtrek Tours website.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <a href="https://rushtrektours.com" target="_blank" rel="noopener noreferrer">
              Go to Local Tours on Main Website
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🦁</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Safari Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Years of experience guiding visitors through Tanzania's most iconic national parks.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏝️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Island Escapes</h3>
              <p className="text-sm text-muted-foreground">
                Pristine beaches, historic Stone Town, and authentic Zanzibar experiences.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⛰️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mountain Adventures</h3>
              <p className="text-sm text-muted-foreground">
                Conquer Kilimanjaro with our expert guides and carefully planned routes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
