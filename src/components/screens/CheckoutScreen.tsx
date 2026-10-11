import React, { useState } from 'react';
import { ChevronLeft, MapPin, Edit2, CheckCircle2, Circle, CreditCard, ArrowRight, Check } from 'lucide-react';

interface CheckoutScreenProps {
  onBack: () => void;
  onOrderSuccess: () => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ onBack, onOrderSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card'>('apple');
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const handlePlaceOrder = () => {
    setIsSuccessModal(true);
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-20 overflow-y-auto no-scrollbar select-none relative">
      {/* Top Header with Gradient */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-6 text-white">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white font-sans">
              Checkout
            </h1>
            <p className="text-xs font-semibold text-white/80 mt-0.5">
              Finalize your curated order
            </p>
          </div>
        </div>
      </div>

      <div className="px-3.5 -mt-3 flex flex-col gap-3.5">
        {/* Shipping Address Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-rose-100 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl bg-[#FFE4E9] text-[#FF5072] flex items-center justify-center">
                <MapPin className="w-5 h-5 fill-[#FF5072]/20 stroke-[#FF5072]" />
              </div>
              <h2 className="text-sm font-black text-neutral-900 tracking-tight">Shipping Address</h2>
            </div>
            <button aria-label="Edit address" className="p-1.5 text-neutral-400 hover:text-neutral-700">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <div className="pl-11 text-xs text-neutral-600 leading-relaxed">
            <p className="font-extrabold text-neutral-900 text-sm">Alex Rivero</p>
            <p className="mt-0.5">742 Evergreen Terrace</p>
            <p>Springfield, IL 62704</p>
            <p>United States</p>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs font-extrabold text-neutral-900 px-1 uppercase tracking-wider">
            Payment Method
          </h2>

          {/* Option 1: Apple Pay */}
          <div
            onClick={() => setPaymentMethod('apple')}
            className={`bg-white rounded-3xl p-3.5 shadow-2xs border transition-all cursor-pointer flex items-center justify-between ${
              paymentMethod === 'apple'
                ? 'border-[#FF5072] ring-1 ring-[#FF5072]'
                : 'border-neutral-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-20 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs shadow-xs">
                Apple Pay
              </div>
              <div>
                <h4 className="text-xs font-black text-neutral-900">Apple Pay</h4>
                <p className="text-[10px] text-neutral-400">Fast and secure payment</p>
              </div>
            </div>

            {paymentMethod === 'apple' ? (
              <CheckCircle2 className="w-5 h-5 text-[#FF5072] fill-[#FFE4E9]" />
            ) : (
              <Circle className="w-5 h-5 text-neutral-300" />
            )}
          </div>

          {/* Option 2: Credit Card */}
          <div
            onClick={() => setPaymentMethod('card')}
            className={`bg-white rounded-3xl p-3.5 shadow-2xs border transition-all cursor-pointer flex items-center justify-between ${
              paymentMethod === 'card'
                ? 'border-[#FF5072] ring-1 ring-[#FF5072]'
                : 'border-neutral-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-neutral-900">Credit Card</h4>
                <p className="text-[10px] text-neutral-400">Visa ending in •••• 4242</p>
              </div>
            </div>

            {paymentMethod === 'card' ? (
              <CheckCircle2 className="w-5 h-5 text-[#FF5072] fill-[#FFE4E9]" />
            ) : (
              <Circle className="w-5 h-5 text-neutral-300" />
            )}
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-rose-100 flex flex-col gap-3">
          <h2 className="text-sm font-black text-neutral-900 tracking-tight pb-1 border-b border-neutral-100">
            Order Summary
          </h2>

          {/* Item 1: Signature Pink Blazer */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-13 h-13 rounded-2xl bg-[#FFE4E9] overflow-hidden p-1">
                <img
                  src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=200&q=80"
                  alt="Signature Pink Blazer"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xs font-black text-neutral-900 leading-tight">
                  Signature Pink Blazer
                </h4>
                <p className="text-[10px] text-neutral-400 mt-0.5">Size: M • Color: Rose Bloom</p>
              </div>
            </div>
            <span className="text-xs font-black text-neutral-900 font-mono">$189.00</span>
          </div>

          {/* Item 2: Minimalist Heels */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-13 h-13 rounded-2xl bg-amber-50 overflow-hidden p-1">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&q=80"
                  alt="Minimalist Heels"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xs font-black text-neutral-900 leading-tight">
                  Minimalist Heels
                </h4>
                <p className="text-[10px] text-neutral-400 mt-0.5">Size: 38 • Color: Sand</p>
              </div>
            </div>
            <span className="text-xs font-black text-neutral-900 font-mono">$120.00</span>
          </div>

          <div className="border-t border-neutral-100 pt-2 flex flex-col gap-1 text-xs">
            <div className="flex justify-between text-neutral-500">
              <span>Subtotal</span>
              <span className="font-mono font-bold text-neutral-800">$309.00</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Shipping</span>
              <span className="font-mono font-bold text-emerald-600">FREE</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Tax</span>
              <span className="font-mono font-bold text-neutral-800">$24.72</span>
            </div>
            <div className="border-t border-neutral-100 pt-2 mt-1 flex justify-between items-baseline">
              <span className="text-sm font-black text-neutral-900">Total</span>
              <span className="text-xl font-black text-[#FF5072] font-mono tracking-tight">
                $333.72
              </span>
            </div>
          </div>

          {/* Place Order CTA Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-2 py-4 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <span>Place Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 text-center max-w-xs shadow-2xl flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#FFE4E9] text-[#FF5072] flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-lg font-black text-neutral-900">Order Confirmed!</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Your curated ChicAlt order has been placed. You will receive tracking details via
              iMessage.
            </p>
            <button
              onClick={() => {
                setIsSuccessModal(false);
                onOrderSuccess();
              }}
              className="w-full py-3 mt-2 rounded-2xl bg-[#FF5072] text-white font-bold text-xs uppercase shadow-md"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
