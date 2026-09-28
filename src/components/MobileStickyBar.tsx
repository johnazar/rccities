import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#101217]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl shadow-black">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Book Experience Button */}
        <button
          onClick={onOpenBooking}
          className="h-11 px-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md shadow-[#F59E0B]/20"
        >
          <Calendar className="w-3.5 h-3.5 fill-black stroke-black" />
          <span className="truncate">BOOK EXPERIENCE</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={siteConfig.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md shadow-[#25D366]/20"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-black stroke-black" />
          <span className="truncate">WHATSAPP</span>
        </a>

      </div>
    </div>
  );
};
