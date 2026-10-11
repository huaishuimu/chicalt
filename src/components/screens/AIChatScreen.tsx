import React, { useState } from 'react';
import {
  ChevronLeft,
  RotateCcw,
  Heart,
  Box,
  Send,
  User,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import { CHICHI_AVATAR } from '../../data/mockData';

interface AIChatScreenProps {
  onBack: () => void;
  onOpenVirtualTryOn: () => void;
  onAddToCart: (title: string, price: number) => void;
}

interface ChatMessage {
  id: string;
  sender: 'chichi' | 'user';
  text?: string;
  type?: 'initial' | 'products' | 'text';
}

export const AIChatScreen: React.FC<AIChatScreenProps> = ({
  onBack,
  onOpenVirtualTryOn,
  onAddToCart,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'chichi',
      type: 'initial',
      text: "Hey! Try this look for Friday night? I've curated some pieces that match your vibe.",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestionChips = [
    'Can you style a few more looks?',
    'Show me more like this?',
    'Find me some better deals.',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      type: 'text',
      text: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'chichi',
        type: 'text',
        text: `I love that idea! Based on your Hourglass frame and minimalist preference, I've matched an effortless silk blazer pairing that radiates quiet luxury. Check out the 3D fitting preview above!`,
      };
      setMessages((prev) => [...prev, replyMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex-1 w-full bg-[#FFF5F6] flex flex-col pb-24 overflow-y-auto no-scrollbar select-none relative">
      {/* Top Header with Chichi Planet Mascot */}
      <div className="w-full bg-gradient-to-b from-[#FF5072] to-[#FF708C] px-4 pt-3 pb-8 text-white relative flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* 3D Chichi Orbit Mascot in Header */}
        <div className="flex flex-col items-center -mt-2">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Glowing Saturn Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-white/70 scale-y-50 rotate-[-20deg] pointer-events-none" />
            <img
              src={CHICHI_AVATAR}
              alt="Chichi Avatar"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>

          <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/80 mt-1">
            YOUR SOCIAL CURATOR
          </span>
          <h1 className="text-xl font-black text-white tracking-tight mt-0.5">Chichi</h1>
        </div>
      </div>

      {/* Main Chat Stream Container */}
      <div className="flex-1 -mt-4 bg-[#FFF9FA] rounded-t-[32px] px-3.5 pt-4 flex flex-col gap-4 shadow-md">
        {/* Chichi Initial Curated Look */}
        <div className="flex items-start gap-2.5">
          <img
            src={CHICHI_AVATAR}
            alt="Chichi"
            className="w-7 h-7 rounded-full object-cover shrink-0 mt-1 border border-rose-200"
            referrerPolicy="no-referrer"
          />

          <div className="flex-1 flex flex-col gap-3">
            {/* Speech bubble */}
            <div className="bg-white rounded-3xl rounded-tl-sm px-4 py-3 shadow-xs border border-rose-100 max-w-[92%]">
              <p className="text-xs font-semibold text-neutral-800 leading-relaxed">
                Hey! Try this look for Friday night? I&apos;ve curated some pieces that match your vibe.
              </p>
            </div>

            {/* 2 Curated Looks Photos */}
            <div className="grid grid-cols-2 gap-2 max-w-[95%]">
              {/* Yellow dress look */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-amber-50 border border-amber-100 group shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
                  alt="Friday night look 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <button 
                  aria-label="Favorite outfit"
                  className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-rose-500 shadow-xs active:scale-90"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#FF5072]" />
                </button>
              </div>

              {/* Black knit outfit */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 group shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
                  alt="Friday night look 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <button 
                  aria-label="Favorite look"
                  className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-neutral-400 hover:text-rose-500 shadow-xs active:scale-90"
                >
                  <Heart className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Replay and heart micro icons */}
            <div className="flex items-center justify-end gap-3 px-2 text-neutral-400">
              <RotateCcw className="w-3.5 h-3.5 hover:text-neutral-700 cursor-pointer" />
              <Heart className="w-3.5 h-3.5 hover:text-[#FF5072] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* 3D AR Try-On Banner Card (Matching Screenshot exactly) */}
        <div className="flex items-start gap-2.5">
          <img
            src={CHICHI_AVATAR}
            alt="Chichi"
            className="w-7 h-7 rounded-full object-cover shrink-0 mt-1 border border-rose-200"
            referrerPolicy="no-referrer"
          />

          <div className="flex-1 bg-gradient-to-b from-[#2E2833] via-[#241F28] to-[#1C1720] rounded-[28px] p-5 text-white shadow-lg border border-neutral-700/60 flex flex-col items-center text-center">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-extrabold flex items-center gap-1.5 uppercase tracking-wider mb-2">
              <Box className="w-3 h-3" />
              <span>INSTANT AI FIT</span>
            </span>

            <h3 className="text-xl font-black text-white tracking-tight leading-tight mt-1">
              Try on both looks in <br /> 3D!
            </h3>

            <p className="text-[11px] text-neutral-300 mt-2 max-w-[200px] leading-relaxed">
              Point your camera at a surface to begin your virtual fitting session.
            </p>

            <button
              onClick={onOpenVirtualTryOn}
              className="mt-4 w-full py-3.5 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-rose-500/30 active:scale-98 transition-all"
            >
              TAP TO VIRTUAL TRY-ON
            </button>
          </div>
        </div>

        {/* Chichi Curated Purchase Cards (Sunset Pleat Dress & Urban Rib Knit) */}
        <div className="flex items-start gap-2.5">
          <img
            src={CHICHI_AVATAR}
            alt="Chichi"
            className="w-7 h-7 rounded-full object-cover shrink-0 mt-1 border border-rose-200"
            referrerPolicy="no-referrer"
          />

          <div className="flex-1 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2.5">
              {/* Product 1: SUNSET PLEAT DRESS */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-rose-100 flex flex-col">
                <div className="h-32 bg-neutral-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80"
                    alt="Sunset Pleat Dress"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2.5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-extrabold text-[#FF5072] uppercase tracking-wider">
                      BEST SELLER
                    </span>
                    <h4 className="text-[11px] font-black text-neutral-900 line-clamp-2 mt-0.5 leading-tight">
                      SUNSET PLEAT DRESS
                    </h4>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-xs font-black text-neutral-900">$189</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-600 font-semibold">
                      Size: M
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart('SUNSET PLEAT DRESS', 189)}
                    className="w-full mt-2 py-2 rounded-xl bg-[#FF5072] text-white text-[10px] font-bold shadow-xs active:scale-95 transition-all"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>

              {/* Product 2: URBAN RIB KNIT SET */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-rose-100 flex flex-col">
                <div className="h-32 bg-neutral-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80"
                    alt="Urban Rib Knit Set"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2.5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-extrabold text-[#FF5072] uppercase tracking-wider">
                      AI CHOICE
                    </span>
                    <h4 className="text-[11px] font-black text-neutral-900 line-clamp-2 mt-0.5 leading-tight">
                      URBAN RIB KNIT SET
                    </h4>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-xs font-black text-neutral-900">$245</span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-600 font-semibold">
                      Size: S
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart('URBAN RIB KNIT SET', 245)}
                    className="w-full mt-2 py-2 rounded-xl bg-[#FF5072] text-white text-[10px] font-bold shadow-xs active:scale-95 transition-all"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-2 text-neutral-400">
              <RotateCcw className="w-3.5 h-3.5 hover:text-neutral-700 cursor-pointer" />
              <Heart className="w-3.5 h-3.5 hover:text-[#FF5072] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Dynamic chat messages if user replies */}
        {messages.slice(1).map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'chichi' && (
              <img
                src={CHICHI_AVATAR}
                alt="Chichi"
                className="w-7 h-7 rounded-full object-cover shrink-0 mt-1"
                referrerPolicy="no-referrer"
              />
            )}
            <div
              className={`rounded-2xl px-4 py-2.5 text-xs font-medium max-w-[80%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#FF5072] text-white rounded-tr-xs'
                  : 'bg-white text-neutral-800 border border-rose-100 shadow-xs rounded-tl-xs'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-neutral-400 text-xs pl-9">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5072] animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5072] animate-bounce delay-100" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5072] animate-bounce delay-200" />
            <span className="text-[10px] font-medium">Chichi is styling...</span>
          </div>
        )}

        {/* Suggestion Chips */}
        <div className="flex flex-col gap-1.5 items-start pl-8 pt-2">
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleSend(chip)}
              className="px-3 py-1.5 rounded-full bg-white border border-rose-100 text-neutral-700 text-[11px] font-semibold hover:border-rose-300 hover:text-[#FF5072] active:scale-95 transition-all shadow-2xs"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Tool Action Pills Row */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto no-scrollbar">
          <button
            onClick={onOpenVirtualTryOn}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-rose-100 text-neutral-700 text-[10px] font-bold whitespace-nowrap shadow-2xs hover:bg-rose-50"
          >
            <User className="w-3 h-3 text-[#FF5072]" />
            <span>Virtual Try-on</span>
          </button>
          <button
            onClick={() => handleSend('Give me style advice for my body type')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-rose-100 text-neutral-700 text-[10px] font-bold whitespace-nowrap shadow-2xs hover:bg-rose-50"
          >
            <Lightbulb className="w-3 h-3 text-[#FF5072]" />
            <span>Style Advice</span>
          </button>
          <button
            onClick={() => handleSend('Explain style wisdom and matching rules')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-rose-100 text-neutral-700 text-[10px] font-bold whitespace-nowrap shadow-2xs hover:bg-rose-50"
          >
            <BookOpen className="w-3 h-3 text-[#FF5072]" />
            <span>Style Wisdom</span>
          </button>
        </div>

        {/* Bottom Input Pill */}
        <div className="mt-1 flex items-center bg-[#2B3441] rounded-full p-1.5 pl-4 shadow-lg border border-neutral-700">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Ask ChiChi anything..."
            className="flex-1 bg-transparent text-xs text-white placeholder-neutral-400 focus:outline-none"
          />
          <button
            onClick={() => handleSend()}
            aria-label="Send message"
            className="w-9 h-9 rounded-full bg-[#FF5072] hover:bg-[#FF3C62] text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
          >
            <Send className="w-4 h-4 fill-white stroke-none" />
          </button>
        </div>
      </div>
    </div>
  );
};
