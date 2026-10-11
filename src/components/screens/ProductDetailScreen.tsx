import React, { useState } from 'react';
import {
  ChevronLeft,
  Heart,
  Share2,
  MoreHorizontal,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ShoppingBag,
  Star,
} from 'lucide-react';
import { NIXON_WATCH_IMAGE, WATCH_PRODUCT, REVIEWS_DATA } from '../../data/mockData';

interface ProductDetailScreenProps {
  onBack: () => void;
  onOpenReviews: () => void;
  onOpenFitting: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  onBack,
  onOpenReviews,
  onOpenFitting,
  onAddToCart,
  onBuyNow,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [activePhotoIdx] = useState(0);

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none relative">
      {/* Top Floating App Bar */}
      <div className="sticky top-0 z-30 px-3.5 py-2.5 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 transition-colors shadow-xs"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-2 text-neutral-700">
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            aria-label="Favorite"
            className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorited ? 'fill-[#FF5072] text-[#FF5072]' : 'text-neutral-700'
              }`}
            />
          </button>
          <button 
            aria-label="Share"
            className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <Share2 className="w-4 h-4 text-neutral-700" />
          </button>
          <button 
            aria-label="More"
            className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <MoreHorizontal className="w-5 h-5 text-neutral-700" />
          </button>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="relative w-full aspect-square bg-[#FFF0F3] overflow-hidden">
        <img
          src={NIXON_WATCH_IMAGE}
          alt={WATCH_PRODUCT.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                idx === activePhotoIdx ? 'w-4 bg-[#FF5072]' : 'w-1.5 bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Info Box */}
      <div className="px-4 pt-4 pb-2 bg-white flex flex-col gap-2">
        {/* Price & Subsidy */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-neutral-900 tracking-tight font-sans">
            $ {WATCH_PRODUCT.price}
          </span>
        </div>

        <button className="flex items-center gap-1 text-xs font-semibold text-[#FF5072] hover:underline self-start">
          <span>Limited-Time Subsidy: ${WATCH_PRODUCT.subsidy}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Title */}
        <h1 className="text-sm font-bold text-neutral-900 leading-snug">
          {WATCH_PRODUCT.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs text-[#FF5072] font-bold">
          <Star className="w-3.5 h-3.5 fill-[#FF5072] stroke-none" />
          <span>{WATCH_PRODUCT.rating}</span>
        </div>
      </div>

      {/* Pink Guarantee Banner */}
      <div className="mx-3.5 mt-2.5 px-3 py-2 rounded-xl bg-[#FFE4E9] border border-rose-200/60 flex items-center gap-2 text-[10px] font-bold text-[#FF3358]">
        <ShieldCheck className="w-4 h-4 shrink-0" />
        <span className="truncate">{WATCH_PRODUCT.badge}</span>
      </div>

      {/* AI Curator Callout */}
      <div className="mx-3.5 mt-2.5 p-3 rounded-2xl bg-gradient-to-r from-[#FFF5F6] to-white border border-rose-100 flex items-start gap-2.5 shadow-2xs">
        <div className="w-7 h-7 rounded-full bg-[#FF5072]/15 text-[#FF5072] flex items-center justify-center shrink-0 mt-0.5">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <p className="text-[11px] leading-relaxed text-neutral-600 font-medium">
          {WATCH_PRODUCT.aiInsight}
        </p>
      </div>

      {/* Parameters Grid */}
      <div className="mx-3.5 mt-3 p-3.5 rounded-2xl bg-white border border-neutral-100 shadow-2xs">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          {WATCH_PRODUCT.specs.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between py-1 border-b border-neutral-50">
              <span className="text-neutral-400 font-medium uppercase text-[10px]">{spec.label}</span>
              <span className="text-neutral-800 font-semibold text-[11px]">{spec.value}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-2.5 flex items-center justify-center gap-1 text-[11px] font-bold text-neutral-400 hover:text-neutral-700">
          <span>View All Parameters</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* AI Stylist Picks Section */}
      <div className="mx-3.5 mt-3 p-4 rounded-3xl bg-white border border-rose-100 shadow-xs flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-neutral-900 tracking-tight">AI Stylist Picks</h3>
          <span className="px-2 py-0.5 rounded-full bg-[#FFE4E9] text-[#FF5072] text-[10px] font-extrabold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{WATCH_PRODUCT.aiStylist.match}</span>
          </span>
        </div>

        <div className="flex gap-3 items-center">
          {/* Virtual Try-On AR Thumbnail */}
          <div
            onClick={onOpenFitting}
            className="w-28 h-32 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 p-2 flex flex-col justify-between text-white shrink-0 cursor-pointer shadow-md group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors" />
            <span className="text-[9px] font-semibold text-rose-300 z-10 uppercase">
              Instant AI Fitting
            </span>
            <div className="my-auto text-center z-10">
              <span className="text-xs font-bold block text-white/90">98% Compatibility</span>
              <span className="text-[9px] text-neutral-400">Loading...</span>
            </div>
            <span className="text-[8px] bg-white/20 rounded-md py-0.5 text-center font-bold z-10">
              Tap to Scan
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between h-32 py-0.5">
            <div>
              <h4 className="text-xs font-black text-neutral-900 leading-snug">
                {WATCH_PRODUCT.aiStylist.title}
              </h4>
              <p className="text-[10px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                {WATCH_PRODUCT.aiStylist.vibe}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <button
                onClick={onBuyNow}
                className="w-full py-1.5 rounded-xl bg-[#FF5072] hover:bg-[#FF3C62] text-white text-[11px] font-bold shadow-xs active:scale-95 transition-all"
              >
                Buy Now
              </button>
              <button
                onClick={onOpenFitting}
                className="w-full py-1.5 rounded-xl bg-white border border-rose-200 text-[#FF5072] hover:bg-rose-50 text-[11px] font-bold active:scale-95 transition-all"
              >
                Try it on
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section Preview */}
      <div
        onClick={onOpenReviews}
        className="mx-3.5 mt-3 p-4 rounded-3xl bg-white border border-neutral-100 shadow-xs cursor-pointer hover:border-rose-200 transition-all"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-black text-neutral-900 tracking-tight">Review</h3>
            <span className="text-[10px] text-neutral-400 font-medium">
              {WATCH_PRODUCT.reviewsSatisfaction}
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-400" />
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 mb-3 overflow-x-auto no-scrollbar">
          {['Wearable Comfort', 'Stylish Design', 'High-quality'].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-[#FFF0F2] text-[#FF5072] text-[10px] font-semibold whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* First Review Preview */}
        {REVIEWS_DATA[0] && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img
                src={REVIEWS_DATA[0].avatar}
                alt={REVIEWS_DATA[0].user}
                className="w-6 h-6 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-bold text-neutral-800">{REVIEWS_DATA[0].user}</span>
            </div>
            <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
              &quot;{REVIEWS_DATA[0].text}&quot;
            </p>
            <div className="flex gap-2 mt-1">
              {REVIEWS_DATA[0].photos.slice(0, 3).map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt="Review photo"
                  className="w-16 h-16 rounded-xl object-cover border border-neutral-100"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-neutral-100 flex items-center gap-2.5">
        <button
          onClick={onBuyNow}
          className="flex-1 py-3.5 px-4 rounded-full bg-[#202938] hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Buy</span>
        </button>

        <button
          onClick={onAddToCart}
          className="flex-1 py-3.5 px-4 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/25 active:scale-95 transition-all"
        >
          <span>Add To Bag +</span>
        </button>
      </div>
    </div>
  );
};
