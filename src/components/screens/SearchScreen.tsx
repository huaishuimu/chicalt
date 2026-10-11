import React, { useState } from 'react';
import { ChevronLeft, Camera, SlidersHorizontal, Trash2, Mail, Shirt, User, Sparkles, Crown } from 'lucide-react';
import { CATEGORY_CARD_ITEMS } from '../../data/mockData';

interface SearchScreenProps {
  onBack: () => void;
  onSearchSubmit: (query: string) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ onBack, onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSideCat, setActiveSideCat] = useState('New Arrivals');
  const [searchHistory, setSearchHistory] = useState([
    'Shoes',
    'Headphones',
    'Game controller',
    'shampoo',
    'jacket',
    'watch',
  ]);

  const leftRailItems = [
    { label: 'New Arrivals', icon: Mail },
    { label: 'Sale', icon: Shirt },
    { label: 'Maternity', icon: User },
    { label: 'Active Wear', icon: Sparkles },
    { label: 'Prime', icon: Crown },
  ];

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-20 overflow-y-auto no-scrollbar select-none">
      {/* Top Bar with Gradient */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-3.5 pt-3 pb-4 text-white">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Search Bar */}
          <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 text-neutral-800 shadow-sm">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearchSubmit(searchTerm || 'Underwear');
              }}
              placeholder="Search"
              className="flex-1 bg-transparent text-xs font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none"
            />
            <button
              aria-label="Visual recognition"
              onClick={() => onSearchSubmit('Image recognition')}
              className="p-1 text-neutral-400 hover:text-rose-500"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <button 
            aria-label="Filter settings"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10"
          >
            <SlidersHorizontal className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Search History Header */}
        <div className="mt-4 flex items-center justify-between text-white/90 text-xs px-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-white">Search history</span>
            <span className="text-white/60">|</span>
            <span className="text-white/80 font-medium text-[11px]">Image recognition</span>
          </div>

          {searchHistory.length > 0 && (
            <button
              onClick={handleClearHistory}
              aria-label="Clear history"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Search History Tags */}
        <div className="mt-2.5 flex flex-wrap gap-2 px-1">
          {searchHistory.map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchSubmit(tag)}
              className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white text-[11px] font-semibold backdrop-blur-xs transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Category Body: Left Rail + Right Card Grid */}
      <div className="flex-1 flex px-2 pt-3 gap-2">
        {/* Left Vertical Rail */}
        <div className="w-16 shrink-0 flex flex-col gap-3 py-1">
          {leftRailItems.map((item) => {
            const isActive = activeSideCat === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveSideCat(item.label)}
                className="flex flex-col items-center gap-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-gradient-to-b from-[#FF5072] to-[#FF708C] text-white shadow-md'
                      : 'bg-white border border-rose-100 text-[#FF5072] group-hover:scale-105'
                  }`}
                >
                  <item.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <span
                  className={`text-[9px] font-bold text-center leading-tight ${
                    isActive ? 'text-[#FF5072]' : 'text-neutral-500'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Category Photo Grid */}
        <div className="flex-1 grid grid-cols-2 gap-2 pb-6">
          {CATEGORY_CARD_ITEMS.map((cat) => (
            <div
              key={cat.name}
              onClick={() => onSearchSubmit(cat.name)}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xs border border-neutral-100 cursor-pointer group active:scale-95 transition-all"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF5072]/80 via-transparent to-transparent flex flex-col justify-end p-2.5">
                <span className="text-white font-extrabold text-sm drop-shadow-sm leading-tight">
                  {cat.name}
                </span>
                <span className="text-white/80 font-bold text-[9px] tracking-wider uppercase">
                  ChicAlt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
