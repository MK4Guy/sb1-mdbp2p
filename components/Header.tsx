"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          DENJI SYSTEMS
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="/#about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
          <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button size="sm">Get a Quote</Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;