import React, { useState } from 'react';
import { ChevronLeft, QrCode, Camera, Edit3, Check } from 'lucide-react';
import { CHICHI_AVATAR } from '../../data/mockData';

interface BodyIDScreenProps {
  onBack: () => void;
  onSave?: () => void;
}

export const BodyIDScreen: React.FC<BodyIDScreenProps> = ({ onBack, onSave }) => {
  // State for all sliders
  const [height, setHeight] = useState(168);
  const [weight, setWeight] = useState(52);
  const [bust, setBust] = useState(88);
  const [waist, setWaist] = useState(64);
  const [hips, setHips] = useState(92);
  const [shoulder, setShoulder] = useState(92);
  const [foot, setFoot] = useState(32);

  // 4 skin tones
  const skinTones = ['#F9D7C2', '#E8B693', '#C98A5B', '#633B27'];
  const [selectedSkinIdx, setSelectedSkinIdx] = useState(1);

  // Simulated scanning state
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setTimeout(() => setScanComplete(false), 3000);
    }, 2200);
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none relative">
      {/* Top Gradient Header */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-6 text-white">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-2xl font-black tracking-tight text-white font-sans">
            Body ID
          </h1>
        </div>
      </div>

      <div className="px-3.5 -mt-3 flex flex-col gap-4">
        {/* Top Summary Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-14 rounded-2xl bg-gradient-to-b from-rose-100 to-amber-100 overflow-hidden p-1 flex items-center justify-center border border-rose-200">
              <svg viewBox="0 0 100 160" className="w-full h-full">
                <ellipse cx="50" cy="20" rx="10" ry="12" fill={skinTones[selectedSkinIdx]} />
                <path
                  d="M32 40 C40 38 60 38 68 40 C72 50 70 70 65 76 C60 82 55 90 60 100 C64 110 68 116 66 130 L62 160 L54 160 L50 110 L46 160 L38 160 L34 130 C32 116 36 110 40 100 C45 90 40 82 35 76 C30 70 28 50 32 40 Z"
                  fill={skinTones[selectedSkinIdx]}
                />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-black text-neutral-900 leading-tight">My Body ID</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FF5072] text-white text-[10px] font-bold">
                  Hourglass
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FF5072] text-white text-[10px] font-bold">
                  Size M
                </span>
              </div>
            </div>
          </div>

          <button aria-label="QR Code" className="p-2 text-neutral-700 hover:text-rose-500">
            <QrCode className="w-6 h-6 stroke-[1.8]" />
          </button>
        </div>

        {/* Central 3D Model Display */}
        <div className="relative w-full h-96 bg-gradient-to-b from-white to-[#FFF0F3] rounded-3xl p-4 flex flex-col items-center justify-center border border-rose-100/60 shadow-2xs overflow-hidden">
          {/* Scanning Beam Animation */}
          {isScanning && (
            <div className="absolute inset-0 bg-rose-500/10 z-20 flex flex-col justify-between pointer-events-none">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_15px_#FF5072] animate-[bounce_2s_infinite]" />
              <div className="text-center pb-4 text-xs font-bold text-rose-600 bg-white/80 py-1">
                Biometric Laser Scanner Active...
              </div>
            </div>
          )}

          {scanComplete && (
            <div className="absolute top-4 inset-x-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-2.5 flex items-center justify-center gap-2 z-20 text-xs font-bold shadow-md animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Body ID Scanned and Calibrated!</span>
            </div>
          )}

          {/* Avatar SVG Model dynamically styled with skinTone & waist/hip scaling */}
          <div className="relative w-40 h-80 flex items-center justify-center">
            <svg
              viewBox="0 0 160 320"
              className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <defs>
                <linearGradient id="bodysuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFB299" />
                  <stop offset="50%" stopColor="#C99B83" />
                  <stop offset="100%" stopColor="#AF836C" />
                </linearGradient>
              </defs>

              {/* Head & Hair */}
              <ellipse cx="80" cy="38" rx="15" ry="19" fill={skinTones[selectedSkinIdx]} />
              {/* Golden hair locks */}
              <path
                d="M60 25 C65 15 95 15 100 25 C105 38 106 65 98 85 L94 85 C97 60 92 38 88 32 C82 32 78 32 72 32 C68 38 63 60 66 85 L62 85 C54 65 55 38 60 25 Z"
                fill="#C59B63"
              />

              {/* Neck */}
              <path d="M74 54 L86 54 L87 66 L73 66 Z" fill={skinTones[selectedSkinIdx]} />

              {/* Bodysuit Torso (reacts to waist & hip values) */}
              <path
                d={`M${50 - (shoulder - 90) * 0.2} 70 
                   C65 67 95 67 ${110 + (shoulder - 90) * 0.2} 70 
                   C${116 + (bust - 88) * 0.3} 82 ${114 + (bust - 88) * 0.3} 108 ${105 + (waist - 64) * 0.3} 120 
                   C${98 + (waist - 64) * 0.2} 132 ${92 + (waist - 64) * 0.2} 145 ${102 + (hips - 92) * 0.3} 165 
                   C${108 + (hips - 92) * 0.4} 180 ${114 + (hips - 92) * 0.3} 195 110 220 
                   L100 300 L88 300 L84 210 L80 190 L76 210 L72 300 L60 300 L50 220 
                   C${46 - (hips - 92) * 0.3} 195 ${52 - (hips - 92) * 0.4} 180 ${58 - (hips - 92) * 0.3} 165 
                   C${68 - (waist - 64) * 0.2} 145 ${62 - (waist - 64) * 0.2} 132 ${55 - (waist - 64) * 0.3} 120 
                   C${46 - (bust - 88) * 0.3} 108 ${44 - (bust - 88) * 0.3} 82 ${50 - (shoulder - 90) * 0.2} 70 Z`}
                fill="url(#bodysuitGrad)"
              />
            </svg>

            {/* Chichi Mascot Icon Floating beside */}
            <div className="absolute bottom-2 left-2 w-7 h-7 rounded-full overflow-hidden shadow-sm pointer-events-none">
              <img src={CHICHI_AVATAR} alt="Chichi" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Skin Tone Selector Dots (matching screenshot) */}
          <div className="flex items-center gap-2.5 mt-2 z-10">
            {skinTones.map((tone, idx) => (
              <button
                key={tone}
                onClick={() => setSelectedSkinIdx(idx)}
                style={{ backgroundColor: tone }}
                className={`w-6 h-6 rounded-full transition-transform ${
                  selectedSkinIdx === idx
                    ? 'ring-2 ring-[#FF5072] ring-offset-2 scale-110'
                    : 'hover:scale-105 opacity-80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Height and Weight Sliders */}
        <div className="grid grid-cols-2 gap-3">
          {/* Height */}
          <div className="bg-white rounded-3xl p-3.5 border border-rose-100 shadow-2xs">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs font-bold text-neutral-500">Height</span>
              <span className="text-base font-black text-neutral-900">
                {height} <span className="text-[10px] text-neutral-400 uppercase">CM</span>
              </span>
            </div>
            <input
              type="range"
              min={150}
              max={195}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full accent-[#FF5072] cursor-pointer"
            />
          </div>

          {/* Weight */}
          <div className="bg-white rounded-3xl p-3.5 border border-rose-100 shadow-2xs">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs font-bold text-neutral-500">Weight</span>
              <span className="text-base font-black text-neutral-900">
                {weight} <span className="text-[10px] text-neutral-400 uppercase">KG</span>
              </span>
            </div>
            <input
              type="range"
              min={40}
              max={100}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-[#FF5072] cursor-pointer"
            />
          </div>
        </div>

        {/* Size Adjustment Card */}
        <div className="bg-white rounded-3xl p-4 border border-rose-100 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center gap-1.5 pb-1 border-b border-neutral-100 text-xs font-bold text-neutral-800">
            <span className="text-rose-500">💳</span>
            <span>Size Adjustment</span>
          </div>

          {/* BUST */}
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="w-16 font-extrabold text-neutral-400 text-[10px]">BUST</span>
            <input
              type="range"
              min={70}
              max={110}
              value={bust}
              onChange={(e) => setBust(Number(e.target.value))}
              className="flex-1 accent-[#FF5072]"
            />
            <span className="w-8 text-right font-black text-neutral-900 font-mono">{bust}</span>
          </div>

          {/* WAIST */}
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="w-16 font-extrabold text-neutral-400 text-[10px]">WAIST</span>
            <input
              type="range"
              min={55}
              max={95}
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="flex-1 accent-[#FF5072]"
            />
            <span className="w-8 text-right font-black text-neutral-900 font-mono">{waist}</span>
          </div>

          {/* HIPS */}
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="w-16 font-extrabold text-neutral-400 text-[10px]">HIPS</span>
            <input
              type="range"
              min={75}
              max={120}
              value={hips}
              onChange={(e) => setHips(Number(e.target.value))}
              className="flex-1 accent-[#FF5072]"
            />
            <span className="w-8 text-right font-black text-neutral-900 font-mono">{hips}</span>
          </div>

          {/* SHOULDER */}
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="w-16 font-extrabold text-neutral-400 text-[10px]">SHOULDER</span>
            <input
              type="range"
              min={75}
              max={115}
              value={shoulder}
              onChange={(e) => setShoulder(Number(e.target.value))}
              className="flex-1 accent-[#FF5072]"
            />
            <span className="w-8 text-right font-black text-neutral-900 font-mono">{shoulder}</span>
          </div>

          {/* FOOT */}
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="w-16 font-extrabold text-neutral-400 text-[10px]">FOOT</span>
            <input
              type="range"
              min={20}
              max={45}
              value={foot}
              onChange={(e) => setFoot(Number(e.target.value))}
              className="flex-1 accent-[#FF5072]"
            />
            <span className="w-8 text-right font-black text-neutral-900 font-mono">{foot}</span>
          </div>
        </div>

        {/* Detailed Specs Row */}
        <div className="bg-white rounded-2xl px-4 py-3 border border-rose-100 flex items-center justify-between text-xs">
          <span className="font-bold text-neutral-800">Detailed Specs</span>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span className="text-[10px] uppercase font-bold tracking-wider">PENDING</span>
            <Edit3 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* SCAN MY BODY Button */}
        <button
          onClick={startScan}
          disabled={isScanning}
          className="w-full py-4 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
        >
          <Camera className="w-4 h-4" />
          <span>{isScanning ? 'SCANNING YOUR BODY...' : 'SCAN MY BODY'}</span>
        </button>

        {/* Disclaimer */}
        <p className="text-center text-[10px] text-neutral-400 leading-normal px-2 pb-2">
          By creating a Body ID, you agree to our{' '}
          <span className="underline cursor-pointer">Privacy Policy</span> regarding biometric data encryption.
        </p>
      </div>
    </div>
  );
};
