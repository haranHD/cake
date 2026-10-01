import React from 'react';
import { Clock, CheckCircle2, Sparkles, BookOpen, Layers, Heart } from 'lucide-react';

export default function DayOne({ onOpenBooking }) {
  const syllabusPoints = [
    {
      title: 'Beginner-friendly basic vanilla sponge',
      desc: 'Master the foundation of celebration cakes with consistent rise, soft crumb, and moisture.'
    },
    {
      title: 'Baking tips, secrets & troubleshooting',
      desc: 'Avoid domed tops, dense textures, sinking centers, and pan release mishaps.'
    },
    {
      title: 'Cooling, leveling & cake preparation',
      desc: 'Professional wire leveling, even slicing, torte stacking, and syrup balancing.'
    },
    {
      title: 'Frosting techniques',
      desc: 'Stable whipping, crumb coat sealing, sharp outer edges, and silky smooth finishes.'
    },
    {
      title: 'Multiple filling & flavour variations',
      desc: 'Fruit compotes, rich ganaches, cream cheese infusions, and delicate layering combinations.'
    },
    {
      title: 'Chocolate cake recipe included',
      desc: 'Bonus deep chocolate sponge formulation tailored for luscious celebration cakes.'
    },
    {
      title: 'Eggless recipes provided in printed recipe booklet',
      desc: 'Tested vegetarian formulations ensuring equal softness and celebratory flavor.'
    },
    {
      title: 'Commercial tips: costing, pricing, storage & order preparation',
      desc: 'Raw material costing calculator tips, pricing for profit, safe transport boxes, and client orders.'
    }
  ];

  return (
    <section id="day-1" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Day 1 Feature Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFF5F8] via-[#FCF9F9] to-white border border-pink-200/80 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left 7 Columns: Curriculum Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              
              <div>
                {/* Badges & Timing */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D81B60] text-white shadow-sm">
                    DAY 1
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-pink-200 text-[#5E1228]">
                    <Clock className="w-3.5 h-3.5 text-[#D81B60]" />
                    <span>10:00 AM – 4:00 PM</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#420C1C] tracking-tight mb-2">
                  Celebration Cake Masterclass
                </h3>

                {/* Highlight Statement */}
                <p className="font-serif italic text-lg sm:text-xl text-[#D81B60] font-medium mb-6">
                  “Learn the techniques. Create beautiful cakes.”
                </p>

                {/* Curriculum Bullet Checklist */}
                <div className="space-y-3.5 pt-2">
                  {syllabusPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FCE8EE] text-[#D81B60] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#5E1228] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-8 mt-6 border-t border-pink-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  <span className="font-semibold text-[#5E1228]">Includes:</span> Printed Recipe Booklet + Hands-on Assembly
                </div>
                <button
                  onClick={() => onOpenBooking('october')}
                  className="px-6 py-2.5 rounded-full bg-[#D81B60] hover:bg-[#AD1457] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Book Day 1 Slot
                </button>
              </div>

            </div>

            {/* Right 5 Columns: Photography Showcase */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"
                alt="Layered Celebration Cake Masterclass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                  Hands-on Experience
                </span>
                <p className="font-serif text-xl font-bold">From Sponge to Flawless Finish</p>
                <p className="text-xs text-pink-100/90">Mastering stable creams, drip aesthetics, and elegant borders.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
