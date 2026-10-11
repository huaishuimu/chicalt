import React, { useState } from 'react';
import { Search, Edit3 } from 'lucide-react';
import { CART_INITIAL_ITEMS } from '../../data/mockData';

interface CartScreenProps {
  onProceedToCheckout: () => void;
  onItemCountChange?: (count: number) => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  onProceedToCheckout,
  onItemCountChange,
}) => {
  const [cartItems, setCartItems] = useState(CART_INITIAL_ITEMS);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      const next = prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
      const totalCount = next.reduce((acc, curr) => acc + curr.quantity, 0);
      onItemCountChange?.(totalCount);
      return next;
    });
  };

  const handleCancelItem = (id: string) => {
    setCartItems((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...item, quantity: 0 } : item));
      const totalCount = next.reduce((acc, curr) => acc + curr.quantity, 0);
      onItemCountChange?.(totalCount);
      return next;
    });
  };

  const totalItemCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none">
      {/* Top Header with Gradient */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white font-sans">
              Cart Order
            </h1>
            <p className="text-xs font-semibold text-white/80 mt-0.5">
              Total {totalItemCount || 5} items
            </p>
          </div>

          <div className="flex items-center gap-2 text-white">
            <button aria-label="Search" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
              <Search className="w-4 h-4" />
            </button>
            <button aria-label="Edit" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="px-3.5 pt-3 flex flex-col gap-2.5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-3 shadow-xs border border-rose-100/60 flex items-center justify-between gap-3"
          >
            {/* Product Image */}
            <div className="w-18 h-18 rounded-2xl bg-neutral-100 overflow-hidden shrink-0 border border-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-black text-neutral-900 truncate">{item.title}</h3>
              <p className="text-[10px] text-neutral-400 truncate mt-0.5">{item.desc}</p>
              <span className="text-xs font-black text-neutral-900 mt-1 block">
                ${item.price.toFixed(2)}
              </span>
            </div>

            {/* Actions: Cancel & Stepper */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              <button
                onClick={() => handleCancelItem(item.id)}
                className="px-2.5 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[10px] font-semibold text-neutral-600 transition-colors"
              >
                Cancel
              </button>

              {/* Quantity Stepper */}
              <div className="flex items-center rounded-full bg-[#FFE4E9] text-[#FF5072] text-xs font-bold px-1 py-0.5">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors"
                >
                  -
                </button>
                <span className="w-4 text-center font-mono text-[11px] font-extrabold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Order Summary Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-rose-100 flex flex-col gap-2 mt-2">
          <h2 className="text-sm font-black text-neutral-900 tracking-tight pb-1 border-b border-neutral-100">
            Order Summary
          </h2>

          <div className="flex items-center justify-between text-xs py-0.5">
            <span className="text-neutral-500 font-medium">Align™ High-Rise Pant 25&quot;</span>
            <span className="font-bold text-neutral-900 font-mono">$350.00</span>
          </div>

          <div className="flex items-center justify-between text-xs py-0.5">
            <span className="text-neutral-500 font-medium">Boy Brow + Cloud Paint Duo</span>
            <span className="font-extrabold text-[#FF5072] uppercase text-[10px]">FREE</span>
          </div>

          <div className="flex items-center justify-between text-xs py-0.5">
            <span className="text-neutral-500 font-medium">The Diamond Necklace</span>
            <span className="font-bold text-neutral-900 font-mono">$350.00</span>
          </div>

          <div className="border-t border-neutral-100 pt-2 mt-1 flex items-baseline justify-between">
            <span className="text-sm font-black text-neutral-900">Total</span>
            <span className="text-xl font-black text-neutral-900 font-mono tracking-tight">
              $566.12
            </span>
          </div>

          <button
            onClick={onProceedToCheckout}
            className="w-full mt-3 py-4 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-rose-500/30 active:scale-98 transition-all"
          >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
};
