import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const LogoIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 40,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-icon-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="logo-icon-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>

      {/* Heavy Crawler Track Unit at Base */}
      <g>
        <rect
          x="12"
          y="84"
          width="96"
          height="22"
          rx="11"
          fill="#171A22"
          stroke="url(#logo-icon-gold)"
          strokeWidth="3.5"
        />
        {/* Bogie road wheels */}
        <circle cx="26" cy="95" r="6" fill="url(#logo-icon-orange)" />
        <circle cx="26" cy="95" r="2.2" fill="#FFFFFF" />

        <circle cx="44" cy="95" r="5.5" fill="url(#logo-icon-gold)" />
        <circle cx="44" cy="95" r="2" fill="#171A22" />

        <circle cx="60" cy="95" r="5.5" fill="url(#logo-icon-gold)" />
        <circle cx="60" cy="95" r="2" fill="#171A22" />

        <circle cx="76" cy="95" r="5.5" fill="url(#logo-icon-gold)" />
        <circle cx="76" cy="95" r="2" fill="#171A22" />

        <circle cx="94" cy="95" r="6" fill="url(#logo-icon-orange)" />
        <circle cx="94" cy="95" r="2.2" fill="#FFFFFF" />
      </g>

      {/* Hydraulic Excavator Boom & Toothed Digger Bucket */}
      <g>
        <path
          d="M 32 78 L 48 38 L 78 22 L 102 38"
          fill="none"
          stroke="url(#logo-icon-gold)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hydraulic Cylinder Ram */}
        <path
          d="M 42 66 L 62 42"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Toothed Bucket */}
        <path
          d="M 102 38 L 112 50 L 104 62 L 90 56 Z"
          fill="url(#logo-icon-orange)"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
        <polygon points="112,50 116,53 113,55" fill="#FFFFFF" />
        <polygon points="108,55 112,58 109,60" fill="#FFFFFF" />
        <polygon points="104,62 107,66 103,66" fill="#FFFFFF" />

        {/* Joint Pivot Pins */}
        <circle cx="32" cy="78" r="5" fill="#FFFFFF" stroke="#0E1015" strokeWidth="1.8" />
        <circle cx="48" cy="38" r="4" fill="#FFFFFF" stroke="#0E1015" strokeWidth="1.8" />
        <circle cx="78" cy="22" r="3.5" fill="#FFFFFF" stroke="#0E1015" strokeWidth="1.8" />
        <circle cx="102" cy="38" r="4" fill="#FFFFFF" stroke="#0E1015" strokeWidth="1.8" />
      </g>

      {/* RC Pistol Grip Transmitter Handle / Antenna */}
      <g>
        <line x1="32" y1="78" x2="32" y2="46" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="43" r="2.5" fill="#F59E0B" />
        <path d="M 32 78 C 22 78 16 81 16 86 L 32 86 Z" fill="url(#logo-icon-gold)" />
      </g>

      {/* Dual Interlocking 'CC' Monogram */}
      <g fill="none" strokeWidth="5.5" strokeLinecap="round">
        <path
          d="M 64 56 C 52 56 46 63 46 72 C 46 81 52 86 64 86"
          stroke="url(#logo-icon-gold)"
        />
        <path
          d="M 84 56 C 72 56 66 63 66 72 C 66 81 72 86 84 86"
          stroke="url(#logo-icon-orange)"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const pixelSizes = {
    sm: 32,
    md: 40,
    lg: 52,
  };

  const currentSize = pixelSizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Mark */}
      <div className="relative flex items-center justify-center p-1 rounded-xl bg-[#171922] border border-[#F59E0B]/35 shadow-md shadow-[#F59E0B]/10 overflow-hidden group-hover:border-[#F59E0B] transition-colors">
        <LogoIcon size={currentSize} />
      </div>

      {/* Text Wordmark */}
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5 font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
            <span>RC</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">
              CITIES
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1 font-mono-tech text-[9.5px] sm:text-[10px] tracking-widest text-[#C2A683] uppercase">
            <span>DUBAI</span>
            <span className="text-white/30">·</span>
            <span className="text-[#A8A49C]">COFFEE MEETS THRILL</span>
          </div>
        </div>
      )}
    </div>
  );
};
