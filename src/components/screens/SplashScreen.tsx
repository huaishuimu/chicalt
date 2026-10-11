import React from 'react';
import { CHICHI_AVATAR } from '../../data/mockData';

interface SplashScreenProps {
  onStart: () => void;
  onExplorePhilosophy?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  return (
    <div className="relative flex-1 w-full flex flex-col justify-between items-center px-6 py-10 bg-gradient-to-b from-[#FF5072] via-[#FF6685] to-[#FFAAB8] text-white overflow-hidden select-none">
      {/* Subtle background ambient circles */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-12 w-72 h-72 bg-white/15 rounded-full blur-2xl pointer-events-none" />

      {/* Brand Header */}
      <div className="text-center mt-12 z-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-sm font-sans">
          ChicAlt
        </h1>
        <p className="text-[11px] font-semibold tracking-wider text-white/90 uppercase mt-2.5">
          Smart AI, Chic Styles At Your Fingertips.
        </p>
      </div>

      {/* Center 3D Mascot Floating with Orbit */}
      <div className="relative my-auto flex flex-col items-center justify-center z-10">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Glowing outer orbit ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/60 blur-[1px] rotate-[-25deg] scale-y-50 animate-pulse pointer-events-none" />
          
          <img
            src={CHICHI_AVATAR}
            alt="Chichi AI Curator Cloud"
            className="w-56 h-56 object-cover rounded-3xl drop-shadow-[0_20px_35px_rgba(255,50,90,0.45)] transition-transform hover:scale-105 duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full max-w-xs mb-8 z-10 flex flex-col items-center gap-3">
        <button
          onClick={onStart}
          className="w-full py-4 rounded-full bg-white text-[#FF5270] font-bold text-base tracking-wider uppercase shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:bg-neutral-50 active:scale-[0.98] transition-all"
        >
          Use Immediately
        </button>
      </div>
    </div>
  );
};
