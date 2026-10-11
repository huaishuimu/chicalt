import React from 'react';
import { Home, Store, MessageCircle, ShoppingCart, Smile } from 'lucide-react';

export type TabType = 'home' | 'discovery' | 'chichi' | 'cart' | 'profile';

interface BottomTabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  cartCount?: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onTabChange,
  cartCount = 5,
}) => {
  return (
    <nav 
      aria-label="Main navigation" 
      className="sticky bottom-2 left-0 right-0 z-40 px-3 py-1 pointer-events-auto"
    >
      <div className="mx-auto max-w-[370px] bg-[#222B35] rounded-full px-2.5 py-1.5 flex items-center justify-between shadow-[0_12px_30px_rgba(0,0,0,0.35)] border border-neutral-700/40">
        {/* Tab 1: Home */}
        {activeTab === 'home' ? (
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center gap-1.5 bg-[#FF637D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-rose-500/30 transition-transform active:scale-95"
          >
            <Home className="w-4 h-4 fill-white stroke-none" />
            <span className="tracking-wide text-[11px]">HOME</span>
          </button>
        ) : (
          <button
            onClick={() => onTabChange('home')}
            aria-label="Home"
            className="p-2 text-neutral-300 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5 stroke-[2]" />
          </button>
        )}

        {/* Tab 2: Discovery / Store */}
        {activeTab === 'discovery' ? (
          <button
            onClick={() => onTabChange('discovery')}
            className="flex items-center gap-1.5 bg-[#FF637D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-rose-500/30 transition-transform active:scale-95"
          >
            <Store className="w-4 h-4 fill-white stroke-none" />
            <span className="tracking-wide text-[11px]">DISCOVER</span>
          </button>
        ) : (
          <button
            onClick={() => onTabChange('discovery')}
            aria-label="Discovery"
            className="p-2 text-neutral-300 hover:text-white transition-colors"
          >
            <Store className="w-5 h-5 stroke-[2]" />
          </button>
        )}

        {/* Tab 3: Chichi AI Chat / Message */}
        {activeTab === 'chichi' ? (
          <button
            onClick={() => onTabChange('chichi')}
            className="flex items-center gap-1.5 bg-[#FF637D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-rose-500/30 transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span className="tracking-wide text-[11px]">CHICHI</span>
          </button>
        ) : (
          <button
            onClick={() => onTabChange('chichi')}
            aria-label="Chichi AI Assistant"
            className="p-2 text-neutral-300 hover:text-white transition-colors relative"
          >
            <MessageCircle className="w-5 h-5 stroke-[2]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          </button>
        )}

        {/* Tab 4: Cart */}
        {activeTab === 'cart' ? (
          <button
            onClick={() => onTabChange('cart')}
            className="flex items-center gap-1.5 bg-[#FF637D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-rose-500/30 transition-transform active:scale-95"
          >
            <ShoppingCart className="w-4 h-4 fill-white stroke-none" />
            <span className="tracking-wide text-[11px]">CART</span>
          </button>
        ) : (
          <button
            onClick={() => onTabChange('cart')}
            aria-label="Shopping Cart"
            className="p-2 text-neutral-300 hover:text-white transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FF637D] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        )}

        {/* Tab 5: Profile */}
        {activeTab === 'profile' ? (
          <button
            onClick={() => onTabChange('profile')}
            className="flex items-center gap-1.5 bg-[#FF637D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-rose-500/30 transition-transform active:scale-95"
          >
            <Smile className="w-4 h-4 fill-white stroke-none" />
            <span className="tracking-wide text-[11px]">Profile</span>
          </button>
        ) : (
          <button
            onClick={() => onTabChange('profile')}
            aria-label="User Profile"
            className="p-2 text-neutral-300 hover:text-white transition-colors"
          >
            <Smile className="w-5 h-5 stroke-[2]" />
          </button>
        )}
      </div>
    </nav>
  );
};
