import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { ONBOARDING_IMAGE } from '../../data/mockData';

interface OnboardingScreenProps {
  onContinue: () => void;
  onSkip: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onContinue, onSkip }) => {
  return (
    <div className="relative flex-1 w-full bg-[#FFF5F6] flex flex-col justify-between overflow-y-auto no-scrollbar select-none">
      {/* Top Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#FF5E7C] via-[#FFA8B8] to-transparent pointer-events-none" />

      {/* Main Editorial Hero Photo & Typography */}
      <div className="relative w-full pt-4 px-4 flex flex-col items-center">
        <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl mt-2 group">
          <img
            src={ONBOARDING_IMAGE}
            alt="Spring 24 Collection"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 flex flex-col justify-between p-6 text-white text-center">
            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/85">
                SPRING &apos;24 COLLECTION
              </span>
            </div>

            <div className="flex flex-col items-center pb-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans leading-tight max-w-[280px]">
                The Art of <br /> Modern Fluidity
              </h2>

              <button
                onClick={onContinue}
                className="mt-6 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF5B7A] hover:bg-[#FF4568] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-500/30 active:scale-95 transition-all"
              >
                <span>EXPLORE NOW</span>
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Card */}
      <div className="w-full bg-white rounded-t-[36px] p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-rose-100/60 mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#FF5B7A]" />
            <span className="text-[11px] font-extrabold tracking-wider text-[#FF5B7A] uppercase">
              OUR PHILOSOPHY
            </span>
          </div>

          <button
            onClick={onSkip}
            className="flex items-center text-xs font-semibold text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            <span>SKIP</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xl sm:text-2xl font-bold leading-relaxed text-neutral-900 font-sans tracking-tight">
          Where high-fashion pulse meets the effortless grace of the digital era.{' '}
          <span className="text-[#FF5B7A]">ChicAlt</span> isn&apos;t just a label; it&apos;s a curated ecosystem.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onContinue}
            className="px-6 py-3 rounded-2xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2"
          >
            <span>Enter App</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
