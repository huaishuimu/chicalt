import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
  activeScreenName?: string;
  onSelectScreen?: (screen: string) => void;
  screensList: { id: string; nameZh: string; nameEn: string }[];
  currentScreenId: string;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  screensList,
  currentScreenId,
  onSelectScreen,
}) => {
  const [deviceMode, setDeviceMode] = React.useState<'mobile' | 'fill'>('mobile');
  const [showNavSheet, setShowNavSheet] = React.useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start p-0 sm:py-6 selection:bg-rose-500/30">
      {/* Top Floating Control Bar for instant screen navigation */}
      <header className="w-full max-w-5xl px-4 py-2.5 mb-3 flex flex-wrap items-center justify-between gap-3 bg-neutral-900/90 backdrop-blur-md rounded-2xl border border-neutral-800 text-xs shadow-xl z-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center font-bold text-white shadow-sm">
            C
          </div>
          <span className="font-semibold tracking-wide text-white">ChicAlt Design System</span>
          <span className="text-neutral-500">|</span>
          <span className="text-rose-400 font-medium hidden sm:inline">18 UI Screens Complete Spec</span>
        </div>

        {/* Screen Quick Selector Dropdown / Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNavSheet(!showNavSheet)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors shadow-sm"
          >
            <span>📱 18 界面直达</span>
            <span className="bg-rose-700/60 px-1.5 py-0.5 rounded text-[10px]">
              {screensList.find((s) => s.id === currentScreenId)?.nameZh}
            </span>
          </button>

          {/* Toggle Device Viewport size */}
          <div className="hidden sm:flex items-center bg-neutral-800 p-0.5 rounded-lg border border-neutral-700">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                deviceMode === 'mobile' ? 'bg-neutral-700 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              iPhone 16 Pro
            </button>
            <button
              onClick={() => setDeviceMode('fill')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                deviceMode === 'fill' ? 'bg-neutral-700 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tablet / Full
            </button>
          </div>
        </div>
      </header>

      {/* Screen Drawer Navigator Modal */}
      {showNavSheet && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setShowNavSheet(false)}
        >
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-white">直达 18 张设计图对应的界面</h3>
                <p className="text-xs text-neutral-400 mt-0.5">严格按照上传的18张原型图高保真实现</p>
              </div>
              <button
                onClick={() => setShowNavSheet(false)}
                className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {screensList.map((screen, idx) => {
                const isSelected = screen.id === currentScreenId;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      onSelectScreen?.(screen.id);
                      setShowNavSheet(false);
                    }}
                    className={`text-left p-3 rounded-2xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-rose-500/20 border-rose-500 text-white'
                        : 'bg-neutral-800/60 border-neutral-700/60 hover:bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-[10px] text-neutral-400 font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-rose-500"></span>}
                    </div>
                    <span className="font-semibold text-xs text-white">{screen.nameZh}</span>
                    <span className="text-[11px] text-neutral-400 truncate mt-0.5">{screen.nameEn}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Device Shell */}
      <main
        className={`relative transition-all duration-300 w-full overflow-hidden ${
          deviceMode === 'mobile'
            ? 'max-w-[412px] h-[870px] sm:rounded-[52px] sm:border-[10px] sm:border-neutral-800 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)]'
            : 'max-w-[520px] h-[920px] sm:rounded-[44px] sm:border-[8px] sm:border-neutral-800'
        } bg-white text-neutral-900 flex flex-col`}
      >
        {/* Mobile Device Status Bar */}
        <div className="shrink-0 h-11 px-7 pt-3 flex items-center justify-between text-neutral-900 z-40 select-none pointer-events-none">
          <span className="text-xs font-semibold tracking-tight">9:41</span>
          
          {/* Dynamic Island Pill */}
          <div className="w-24 h-4 bg-black rounded-full mx-auto hidden sm:block opacity-90 shadow-sm" />

          <div className="flex items-center gap-1.5 text-neutral-800">
            <Signal className="w-3.5 h-3.5 stroke-[2.5]" />
            <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
            <Battery className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Dynamic Screen Viewport */}
        <div className="flex-1 w-full overflow-y-auto overflow-x-hidden relative flex flex-col no-scrollbar">
          {children}
        </div>

        {/* iPhone Home Indicator */}
        <div className="shrink-0 h-5 w-full flex items-center justify-center bg-transparent pointer-events-none pb-1">
          <div className="w-32 h-1 bg-neutral-900/30 rounded-full" />
        </div>
      </main>
    </div>
  );
};
