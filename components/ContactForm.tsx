"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to your server
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-xl text-center mb-8">Have a project in mind? Let's talk!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">Request a Quote</Button>
          </form>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="flex items-center"><Phone className="mr-2" /> +254703132032</p>
            <p className="flex items-center"><Mail className="mr-2" /> denjisystems@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary hover:text-primary-dark"><Facebook /></a>
              <a href="#" className="text-primary hover:text-primary-dark"><Twitter /></a>
              <a href="#" className="text-primary hover:text-primary-dark"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;