import React from 'react';
import { Heart, Users, Sparkles, Compass, Check } from 'lucide-react';

export default function About() {
  const targetGroups = [
    { title: 'Beginners', desc: 'Starting from scratch with zero prior kitchen experience.' },
    { title: 'Home Bakers', desc: 'Bakers wanting professional finishing, stable frosting & sharp edges.' },
    { title: 'Aspiring Entrepreneurs', desc: 'Women interested in turning baking passion into a home business.' },
    { title: 'School & College Students', desc: 'Creative students eager to explore the culinary art of baking.' },
    { title: 'Young Baking Enthusiasts', desc: 'Young girls looking to develop a life-long joyful creative skill.' },
    { title: 'Passionate Creators', desc: 'Anyone who wants to gift handcrafted luxury bakes to loved ones.' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#D81B60] bg-[#FFF0F5] border border-pink-100 mb-3">
            About Riya Cakes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Where Passion Meets Baking
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D81B60] to-transparent mx-auto mt-4" />
        </div>

        {/* Content & Photography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Baker Handcrafting / Frosting */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FCF9F9] relative group">
                <img
                  src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=80"
                  alt="Hands-on baking masterclass craft"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="font-serif italic text-lg">“A Taste of Luxury”</p>
                </div>
              </div>

              {/* Offset Accent Image: Fresh Bakes & Warm Atmosphere */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
                  alt="Baking preparation and ingredients"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Brand Accent Tag */}
              <div className="absolute -top-4 -left-4 bg-[#5E1228] text-white p-3.5 rounded-2xl shadow-lg border border-pink-900/30">
                <Heart className="w-5 h-5 text-pink-300" />
              </div>

            </div>
          </div>

          {/* Right Column: Mission & Who It Is Designed For */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <p className="font-serif text-xl sm:text-2xl text-[#5E1228] font-medium leading-relaxed">
                “Riya Cakes brings together creativity, practical baking skills and the confidence to turn a passion for baking into something meaningful.”
              </p>
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Whether your goal is to master show-stopping celebration cakes for your family, learn the secrets of crackly crinkle brownies and melt-in-mouth cookies, or take the first structured steps toward launching your own boutique baking venture — our masterclass gives you the foundation, clarity, and hands-on guidance.
              </p>
            </div>

            {/* Who Is This Designed For Cards */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D81B60]" />
                Specially Designed For:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {targetGroups.map((group, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FFF9FA] border border-pink-100 hover:border-[#D81B60]/30 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#FCE8EE] text-[#D81B60] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#5E1228]">{group.title}</h4>
                        <p className="text-[11px] text-stone-500 leading-snug mt-0.5">{group.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
