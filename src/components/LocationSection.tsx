import React, { useState } from 'react';
import { MapPin, Navigation, MessageCircle, Clock, Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#121419] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="font-mono-tech text-xs text-[#F59E0B] tracking-widest uppercase mb-2 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            DESTINATION DUBAI
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            FIND US IN DUBAI
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C8C5BF]">
            Situated at The Galleries in Meydan Avenue, Nad Al Sheba — just minutes away from Downtown Dubai and the Meydan Grandstand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Hours Info Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#171A22] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#F59E0B] uppercase">LOCATION ID</span>
                  <div className="font-display font-bold text-xl text-white mt-0.5">RC Cities Café & Arena</div>
                </div>
                <span className="font-mono-tech text-xs text-[#C2A683] bg-[#202530] px-3 py-1 rounded border border-white/10">
                  NAD AL SHEBA
                </span>
              </div>

              {/* Exact Address Box */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-mono-tech text-xs text-[#A8A49C] uppercase block mb-1.5">
                    Official Venue Address:
                  </span>
                  <div className="p-4 rounded-xl bg-[#12141A] border border-white/5 font-medium text-white text-sm sm:text-base leading-relaxed">
                    First, Shop 2 <br />
                    The Galleries, Meydan Avenue <br />
                    Nad Al Sheba <br />
                    Dubai, UAE
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#12141A] border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech text-[#A8A49C] uppercase block">
                      Operating Hours
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {siteConfig.hours}
                    </span>
                  </div>
                </div>

                {/* Proximity landmarks */}
                <div className="text-xs text-[#A8A49C] space-y-1 pt-1 font-mono-tech">
                  <div>· 5 mins from Meydan Racecourse & Grandstand</div>
                  <div>· 12 mins from Downtown Dubai & Burj Khalifa</div>
                  <div>· Easy parking directly in front of The Galleries</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopyAddress}
                className="py-3 px-4 rounded-xl bg-[#202532] hover:bg-[#282F3E] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#F59E0B]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
              </button>

              <a
                href={siteConfig.GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#F59E0B]/20"
              >
                <Navigation className="w-4 h-4 fill-black" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Map Visual / Stylized Dubai Map Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-[#161820] relative flex flex-col justify-between min-h-[380px] shadow-xl">
            {/* Stylized Architectural Blueprint Map Representation */}
            <div className="absolute inset-0 blueprint-grid-amber opacity-30" />
            <div className="absolute inset-0 bg-radial-at-c from-[#1B1E28]/80 via-[#14161E]/95 to-[#101217]" />

            {/* Graphic Dubai Vector Map Accent */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#F59E0B]/30 animate-pulse-subtle flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-[#F59E0B]/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_15px_#F59E0B]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Map Top Bar */}
            <div className="relative z-10 p-5 flex items-center justify-between border-b border-white/10 bg-[#101217]/70 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C2A683]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>GPS: 25.1585° N, 55.3052° E</span>
              </div>
              <span className="font-mono-tech text-[11px] text-white/50">
                THE GALLERIES · MEYDAN AVENUE
              </span>
            </div>

            {/* Map Center Pin Callout */}
            <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center">
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-full bg-[#F59E0B] text-black flex items-center justify-center shadow-lg shadow-[#F59E0B]/40">
                  <MapPin className="w-6 h-6 fill-black" />
                </div>
                <div className="absolute -inset-1 rounded-full border-2 border-[#F59E0B] animate-ping opacity-40" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                RC CITIES
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C5BF] max-w-sm mt-1">
                Shop 2, The Galleries, Meydan Avenue, Nad Al Sheba, Dubai
              </p>
            </div>

            {/* Map Bottom Bar with Quick Actions */}
            <div className="relative z-10 p-5 border-t border-white/10 bg-[#101217]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#A8A49C]">
                Need help finding the parking or arena?
              </div>
              <a
                href={siteConfig.getWhatsAppUrl("Hi RC Cities! I'm heading over and need directions to Shop 2 at The Galleries, Meydan Avenue.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
