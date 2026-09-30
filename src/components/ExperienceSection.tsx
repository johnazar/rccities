import React from 'react';
import { Gamepad2, Hammer, Coffee, Users, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const experiences = [
    {
      step: '01',
      title: 'TAKE CONTROL',
      subtitle: 'Drive realistic remote-controlled construction machines.',
      description: 'Get behind heavy hydraulic joysticks and command scale 1:14 metal machinery with proportional steer, dual tracks, and real excavating pistons.',
      icon: Gamepad2,
      tag: 'CONTROL',
      accent: 'border-[#F59E0B]/30 hover:border-[#F59E0B]',
      image: '/images/rcc_excavator.jpg',
    },
    {
      step: '02',
      title: 'BUILD YOUR CITY',
      subtitle: 'Move earth, transport materials and create your own miniature construction site.',
      description: 'Dig trenches, fill Volvo articulated dump beds with fine sand, navigate rugged grade slopes, and shape the terrain with your crew.',
      icon: Hammer,
      tag: 'TERRAIN',
      accent: 'border-[#C2A683]/30 hover:border-[#C2A683]',
      image: '/images/rcc_hero.jpg',
    },
    {
      step: '03',
      title: 'SIP & PLAY',
      subtitle: 'Enjoy exceptional coffee while you play, watch and build.',
      description: 'Sip masterfully extracted single-origin espresso, cortados, and velvety Spanish lattes directly by the miniature city workzones.',
      icon: Coffee,
      tag: 'SPECIALTY',
      accent: 'border-[#E67E22]/30 hover:border-[#E67E22]',
      image: '/images/rcc_cafe.jpg',
    },
    {
      step: '04',
      title: 'BRING YOUR CREW',
      subtitle: 'A unique experience for friends, families, groups and teams.',
      description: 'From casual weekend meetups to corporate team-building challenges, cooperative machine dispatch turns teamwork into serious fun.',
      icon: Users,
      tag: 'COMMUNITY',
      accent: 'border-white/20 hover:border-white/40',
      image: '/images/rcc_corporate.jpg',
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#101114] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-mono-tech text-xs text-[#F59E0B] tracking-wider uppercase mb-2">
            THE WORKFLOW
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            BUILD. DRIVE. CREATE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C8C5BF] text-balance">
            Every session at RC Cities is designed around tactile engagement, precision mechanics, and social warmth.
          </p>
        </div>

        {/* 4 Interactive Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={onOpenBooking}
                className="group relative rounded-2xl bg-[#16181E] border border-white/10 hover:border-[#F59E0B]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xl shadow-black/40"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#101114]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16181E] via-[#16181E]/40 to-transparent" />
                  
                  {/* Step Number & Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-white/90 bg-[#101114]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                      {item.step}
                    </span>
                    <span className="font-mono-tech text-[10px] tracking-wider uppercase text-[#F59E0B] bg-[#101114]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#F59E0B]/30">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#F59E0B]">
                      <Icon className="w-4 h-4" />
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#F59E0B] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#E8E6E3] mb-2 leading-snug">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#A8A49C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#F59E0B] group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE SESSION</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Bottom Micro Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-[#16181E]/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-[#C8C5BF] text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
            <span>Ready to get behind the hydraulic controls? Walk-ins and reservations welcome daily.</span>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-lg bg-[#1F232B] hover:bg-[#F59E0B] hover:text-black text-white font-semibold text-xs tracking-wider uppercase transition-colors border border-white/15"
          >
            Check Session Availability
          </button>
        </div>

      </div>
    </section>
  );
};
