import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Sparkles, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialBatch = '' }) {
  const [selectedBatch, setSelectedBatch] = useState(initialBatch || 'october');
  const [learningMode, setLearningMode] = useState('offline');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    audience: 'Beginner / Passionate Baker',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-pink-100 overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-[#D81B60] via-[#F06292] to-[#5E1228]" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-pink-50 hover:bg-pink-100 text-[#5E1228] flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FCE8EE] text-[#D81B60] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Demo Booking Request
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5E1228] tracking-tight">
                Reserve Your Masterclass Seat
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                2-Day Intensive Hands-on Workshop: Celebration Cakes, Brownies & Cookies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Batch selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-1.5">
                  Select Preferred Batch
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedBatch('october')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedBatch === 'october'
                        ? 'border-[#D81B60] bg-[#FFF0F5] ring-2 ring-[#D81B60]/20'
                        : 'border-stone-200 hover:border-pink-200 bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D81B60] bg-white px-2 py-0.5 rounded-full border border-pink-200">
                        First Class
                      </span>
                      <Calendar className="w-3.5 h-3.5 text-[#D81B60]" />
                    </div>
                    <p className="font-serif font-bold text-sm text-[#2D1520] mt-1.5">Oct 3 & 4, 2026</p>
                    <p className="text-[11px] text-stone-500">Sat & Sun (10 AM - 4 PM)</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedBatch('diwali')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedBatch === 'diwali'
                        ? 'border-[#D81B60] bg-[#FFF0F5] ring-2 ring-[#D81B60]/20'
                        : 'border-stone-200 hover:border-pink-200 bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5E1228] bg-white px-2 py-0.5 rounded-full border border-pink-200">
                        Second Class
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
                    </div>
                    <p className="font-serif font-bold text-sm text-[#2D1520] mt-1.5">Before Diwali</p>
                    <p className="text-[11px] text-stone-500">Date announced soon</p>
                  </button>
                </div>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-1.5">
                  Participation Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLearningMode('offline')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      learningMode === 'offline'
                        ? 'border-[#D81B60] bg-[#D81B60] text-white shadow-sm'
                        : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Offline (Anthiyur)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLearningMode('online')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      learningMode === 'online'
                        ? 'border-[#D81B60] bg-[#D81B60] text-white shadow-sm'
                        : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Online Option
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#D81B60]/30 focus:border-[#D81B60] text-sm text-[#2D1520] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#D81B60]/30 focus:border-[#D81B60] text-sm text-[#2D1520] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5E1228] mb-1">
                    You Are A:
                  </label>
                  <select
                    value={formData.audience}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#D81B60]/30 focus:border-[#D81B60] text-sm text-[#2D1520] transition-colors bg-white"
                  >
                    <option value="Beginner / Enthusiast">Complete Beginner</option>
                    <option value="Home Baker">Home Baker looking to level up</option>
                    <option value="Aspiring Business Owner">Woman interested in starting a baking business</option>
                    <option value="School / College Student">School or College Student</option>
                    <option value="Young Baker">Young girl interested in baking</option>
                  </select>
                </div>
              </div>

              {/* Note about real business contact */}
              <div className="p-3 bg-amber-50/80 border border-amber-200/60 rounded-xl text-[12px] text-amber-900 leading-relaxed">
                <span className="font-semibold">Demo Notice:</span> Once Riya Cakes provides the official WhatsApp number or contact details, this button will instantly redirect to WhatsApp with pre-filled batch details.
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D81B60] to-[#AD1457] hover:from-[#AD1457] hover:to-[#5E1228] text-white font-semibold text-sm shadow-lg shadow-pink-600/20 hover:shadow-pink-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Confirm Demo Booking</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#5E1228]">
              Booking Enquiry Submitted!
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-[#5E1228]">{formData.name || 'Baker'}</strong>! In the live website, your request for the{' '}
              <strong className="text-[#D81B60]">
                {selectedBatch === 'october' ? 'Oct 3 & 4 Batch' : 'Before Diwali Batch'} ({learningMode})
              </strong>{' '}
              will be immediately messaged to Riya Cakes.
            </p>
            <div className="p-4 bg-pink-50/60 rounded-2xl border border-pink-100 text-left text-xs text-stone-700 space-y-1.5">
              <p>📍 <strong>Location:</strong> Near Moopanor Statue, Jeevashad Road, Thattuvapalayam, Anthiyur</p>
              <p>⏱️ <strong>Timings:</strong> Day 1 (10 AM - 4 PM), Day 2 (10 AM - 3 PM)</p>
              <p>🎁 <strong>Included:</strong> Printed Recipe Booklet + Supplier Guidance</p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#5E1228] hover:bg-[#420C1C] text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
