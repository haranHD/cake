import React from 'react';
import { Cake, Heart, MapPin, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Masterclass', href: '#masterclass' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Batches', href: '#batches' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#location' },
  ];

  return (
    <footer className="bg-[#231218] text-stone-300 pt-16 pb-12 border-t border-pink-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D81B60] to-[#AD1457] flex items-center justify-center text-white shadow-md">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-white">
                  RIYA CAKES
                </h3>
                <p className="font-sans text-[11px] font-medium tracking-[0.25em] text-pink-300 uppercase">
                  A Taste of Luxury
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Empowering passionate bakers, students, and home entrepreneurs with hands-on mastery in celebration cakes, fudgy brownies, and cookies.
            </p>

            <div className="flex items-center gap-2 text-xs text-pink-300/90 pt-1">
              <MapPin className="w-4 h-4 text-[#D81B60]" />
              <span>Location: Anthiyur, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-pink-300 transition-colors py-1 block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick CTA Box */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Join Next Masterclass
            </h4>
            <p className="text-xs text-stone-400">
              Limited seats per batch for personalized hands-on guidance.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 px-5 rounded-full bg-[#D81B60] hover:bg-[#AD1457] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-pink-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Your Slot</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Riya Cakes — All rights reserved. Demo Concept Website.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-stone-400">
              Handcrafted with <Heart className="w-3 h-3 text-[#D81B60] fill-current" /> for Riya Cakes
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
