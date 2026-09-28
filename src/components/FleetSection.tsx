import React, { useState } from 'react';
import { fleetMachines, FleetMachine } from '../data/siteConfig';
import { Check, ShieldAlert, Sliders, ChevronRight, X, Info } from 'lucide-react';

interface FleetSectionProps {
  onSelectMachine: (machine: FleetMachine) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectMachine }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedModalMachine, setSelectedModalMachine] = useState<FleetMachine | null>(null);

  const filteredMachines = activeTab === 'all'
    ? fleetMachines
    : fleetMachines.filter(m => m.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-[#0D0E11] relative border-t border-b border-white/5">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 blueprint-grid-amber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Automotive Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="font-mono-tech text-xs text-[#F59E0B] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#F59E0B]" />
              THE RC FLEET
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
              MEET THE MACHINES
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#C2A683] font-light">
              Small scale. Serious fun.
            </p>
          </div>

          {/* Machine Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#171920] border border-white/10 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#F59E0B] text-black shadow'
                  : 'text-[#A8A49C] hover:text-white'
              }`}
            >
              All Machines
            </button>
            <button
              onClick={() => setActiveTab('hauler')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'hauler'
                  ? 'bg-[#F59E0B] text-black shadow'
                  : 'text-[#A8A49C] hover:text-white'
              }`}
            >
              Dump Haulers
            </button>
            <button
              onClick={() => setActiveTab('excavator')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'excavator'
                  ? 'bg-[#F59E0B] text-black shadow'
                  : 'text-[#A8A49C] hover:text-white'
              }`}
            >
              Excavators
            </button>
            <button
              onClick={() => setActiveTab('loader')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'loader'
                  ? 'bg-[#F59E0B] text-black shadow'
                  : 'text-[#A8A49C] hover:text-white'
              }`}
            >
              Loaders & Dozers
            </button>
          </div>
        </div>

        {/* Automotive Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              className="group relative rounded-2xl bg-[#14161C] border border-white/10 hover:border-[#F59E0B]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl shadow-black/60"
            >
              {/* Automotive Photo Showcase */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/40">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161C] via-[#14161C]/30 to-transparent" />

                {/* Scale & Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono-tech text-xs bg-black/80 backdrop-blur-md text-[#F59E0B] px-3 py-1 rounded border border-[#F59E0B]/30 font-semibold uppercase tracking-wider">
                    {machine.scale}
                  </span>
                  <span className="font-mono-tech text-xs bg-[#1A1D24]/80 backdrop-blur-md text-white/90 px-3 py-1 rounded border border-white/10">
                    {machine.category}
                  </span>
                </div>

                {/* Operator Difficulty */}
                <div className="absolute top-4 right-4">
                  <span className="font-mono-tech text-[11px] text-neutral-300 bg-black/70 px-2.5 py-1 rounded border border-white/10">
                    {machine.difficulty}
                  </span>
                </div>
              </div>

              {/* Machine Specs & Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#F59E0B] transition-colors mb-2">
                    {machine.name}
                  </h3>
                  <div className="font-mono-tech text-xs text-[#C2A683] mb-4">
                    {machine.power}
                  </div>
                  <p className="text-sm text-[#A8A49C] leading-relaxed mb-6">
                    {machine.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {machine.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[#E8E6E3]">
                        <Check className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedModalMachine(machine)}
                    className="text-xs font-semibold text-[#C2A683] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Technical Specs</span>
                  </button>

                  <button
                    onClick={() => onSelectMachine(machine)}
                    className="px-5 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#F59E0B]/20 flex items-center gap-2"
                  >
                    <span>Rent This Machine</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Machine Technical Detail Modal */}
        {selectedModalMachine && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setSelectedModalMachine(null)}
            />
            <div className="relative bg-[#16181F] border border-white/15 rounded-2xl max-w-xl w-full p-6 sm:p-8 z-10 overflow-y-auto max-h-[90vh] shadow-2xl">
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="font-mono-tech text-xs text-[#F59E0B] uppercase">ENGINEERING SPECIFICATION</span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">{selectedModalMachine.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedModalMachine(null)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                <div className="h-48 rounded-xl overflow-hidden bg-black">
                  <img
                    src={selectedModalMachine.image}
                    alt={selectedModalMachine.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs pt-2">
                  <div className="p-3 rounded-lg bg-[#1D2028] border border-white/5">
                    <span className="text-[#A8A49C] block text-[10px]">CHASSIS SCALE</span>
                    <span className="text-white font-bold">{selectedModalMachine.scale}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1D2028] border border-white/5">
                    <span className="text-[#A8A49C] block text-[10px]">DIFFICULTY TIER</span>
                    <span className="text-[#F59E0B] font-bold">{selectedModalMachine.difficulty}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1D2028] border border-white/5 col-span-2">
                    <span className="text-[#A8A49C] block text-[10px]">DRIVE & HYDRAULICS</span>
                    <span className="text-white font-medium">{selectedModalMachine.power}</span>
                  </div>
                </div>

                <p className="text-sm text-[#C8C5BF] leading-relaxed">
                  {selectedModalMachine.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="font-mono-tech text-xs text-[#F59E0B] uppercase">Standard Arena Equipment:</span>
                  <ul className="space-y-1.5">
                    {selectedModalMachine.features.map(f => (
                      <li key={f} className="text-xs text-[#E8E6E3] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedModalMachine(null)}
                  className="px-4 py-2.5 rounded-lg border border-white/15 text-xs text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const m = selectedModalMachine;
                    setSelectedModalMachine(null);
                    onSelectMachine(m);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#F59E0B] text-black font-bold text-xs uppercase tracking-wider"
                >
                  Reserve This Model
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
