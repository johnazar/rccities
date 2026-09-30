import React from 'react';
import { Users2, Award, Briefcase, Sparkles, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { siteConfig, groupPackages } from '../data/siteConfig';

interface CorporateSectionProps {
  onOpenInquiry: (groupSize?: string) => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onOpenInquiry }) => {
  const corporatePillars = [
    {
      title: 'TEAM BUILDING',
      subtitle: 'Turn collaboration into construction.',
      description: 'Break silos with synchronized multi-machine challenges: excavator digging, articulated hauler transport, and precision terrain shaping.',
      icon: Users2,
    },
    {
      title: 'PRIVATE EVENTS',
      subtitle: 'A unique venue for your next gathering.',
      description: 'Host private birthdays, anniversaries, or company milestones in a futuristic Dubai café setting unlike any other venue in the city.',
      icon: Sparkles,
    },
    {
      title: 'CORPORATE EXPERIENCES',
      subtitle: "Give your team something they'll actually talk about.",
      description: 'Escape standard conference rooms. Combine high-stakes collaborative construction problem solving with specialty craft coffee.',
      icon: Briefcase,
    },
    {
      title: 'CUSTOM GROUP EXPERIENCES',
      subtitle: 'Create an experience around your group.',
      description: 'Tailored challenges, custom catering packages, reserved lounge zones, and dedicated operator hosts for your specific agenda.',
      icon: Award,
    },
  ];

  return (
    <section id="corporate" className="py-20 sm:py-28 bg-[#101216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-mono-tech text-xs text-[#F59E0B] tracking-widest uppercase mb-2">
            GROUP & CORPORATE BOOKINGS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            HOST YOUR NEXT EVENT WITH US
          </h2>
          <div className="mt-4 space-y-2 text-base sm:text-lg text-[#C8C5BF] leading-relaxed">
            <p>
              Make your corporate events memorable at RC Cities.
            </p>
            <p className="text-[#A8A49C]">
              Whether it's a team-building session, a corporate meeting, a private gathering or a holiday party, we've got you covered.
            </p>
          </div>
        </div>

        {/* Corporate Lifestyle Imagery Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-16 shadow-2xl bg-[#16181E] group">
          <div className="h-64 sm:h-96 w-full relative overflow-hidden">
            <img
              src="/images/rcc_corporate.jpg"
              alt="Corporate team-building event and social gathering at RC Cities Dubai"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101216]/90 via-[#101216]/60 to-transparent" />
            
            <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-center max-w-xl">
              <span className="font-mono-tech text-xs text-[#F59E0B] uppercase tracking-wider mb-2">
                EXECUTIVE ENTERTAINMENT
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase leading-tight mb-3">
                BUILD STRONGER TEAMS THROUGH PLAY
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E6E3] font-light leading-relaxed mb-6">
                Operating heavy equipment together requires clear communication, shared timing, and cooperative leadership. It is intuitive, competitive, and unforgettable.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenInquiry('corporate')}
                  className="px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#F59E0B]/20"
                >
                  PLAN YOUR EVENT
                </button>
                <a
                  href={siteConfig.getCorporateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-black/60 hover:bg-black/80 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corporatePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#14171E] border border-white/10 hover:border-[#F59E0B]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#F59E0B] mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-[#A8A49C] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Group & Corporate Packages (from menu) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono-tech text-xs text-[#C2A683] uppercase tracking-wider">
              AUTHENTIC VENUE PACKAGES
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mt-1">
              ALL-INCLUSIVE GROUP RATES
            </h3>
            <p className="text-xs text-[#A8A49C] mt-2">
              Every group package includes 2 hours of arena playtime, full machine instruction, and handcrafted food & beverages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groupPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#1C202B] to-[#14171E] border-2 border-[#F59E0B] shadow-xl shadow-[#F59E0B]/10 -translate-y-1'
                    : 'bg-[#14171E] border border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#F59E0B] text-black font-mono-tech text-[10px] font-bold uppercase tracking-wider shadow">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tech text-[#C2A683] mb-2">
                    <span>{pkg.guests}</span>
                    <span>{pkg.duration}</span>
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-white mb-2">
                    {pkg.title}
                  </h4>
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="font-display font-black text-4xl text-[#F59E0B]">
                      {pkg.price}
                    </span>
                    <span className="font-mono-tech text-sm text-[#A8A49C]">AED</span>
                    <span className="text-xs text-[#A8A49C] ml-2 font-medium">/ 2 Hours (F&B Inc.)</span>
                  </div>

                  <ul className="space-y-2.5 my-6 text-xs text-[#C8C5BF]">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenInquiry(pkg.title)}
                    className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                      pkg.highlight
                        ? 'bg-[#F59E0B] hover:bg-[#D97706] text-black'
                        : 'bg-[#1F232B] hover:bg-[#282E3A] text-white border border-white/15'
                    }`}
                  >
                    <span>Reserve Package</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
