import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
        <p className="text-xl mb-8">Let's discuss how DENJI SYSTEMS can transform your business</p>
        <Button size="lg" variant="secondary">Contact Us Today</Button>
      </div>
    </section>
  );
};

export default ContactCTA;