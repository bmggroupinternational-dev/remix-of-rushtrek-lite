import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Layout } from '@/components/Layout';
import { ticketingFAQ } from '@/data/packages';
import { Plane, Search, Users, RefreshCw, MessageCircle, Mail, Phone, Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const ticketSchema = z.object({
  fullName: z.string().min(2, 'Name is required').max(100),
  phone: z.string().min(8, 'Valid phone number required').max(20),
  email: z.string().email('Valid email required').max(255),
  from: z.string().min(2, 'Departure city is required').max(100),
  to: z.string().min(2, 'Destination city is required').max(100),
  departureDate: z.string().min(1, 'Departure date is required'),
  returnDate: z.string().optional(),
  adults: z.string().min(1, 'Number of adults is required'),
  children: z.string().optional(),
  cabinClass: z.string().min(1, 'Cabin class is required'),
  notes: z.string().max(1000).optional(),
});

type TicketFormData = z.infer<typeof ticketSchema>;

const services = [
  { icon: Search, title: 'Flight Search', description: 'We search across all major airlines to find you the best options.' },
  { icon: Plane, title: 'Best Route Suggestions', description: 'Optimized routing for time and budget efficiency.' },
  { icon: Users, title: 'Group Bookings', description: 'Special rates and coordination for corporate and group travel.' },
  { icon: RefreshCw, title: 'Changes Support', description: 'Assistance with rebooking and itinerary changes.' },
  { icon: Globe, title: 'Visa Arrangement', description: 'Complete visa processing and arrangement services for all countries.' },
];

export default function AirTicketing() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      cabinClass: 'economy',
    },
  });

  const onSubmit = async (data: TicketFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Received!",
      description: "We'll send you a quote shortly.",
    });
    reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Air travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block text-primary font-medium mb-4">✈️ Fast & Reliable</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Air Ticketing & Visa Services
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Let us handle your flight bookings and visa arrangements. From route optimization to visa processing for all countries, we make air travel simple and stress-free.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-card rounded-2xl shadow-sm border border-border text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Request Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Get a Quote</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Request Your Ticket
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fill out the form with your travel details and our ticketing team will get back to you with the best flight options and pricing.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:reservations@rushtrektours.com"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-sm text-muted-foreground">reservations@rushtrektours.com</p>
                  </div>
                </a>
                <a
                  href="tel:+255746772277"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">+255 746 772 277</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/255746772277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#25D366] rounded-xl text-white hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-medium">Chat on WhatsApp</p>
                    <p className="text-sm text-white/80">Quick response guaranteed</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Request Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    We'll send you flight options and a quote shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Ticket Request Form</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" {...register('fullName')} placeholder="Your full name" className="mt-1" />
                      {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" {...register('phone')} placeholder="+255 xxx xxx xxx" className="mt-1" />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" {...register('email')} placeholder="your@email.com" className="mt-1" />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from">From (City/Airport) *</Label>
                      <Input id="from" {...register('from')} placeholder="e.g., Dar es Salaam" className="mt-1" />
                      {errors.from && <p className="text-destructive text-sm mt-1">{errors.from.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="to">To (City/Airport) *</Label>
                      <Input id="to" {...register('to')} placeholder="e.g., Dubai" className="mt-1" />
                      {errors.to && <p className="text-destructive text-sm mt-1">{errors.to.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="departureDate">Departure Date *</Label>
                      <Input id="departureDate" type="date" {...register('departureDate')} className="mt-1" />
                      {errors.departureDate && <p className="text-destructive text-sm mt-1">{errors.departureDate.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="returnDate">Return Date (Optional)</Label>
                      <Input id="returnDate" type="date" {...register('returnDate')} className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="adults">Adults *</Label>
                      <Input id="adults" type="number" min="1" {...register('adults')} placeholder="1" className="mt-1" />
                      {errors.adults && <p className="text-destructive text-sm mt-1">{errors.adults.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Input id="children" type="number" min="0" {...register('children')} placeholder="0" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cabinClass">Cabin Class *</Label>
                      <Select onValueChange={(value) => setValue('cabinClass', value)} defaultValue="economy">
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="premium">Premium Economy</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="first">First Class</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.cabinClass && <p className="text-destructive text-sm mt-1">{errors.cabinClass.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      {...register('notes')}
                      placeholder="Any special requests, preferred airlines, etc..."
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Request Ticket Quote'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {ticketingFAQ.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
