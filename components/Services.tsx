import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Zap, Leaf, Shield, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { title: 'Electrical Services', description: 'Expert electrical installations, maintenance, and repairs.', icon: Zap },
  { title: 'Green Energy Solutions', description: 'Solar panels, energy storage, and sustainable energy solutions.', icon: Leaf },
  { title: 'Security Systems', description: 'CCTV, alarms, and access control systems to secure your premises.', icon: Shield },
  { title: 'Networking Solutions', description: 'Fast and reliable data cabling and IT infrastructure.', icon: Wifi },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-center mb-12">Tailored Solutions for Your Needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;