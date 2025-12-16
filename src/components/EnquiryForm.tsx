import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Name is required').max(100),
  phone: z.string().min(8, 'Valid phone number required').max(20),
  email: z.string().email('Valid email required').max(255),
  destination: z.string().min(2, 'Destination is required').max(100),
  travelDates: z.string().min(2, 'Travel dates are required').max(100),
  travellers: z.string().min(1, 'Number of travellers is required').max(10),
  notes: z.string().max(1000).optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  prefilledDestination?: string;
}

export function EnquiryForm({ prefilledDestination }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      destination: prefilledDestination || '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Thank you!",
      description: "Our team will contact you shortly.",
    });
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Our team will contact you shortly to discuss your travel plans.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border">
      <h3 className="text-xl font-bold text-foreground mb-6">Get a Quote</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              {...register('fullName')}
              placeholder="Your full name"
              className="mt-1"
            />
            {errors.fullName && (
              <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone / WhatsApp *</Label>
            <Input
              id="phone"
              {...register('phone')}
              placeholder="+255 xxx xxx xxx"
              className="mt-1"
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="destination">Destination *</Label>
            <Input
              id="destination"
              {...register('destination')}
              placeholder="Where do you want to go?"
              className="mt-1"
            />
            {errors.destination && (
              <p className="text-destructive text-sm mt-1">{errors.destination.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="travelDates">Travel Dates *</Label>
            <Input
              id="travelDates"
              {...register('travelDates')}
              placeholder="e.g., March 15-22, 2025"
              className="mt-1"
            />
            {errors.travelDates && (
              <p className="text-destructive text-sm mt-1">{errors.travelDates.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="travellers">Number of Travellers *</Label>
          <Input
            id="travellers"
            {...register('travellers')}
            placeholder="e.g., 2 adults, 1 child"
            className="mt-1"
          />
          {errors.travellers && (
            <p className="text-destructive text-sm mt-1">{errors.travellers.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            {...register('notes')}
            placeholder="Any special requests or preferences..."
            className="mt-1 min-h-[100px]"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
        </Button>
      </form>

      {/* Quick Contact */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center mb-4">Or contact us directly</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:reservations@rushtrektours.com"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            Email Us
          </a>
          <a
            href="tel:+255746772277"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            Call Now
          </a>
          <a
            href="https://wa.me/255746772277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] rounded-lg text-sm font-medium text-white hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
