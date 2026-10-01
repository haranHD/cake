import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';

export default function StickyMobileCTA({ onOpenBooking }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D81B60]">
            Batch 1: Oct 3 & 4
          </span>
          <span className="font-serif text-xs font-bold text-[#420C1C] truncate">
            Limited Seats Left
          </span>
        </div>

        <button
          onClick={() => onOpenBooking()}
          className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-pink-600/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Your Slot</span>
        </button>
      </div>
    </div>
  );
}
