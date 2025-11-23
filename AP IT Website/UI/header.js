import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-gray-100 py-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">(123) 456-7890</span>
              </a>
              <a href="mailto:support@apitsupport.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">support@apitsupport.com</span>
              </a>
            </div>
            <div className="text-sm text-gray-600">
              24/7 Support Available
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white">API</span>
            </div>
            <span className="text-xl">IT Support</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
