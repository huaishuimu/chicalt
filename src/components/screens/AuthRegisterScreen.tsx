import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';

interface AuthRegisterScreenProps {
  onBack: () => void;
  onRegisterSuccess: () => void;
}

export const AuthRegisterScreen: React.FC<AuthRegisterScreenProps> = ({
  onBack,
  onRegisterSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [accepted, setAccepted] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) {
      return;
    }
    onRegisterSuccess();
  };

  return (
    <div className="relative flex-1 w-full bg-gradient-to-b from-[#FF5072] via-[#FF6986] to-[#FFA8B8] flex flex-col justify-between px-6 py-6 text-white select-none">
      {/* Top Bar with Back Arrow */}
      <div className="w-full flex items-center justify-between">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Center Registration Form */}
      <div className="w-full max-w-xs mx-auto my-auto flex flex-col">
        <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight font-sans">
          Set a Password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
            />
          </div>

          <div>
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
              className="w-full px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
            />
          </div>

          {/* Accept checkbox */}
          <div
            onClick={() => setAccepted(!accepted)}
            className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-white/90 select-none"
          >
            <div
              className={`w-4 h-4 rounded-full border border-white flex items-center justify-center transition-all ${
                accepted ? 'bg-white text-[#FF5072]' : 'bg-transparent'
              }`}
            >
              {accepted && <Check className="w-2.5 h-2.5 stroke-[3]" />}
            </div>
            <span>I have accepted Terms and Conditions</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 rounded-full bg-white text-[#FF5072] font-bold text-sm tracking-wider shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-neutral-50 active:scale-[0.98] transition-all"
          >
            Register an account
          </button>
        </form>
      </div>

      {/* Footer Terms */}
      <div className="text-center max-w-xs mx-auto pb-4">
        <p className="text-[11px] leading-relaxed text-white/80">
          By continuing, you agree to ChicAlt&apos;s{' '}
          <span className="font-semibold text-white cursor-pointer hover:underline">
            Terms of Service and Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};
