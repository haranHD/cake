import React from 'react';
import { Cake, Sparkles, BookOpen, Layers, Package, TrendingUp, CheckCircle, ArrowDown } from 'lucide-react';

export default function Masterclass() {
  const pillars = [
    {
      icon: Layers,
      title: 'Practical Techniques',
      desc: 'Hands-on practice from measuring and batter consistency to temperature mastery.'
    },
    {
      icon: BookOpen,
      title: 'Baking Fundamentals',
      desc: 'Understand the science of leavening, gluten, fat emulsions, and cake sponge textures.'
    },
    {
      icon: Sparkles,
      title: 'Practice Decoration',
      desc: 'Leveling, crumb coating, sharp edges, flawless borders, and artistic piping styles.'
    },
    {
      icon: Package,
      title: 'Storage & Packaging',
      desc: 'Learn proper preservation, ambient shelf life, moisture control, and box presentation.'
    },
    {
      icon: TrendingUp,
      title: 'Commercial Tips',
      desc: 'Fundamental advice on costing, pricing formulas, order handling, and client packaging.'
    }
  ];

  return (
    <section id="masterclass" className="py-20 lg:py-28 bg-[#FCF9F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-200 text-xs font-semibold uppercase tracking-wider text-[#D81B60] shadow-sm mb-3">
            <Cake className="w-3.5 h-3.5" />
            <span>Comprehensive Immersion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            2-Day Baking Masterclass
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#D81B60] mt-2 font-medium">
            Learn • Practice • Create
          </p>
        </div>

        {/* Master Overview Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-pink-100 relative overflow-hidden">
          
          {/* Subtle Pink Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FFF0F5] to-transparent rounded-full blur-2xl pointer-events-none -z-0" />
          
          {/* Top Badge: Designed for Beginners */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-pink-100 relative z-10">
            <div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5E1228] text-white shadow-sm">
                Designed for Beginners
              </span>
              <p className="text-xs text-stone-500 mt-2">Zero prior baking knowledge required — start with confidence</p>
            </div>

            <div className="text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-[#FFF0F5] px-3 py-1 rounded-full border border-pink-200">
                2 Full Days of Immersion
              </span>
            </div>
          </div>

          {/* Three Core Disciplines Combined */}
          <div className="py-8 relative z-10">
            <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-500 mb-6">
              Three Complete Disciplines in One Workshop
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              
              {/* Discipline 1: Celebration Cakes */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FFF5F8] to-white border border-pink-100 text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#FCE8EE] text-[#D81B60] mx-auto flex items-center justify-center font-serif text-xl font-bold">
                  🎂
                </div>
                <h4 className="font-serif font-bold text-lg text-[#5E1228]">Celebration Cakes</h4>
                <p className="text-xs text-stone-600">Sponges, filling, crumb coating, sharp frosting & decoration</p>
              </div>

              {/* Plus Sign */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-[#D81B60] flex items-center justify-center font-bold text-base shadow-sm">
                  +
                </div>
              </div>
              <div className="flex md:hidden items-center justify-center text-[#D81B60] font-bold text-sm">
                +
              </div>

              {/* Discipline 2: Brownies */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FFF5F8] to-white border border-pink-100 text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#FCE8EE] text-[#5E1228] mx-auto flex items-center justify-center font-serif text-xl font-bold">
                  🍫
                </div>
                <h4 className="font-serif font-bold text-lg text-[#5E1228]">Brownie Masterclass</h4>
                <p className="text-xs text-stone-600">Crinkle tops, fudgy textures & cheesecake-style swirl brownie</p>
              </div>

              {/* Plus Sign */}
              <div className="hidden md:hidden"></div>

            </div>

            {/* Discipline 3: Cookie Masterclass Banner */}
            <div className="mt-4 p-4 rounded-2xl bg-pink-50/70 border border-pink-200/60 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-xl">🍪</span>
              <div>
                <span className="font-serif font-bold text-[#5E1228] text-base">Cookie Masterclass: </span>
                <span className="text-xs text-stone-700">Choco chip cookies, butter cookies, baking & cooling tips</span>
              </div>
            </div>
          </div>

          {/* Key Learning Pillars */}
          <div className="pt-6 border-t border-pink-100 relative z-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-4 text-center">
              Core Skills You Will Experience
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-100 shadow-sm flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FFF0F5] text-[#D81B60] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#420C1C]">{pillar.title}</h5>
                      <p className="text-[11px] text-stone-500 leading-snug mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center relative z-10">
            <a
              href="#day-1"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5E1228] hover:bg-[#420C1C] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>View Full Curriculum</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
