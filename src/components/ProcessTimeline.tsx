import { processSteps } from '@/data/packages';
import { MessageSquare, Plane, Hotel, Car, Compass, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Plane,
  Hotel,
  Car,
  Compass,
  Headphones,
};

export function ProcessTimeline() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            We Handle It All
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the first call to your landing back home, we manage every detail so you travel stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.step}
                className="relative bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
