import React from 'react';
import { Sparkles, Calendar, ArrowRight, Heart, Cookie, Award, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-gradient-to-b from-[#FFF5F8] via-[#FCF9F9] to-white">
      {/* Subtle Luxury Ambient Background Blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#FCE4EC]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFF0F5]/80 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Festive Season Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200/80 shadow-sm text-xs font-semibold text-[#D81B60] tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D81B60] animate-pulse" />
              <span>FESTIVE SEASON</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
            </div>

            {/* Supporting Heading & Main Headline */}
            <div className="space-y-3">
              <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#881A3B] tracking-wide">
                2-Day Baking Masterclass
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#420C1C] leading-[1.12] tracking-tight">
                Turn Your Baking Passion{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#701431]">
                  Into a Business
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Learn, practice and build the confidence to create beautiful celebration cakes, brownies and cookies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] hover:from-[#AD1457] hover:to-[#5E1228] text-white font-semibold text-sm uppercase tracking-wider shadow-lg shadow-pink-600/30 hover:shadow-pink-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Your Slot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#masterclass"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-pink-50/60 text-[#5E1228] border border-pink-200/80 font-semibold text-sm tracking-wide shadow-sm hover:border-[#D81B60]/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Masterclass</span>
              </a>
            </div>

            {/* Quick Masterclass Highlights Pills */}
            <div className="pt-2 border-t border-pink-100/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D81B60]" />
                <span className="font-medium">Designed for Beginners</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D81B60]" />
                <span className="font-medium">Celebration Cakes + Brownies + Cookies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D81B60]" />
                <span className="font-medium">Anthiyur (Offline & Online)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Bakery Visual Collage */}
          <div className="lg:col-span-6 relative">
            
            {/* Floating Decorative Element 1: Heart */}
            <div className="absolute -top-6 -left-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-2.5 animate-float-slow">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F5] text-[#D81B60] flex items-center justify-center">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#5E1228] uppercase tracking-wider">A Taste of Luxury</p>
                <p className="text-[10px] text-stone-500">Artisan Masterclasses</p>
              </div>
            </div>

            {/* Floating Decorative Element 2: Cookie & Brownie badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-3 animate-float-gentle">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-serif font-bold text-xs">
                🍪
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#5E1228] uppercase tracking-wider">Brownie + Cookies</p>
                <p className="text-[10px] text-[#D81B60] font-medium">Day 2 Workshop Focus</p>
              </div>
            </div>

            {/* Main Editorial Grid Cards */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Feature Image: Celebration Cake */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=80"
                  alt="Celebration Cake Masterclass at Riya Cakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D81B60] uppercase tracking-wider inline-block mb-1">
                    Day 1 Special
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-bold">Celebration Cake Masterclass</p>
                  <p className="text-xs text-pink-100/90">Frosting, Leveling, Flavoring & Commercial Tips</p>
                </div>
              </div>

              {/* Secondary Overlapping Cards: Brownies & Cookies */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
                    alt="Fudgy gourmet brownies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-xs font-semibold font-serif">Decadent Brownies</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
                    alt="Choco chip cookies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-xs font-semibold font-serif">Choco Chip Cookies</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
