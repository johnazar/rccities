import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'Corporate', href: '#corporate' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#101114]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#101114]/90 via-[#101114]/60 to-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg"
              aria-label="RC Cities Dubai Home"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: 4-6 Nav Links (Single-line, quiet typography) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#C8C5BF] hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#F59E0B] decoration-2"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={onOpenMenu}
                className="text-sm font-medium text-[#C8C5BF] hover:text-[#F59E0B] transition-colors"
              >
                Full Menu
              </button>
            </nav>

            {/* Zone 3: 1-2 Primary Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/15 text-[#E8E6E3] hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 rounded-md bg-[#F59E0B] text-black font-bold text-xs uppercase tracking-wider"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#E8E6E3] hover:text-white bg-[#1B1E24] border border-white/10"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[#14161B] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-base font-medium text-[#E8E6E3] hover:text-[#F59E0B] transition-colors py-2 border-b border-white/5"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMenu();
                  }}
                  className="text-left text-base font-medium text-[#F59E0B] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Café Menu (AED)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <p className="text-xs text-[#A09D96]">
                {siteConfig.shortAddress}
              </p>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#F59E0B] text-black font-bold text-xs uppercase tracking-wider text-center"
              >
                Book Your Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
