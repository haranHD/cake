import React, { useState } from 'react';
import { MapPin, Navigation, Compass, PhoneCall, Building2, Check } from 'lucide-react';

export default function Location({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);
  const addressText = "Near Moopanor Statue, Jeevashad Road, Thattuvapalayam, Anthiyur";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirections = () => {
    const encoded = encodeURIComponent("Anthiyur, Tamil Nadu");
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`, '_blank');
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-[#FFF0F5] border border-pink-100 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Classroom & Studio
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Conveniently situated in Anthiyur, welcoming baking students across the region.
          </p>
        </div>

        {/* Location Content Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFF9FA] to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Clear Address Details */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D81B60]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                    In-Person Training Studio
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#420C1C]">
                  Riya Cakes
                </h3>
                <p className="font-serif italic text-sm text-[#881A3B]">A Taste of Luxury</p>
              </div>

              {/* Distinctive Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-pink-100/90 shadow-sm space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F5] text-[#D81B60] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Official Venue Address
                    </h4>
                    <p className="font-serif text-base sm:text-lg text-[#2D1520] font-semibold leading-relaxed">
                      Near Moopanor Statue, <br />
                      Jeevashad Road, <br />
                      Thattuvapalayam, Anthiyur
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleDirections}
                  className="px-6 py-3 rounded-full bg-[#D81B60] hover:bg-[#AD1457] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="px-5 py-3 rounded-full bg-white hover:bg-pink-50/60 text-[#5E1228] border border-pink-200 text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Address Copied!</span>
                    </>
                  ) : (
                    <span>Copy Address</span>
                  )}
                </button>
              </div>

            </div>

            {/* Right Column: Visual Regional Accessibility Card */}
            <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-pink-100 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E1228] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#D81B60]" />
                Regional Proximity
              </h4>
              
              <p className="text-xs text-stone-600 leading-relaxed">
                Accessible for participants traveling from surrounding districts and towns:
              </p>

              <div className="space-y-2 text-xs font-medium text-stone-700">
                <div className="p-2.5 rounded-xl bg-pink-50/50 flex items-center justify-between">
                  <span>Anthiyur Local Area</span>
                  <span className="text-[#D81B60] font-bold">Heart of Town</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-50/50 flex items-center justify-between">
                  <span>Bhavani & Gobichettipalayam</span>
                  <span className="text-stone-500">Quick Drive</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-50/50 flex items-center justify-between">
                  <span>Erode District & Surrounds</span>
                  <span className="text-stone-500">Easily Accessible</span>
                </div>
              </div>

              <div className="pt-2 border-t border-pink-50">
                <p className="text-[11px] text-stone-500 leading-snug">
                  * Online masterclass option is also available for learners who cannot attend in person.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
