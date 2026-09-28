import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FleetSection } from './components/FleetSection';
import { CoffeeSection } from './components/CoffeeSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { CorporateSection } from './components/CorporateSection';
import { BookingCalculator } from './components/BookingCalculator';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal, FullMenuModal } from './components/Modals';
import { FleetMachine } from './data/siteConfig';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<string>('');
  const [selectedMachine, setSelectedMachine] = useState<FleetMachine | null>(null);

  const handleOpenBooking = (prefill?: string) => {
    setBookingPrefill(prefill || '');
    setSelectedMachine(null);
    setIsBookingOpen(true);
  };

  const handleSelectMachine = (machine: FleetMachine) => {
    setSelectedMachine(machine);
    setBookingPrefill(`Machine: ${machine.name} (${machine.scale})`);
    setIsBookingOpen(true);
  };

  const handleOpenCorporateInquiry = (groupDetails?: string) => {
    setBookingPrefill(groupDetails ? `Corporate Package: ${groupDetails}` : 'Corporate Event / Team Building');
    setSelectedMachine(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#101114] text-[#E8E6E3] relative flex flex-col font-sans selection:bg-[#F59E0B]/30 selection:text-[#FBBF24]">
      
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Single-Page Website Flow */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Intro / Concept Section */}
        <ConceptSection />

        {/* 3. Experience Workflow Section */}
        <ExperienceSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. The RC Fleet */}
        <FleetSection onSelectMachine={handleSelectMachine} />

        {/* 5. Coffee Section */}
        <CoffeeSection onOpenFullMenu={() => setIsMenuOpen(true)} />

        {/* 6. Sitting on a Cloud / Atmosphere Section */}
        <AtmosphereSection />

        {/* 7. Corporate & Private Events */}
        <CorporateSection onOpenInquiry={handleOpenCorporateInquiry} />

        {/* 8. Interactive Experience Calculator */}
        <BookingCalculator onOpenBookingModal={handleOpenBooking} />

        {/* 9. Location & Directions Section */}
        <LocationSection />

        {/* 10. Final CTA Banner */}
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 11. Minimal Premium Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* 12. Mobile Sticky Bottom CTA Bar (<15% viewport height cap compliant) */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillDetail={bookingPrefill}
        selectedMachine={selectedMachine}
      />

      <FullMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}
