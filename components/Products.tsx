import Image from 'next/image';
import { Button } from '@/components/ui/button';

const products = [
  { name: 'InnoTech CRM', description: 'Streamline your customer relationships', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=300' },
  { name: 'InnoTech Analytics', description: 'Gain insights from your data', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=300' },
  { name: 'InnoTech Security Suite', description: 'Comprehensive protection for your business', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=300' },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-background rounded-lg shadow-md overflow-hidden">
              <Image src={product.image} alt={product.name} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button>Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;