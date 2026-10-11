import React, { useState } from 'react';
import { ChevronLeft, Camera, SlidersHorizontal, Heart } from 'lucide-react';
import { UNDERWEAR_PRODUCTS, ProductItem } from '../../data/mockData';

interface SearchResultsScreenProps {
  categoryTitle?: string;
  onBack: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  categoryTitle = 'UNDERWEAR',
  onBack,
  onSelectProduct,
}) => {
  const [activeTab, setActiveTab] = useState<'POPULAR' | 'RECENT' | 'BEST SELLERS'>('POPULAR');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({ 'und-1': true });

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Gradient Header */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-3.5 pt-3 pb-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Search bar */}
          <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 text-neutral-800 shadow-sm">
            <span className="flex-1 text-xs font-medium text-neutral-400">Search</span>
            <button aria-label="Visual camera search" className="p-1 text-neutral-400 hover:text-rose-500">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <button aria-label="Filter" className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10">
            <SlidersHorizontal className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Big Title & Count */}
        <div className="flex items-baseline justify-between px-1">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white font-sans">
            {categoryTitle}
          </h2>
          <span className="text-base font-semibold text-white/80 font-mono">3987</span>
        </div>
      </div>

      {/* Main Content White Container */}
      <div className="flex-1 bg-white rounded-t-[32px] -mt-3 px-3.5 pt-4 flex flex-col shadow-sm">
        {/* Filter Tabs */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-2 mb-4 text-xs font-bold px-4">
          {(['POPULAR', 'RECENT', 'BEST SELLERS'] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-1 relative transition-colors ${
                  isActive ? 'text-neutral-900 font-extrabold' : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                <span>{tab}</span>
                {isActive && (
                  <span className="absolute bottom-[-9px] left-0 right-0 h-[2.5px] bg-[#FF5072] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Column Product Grid */}
        <div className="grid grid-cols-2 gap-3 pb-6">
          {UNDERWEAR_PRODUCTS.map((prod) => {
            const isLiked = likedMap[prod.id];
            return (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-neutral-100 flex flex-col cursor-pointer group hover:shadow-md transition-all active:scale-[0.98]"
              >
                <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleLike(prod.id, e)}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-neutral-400 hover:text-rose-500 active:scale-90 transition-all shadow-xs"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isLiked ? 'fill-[#FF5072] text-[#FF5072]' : 'text-neutral-600'
                      }`}
                    />
                  </button>
                </div>

                <div className="p-2.5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-semibold text-neutral-400 block line-clamp-1">
                      {prod.subtitle}
                    </span>
                    <h3 className="text-xs font-bold text-neutral-800 line-clamp-2 mt-0.5 leading-snug">
                      {prod.title}
                    </h3>
                  </div>

                  <div className="mt-2 flex items-baseline">
                    <span className="text-sm font-black text-neutral-900 font-sans">
                      $ {prod.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
