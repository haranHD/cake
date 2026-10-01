import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  BookOpen, 
  Layers, 
  Wand2, 
  Palette, 
  Flame, 
  Cookie, 
  Package, 
  DollarSign, 
  ClipboardList, 
  Briefcase 
} from 'lucide-react';

export default function Learning() {
  const steps = [
    { step: '01', name: 'LEARN', desc: 'Core baking chemistry & foolproof measurements' },
    { step: '02', name: 'PRACTICE', desc: 'Real-time handcrafting, piping & baking under guidance' },
    { step: '03', name: 'CREATE', desc: 'Design celebration cakes, brownie bars & cookies' },
    { step: '04', name: 'START', desc: 'Launch your baking orders with costing & packaging skills' },
  ];

  const takeaways = [
    { title: 'Baking Fundamentals', icon: BookOpen, desc: 'Ingredient balance, leaveners, oven heat management, and mixing precision.' },
    { title: 'Cake Preparation', icon: Layers, desc: 'Cooling, professional leveling, layering sponges, and crumb coating.' },
    { title: 'Frosting Techniques', icon: Wand2, desc: 'Stable whipping, smoothing, achieving razor-sharp top and side edges.' },
    { title: 'Cake Decoration', icon: Palette, desc: 'Piping styles, drip aesthetics, color mixing, and celebration aesthetics.' },
    { title: 'Brownie Making', icon: Flame, desc: 'Crackly crinkle tops, dense fudgy centers, and cheesecake swirls.' },
    { title: 'Cookie Making', icon: Cookie, desc: 'Choco chip texture control, buttery crumb, baking and cooling secrets.' },
    { title: 'Storage & Packaging', icon: Package, desc: 'Preserving freshness, cake boxes, airtight jars, and presentation.' },
    { title: 'Costing & Pricing', icon: DollarSign, desc: 'Calculating ingredients, overheads, margins, and quoting client prices.' },
    { title: 'Order Preparation', icon: ClipboardList, desc: 'Pre-order timelines, staging ingredients, and safe transport protocols.' },
    { title: 'Baking Business Basics', icon: Briefcase, desc: 'Starting your home brand, customer communication, and taking first orders.' },
  ];

  return (
    <section id="learning" className="py-20 lg:py-28 bg-[#FFF5F8]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-white border border-pink-200 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lifelong Skills & Knowledge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            What You’ll Take Home
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Practical skills, professional baking recipes, and foundational business acumen.
          </p>
        </div>

        {/* Subtle Visual Timeline: LEARN → PRACTICE → CREATE → START */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-pink-100">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#5E1228] mb-6">
              Your 4-Phase Learning Journey
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {steps.map((st, i) => (
                <div key={st.name} className="relative flex flex-col items-center text-center p-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-pink-200 text-[#D81B60] font-bold text-xs flex items-center justify-center mb-2.5 shadow-xs">
                    {st.step}
                  </div>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#420C1C] tracking-wider mb-1">
                    {st.name}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-snug">
                    {st.desc}
                  </span>

                  {/* Arrow for desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-5 text-pink-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 10 Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {takeaways.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-pink-100/80 shadow-sm hover:shadow-md hover:border-[#D81B60]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F5] text-[#D81B60] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#420C1C] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-pink-50 flex items-center gap-1 text-[10px] font-semibold text-[#D81B60]">
                  <Check className="w-3 h-3" />
                  <span>Module Included</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
