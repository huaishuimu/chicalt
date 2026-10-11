import React, { useState } from 'react';
import { Camera, Search, ChevronRight, Menu, Mail, Shirt, User, Sparkles, Crown } from 'lucide-react';
import { SUMMER_SALE_PRODUCTS, STEAL_DEALS, ProductItem } from '../../data/mockData';

interface HomeScreenProps {
  onOpenSearch: () => void;
  onOpenProduct: (product?: ProductItem) => void;
  onOpenCategory: (cat: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenSearch,
  onOpenProduct,
  onOpenCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState('Quickship');

  const categories = ['All', 'Quickship', 'Women', 'Shoes', 'Jewelry'];

  const quickIcons = [
    { label: 'New Arrivals', icon: Mail, key: 'new' },
    { label: 'Sale', icon: Shirt, key: 'sale' },
    { label: 'Maternity', icon: User, key: 'maternity' },
    { label: 'Active Wear', icon: Sparkles, key: 'active' },
    { label: 'Prime', icon: Crown, key: 'prime' },
  ];

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Coral Header Section */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-4 text-white rounded-b-[28px] shadow-sm">
        {/* Brand & Search Bar */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h1 className="text-2xl font-black tracking-tight text-white font-sans shrink-0">
            ChicAlt
          </h1>

          {/* Search Bar */}
          <div
            onClick={onOpenSearch}
            className="flex-1 flex items-center justify-between bg-white/95 rounded-full px-4 py-2 text-neutral-400 cursor-pointer shadow-sm active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-neutral-400" />
              <span className="text-xs font-medium text-neutral-500">Search</span>
            </div>
            <button
              aria-label="Camera search"
              onClick={(e) => {
                e.stopPropagation();
                onOpenSearch();
              }}
              className="p-1 hover:text-rose-500 transition-colors"
            >
              <Camera className="w-4 h-4 text-neutral-400 hover:text-rose-500" />
            </button>
          </div>
        </div>

        {/* Category Horizontal Chips */}
        <div className="flex items-center justify-between text-xs pt-1 overflow-x-auto no-scrollbar gap-4">
          <div className="flex items-center gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap transition-all ${
                    isActive
                      ? 'text-white font-bold border-b-2 border-white pb-0.5'
                      : 'text-white/80 font-medium hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onOpenCategory('All')}
            className="flex items-center gap-1 text-white/90 text-[11px] font-semibold whitespace-nowrap pl-2 border-l border-white/30"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>Category</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-3.5 pt-3 flex flex-col gap-5">
        {/* Hero Summer Sale Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#FCEAEB] to-[#FDE1E4] p-5 shadow-sm border border-rose-100/50 flex items-center justify-between min-h-[170px]">
          <div className="z-10 max-w-[55%]">
            <h2 className="text-3xl font-black italic tracking-tight text-neutral-900 leading-none">
              Summer
              <br />
              <span className="text-2xl font-black italic tracking-wide uppercase">SALE</span>
            </h2>

            <button
              onClick={() => onOpenCategory('Summer Sale')}
              className="mt-4 px-4 py-1.5 rounded-lg bg-white text-neutral-900 text-xs font-extrabold uppercase tracking-wider shadow-sm hover:bg-neutral-50 active:scale-95 transition-all"
            >
              SHOP NOW
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
          </div>

          {/* Model Image in Banner */}
          <div className="absolute right-0 bottom-0 top-0 w-[45%] overflow-hidden flex items-end justify-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80"
              alt="Summer Sale Feature"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 5 Quick Category Icon Buttons */}
        <div className="grid grid-cols-5 gap-2 px-1">
          {quickIcons.map((item) => (
            <button
              key={item.key}
              onClick={() => onOpenCategory(item.label)}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#FFF0F2] to-[#FFE3E8] border border-rose-200/50 flex items-center justify-center text-[#FF5072] group-hover:scale-105 group-active:scale-95 transition-all shadow-xs">
                <item.icon className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-600 text-center leading-tight">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Section 1: Summer SALE Horizontal Scroll */}
        <div>
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <h3 className="text-base font-black text-neutral-900 tracking-tight font-sans">
              Summer SALE
            </h3>
            <button
              onClick={() => onOpenCategory('Summer Sale')}
              className="flex items-center text-xs font-semibold text-neutral-400 hover:text-neutral-700"
            >
              <span>See more</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 pt-0.5">
            {SUMMER_SALE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onOpenProduct(prod)}
                className="w-32 shrink-0 bg-white rounded-xl overflow-hidden shadow-xs border border-neutral-100 flex flex-col cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
              >
                <div className="relative w-full h-36 bg-neutral-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-white/90 drop-shadow-sm">
                      ChicAlt
                    </span>
                  </div>
                </div>

                <div className="p-2 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-[11px] font-bold text-neutral-800 line-clamp-1">
                      {prod.title}
                    </h4>
                    <p className="text-[9px] text-neutral-400 truncate mt-0.5">{prod.subtitle}</p>
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-xs font-black text-neutral-900">
                      $ {prod.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Steal Deal Masonry Grid */}
        <div>
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <h3 className="text-base font-black text-neutral-900 tracking-tight font-sans">
              Steal Deal
            </h3>
            <button
              onClick={() => onOpenCategory('Steal Deals')}
              className="flex items-center text-xs font-semibold text-neutral-400 hover:text-neutral-700"
            >
              <span>See more</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {STEAL_DEALS.map((deal, idx) => (
              <div
                key={deal.id}
                onClick={() => onOpenProduct(deal)}
                className={`bg-white rounded-xl overflow-hidden shadow-xs border border-neutral-100 flex flex-col cursor-pointer hover:shadow-md transition-all active:scale-[0.98] ${
                  idx % 3 === 0 ? 'row-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full bg-neutral-100 overflow-hidden ${
                    idx % 3 === 0 ? 'h-56' : 'h-40'
                  }`}
                >
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-xs rounded-full px-2 py-0.5 text-[9px] font-bold text-neutral-800">
                    Deal
                  </div>
                </div>

                <div className="p-2.5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-wider">
                      AirPods Max-Space Gray
                    </span>
                    <h4 className="text-[11px] font-bold text-neutral-900 line-clamp-1 mt-0.5">
                      AirPods Max-Space Gray
                    </h4>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-black text-neutral-900">$ {deal.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
