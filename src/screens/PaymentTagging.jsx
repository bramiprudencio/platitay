import React from 'react';

export default function PaymentTagging() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-background flex justify-between items-center w-full px-container-margin h-14 fixed top-0 left-0 z-50">
        <div className="flex items-center gap-md">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH0aMKNevHriBgduj_BNpgJeNXNuzxDNXxA2iJFVSk6r3JYVhCD_OgAXGfx95QtKOmg1uHEG8lypsdc8bDc8eLrCAzow-wt7rvAtNqs6BjlKVGEhpuNYuWVwQDLbDVQORsLbhRVIBQ661Rf7G9tN2WyltbEeckBlPUFyxdOy-QRC3bJEQfoCrfZqeY6xV4elMJigPQ7NMSTdRqlqll-pLGnRM1E4qKuqYXlEZZANA8LyE7OY0z_tEkb5K_dWKtyL3bOsK6Om76oqQ" 
            />
          </div>
          <span className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Platitay</span>
        </div>
        <button className="hover:opacity-80 transition-opacity active:scale-95 duration-100">
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-28 px-container-margin max-w-md mx-auto">
        {/* Transaction Input Section */}
        <section className="mb-xl">
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
            <div className="flex flex-col items-center gap-unit">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Amount to Pay</span>
              <div className="flex items-baseline text-primary">
                <span className="font-headline-md text-headline-md-mobile mr-xs">$</span>
                <input 
                  className="w-full bg-transparent border-none text-center font-headline-lg-mobile text-headline-lg-mobile focus:ring-0 placeholder-outline-variant p-0" 
                  placeholder="0.00" 
                  type="number" 
                />
              </div>
            </div>
            <div className="mt-lg grid grid-cols-2 gap-md">
              <button className="flex items-center justify-center gap-sm p-sm bg-surface-container rounded-lg border border-outline-variant/20 hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>phone_iphone</span>
                <span className="font-label-md text-label-md text-on-surface">Phone</span>
              </button>
              <button className="flex items-center justify-center gap-sm p-sm bg-surface-container rounded-lg border border-outline-variant/20 hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>qr_code_scanner</span>
                <span className="font-label-md text-label-md text-on-surface">Scan QR</span>
              </button>
            </div>
          </div>
        </section>

        {/* Tagging Section */}
        <section className="mb-xl">
          <h2 className="font-headline-md text-headline-md-mobile text-on-surface mb-md">What is this for?</h2>
          <div className="flex flex-wrap gap-sm">
            {/* Food Tag */}
            <button className="px-md py-sm rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-sm hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>restaurant</span>
              <span className="font-label-md text-label-md">Food</span>
            </button>
            {/* Services Tag */}
            <button className="px-md py-sm rounded-full bg-on-surface-variant/5 text-on-surface-variant border border-outline-variant/30 flex items-center gap-sm hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>cleaning_services</span>
              <span className="font-label-md text-label-md">Services</span>
            </button>
            {/* Entertainment Tag */}
            <button className="px-md py-sm rounded-full bg-on-surface-variant/5 text-on-surface-variant border border-outline-variant/30 flex items-center gap-sm hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>confirmation_number</span>
              <span className="font-label-md text-label-md">Entertainment</span>
            </button>
            {/* Lend Tag (Selected State Mockup) */}
            <button className="px-md py-sm rounded-full bg-secondary/10 text-secondary border border-secondary/40 flex items-center gap-sm hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>handshake</span>
              <span className="font-label-md text-label-md">Lend</span>
            </button>
            {/* Debt Payment Tag */}
            <button className="px-md py-sm rounded-full bg-on-surface-variant/5 text-on-surface-variant border border-outline-variant/30 flex items-center gap-sm hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>payments</span>
              <span className="font-label-md text-label-md">Debt Payment</span>
            </button>
          </div>
        </section>

        {/* Dynamic Context Section (Lend/Debt Payment) */}
        <section className="mb-xl">
          <div className="bg-surface-container-low rounded-xl p-md border border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-sm">
                <span className="font-label-md text-label-md text-secondary">Link to Contact</span>
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>person_add</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Select which contact this loan or payment is associated with to keep your stats accurate.</p>
              <div className="flex items-center gap-md p-sm bg-surface-container-lowest rounded-lg border border-outline-variant/30 cursor-pointer hover:border-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>search</span>
                </div>
                <span className="font-body-md text-body-md text-outline">Search contacts...</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Action */}
        <section>
          <button className="w-full py-md bg-secondary text-on-secondary rounded-xl font-headline-md text-headline-md-mobile flex items-center justify-center gap-md shadow-lg shadow-secondary/20 active:scale-95 transition-transform">
            <span>Confirm Payment</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>arrow_forward</span>
          </button>
          <p className="text-center mt-md font-label-md text-label-md text-outline">Funds will be transferred instantly.</p>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-xs py-sm border-t border-outline-variant/20 bg-surface dark:bg-on-background z-50 shadow-[0px_-2px_8px_rgba(0,0,0,0.04)]">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors" to="/">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>home</span>
          <span className="font-label-md text-label-md">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-fixed-dim text-on-primary-container dark:text-on-primary-fixed rounded-xl px-md py-xs active:scale-95 duration-200 ease-in-out" to="/payment">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>qr_code_scanner</span>
          <span className="font-label-md text-label-md">Pay</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors" to="/debts">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>account_balance_wallet</span>
          <span className="font-label-md text-label-md">Debts</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors" to="/analytics">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>insights</span>
          <span className="font-label-md text-label-md">Stats</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors" to="/goals">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>target</span>
          <span className="font-label-md text-label-md">Goals</span>
        </Link>
      </nav>
    </div>
  );
}
