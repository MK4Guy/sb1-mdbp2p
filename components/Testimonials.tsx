import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  { name: 'Dan Kimotho', company: 'Tech Corp', content: 'Githinji Engineering Solutions provided us with an excellent solar panel installation. Our energy costs have significantly decreased.', avatar: 'JD' },
  { name: 'Derrick Ndegwa', company: 'Secure Offices Ltd', content: 'The security system installed by Githinji Engineering has given us peace of mind. Their team was professional and efficient.', avatar: 'JS' },
  { name: 'Irene Mukuria', company: 'Data Networks Inc', content: 'We\'ve never had faster or more reliable internet. Their networking solutions have truly transformed our business operations.', avatar: 'MJ' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;