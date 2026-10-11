import React, { useState } from 'react';
import {
  Instagram,
  ChevronRight,
  Shirt,
  Heart,
  Glasses,
  Wallet,
  Package,
  Truck,
  RotateCcw,
  Crown,
  Ticket,
} from 'lucide-react';
import { SLOANE_AVATAR } from '../../data/mockData';

interface ProfileScreenProps {
  onOpenFitting: () => void;
  onOpenOrders?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onOpenFitting }) => {
  const [activeTab, setActiveTab] = useState<'My Fits' | 'Collections'>('My Fits');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [bioName, setBioName] = useState('Sloane Bennett');

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Gradient Header with Avatar and Bio */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-8 text-white flex flex-col items-center">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-white shadow-lg mt-1">
          <img
            src={SLOANE_AVATAR}
            alt="Sloane Bennett"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Name & Bio */}
        <h1 className="text-2xl font-black tracking-tight text-white mt-3 font-sans">
          {bioName}
        </h1>
        <p className="text-xs text-white/90 text-center max-w-[260px] leading-relaxed mt-1 font-medium">
          Digital Curator &amp; Style Alchemist. Building the future of virtual fashion.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-3">
          <a
            href="#instagram"
            aria-label="Instagram profile"
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xs flex items-center justify-center text-white transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="#tiktok"
            aria-label="TikTok profile"
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xs flex items-center justify-center text-white transition-colors font-bold text-xs"
          >
            ♪
          </a>
        </div>

        {/* Style Tag Chips */}
        <div className="flex items-center gap-2 mt-3">
          {['LA', 'Minimalist', 'Streetwear'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Profile Content Body */}
      <div className="flex-1 bg-white rounded-t-[36px] -mt-4 px-4 pt-5 flex flex-col gap-4 shadow-sm">
        {/* Followers / Following / Fits Created Stats */}
        <div className="grid grid-cols-3 divide-x divide-neutral-100 text-center py-1">
          <div>
            <span className="text-base font-black text-[#FF5072] font-mono block">12.4k</span>
            <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider">
              FOLLOWERS
            </span>
          </div>
          <div>
            <span className="text-base font-black text-neutral-900 font-mono block">1,248</span>
            <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider">
              FOLLOWING
            </span>
          </div>
          <div>
            <span className="text-base font-black text-neutral-900 font-mono block">84</span>
            <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-wider">
              FITS CREATED
            </span>
          </div>
        </div>

        {/* Edit Profile CTA Button */}
        <button
          onClick={() => setIsEditingProfile(!isEditingProfile)}
          className="w-full py-3 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-rose-500/25 active:scale-98 transition-all"
        >
          {isEditingProfile ? 'Save Profile' : 'Edit Profile'}
        </button>

        {isEditingProfile && (
          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col gap-2 animate-in fade-in">
            <label className="text-[10px] font-bold text-rose-800">Display Name</label>
            <input
              type="text"
              value={bioName}
              onChange={(e) => setBioName(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white border border-rose-200 text-xs font-semibold text-neutral-800"
            />
          </div>
        )}

        {/* Quick Actions (AI FITTING / WISHLIST / HEADLINE) */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* AI FITTING */}
          <button
            onClick={onOpenFitting}
            className="p-3 rounded-3xl bg-[#FFF5F6] border border-rose-100/60 flex flex-col items-center gap-1.5 hover:bg-rose-100/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-white text-[#FF5072] flex items-center justify-center shadow-2xs group-hover:scale-105">
              <Shirt className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold text-neutral-800 tracking-wider uppercase">
              AI FITTING
            </span>
          </button>

          {/* WISHLIST */}
          <button className="p-3 rounded-3xl bg-[#FFF5F6] border border-rose-100/60 flex flex-col items-center gap-1.5 hover:bg-rose-100/50 transition-all group">
            <div className="w-10 h-10 rounded-2xl bg-white text-[#FF5072] flex items-center justify-center shadow-2xs group-hover:scale-105">
              <Heart className="w-5 h-5 fill-rose-500/10 stroke-[#FF5072]" />
            </div>
            <span className="text-[10px] font-extrabold text-neutral-800 tracking-wider uppercase">
              WISHLIST
            </span>
          </button>

          {/* HEADLINE */}
          <button className="p-3 rounded-3xl bg-[#FFF5F6] border border-rose-100/60 flex flex-col items-center gap-1.5 hover:bg-rose-100/50 transition-all group">
            <div className="w-10 h-10 rounded-2xl bg-white text-[#FF5072] flex items-center justify-center shadow-2xs group-hover:scale-105">
              <Glasses className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold text-neutral-800 tracking-wider uppercase">
              HEADLINE
            </span>
          </button>
        </div>

        {/* My Orders Card */}
        <div className="bg-white rounded-3xl p-4 border border-neutral-100 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-neutral-900 tracking-tight">My Orders</h3>
            <button className="flex items-center text-[10px] font-bold text-neutral-400 hover:text-neutral-700">
              <span>View All</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center pt-1">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-700">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-600">To Pay</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 relative">
              <div className="w-10 h-10 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-700">
                <Package className="w-5 h-5" />
              </div>
              <span className="absolute top-0 right-3 w-2 h-2 rounded-full bg-[#FF2E56]" />
              <span className="text-[10px] font-semibold text-neutral-600">To Ship</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 relative">
              <div className="w-10 h-10 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-700">
                <Truck className="w-5 h-5" />
              </div>
              <span className="absolute top-0 right-3 w-2 h-2 rounded-full bg-[#FF2E56]" />
              <span className="text-[10px] font-semibold text-neutral-600">Shipped</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-700">
                <RotateCcw className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-600">Returns</span>
            </div>
          </div>
        </div>

        {/* ChicAlt Prime VIP Banner */}
        <div className="w-full bg-[#1C1820] rounded-3xl p-3.5 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black tracking-tight text-white">ChicAlt Prime</h4>
              <p className="text-[10px] text-neutral-400">Free shipping &amp; early access</p>
            </div>
          </div>

          <button className="px-4 py-1.5 rounded-full bg-[#FF5072] text-white text-[11px] font-extrabold uppercase shadow-xs hover:bg-[#FF3C62] active:scale-95 transition-all">
            JOIN
          </button>
        </div>

        {/* Gift Cards & Vouchers */}
        <div className="bg-white rounded-3xl p-3.5 border border-neutral-100 shadow-2xs flex items-center justify-between cursor-pointer hover:border-rose-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFE4E9] text-[#FF5072] flex items-center justify-center">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-neutral-900">Gift Cards &amp; Vouchers</h4>
              <p className="text-[10px] text-neutral-400">You have 3 unused credits</p>
            </div>
          </div>

          <ChevronRight className="w-4 h-4 text-neutral-400" />
        </div>

        {/* Tabs: My Fits / Collections */}
        <div className="mt-1">
          <div className="flex items-center gap-6 border-b border-neutral-100 pb-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('My Fits')}
              className={`relative transition-colors ${
                activeTab === 'My Fits' ? 'text-neutral-900 font-extrabold' : 'text-neutral-400'
              }`}
            >
              <span>My Fits</span>
              {activeTab === 'My Fits' && (
                <span className="absolute bottom-[-9px] left-0 right-0 h-[2.5px] bg-[#FF5072] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('Collections')}
              className={`relative transition-colors ${
                activeTab === 'Collections' ? 'text-neutral-900 font-extrabold' : 'text-neutral-400'
              }`}
            >
              <span>Collections</span>
              {activeTab === 'Collections' && (
                <span className="absolute bottom-[-9px] left-0 right-0 h-[2.5px] bg-[#FF5072] rounded-full" />
              )}
            </button>
          </div>

          {/* Fits Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-3 pb-6">
            {/* Fit 1: Retro yellow look */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shadow-xs border border-neutral-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
                alt="Fit 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Fit 2: Y2K pastel top & denim mini skirt */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shadow-xs border border-neutral-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80"
                alt="Fit 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full">
                <Heart className="w-2.5 h-2.5 fill-white" />
                <span>3.2k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
