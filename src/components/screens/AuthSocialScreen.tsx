import React from 'react';

interface AuthSocialScreenProps {
  onLoginWithAccount: () => void;
  onSocialLogin: (provider: string) => void;
}

export const AuthSocialScreen: React.FC<AuthSocialScreenProps> = ({
  onLoginWithAccount,
  onSocialLogin,
}) => {
  return (
    <div className="relative flex-1 w-full bg-gradient-to-b from-[#FF5072] via-[#FF6A87] to-[#FFA8B8] flex flex-col justify-between items-center px-6 py-12 text-white select-none">
      {/* Decorative blurred glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* ChicAlt Header */}
      <div className="mt-20 text-center z-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-sm font-sans">
          ChicAlt
        </h1>
        <p className="text-[10px] font-semibold tracking-wider text-white/90 uppercase mt-2.5">
          Smart AI, Chic Styles At Your Fingertips.
        </p>
      </div>

      {/* Social Login Buttons & Account link */}
      <div className="w-full max-w-xs flex flex-col items-center gap-3.5 z-10 my-auto">
        {/* Facebook */}
        <button
          onClick={() => onSocialLogin('Facebook')}
          className="w-full py-3.5 px-5 bg-white text-neutral-800 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:bg-neutral-50 active:scale-[0.98] transition-all"
        >
          <div className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold">
            f
          </div>
          <span>Log in with Facebook</span>
        </button>

        {/* Google+ */}
        <button
          onClick={() => onSocialLogin('Google')}
          className="w-full py-3.5 px-5 bg-white text-neutral-800 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:bg-neutral-50 active:scale-[0.98] transition-all"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Log in with Google+</span>
        </button>

        {/* Apple */}
        <button
          onClick={() => onSocialLogin('Apple')}
          className="w-full py-3.5 px-5 bg-white text-neutral-800 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:bg-neutral-50 active:scale-[0.98] transition-all"
        >
          <svg className="w-4 h-4 fill-black" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.79-11.71-14.25-5.91-9.33-10.42-20.2-13.52-32.61-3.1-12.4-4.65-24.16-4.65-35.26 0-14.72 3.66-26.65 10.99-35.79 7.33-9.14 16.48-13.84 27.46-14.1 4.58 0 9.87 1.34 15.86 4.02 5.99 2.68 9.9 4.07 11.71 4.17 1.45 0 5.46-1.4 12.04-4.19 6.58-2.79 12.02-4.02 16.32-3.69 12.92.93 23.36 5.86 31.33 14.81-11.27 6.84-16.78 16.29-16.53 28.36.26 9.49 3.82 17.5 10.67 24.03 6.86 6.53 15.17 10.33 24.94 11.41-2.09 6.06-4.54 12.06-7.36 18zm-29.28-109.9c0 7.37-2.67 14.36-8.02 20.97-5.35 6.61-12.09 10.64-20.22 12.09-.13-1.05-.2-2.04-.2-2.98 0-7.35 2.85-14.48 8.56-21.39 5.71-6.9 12.63-10.9 20.76-12.01.26 1.13.12 2.24-.88 3.32z" />
          </svg>
          <span>Log in with Apple</span>
        </button>

        {/* Alternative Link */}
        <button
          onClick={onLoginWithAccount}
          className="mt-4 text-xs font-semibold tracking-wide text-white hover:text-white/80 transition-colors"
        >
          Login with Account
        </button>
      </div>

      {/* Footer Terms */}
      <div className="z-10 text-center max-w-xs pb-2">
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
