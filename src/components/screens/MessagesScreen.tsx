import React from 'react';
import { Search, User, Plus } from 'lucide-react';
import { MESSAGES_BRANDS, MESSAGES_THREADS } from '../../data/mockData';

interface MessagesScreenProps {
  onBack?: () => void;
  onOpenThread?: (brandName: string) => void;
}

export const MessagesScreen: React.FC<MessagesScreenProps> = ({ onOpenThread }) => {
  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Gradient Header with Brands Avatar row */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-6 text-white">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-black tracking-tight text-white font-sans">
            Message
          </h1>

          <div className="flex items-center gap-2 text-white">
            <button aria-label="Search" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
              <Search className="w-4 h-4" />
            </button>
            <button aria-label="Contacts" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
              <User className="w-4 h-4" />
            </button>
            <button aria-label="Add" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
              <Plus className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Brand Circular Avatars Row */}
        <div className="flex items-center justify-between px-2 pt-1">
          {MESSAGES_BRANDS.map((brand) => (
            <div
              key={brand.name}
              onClick={() => onOpenThread?.(brand.name)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-13 h-13 rounded-full bg-white text-neutral-900 flex items-center justify-center font-extrabold text-base shadow-sm border border-white/60 group-hover:scale-105 transition-transform">
                  <span style={{ color: brand.color }}>{brand.logo}</span>
                </div>
                {/* Red unread notification dot */}
                {brand.unread > 0 && (
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#FF2E56] border-2 border-white" />
                )}
              </div>
              <span className="text-[11px] font-bold text-white tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Messages List */}
      <div className="flex-1 bg-white rounded-t-[32px] -mt-2 px-4 pt-4 flex flex-col shadow-sm divide-y divide-neutral-100">
        {MESSAGES_THREADS.map((thread) => (
          <div
            key={thread.id}
            onClick={() => onOpenThread?.(thread.brand)}
            className="py-3.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/80 rounded-2xl px-2 transition-colors"
          >
            <div className="flex items-center gap-3">
              {/* Brand Logo with badge */}
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-bold text-sm">
                  <span style={{ color: thread.color }}>{thread.logo}</span>
                </div>
                {thread.unread > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-4 rounded-full bg-[#FF2E56] text-white text-[9px] font-extrabold px-1 flex items-center justify-center border border-white">
                    {thread.unread}
                  </span>
                )}
              </div>

              {/* Thread Info */}
              <div>
                <h3 className="text-xs font-black text-neutral-900 leading-tight">
                  {thread.brand}
                </h3>
                <p className="text-[11px] text-neutral-500 font-medium mt-0.5 line-clamp-1">
                  {thread.preview}
                </p>
              </div>
            </div>

            <span className="text-[10px] font-semibold text-neutral-400 shrink-0">
              {thread.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
