import React from 'react';
import { BookOpen, MapPin, Laptop, HelpCircle, Gift } from 'lucide-react';

export default function Bonuses() {
  const bonuses = [
    {
      icon: BookOpen,
      number: '01',
      title: 'Printed Recipe Booklet',
      desc: 'Printed recipe booklet with additional recipes',
      details: 'Comprehensive reference containing tested sponge formulations, eggless adaptations, fillings, fudgy brownies, and cookies.'
    },
    {
      icon: MapPin,
      number: '02',
      title: 'Supplier Guidance',
      desc: 'Supplier / baking-material shop guidance around Anthiyur, Bhavani, Gobichettipalayam & Erode area',
      details: 'Curated directory of raw material suppliers, packaging vendors, cake board sources, and chocolate dealers in the regional belt.'
    },
    {
      icon: Laptop,
      number: '03',
      title: 'Online & Offline Options',
      desc: 'Online & Offline options',
      details: 'Flexible learning modes whether you prefer hands-on in-person classroom studio instruction or learning remotely from home.'
    },
    {
      icon: HelpCircle,
      number: '04',
      title: 'Ongoing Guidance',
      desc: 'Doubt clearing & ongoing guidance',
      details: 'Continued mentorship after class completion so you never feel stuck when practicing or executing customer orders at home.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-[#FFF0F5] border border-pink-100 mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Valuable Additions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Bonus — Included With Your Masterclass
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Everything you need not just during the workshop, but to succeed long after you complete it.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-7 rounded-3xl bg-white border border-pink-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF0F5] text-[#D81B60] group-hover:bg-[#D81B60] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-serif text-xs font-bold text-pink-300/80 tracking-widest">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#5E1228] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#D81B60] mb-2.5 leading-relaxed">
                    “{item.desc}”
                  </p>

                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-pink-50 flex items-center text-[10px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-[#D81B60] transition-colors">
                  Included Free with Slot
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
