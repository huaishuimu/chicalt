import React, { useState } from 'react';
import { X, Camera, RotateCcw, Check, Sparkles, Box } from 'lucide-react';
import { CHICHI_AVATAR, NIXON_WATCH_IMAGE } from '../../data/mockData';

interface VirtualTryOnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (title: string, price: number) => void;
}

export const VirtualTryOnModal: React.FC<VirtualTryOnModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [activeLook, setActiveLook] = useState<'yellow' | 'black' | 'watch'>('yellow');
  const [rotation, setRotation] = useState(0);
  const [cameraSurfaceDetected, setCameraSurfaceDetected] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 animate-in fade-in select-none">
      <div className="relative w-full max-w-sm h-[680px] bg-neutral-950 rounded-[40px] overflow-hidden border border-neutral-800 flex flex-col text-white shadow-2xl">
        {/* Top Camera AR HUD */}
        <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-bold tracking-wide uppercase text-neutral-200">
              AR Surface Tracking
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-neutral-800 border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D AR Viewport with surface grid */}
        <div className="relative flex-1 w-full bg-radial from-neutral-800 via-neutral-900 to-black flex items-center justify-center overflow-hidden">
          {/* Surface Grid Projection (Perspective) */}
          <div className="absolute bottom-12 inset-x-0 h-48 [transform:perspective(500px)_rotateX(60deg)] bg-[linear-gradient(to_right,#FF5072_1px,transparent_1px),linear-gradient(to_bottom,#FF5072_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 pointer-events-none" />

          {/* 3D Interactive Model */}
          <div
            style={{
              transform: `rotateY(${rotation}deg)`,
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="relative w-64 h-96 flex items-center justify-center"
          >
            {activeLook === 'yellow' && (
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80"
                alt="Yellow pleat dress look"
                className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,80,114,0.3)] animate-in zoom-in-95"
              />
            )}

            {activeLook === 'black' && (
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
                alt="Black urban look"
                className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] animate-in zoom-in-95"
              />
            )}

            {activeLook === 'watch' && (
              <img
                src={NIXON_WATCH_IMAGE}
                alt="Nixon Watch"
                className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(255,80,114,0.3)] animate-in zoom-in-95"
              />
            )}
          </div>

          {/* Assistant Floating Advice Tag */}
          <div className="absolute top-16 inset-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/15 flex items-center gap-2 text-xs">
            <img src={CHICHI_AVATAR} alt="Chichi" className="w-6 h-6 rounded-full" />
            <span className="text-[11px] text-neutral-200">
              <strong className="text-rose-300">Chichi:</strong> &ldquo;Fits your 168cm frame with 98% silhouette match!&rdquo;
            </span>
          </div>

          {/* 360 Rotation Control */}
          <button
            onClick={() => setRotation((r) => r + 45)}
            className="absolute bottom-4 right-4 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 border border-white/20 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>360° Rotate</span>
          </button>
        </div>

        {/* Bottom Drawer: Looks Switcher & Add To Bag */}
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-400">SELECT 3D LOOK:</span>
            <span className="text-[10px] font-extrabold text-[#FF5072] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>98% MATCH RATIO</span>
            </span>
          </div>

          {/* 3 Looks Thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveLook('yellow')}
              className={`p-1.5 rounded-2xl border flex flex-col items-center gap-1 transition-all ${
                activeLook === 'yellow'
                  ? 'border-rose-500 bg-rose-500/15 text-white'
                  : 'border-neutral-800 bg-neutral-800 text-neutral-400'
              }`}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-700">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&q=80"
                  alt="Yellow"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-bold truncate">Sunset Dress</span>
            </button>

            <button
              onClick={() => setActiveLook('black')}
              className={`p-1.5 rounded-2xl border flex flex-col items-center gap-1 transition-all ${
                activeLook === 'black'
                  ? 'border-rose-500 bg-rose-500/15 text-white'
                  : 'border-neutral-800 bg-neutral-800 text-neutral-400'
              }`}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-700">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&q=80"
                  alt="Black"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-bold truncate">Urban Set</span>
            </button>

            <button
              onClick={() => setActiveLook('watch')}
              className={`p-1.5 rounded-2xl border flex flex-col items-center gap-1 transition-all ${
                activeLook === 'watch'
                  ? 'border-rose-500 bg-rose-500/15 text-white'
                  : 'border-neutral-800 bg-neutral-800 text-neutral-400'
              }`}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-700">
                <img src={NIXON_WATCH_IMAGE} alt="Watch" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold truncate">Nixon Watch</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (activeLook === 'yellow') onAddToCart?.('SUNSET PLEAT DRESS', 189);
              else if (activeLook === 'black') onAddToCart?.('URBAN RIB KNIT SET', 245);
              else onAddToCart?.("Nixon Women's C39 Watch", 165.98);
              onClose();
            }}
            className="w-full py-3.5 rounded-full bg-[#FF5072] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <span>Add Fitted Look to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};
