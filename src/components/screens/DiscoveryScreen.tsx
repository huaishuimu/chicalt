import React, { useState } from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { DISCOVERY_POSTS } from '../../data/mockData';

interface DiscoveryScreenProps {
  onBack: () => void;
  onSelectPost?: (postId: string) => void;
}

export const DiscoveryScreen: React.FC<DiscoveryScreenProps> = ({ onBack }) => {
  const [toggleMode, setToggleMode] = useState<'Discovery' | 'Nearby'>('Discovery');
  const [activeTag, setActiveTag] = useState('#OOTD');

  const tags = ['#OOTD', '#Workwear', '#BeachVibe'];

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Header with Gradient */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-3.5 pt-3 pb-3 text-white">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Discovery | Nearby Segmented Pill Toggle */}
          <div className="bg-black/15 p-1 rounded-full flex items-center gap-1 backdrop-blur-xs">
            <button
              onClick={() => setToggleMode('Discovery')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                toggleMode === 'Discovery'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Discovery
            </button>
            <button
              onClick={() => setToggleMode('Nearby')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                toggleMode === 'Nearby'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Nearby
            </button>
          </div>

          <div className="w-8" />
        </div>

        {/* Hashtags Chips */}
        <div className="flex items-center gap-2 px-1 pb-1 overflow-x-auto no-scrollbar">
          {tags.map((tag) => {
            const isSelected = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white/30 text-white border border-white/40'
                    : 'bg-white/15 text-white/80 hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Waterfall Feed Container */}
      <div className="flex-1 px-3 pt-3">
        <div className="grid grid-cols-2 gap-2.5 pb-6">
          {DISCOVERY_POSTS.map((post) => (
            <div
              key={post.id}
              className="relative rounded-2xl overflow-hidden bg-white shadow-xs border border-rose-100/50 group cursor-pointer active:scale-98 transition-all aspect-[3/4]"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Video view count badge if present */}
              {post.views && (
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-white stroke-none" />
                  <span>{post.views}</span>
                </div>
              )}

              {/* Scrim Overlay with Creator and Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2.5 text-white">
                <div className="flex items-center gap-1.5 mb-1">
                  <img
                    src={post.avatar}
                    alt={post.creator}
                    className="w-5 h-5 rounded-full object-cover border border-white/60"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[11px] font-bold text-white/95 truncate">
                    {post.creator}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-white/90 line-clamp-1 leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
