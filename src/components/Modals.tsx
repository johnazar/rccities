import React, { useState } from 'react';
import { X, Search, Check, Coffee, MessageCircle, Calendar, Users, Clock, Sparkles } from 'lucide-react';
import { authenticMenuCategories, rentalRates, groupPackages, siteConfig, FleetMachine } from '../data/siteConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillDetail?: string;
  selectedMachine?: FleetMachine | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillDetail,
  selectedMachine,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('15:00');
  const [guests, setGuests] = useState('2');
  const [experienceTier, setExperienceTier] = useState(
    selectedMachine ? `Machine: ${selectedMachine.name}` : prefillDetail || 'Scale 1:14 Heavy Construction (50 AED / 30m)'
  );
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Hi RC Cities! I'd like to book an RC experience:
• Name: ${name || 'Guest'}
• Phone: ${phone || 'Provided via web'}
• Date & Time: ${date || 'Today'} at ${timeSlot}
• Selected Experience: ${experienceTier}
• Guests / Drivers: ${guests}
${notes ? `• Special Request: ${notes}` : ''}
Please confirm availability!`;

    window.open(siteConfig.getWhatsAppUrl(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#161820] border border-white/15 rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 overflow-y-auto max-h-[90vh] shadow-2xl shadow-black">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-mono-tech text-[10px] text-[#F59E0B] uppercase tracking-wider block">
              EXPERIENCE RESERVATIONS
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white">
              Book Your RC Session
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="font-display font-bold text-xl text-white">
              Reservation Details Prepared!
            </h4>
            <p className="text-xs text-[#C8C5BF] max-w-sm mx-auto leading-relaxed">
              We received your booking request for {name || 'your crew'} on {date || 'upcoming session'}. You can instantly finalize your spot via direct WhatsApp message.
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-transparent border border-white/10 text-xs text-[#A8A49C]"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-5 space-y-4">
            <div>
              <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tariq Al Mansoori"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                  WhatsApp Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 123 4567"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                  Number of Drivers
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none"
                >
                  <option value="1">1 Operator</option>
                  <option value="2">2 Operators</option>
                  <option value="3-4">3 - 4 Operators</option>
                  <option value="5-10">5 - 10 Group</option>
                  <option value="10+">10+ Corporate Group</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                  Preferred Time
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none"
                >
                  <option value="11:00 AM">11:00 AM (Morning Brew)</option>
                  <option value="1:00 PM">1:00 PM (Afternoon)</option>
                  <option value="3:00 PM">3:00 PM (Afternoon)</option>
                  <option value="5:00 PM">5:00 PM (Golden Hour)</option>
                  <option value="7:00 PM">7:00 PM (Evening Prime)</option>
                  <option value="9:00 PM">9:00 PM (Night Shift)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                Machine or Package
              </label>
              <input
                type="text"
                value={experienceTier}
                onChange={(e) => setExperienceTier(e.target.value)}
                placeholder="e.g. Scale 1:14 Hydraulic Construction or Volvo Hauler"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-tech text-[#C2A683] uppercase mb-1">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Birthday surprise, corporate requirements, specific coffee preferences..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111318] border border-white/10 text-white text-sm focus:border-[#F59E0B] focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#F59E0B]/20"
              >
                Review & Request Booking
              </button>
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="py-3.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'hot', label: 'Hot Coffee' },
    { key: 'cold-filter', label: 'Cold & Pour Over' },
    { key: 'matcha-tea', label: 'Japanese & Teas' },
    { key: 'refreshers', label: 'Shakes & Açai' },
    { key: 'bites', label: 'Pastries & Bites' },
  ];

  const filteredCategories = authenticMenuCategories.filter(cat => {
    if (activeCategory === 'all') return true;
    return cat.categoryKey === activeCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#14161C] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col z-10 shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#171922]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-tech text-[10px] text-[#F59E0B] uppercase tracking-wider">
                RC CITIES DUBAI CAFÉ
              </span>
              <span className="text-white/30 text-xs">·</span>
              <span className="font-mono-tech text-[10px] text-[#C2A683] uppercase">
                PRICES IN AED
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
              The Full Café Menu
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white bg-[#101217] border border-white/10"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#12141A] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === c.key
                    ? 'bg-[#F59E0B] text-black shadow'
                    : 'text-[#A8A49C] hover:text-white bg-[#1A1D26] border border-white/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drinks & bites..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#1A1D26] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#F59E0B]"
            />
          </div>
        </div>

        {/* Menu Items Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-8">
          {filteredCategories.map((cat) => {
            const visibleItems = cat.items.filter(item =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            if (visibleItems.length === 0) return null;

            return (
              <div key={cat.title}>
                <div className="flex items-center justify-between pb-2 mb-4 border-b border-white/10">
                  <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#F59E0B] rounded-full" />
                    <span>{cat.title}</span>
                  </h4>
                  <span className="font-mono-tech text-xs text-[#A8A49C]">
                    {visibleItems.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {visibleItems.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-[#1A1D25] border border-white/5 hover:border-white/15 transition-colors flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-semibold text-sm text-white">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 px-1.5 py-0.5 rounded border border-[#F59E0B]/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-[#A8A49C] mt-1 leading-snug line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="font-mono-tech font-bold text-sm text-[#F59E0B] bg-[#12141A] px-2.5 py-1 rounded border border-white/5 shrink-0">
                        {item.price} AED
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Machine Rental Rates Refresher inside Menu */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between pb-2 mb-4">
              <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#C2A683] rounded-full" />
                <span>Arena Machine Rental Rates</span>
              </h4>
              <span className="font-mono-tech text-xs text-[#C2A683]">
                PER 30 MIN
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {rentalRates.map((r) => (
                <div key={r.title} className="p-3.5 rounded-xl bg-[#171A23] border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] text-[#A8A49C] uppercase">{r.scale}</span>
                    <span className="font-mono-tech text-xs font-bold text-[#F59E0B]">{r.price} AED</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white mt-1">{r.title}</div>
                  <div className="text-xs text-[#A8A49C] mt-1">{r.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Milk & Flavour Customizations */}
          <div className="p-4 rounded-xl bg-[#171A23] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-white font-semibold">Milk Options (+5 AED):</span>
              <span className="text-[#A8A49C] ml-2">Almond Milk · Oat Milk · Coconut Milk</span>
            </div>
            <div>
              <span className="text-white font-semibold">Flavour Syrups (+5 AED):</span>
              <span className="text-[#A8A49C] ml-2">Vanilla · Hazelnut · Caramel</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#121419] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-[#807D77] hidden sm:inline">
            Enjoy your beverage while commanding the remote-control construction fleet.
          </span>
          <a
            href={siteConfig.getWhatsAppUrl("Hi RC Cities! I'd like to check today's pastry specials and place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Order / Reserve Table</span>
          </a>
        </div>
      </div>
    </div>
  );
};
