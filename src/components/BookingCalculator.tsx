import React, { useState } from 'react';
import { Calculator, Clock, Cpu, Users, Coffee, MessageCircle, Check } from 'lucide-react';
import { rentalRates, siteConfig } from '../data/siteConfig';

interface BookingCalculatorProps {
  onOpenBookingModal: (prefillDetails?: string) => void;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({ onOpenBookingModal }) => {
  const [selectedRateIdx, setSelectedRateIdx] = useState(0);
  const [durationMultiplier, setDurationMultiplier] = useState(1); // 1 = 30m, 2 = 60m, 4 = 120m
  const [machineCount, setMachineCount] = useState(1);
  const [includeCoffee, setIncludeCoffee] = useState(true);

  const baseRate = rentalRates[selectedRateIdx];
  const durationLabel = durationMultiplier === 1 ? '30 Minutes' : durationMultiplier === 2 ? '1 Hour' : '2 Hours';
  
  // Calculate price
  const machineTotal = baseRate.price * durationMultiplier * machineCount;
  const coffeeCost = includeCoffee ? 20 * machineCount : 0; // average specialty coffee in AED
  const totalAed = machineTotal + coffeeCost;

  const handleWhatsAppBooking = () => {
    const msg = `Hi RC Cities! I'd like to book an RC session:
• Tier: ${baseRate.title} (${baseRate.scale})
• Duration: ${durationLabel}
• Operators/Machines: ${machineCount}
• Coffee Add-on: ${includeCoffee ? 'Yes (Specialty Drinks)' : 'None'}
• Estimated Total: ${totalAed} AED
Please let me know available slots today/this week!`;

    window.open(siteConfig.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="booking-calculator" className="py-20 sm:py-28 bg-[#0C0D10] relative border-t border-b border-white/5">
      {/* Blueprint Grid Ambient Pattern */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#F59E0B] uppercase bg-[#181B22] px-3 py-1 rounded-full border border-white/10 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>SESSION CONFIGURATOR</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            CALCULATE YOUR EXPERIENCE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A8A49C]">
            Select your scale machinery, session length, and crew size. Transparent AED pricing with zero hidden fees.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="rounded-3xl bg-[#14161D] border border-white/10 p-6 sm:p-10 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Machine Scale Selection */}
              <div>
                <label className="font-mono-tech text-xs text-[#C2A683] uppercase tracking-wider block mb-2.5">
                  1. Select Machine Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {rentalRates.map((rate, idx) => (
                    <button
                      key={rate.title}
                      onClick={() => setSelectedRateIdx(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedRateIdx === idx
                          ? 'bg-[#1E232E] border-[#F59E0B] shadow-md shadow-[#F59E0B]/10 text-white'
                          : 'bg-[#181A22] border-white/5 text-[#A8A49C] hover:border-white/20'
                      }`}
                    >
                      <div className="font-mono-tech text-[10px] text-[#F59E0B] uppercase">
                        {rate.price} AED / 30m
                      </div>
                      <div className="font-display font-bold text-xs sm:text-sm text-white mt-1 leading-snug">
                        {rate.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Duration Selector */}
              <div>
                <label className="font-mono-tech text-xs text-[#C2A683] uppercase tracking-wider block mb-2.5">
                  2. Session Duration
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { mult: 1, label: '30 Min' },
                    { mult: 2, label: '1 Hour' },
                    { mult: 4, label: '2 Hours' },
                  ].map((dur) => (
                    <button
                      key={dur.label}
                      onClick={() => setDurationMultiplier(dur.mult)}
                      className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                        durationMultiplier === dur.mult
                          ? 'bg-[#F59E0B] border-[#F59E0B] text-black font-bold'
                          : 'bg-[#181A22] border-white/5 text-white hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold">{dur.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Number of Machines */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="font-mono-tech text-xs text-[#C2A683] uppercase tracking-wider">
                    3. Machines / Operators
                  </label>
                  <span className="font-mono-tech text-xs text-white">
                    {machineCount} {machineCount === 1 ? 'Machine' : 'Machines'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setMachineCount(num)}
                      className={`flex-1 py-2 rounded-lg border text-xs font-mono-tech font-bold transition-all ${
                        machineCount === num
                          ? 'bg-[#1E232E] border-[#F59E0B] text-[#F59E0B]'
                          : 'bg-[#181A22] border-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Specialty Coffee Pairing Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setIncludeCoffee(!includeCoffee)}
                  className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                    includeCoffee
                      ? 'bg-[#1F242C] border-[#C2A683]/50 text-white'
                      : 'bg-[#181A22] border-white/5 text-[#A8A49C]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${includeCoffee ? 'bg-[#F59E0B] border-[#F59E0B] text-black' : 'border-white/20'}`}>
                      {includeCoffee && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="text-left">
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        Include Artisan Specialty Coffee
                      </span>
                      <span className="text-[11px] text-[#A8A49C]">
                        +20 AED per guest (Cortado, Flat White, or Cold Brew)
                      </span>
                    </div>
                  </div>
                  <Coffee className="w-4 h-4 text-[#C2A683]" />
                </button>
              </div>

            </div>

            {/* Right Summary & Checkout Action */}
            <div className="lg:col-span-5 bg-[#1A1D27] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono-tech text-[10px] text-[#F59E0B] uppercase tracking-wider block">
                  ESTIMATED SUMMARY
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1 mb-4">
                  {baseRate.title}
                </h3>

                <div className="space-y-3 py-4 border-t border-b border-white/10 text-xs">
                  <div className="flex justify-between text-[#C8C5BF]">
                    <span>Category:</span>
                    <span className="text-white font-medium">{baseRate.scale}</span>
                  </div>
                  <div className="flex justify-between text-[#C8C5BF]">
                    <span>Duration:</span>
                    <span className="text-white font-medium">{durationLabel}</span>
                  </div>
                  <div className="flex justify-between text-[#C8C5BF]">
                    <span>Operators / Rigs:</span>
                    <span className="text-white font-medium">{machineCount} unit(s)</span>
                  </div>
                  <div className="flex justify-between text-[#C8C5BF]">
                    <span>Café Pairing:</span>
                    <span className="text-white font-medium">{includeCoffee ? `Included (+${coffeeCost} AED)` : 'None'}</span>
                  </div>
                </div>

                <div className="my-6">
                  <span className="text-xs text-[#A8A49C] block">Total Estimated Cost:</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-black text-4xl sm:text-5xl text-[#F59E0B]">
                      {totalAed}
                    </span>
                    <span className="font-mono-tech text-base text-[#C2A683] font-bold">AED</span>
                  </div>
                  <span className="text-[11px] text-[#99958E] block mt-1">
                    Includes arena briefing, radio controller, and supervisor assistance.
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Reserve via WhatsApp</span>
                </button>
                <button
                  onClick={() => onOpenBookingModal(`Selected: ${baseRate.title} - ${durationLabel} - ${machineCount} Machine(s)`)}
                  className="w-full py-3 rounded-xl bg-[#242936] hover:bg-[#2D3344] text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10"
                >
                  Request Specific Slot
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
