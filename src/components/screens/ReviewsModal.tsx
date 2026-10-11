import React, { useState } from 'react';
import {
  ChevronLeft,
  Share2,
  MoreHorizontal,
  X,
  Star,
  ThumbsUp,
  MessageSquare,
  ShoppingBag,
} from 'lucide-react';
import { REVIEWS_DATA } from '../../data/mockData';

interface ReviewsModalProps {
  onBack: () => void;
  onClose: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onSelectTab: (tab: 'Parameter' | 'Review' | 'Store' | 'AI Fitting') => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  onBack,
  onClose,
  onAddToCart,
  onBuyNow,
  onSelectTab,
}) => {
  const [activeTopTab, setActiveTopTab] = useState<'Parameter' | 'Review' | 'Store' | 'AI Fitting'>('Review');
  const [activeFilter, setActiveFilter] = useState('Wearable Comfort');
  const [likesState, setLikesState] = useState<Record<string, number>>({
    'rev-1': 6,
    'rev-2': 6,
    'rev-3': 12,
  });

  const handleLike = (id: string) => {
    setLikesState((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-20 overflow-y-auto no-scrollbar select-none relative">
      {/* Top Navigation Bar with Coral gradient */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-3.5 pt-3 pb-3 text-white">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Sub-tabs */}
          <div className="flex items-center gap-3 text-xs">
            {(['Parameter', 'Review', 'Store', 'AI Fitting'] as const).map((tab) => {
              const isActive = activeTopTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTopTab(tab);
                    onSelectTab(tab);
                  }}
                  className={`transition-all ${
                    isActive
                      ? 'font-black text-white text-sm border-b-2 border-white pb-0.5'
                      : 'text-white/80 font-medium hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 text-white">
            <button aria-label="Share" className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full">
              <Share2 className="w-4 h-4" />
            </button>
            <button aria-label="More" className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Reviews Sheet */}
      <div className="flex-1 bg-white rounded-t-[32px] -mt-2 p-4 flex flex-col shadow-lg">
        {/* Title Row */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-black text-neutral-900 tracking-tight font-sans">
              Review&amp;Ratings
            </h2>
            <span className="text-xs font-semibold text-neutral-400 font-mono">397</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Satisfaction */}
        <span className="text-xs font-bold text-[#FF5072] mt-0.5">
          96% <span className="font-medium text-neutral-500">Satisfaction Rate</span>
        </span>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 mt-3 pb-2 border-b border-neutral-100 overflow-x-auto no-scrollbar">
          {['Wearable Comfort', 'Stylish Design', 'High-quality Texture'].map((tag) => {
            const isSelected = activeFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#FFE4E9] text-[#FF5072] border border-rose-200'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Review Cards List */}
        <div className="flex flex-col divide-y divide-neutral-100 mt-2">
          {REVIEWS_DATA.map((rev) => (
            <div key={rev.id} className="py-4 flex flex-col gap-2.5">
              {/* User + Stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={rev.avatar}
                    alt={rev.user}
                    className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block leading-tight">
                      {rev.user}
                    </span>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < rev.rating
                              ? 'fill-[#FF5072] text-[#FF5072]'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-neutral-400">{rev.time}</span>
              </div>

              {/* Review Text */}
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                {rev.text}
              </p>

              {/* Photos */}
              <div className="grid grid-cols-3 gap-2 mt-1">
                {rev.photos.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-100"
                  >
                    <img
                      src={imgSrc}
                      alt="User uploaded review asset"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Actions: Time, Likes, Comments */}
              <div className="flex items-center justify-between text-neutral-400 text-xs pt-1">
                <span className="text-[10px]">{rev.time}</span>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(rev.id)}
                    className="flex items-center gap-1 hover:text-[#FF5072] transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">{likesState[rev.id]}</span>
                  </button>

                  <button className="flex items-center gap-1 hover:text-neutral-700 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">{rev.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="sticky bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-neutral-100 flex items-center gap-2.5">
        <button
          onClick={onBuyNow}
          className="flex-1 py-3 px-4 rounded-full bg-[#202938] hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Buy</span>
        </button>

        <button
          onClick={onAddToCart}
          className="flex-1 py-3 px-4 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/25 active:scale-95 transition-all"
        >
          <span>Add To Bag +</span>
        </button>
      </div>
    </div>
  );
};
