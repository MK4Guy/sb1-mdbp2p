import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 text-center bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2070&h=768')] bg-cover bg-center text-white">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Your Future with Smart, Green, and Secure Solutions</h1>
        <p className="text-xl md:text-2xl mb-8">Delivering reliable and affordable electrical, green energy, security, and networking services.</p>
        <Button size="lg" variant="secondary" asChild>
          <a href="#services">Explore Our Services</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;