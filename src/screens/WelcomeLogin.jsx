import React from 'react';

export default function WelcomeLogin() {
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    alert("Google Login stub");
  };

  const handlePhoneLogin = (e) => {
    e.preventDefault();
    alert("Phone Login stub");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between px-container-margin py-xl max-w-md mx-auto">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center mt-xl">
        <div className="mb-xl overflow-hidden rounded-xl shadow-sm">
          <img 
            alt="Financial Reliability" 
            className="w-32 h-32 object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zFOX6_VAVqZzKESrrzgb9-dqHOKz6BDGyaye4sfBfr0j7mWlf3XVV3iw2AZpUMs4Ol49vwmho8NZmNsbn8DZzQBJI6U1mKPRCvoIBjDiMEvd0Ct48k26rk-xJ7D1GCEn_7_nLkD2Zv6JsPAUpyFeQwtcsZVgLH683MpxeXG-6waKdPXPL5spQbRdeT1GDdY1pIPkT76KnsQs2HkShhvcJbjUnjYAcz6WKY6rhdl5NFUmsYy9QL8cNjWSz7KTkytlGeLO6kEqy-E" 
          />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-sm">Platitay</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant px-md">
          Manage your debts and achieve your financial goals with ease.
        </p>
      </section>

      {/* Login Actions Container */}
      <div className="w-full space-y-md mb-xl">
        {/* Login with Google */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-md bg-surface-container-lowest border border-outline-variant py-md px-lg rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:bg-surface-container transition-colors active:scale-95 duration-200"
        >
          <img 
            alt="Google" 
            className="w-6 h-6" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCllx7aUhepoEV5ygo00NLMK7JERZeOUVTqZsuGAtnseKzSzuckyQoS8eYrMixg5ptQ54iYUx02Jr73-Cyj-YiRgQ0C9yLZ1XqOeCz9Jch-eBtlnmrEZEFo_OSwJ7BvgrJqlcMJy_2D1D8uwPI9O2563fpJBdopr5E0dIE0Hkog_KwDj1MYzWyTf04oGokjtf2KtA5M1QeH_8xjug9hMb_4KJY59Zs5HTBzZfgzSNZC0xP468r2W3f3q9h2RphZqGo8UPcbiATe22k" 
          />
          <span className="font-label-md text-label-md text-on-surface">Login with Google</span>
        </button>

        {/* Login with Phone */}
        <button 
          onClick={handlePhoneLogin}
          className="w-full flex items-center justify-center gap-md bg-primary text-on-primary py-md px-lg rounded-xl shadow-[0px_10px_20px_rgba(63,81,181,0.08)] hover:opacity-90 transition-opacity active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined text-on-primary" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>smartphone</span>
          <span className="font-label-md text-label-md">Login with Phone Number</span>
        </button>

        {/* Terms Disclaimer */}
        <p className="text-center font-label-sm text-label-sm text-outline px-lg mt-md">
          By continuing, you agree to Platitay's Terms of Service and Privacy Policy.
        </p>
      </div>

      {/* Footer Link */}
      <footer className="w-full text-center pb-md">
        <a className="inline-block py-sm" href="#">
          <span className="font-body-sm text-body-sm text-on-surface-variant">New to Platitay? </span>
          <span className="font-body-sm text-body-sm text-primary font-bold">Create an account</span>
        </a>
      </footer>

      {/* Visual Accent Element (Subtle Background Detail) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg -z-10 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.5C86.3,-32.5,90.8,-17.3,89.5,-2.3C88.2,12.7,81.1,27.5,71.5,40.1C61.9,52.7,49.8,63.1,36,70.5C22.2,77.9,6.7,82.4,-9,80.7C-24.7,79.1,-40.6,71.4,-53.4,60.8C-66.2,50.2,-75.8,36.7,-81.2,21.8C-86.6,6.9,-87.8,-9.4,-82.7,-24C-77.5,-38.6,-66.1,-51.5,-52.7,-58.9C-39.3,-66.3,-24,-68.2,-9.3,-72.1C5.4,-76,20.8,-82,34.7,-81.1C48.6,-80.1,59.3,-72.3,44.7,-76.4Z" fill="#24389c" transform="translate(200 150)"></path>
        </svg>
      </div>
    </main>
  );
}
