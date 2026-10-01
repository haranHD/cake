import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Who can join the masterclass?',
      a: 'The masterclass is open to beginners, home bakers, school students, college students, women interested in starting a baking business, and young girls interested in baking.'
    },
    {
      q: 'Is this suitable for beginners?',
      a: 'Yes, absolutely. The masterclass is specially designed for beginners with zero prior baking experience, teaching you step-by-step from fundamental measurements to professional finishing.'
    },
    {
      q: 'What will be covered during the two days?',
      a: 'Day 1 is the Celebration Cake Masterclass (10:00 AM – 4:00 PM) covering vanilla sponge, baking secrets & troubleshooting, leveling, frosting, flavorings, chocolate cake formulation, and commercial costing/pricing. Day 2 is the Brownie + Cookie Masterclass (10:00 AM – 3:00 PM) covering fudgy brownies, cheesecake-swirl brownies, choco chip cookies, butter cookies, baking tips, storage, and packaging.'
    },
    {
      q: 'Are recipes provided?',
      a: 'Yes, a printed recipe booklet containing all class formulations along with additional recipes is included for every participant.'
    },
    {
      q: 'Are eggless recipes available?',
      a: 'Yes, eggless recipes are provided in the printed recipe booklet.'
    },
    {
      q: 'Are online and offline options available?',
      a: 'Yes, both online and offline options are available for the masterclass.'
    },
    {
      q: 'Will I get guidance after the class?',
      a: 'Yes, doubt clearing and ongoing guidance are included with your masterclass so you have support while practicing at home.'
    },
    {
      q: 'When is the next batch?',
      a: 'Batch 1 is on October 3 & 4, 2026 (Saturday & Sunday). Batch 2 is scheduled Before Diwali (exact date will be announced soon).'
    },
    {
      q: 'Where is the class conducted?',
      a: 'The in-person class is conducted at Riya Cakes: Near Moopanor Statue, Jeevashad Road, Thattuvapalayam, Anthiyur.'
    },
    {
      q: 'How can I book my slot?',
      a: 'You can reserve your seat directly by clicking any "Book Your Slot" button on this website. For pricing, slot availability, and enrollment specifics, please contact Riya Cakes for details.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FCF9F9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-white border border-pink-200 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Everything you need to know about the Riya Cakes 2-Day Masterclass.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-pink-100/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-pink-50/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#420C1C] leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#D81B60] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D81B60] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-pink-50 bg-[#FFFDFE]">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-pink-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <p className="font-serif font-bold text-[#5E1228] text-base">Have more specific questions?</p>
            <p className="text-xs text-stone-500">We are happy to assist with any questions about syllabus and batches.</p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-2.5 rounded-full bg-[#5E1228] hover:bg-[#420C1C] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            Contact Riya Cakes
          </button>
        </div>

      </div>
    </section>
  );
}
