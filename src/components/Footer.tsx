import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenMenu }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#090A0D] border-t border-white/10 pt-16 pb-24 sm:pb-16 text-[#A09D96] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#181B22] border border-[#F59E0B]/40 flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-[#F59E0B] rounded-sm transform rotate-12 flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#F59E0B] rounded-full" />
                </div>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                {siteConfig.businessName}
              </span>
            </div>

            <p className="font-display font-medium text-base text-[#F59E0B]">
              {siteConfig.mainTagline}
            </p>
            <p className="text-xs text-[#807D77] max-w-sm leading-relaxed">
              {siteConfig.supportingTagline}. Dubai's premier experiential cafe combining specialty craft roasts with scale remote-controlled earth-moving equipment.
            </p>
            <div className="font-mono-tech text-xs text-[#C2A683] pt-1">
              📍 {siteConfig.shortAddress}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono-tech text-xs text-white uppercase tracking-wider">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => handleScrollTo('experience')}
                  className="hover:text-white transition-colors"
                >
                  Experience & Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('fleet')}
                  className="hover:text-white transition-colors"
                >
                  The RC Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMenu}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#F59E0B]"
                >
                  <span>Café Menu (AED)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('corporate')}
                  className="hover:text-white transition-colors"
                >
                  Corporate Events & Team Building
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('booking-calculator')}
                  className="hover:text-white transition-colors"
                >
                  Session Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('location')}
                  className="hover:text-white transition-colors"
                >
                  Location & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono-tech text-xs text-white uppercase tracking-wider">
              CONNECT & INQUIRE
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[#807D77]">
                For table reservations, machine fleet availability, and corporate bookings:
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#14171E] border border-white/10 hover:border-[#25D366]/40 text-white flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="font-semibold text-xs">WhatsApp Direct Chat</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A09D96] group-hover:text-[#25D366] transition-colors" />
                </a>

                <a
                  href={siteConfig.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#14171E] border border-white/10 hover:border-[#E1306C]/40 text-white flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                    <span className="font-semibold text-xs">Follow on Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A09D96] group-hover:text-[#E1306C] transition-colors" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright & Local SEO Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#686560]">
          <div>
            © {currentYear} {siteConfig.legalName}. All rights reserved. Nad Al Sheba, Dubai.
          </div>
          <div className="flex items-center gap-4">
            <span>Specialty Coffee</span>
            <span>·</span>
            <span>Remote-Controlled Construction</span>
            <span>·</span>
            <span>Dubai, UAE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
