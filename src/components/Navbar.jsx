import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight, Cake, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Masterclass', href: '#masterclass' },
    { label: "What You'll Learn", href: '#learning' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Batches', href: '#batches' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#location' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100/80 py-2.5 sm:py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D81B60] to-[#5E1228] flex items-center justify-center text-white shadow-md shadow-pink-600/20 group-hover:scale-105 transition-transform">
              <Cake className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#5E1228] leading-none group-hover:text-[#D81B60] transition-colors">
                RIYA CAKES
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#D81B60] uppercase mt-0.5">
                A Taste of Luxury
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium text-stone-700 hover:text-[#D81B60] hover:bg-pink-50/70 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-[#D81B60] hover:bg-[#AD1457] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-pink-600/25 hover:shadow-pink-600/40 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Your Slot</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full bg-[#D81B60] text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
            >
              Book Slot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#5E1228] hover:bg-pink-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-pink-100 shadow-xl px-5 pt-3 pb-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-stone-800 hover:text-[#D81B60] hover:bg-pink-50/80 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-pink-300" />
              </a>
            ))}
            <div className="pt-3 border-t border-pink-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-pink-600/20 text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Your Slot</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
