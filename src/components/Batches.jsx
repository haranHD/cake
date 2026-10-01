import React from 'react';
import { Calendar, Clock, Sparkles, Users, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';

export default function Batches({ onOpenBooking }) {
  return (
    <section id="batches" className="py-20 lg:py-28 bg-[#FFF5F8]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-white border border-pink-200 mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule & Registration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Upcoming Batches
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Limited Seats Only — Small Group Attention</span>
          </div>
        </div>

        {/* Date Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Batch 1: October 3 & 4, 2026 */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 shadow-xl border-2 border-[#D81B60] flex flex-col justify-between overflow-hidden">
            
            {/* Top Ribbon / Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-[#D81B60] text-white text-[10px] font-bold uppercase tracking-wider px-6 py-1.5 rounded-bl-2xl shadow-sm">
                Enrolling Now
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0F5] text-[#D81B60] border border-pink-200 mb-4">
                First Class
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#420C1C] mb-1">
                October 3 & 4, 2026
              </h3>

              <p className="text-sm font-semibold text-[#881A3B] mb-6 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D81B60]" />
                <span>Saturday & Sunday</span>
              </p>

              <div className="space-y-3 py-4 border-y border-pink-100/80 text-xs sm:text-sm text-stone-600">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-500">Day 1 (Celebration Cakes):</span>
                  <span className="font-bold text-[#420C1C]">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-500">Day 2 (Brownie & Cookies):</span>
                  <span className="font-bold text-[#420C1C]">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-500">Location:</span>
                  <span className="font-bold text-[#420C1C]">Anthiyur (Offline & Online)</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#D81B60] font-medium">
                <Users className="w-4 h-4" />
                <span>Personalized hands-on station for every participant</span>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <button
                onClick={() => onOpenBooking('october')}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D81B60] to-[#AD1457] hover:from-[#AD1457] hover:to-[#5E1228] text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Your Slot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Batch 2: Before Diwali */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 shadow-lg border border-pink-100 flex flex-col justify-between overflow-hidden">
            
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-[#5E1228] text-white text-[10px] font-bold uppercase tracking-wider px-6 py-1.5 rounded-bl-2xl">
                Upcoming
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-[#5E1228] border border-stone-200 mb-4">
                Second Class
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#420C1C] mb-1">
                Before Diwali
              </h3>

              <p className="text-sm font-semibold text-[#881A3B] mb-6 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Exact date will be announced soon</span>
              </p>

              <div className="space-y-3 py-4 border-y border-pink-100/80 text-xs sm:text-sm text-stone-600">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-500">Day 1 (Celebration Cakes):</span>
                  <span className="font-bold text-[#420C1C]">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-500">Day 2 (Brownie & Cookies):</span>
                  <span className="font-bold text-[#420C1C]">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-500">Festive Special:</span>
                  <span className="font-bold text-[#420C1C]">Diwali Hamper Gifting Focus</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-stone-500 font-medium">
                <Users className="w-4 h-4 text-[#D81B60]" />
                <span>Pre-register to receive date notification first</span>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <button
                onClick={() => onOpenBooking('diwali')}
                className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-pink-50/80 text-[#5E1228] border-2 border-pink-200 font-semibold text-xs uppercase tracking-wider hover:border-[#D81B60] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Your Slot (Pre-Register)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
