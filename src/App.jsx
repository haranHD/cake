import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Masterclass from './components/Masterclass';
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo';
import Bonuses from './components/Bonuses';
import Learning from './components/Learning';
import Gallery from './components/Gallery';
import Batches from './components/Batches';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState('october');

  const handleOpenBooking = (batch = 'october') => {
    setSelectedBatch(batch);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FCF9F9] text-[#2D1520] font-sans antialiased selection:bg-[#D81B60]/20 selection:text-[#5E1228]">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. About Riya Cakes */}
        <About />

        {/* 4. Baking Masterclass Overview */}
        <Masterclass />

        {/* 5. Day 1 – Celebration Cake Masterclass */}
        <DayOne onOpenBooking={handleOpenBooking} />

        {/* 6. Day 2 – Brownie + Cookie Masterclass */}
        <DayTwo onOpenBooking={handleOpenBooking} />

        {/* 7. Bonus / What You Get */}
        <Bonuses />

        {/* 8. What You'll Learn (Take Home) */}
        <Learning />

        {/* 9. Baking Gallery */}
        <Gallery />

        {/* 10. Batch Information */}
        <Batches onOpenBooking={handleOpenBooking} />

        {/* 11. Location & Studio */}
        <Location onOpenBooking={handleOpenBooking} />

        {/* 12. FAQ Accordion */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* 13. Final Call To Action */}
        <CTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* 14. Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Sticky Mobile CTA for seamless conversion on phones */}
      <StickyMobileCTA onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Demo Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialBatch={selectedBatch}
      />
    </div>
  );
}
