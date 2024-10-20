import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <Testimonials />
      <ContactCTA />
      <ContactForm />
    </div>
  );
}