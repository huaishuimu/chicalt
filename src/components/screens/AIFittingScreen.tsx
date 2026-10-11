import React, { useState } from 'react';
import {
  ChevronLeft,
  RotateCcw,
  Search,
  Check,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import { CHICHI_AVATAR } from '../../data/mockData';

interface AIFittingScreenProps {
  onBack: () => void;
  onOpenBodyID: () => void;
  onAddAllToBag: () => void;
  onOpenWardrobe?: () => void;
  onOpenMakeup?: () => void;
}

export const AIFittingScreen: React.FC<AIFittingScreenProps> = ({
  onBack,
  onOpenBodyID,
  onAddAllToBag,
}) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedGarment, setSelectedGarment] = useState<'dress' | 'blazer' | 'lingerie'>('dress');

  const handleRotate = () => {
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  const handleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.15 : 1));
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Gradient Header */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-4 text-white">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white font-sans">
              AI Fitting
            </h1>
            <p
              onClick={onOpenBodyID}
              className="text-xs font-medium text-white/90 cursor-pointer hover:underline flex items-center gap-1"
            >
              <span>Create Your Digital Self</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">Edit ID</span>
            </p>
          </div>
        </div>
      </div>

      <div className="px-3.5 pt-3 flex flex-col gap-3.5">
        {/* Main 3D Fitting Simulation Card (Dark Slate Container) */}
        <div className="w-full bg-gradient-to-b from-[#2B232D] via-[#232026] to-[#1C1820] rounded-[32px] p-4 text-white shadow-lg border border-neutral-800 flex flex-col relative overflow-hidden">
          {/* AI Curator Speech Bubble */}
          <div className="w-full bg-white/15 backdrop-blur-md rounded-2xl p-2.5 flex items-start gap-2.5 border border-white/10 shadow-sm z-10">
            <img
              src={CHICHI_AVATAR}
              alt="Chichi"
              className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5"
              referrerPolicy="no-referrer"
            />
            <p className="text-[11px] leading-relaxed text-neutral-100 font-medium">
              This <span className="text-rose-300 font-bold">shoulder-baring dress</span> looks great with your shoulders! It accentuates your Hourglass frame.
            </p>
          </div>

          {/* Central 3D Digital Mannequin / Body Canvas */}
          <div className="relative w-full h-80 my-2 flex items-center justify-center">
            {/* Background Studio Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F2A4B2]/20 via-[#402A36] to-transparent rounded-2xl pointer-events-none" />

            {/* Simulated 3D Avatar Body Vector / Interactive Silhouette */}
            <div
              style={{
                transform: `rotateY(${rotationAngle}deg) scale(${zoomLevel})`,
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative w-48 h-full flex items-center justify-center select-none"
            >
              {/* Silhouette SVG with soft lighting */}
              <svg viewBox="0 0 160 300" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                {/* Body base silhouette */}
                <defs>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A3F49" />
                    <stop offset="50%" stopColor="#2E242C" />
                    <stop offset="100%" stopColor="#1C161B" />
                  </linearGradient>
                  <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B8B" />
                    <stop offset="100%" stopColor="#D9385C" />
                  </linearGradient>
                </defs>

                {/* Head */}
                <ellipse cx="80" cy="35" rx="14" ry="18" fill="url(#bodyGrad)" />
                {/* Neck */}
                <path d="M75 52 L85 52 L87 64 L73 64 Z" fill="url(#bodyGrad)" />
                {/* Shoulders & Torso */}
                <path
                  d="M50 68 C62 65 98 65 110 68 C115 78 112 105 106 116 C100 128 92 142 98 160 C104 175 114 185 112 210 L102 285 L90 285 L84 200 L80 185 L76 200 L70 285 L58 285 L48 210 C46 185 56 175 62 160 C68 142 60 128 54 116 C48 105 45 78 50 68 Z"
                  fill="url(#bodyGrad)"
                />

                {/* Garment Overlay (Shoulder baring dress / underwear) */}
                {selectedGarment === 'dress' && (
                  <path
                    d="M54 85 Q80 92 106 85 L104 150 Q80 162 56 150 Z"
                    fill="url(#dressGrad)"
                    opacity="0.85"
                  />
                )}

                {/* Subtle Hourglass Guide lines */}
                <path d="M54 118 Q80 124 106 118" stroke="#FF6B8B" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" fill="none" />
              </svg>

              {/* Measurement Annotations (matching screenshot exactly) */}
              {/* Bust Pin */}
              <div className="absolute top-[32%] right-[-10px] flex items-center gap-1.5 pointer-events-none animate-in fade-in">
                <div className="w-6 h-[1px] bg-rose-400" />
                <span className="px-2 py-0.5 rounded-full bg-rose-500/80 text-[10px] font-bold text-white shadow-xs">
                  Bust: 88cm
                </span>
              </div>

              {/* Waist Pin */}
              <div className="absolute top-[42%] left-[-14px] flex items-center gap-1.5 pointer-events-none animate-in fade-in">
                <span className="px-2 py-0.5 rounded-full bg-rose-500/80 text-[10px] font-bold text-white shadow-xs">
                  Waist: 88cm
                </span>
                <div className="w-6 h-[1px] bg-rose-400" />
              </div>

              {/* Hips Pin */}
              <div className="absolute top-[56%] right-[-14px] flex items-center gap-1.5 pointer-events-none animate-in fade-in">
                <div className="w-6 h-[1px] bg-rose-400" />
                <span className="px-2 py-0.5 rounded-full bg-rose-500/80 text-[10px] font-bold text-white shadow-xs">
                  Hips: 92cm
                </span>
              </div>
            </div>

            {/* Bottom Controls inside 3D Card */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRotate}
                  aria-label="Rotate avatar"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoom}
                  aria-label="Zoom avatar"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              <div className="px-3 py-1 rounded-full bg-[#FF5072] text-white text-[11px] font-extrabold flex items-center gap-1.5 shadow-md shadow-rose-500/30">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>98% Match</span>
              </div>
            </div>
          </div>

          {/* Quick Style Switcher */}
          <div className="flex items-center justify-center gap-2 pt-1 border-t border-white/10 text-xs">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Try on:</span>
            {(['dress', 'blazer', 'lingerie'] as const).map((style) => (
              <button
                key={style}
                onClick={() => setSelectedGarment(style)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                  selectedGarment === style ? 'bg-rose-500 text-white' : 'bg-white/10 text-neutral-300'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* AI Curator Picks Card */}
        <div className="w-full bg-white rounded-3xl p-4 shadow-xs border border-rose-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <img
                src={CHICHI_AVATAR}
                alt="Chichi icon"
                className="w-5 h-5 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-xs font-black text-neutral-900 tracking-tight">AI Curator Picks</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#FFF0F2] text-[#FF5072] text-[10px] font-extrabold">
              95% HARMONY SCORE
            </span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#FFF9FA] border border-rose-50">
            <div className="w-16 h-16 rounded-xl bg-amber-50 p-1 flex items-center justify-center shrink-0 border border-amber-100">
              <img
                src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=200&q=80"
                alt="Complete the Vibe"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1">
              <h4 className="text-xs font-bold text-neutral-900 leading-tight">Complete the Vibe</h4>
              <p className="text-[10px] text-neutral-500 mt-0.5">4 curated items for your profile</p>
            </div>

            <div className="text-right">
              <span className="text-sm font-black text-neutral-900">$145.00</span>
            </div>
          </div>

          <button
            onClick={onAddAllToBag}
            className="w-full py-3 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white text-xs font-bold shadow-md shadow-rose-500/25 active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add All to Bag</span>
          </button>
        </div>

        {/* My Wardrobe Card */}
        <div
          onClick={onOpenBodyID}
          className="relative w-full h-28 rounded-3xl overflow-hidden shadow-xs cursor-pointer group"
        >
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
            alt="My Wardrobe"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
            <h4 className="text-sm font-black tracking-tight leading-tight">My Wardrobe</h4>
            <p className="text-[10px] text-white/80 mt-0.5">Style your own pieces with AI</p>
          </div>
        </div>

        {/* Beauty Lab: AI Makeup Card */}
        <div className="relative w-full h-28 rounded-3xl overflow-hidden shadow-xs cursor-pointer group">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
            alt="Beauty Lab"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
            <h4 className="text-sm font-black tracking-tight leading-tight">Beauty Lab: AI Makeup</h4>
            <p className="text-[10px] text-white/80 mt-0.5">Find your perfect shade</p>
          </div>
        </div>
      </div>
    </div>
  );
};
