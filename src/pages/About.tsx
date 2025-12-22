import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Shield, MessageSquare, Users, Globe, Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const promises = [{
  icon: Shield,
  title: 'Transparency',
  description: 'Clear pricing with no hidden fees. What we quote is what you pay.'
}, {
  icon: MessageSquare,
  title: 'Punctual Communication',
  description: 'Timely responses and updates throughout your booking journey.'
}, {
  icon: Users,
  title: 'Curated Partners',
  description: 'We work only with trusted hotels, airlines, and local operators.'
}, {
  icon: Heart,
  title: 'Reliable Support',
  description: "24/7 assistance from booking to return. We're always a call away."
}];
const values = [{
  icon: Globe,
  title: 'Passion for Travel',
  description: 'We believe every journey should be extraordinary.'
}, {
  icon: Star,
  title: 'Personalized Service',
  description: 'No cookie-cutter packages – every itinerary is tailored to you.'
}, {
  icon: Users,
  title: 'Seamless Planning',
  description: 'We handle every detail so you can focus on the experience.'
}];
export default function About() {
  return <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80" alt="Travel adventure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block text-primary font-medium mb-4">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Trusted Travel Partner
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            At Rushtrek Travelling, we turn your travel dreams into seamless realities.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Crafting Memorable Journeys
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Rushtrek Travel is your gateway to unforgettable international travel experiences. As part of the Rushtrek Tours family, we bring years of expertise in curating exceptional journeys.</p>
                <p>From luxurious beach escapes in the Maldives to vibrant city adventures in Dubai, from cultural immersions in Turkey to family-friendly getaways in Bali, we plan every detail with precision and care.</p>
                <p>
                  Our commitment goes beyond booking flights and hotels. We create complete travel experiences with personalized itineraries, seamless transfers, and round-the-clock support throughout your journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" alt="Travel destination" className="rounded-2xl shadow-lg" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Client Satisfaction Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Believe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => <div key={value.title} className="text-center p-8 bg-card rounded-2xl shadow-sm border border-border" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Promise to You
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise, index) => <div key={promise.title} className="p-6 bg-card rounded-2xl shadow-sm border border-border group hover:border-primary/30 transition-colors" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <promise.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{promise.title}</h3>
                <p className="text-sm text-muted-foreground">{promise.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920&q=80" alt="Travel destination" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Plan Your Next Adventure
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Ready to experience seamless travel? Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/international">
                Explore Packages <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-white text-white hover:bg-white hover:text-charcoal">
              <a href="https://wa.me/255746772277" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}