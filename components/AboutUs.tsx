import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <p className="text-lg text-center mb-8">
          At DENJI SYSTEMS, we're committed to delivering innovative and sustainable energy and security solutions. Our expertise in electrical, green energy, security, and networking services ensures that we can meet all your technological needs under one roof.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Over 10 years of industry experience',
            'Cutting-edge green energy technologies',
            'Comprehensive security and networking solutions',
            'Reliable and affordable services'
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;