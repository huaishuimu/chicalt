import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface AuthVerifyScreenProps {
  onBack: () => void;
  onLoginSuccess: () => void;
  onGoToRegister: () => void;
}

export const AuthVerifyScreen: React.FC<AuthVerifyScreenProps> = ({
  onBack,
  onLoginSuccess,
  onGoToRegister,
}) => {
  const [code, setCode] = useState('8869');
  const [password, setPassword] = useState('••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
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

      {/* Main Form Center */}
      <div className="w-full max-w-xs mx-auto my-auto flex flex-col">
        <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight font-sans">
          Enter verification code
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Verification Code"
              className="w-full px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-2 rounded-full bg-white text-[#FF5072] font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-neutral-50 active:scale-[0.98] transition-all"
          >
            LOGIN
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/90">
          <button
            type="button"
            onClick={() => alert('Password reset code sent to your email!')}
            className="hover:underline"
          >
            Forgot your password?
          </button>
          <span>|</span>
          <button
            type="button"
            onClick={onGoToRegister}
            className="font-bold hover:underline"
          >
            Register
          </button>
        </div>
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
