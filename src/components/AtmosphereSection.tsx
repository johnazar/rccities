import React from 'react';
import { Sparkles, Armchair, Music, SunMedium, Shield } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const AtmosphereSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0E0F12] overflow-hidden">
      {/* Full-width Cinematic Atmosphere Image with Parallax-feel Scrim */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/src/assets/images/rcc_cafe_interior_lifestyle_1790579379113.jpg"
          alt="Atmospheric warm interior of RC Cities Dubai lounge and cafe"
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/80 to-[#0E0F12]/60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#F59E0B] uppercase bg-[#181B22]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F59E0B]/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DUBAI LIFESTYLE VENUE</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-6">
          SIT BACK. SIP SLOW. <br />
          <span className="text-[#C2A683]">BUILD BIG.</span>
        </h2>

        {/* Editorial Copy */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#D8D4CD] leading-relaxed font-light mb-12 text-balance">
          We designed RC Cities to feel warm, welcoming and unexpectedly immersive — a place where exceptional coffee, conversation and the thrill of construction come together.
        </p>

        {/* 3 Atmosphere Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-[#14161C]/80 backdrop-blur-md border border-white/10 hover:border-[#F59E0B]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-4">
              <Armchair className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-white mb-2">
              Comfort & Craft
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed">
              Warm minimalist design, polished concrete textures, and comfortable lounge seating tailored for long afternoons with friends.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#14161C]/80 backdrop-blur-md border border-white/10 hover:border-[#C2A683]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#C2A683]/10 border border-[#C2A683]/30 flex items-center justify-center text-[#C2A683] mb-4">
              <SunMedium className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-white mb-2">
              All Ages Welcome
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed">
              An experiential destination welcoming specialty coffee enthusiasts, remote-control hobbyists, families, and creative builders alike.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#14161C]/80 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-white mb-2">
              Vibrant & Social
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed">
              Curated chill playlists, friendly arena floor instructors, and the gentle mechanical hum of realistic scale machines moving earth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
