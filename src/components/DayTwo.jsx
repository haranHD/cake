import React from 'react';
import { Clock, CheckCircle2, Sparkles, Cookie, Flame } from 'lucide-react';

export default function DayTwo({ onOpenBooking }) {
  const browniePoints = [
    {
      title: 'Perfect texture & baking tips',
      desc: 'Achieve the elusive papery crinkle top with a rich, molten fudgy center without cakey dryness.'
    },
    {
      title: 'Cheesecake-style brownie variation',
      desc: 'Learn the luxurious marbled swirl technique balancing tangy cream cheese and dark chocolate.'
    },
    {
      title: 'Storage & packaging tips',
      desc: 'Clean bar slicing techniques, parchment wrapping, humidity control, and artisanal gift box presentation.'
    }
  ];

  const cookiePoints = [
    {
      title: 'Choco chip cookies',
      desc: 'Classic cafe-style cookies with crispy golden rims, chewy center, and melted chocolate pockets.'
    },
    {
      title: 'Butter cookies / other varieties',
      desc: 'Tender, melt-in-the-mouth piped butter cookies and versatile dough fundamentals.'
    },
    {
      title: 'Baking & cooling tips',
      desc: 'Oven heat calibration, dough chilling science, tray spacing, and wire rack cooling dynamics.'
    },
    {
      title: 'Packaging & shelf life',
      desc: 'Airtight tin sealing, decorative cookie pouches, moisture protection, and commercial longevity.'
    }
  ];

  return (
    <section id="day-2" className="py-20 lg:py-24 bg-[#FCF9F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5E1228] text-white shadow-sm">
              DAY 2
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-pink-200 text-[#5E1228]">
              <Clock className="w-3.5 h-3.5 text-[#D81B60]" />
              <span>10:00 AM – 3:00 PM</span>
            </div>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Brownie + Cookie Masterclass
          </h3>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Two commercial crowd-favorites taught in detail with texture science, styling, and packaging.
          </p>
        </div>

        {/* Split Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Brownie Masterclass */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-100/90 flex flex-col justify-between hover:border-[#D81B60]/30 transition-all duration-300">
            {/* Card Visual Banner */}
            <div className="relative h-64 sm:h-72 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80"
                alt="Decadent chocolate brownies with crinkle top"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D81B60] uppercase tracking-wider inline-block mb-1">
                  Module 1
                </span>
                <h4 className="font-serif text-2xl font-bold">Brownie Masterclass</h4>
                <p className="text-xs text-pink-100">Fudgy, crinkly, and gourmet variations</p>
              </div>
            </div>

            {/* Card Content Checklist */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#5E1228] border-b border-pink-100 pb-2">
                  What You Will Master:
                </h5>
                <div className="space-y-3.5">
                  {browniePoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFF0F5] text-[#D81B60] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h6 className="text-xs sm:text-sm font-bold text-[#420C1C] leading-snug">
                          {item.title}
                        </h6>
                        <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">✨ Includes Cheesecake Swirl</span>
                <button
                  onClick={() => onOpenBooking('october')}
                  className="px-4 py-2 rounded-full bg-[#FFF0F5] hover:bg-[#FCE8EE] text-[#D81B60] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Cookie Masterclass */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-100/90 flex flex-col justify-between hover:border-[#D81B60]/30 transition-all duration-300">
            {/* Card Visual Banner */}
            <div className="relative h-64 sm:h-72 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80"
                alt="Freshly baked artisan cookies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#5E1228] uppercase tracking-wider inline-block mb-1">
                  Module 2
                </span>
                <h4 className="font-serif text-2xl font-bold">Cookie Masterclass</h4>
                <p className="text-xs text-pink-100">Choco chip, buttery textures & packaging</p>
              </div>
            </div>

            {/* Card Content Checklist */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#5E1228] border-b border-pink-100 pb-2">
                  What You Will Master:
                </h5>
                <div className="space-y-3.5">
                  {cookiePoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFF0F5] text-[#D81B60] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h6 className="text-xs sm:text-sm font-bold text-[#420C1C] leading-snug">
                          {item.title}
                        </h6>
                        <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">✨ Choco Chip & Butter Cookies</span>
                <button
                  onClick={() => onOpenBooking('october')}
                  className="px-4 py-2 rounded-full bg-[#FFF0F5] hover:bg-[#FCE8EE] text-[#D81B60] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
