import React from 'react';
import { Sparkles, Heart, Cake, ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA({ onOpenBooking }) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#D81B60] via-[#C2185B] to-[#5E1228] text-white">
      
      {/* Decorative Subtle Elements */}
      <div className="absolute top-10 left-10 text-white/10 pointer-events-none">
        <Cake className="w-32 h-32 animate-float-slow" />
      </div>
      <div className="absolute bottom-8 right-12 text-white/10 pointer-events-none">
        <Heart className="w-28 h-28 animate-float-gentle fill-current" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-pink-100 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Riya Cakes • A Taste of Luxury</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Turn Your Baking Passion Into a Skill?
        </h2>

        {/* Subheading */}
        <p className="font-serif italic text-lg sm:text-xl text-pink-100/90 mt-4 max-w-2xl mx-auto leading-relaxed">
          “Learn. Practice. Create. Take the next step toward your baking journey.”
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-[#5E1228] hover:bg-pink-50 font-bold text-xs uppercase tracking-wider shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Your Slot</span>
            <ArrowRight className="w-4 h-4 text-[#D81B60]" />
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Riya Cakes</span>
          </button>
        </div>

        {/* Bottom Assurance */}
        <p className="text-xs text-pink-200/80 mt-8 tracking-wide">
          Anthiyur Studio Masterclass • Offline & Online • Printed Recipe Booklet Included
        </p>

      </div>
    </section>
  );
}
