import React from 'react';

export default function DebtsLoans() {
  return (
    <div className="flex flex-col min-h-screen text-on-surface bg-surface">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-background flex justify-between items-center w-full px-container-margin h-14 sticky top-0 z-50">
        <div className="flex items-center gap-md">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDOseoyt7qKscRevI07zR6AUNLspmP4aZL_uCU5ylAv33maZHk_vkvjeDfha6qUoMyIK9HQ5TEFujMb_qjNCe3YxLsjb_xywOEklcFsbtq5H08hA6oLiPR6BEyF0vtAWiMDEpjOPPHaTAFeyDTk2iiLusa4CCTvF--z5Mnr-1aw5bt0w2PyQO9kE31QGgy55FxRUu9plkSR1_JvqXLV40m_baIVlWMAXfvPf-PkZXzaFqHF-1U520AWj05RLE3sloUzET9klSnU0" 
            />
          </div>
          <h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Platitay</h1>
        </div>
        <button className="hover:opacity-80 transition-opacity p-xs">
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-container-margin pb-32">
        {/* Summary Bento Grid */}
        <section className="mt-md grid grid-cols-2 gap-sm">
          <div className="col-span-2 bg-surface-container-lowest p-md rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 overflow-hidden relative">
            <div className="relative z-10">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Balance</p>
              <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mt-xs">$1,240.50</h2>
              <div className="flex items-center gap-xs mt-sm text-secondary">
                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>trending_up</span>
                <span className="font-label-sm text-label-sm">8% increase this month</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-md opacity-10">
              <span className="material-symbols-outlined text-[80px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>account_balance_wallet</span>
            </div>
          </div>
          <div className="bg-primary-container/10 p-md rounded-xl border border-primary-container/20">
            <p className="font-label-sm text-label-sm text-primary font-bold">I Owe</p>
            <p className="font-headline-md text-headline-md text-primary mt-xs">$450.00</p>
          </div>
          <div className="bg-secondary-container/10 p-md rounded-xl border border-secondary-container/20">
            <p className="font-label-sm text-label-sm text-secondary font-bold">Owed to Me</p>
            <p className="font-headline-md text-headline-md text-secondary mt-xs">$1,690.50</p>
          </div>
        </section>

        {/* Tab Interface */}
        <div className="mt-xl flex w-full border-b border-outline-variant/30">
          <button className="flex-1 py-md font-label-md text-label-md text-center transition-all border-b-2 border-secondary text-secondary">
            Owed to Me
          </button>
          <button className="flex-1 py-md font-label-md text-label-md text-center text-on-surface-variant hover:bg-surface-variant/20 transition-all border-b-2 border-transparent">
            I Owe
          </button>
        </div>

        {/* Pending Debts List */}
        <div className="mt-md space-y-sm">
          <p className="font-label-md text-label-md text-on-surface-variant px-xs mb-xs">Pending (4)</p>
          
          {/* Item 1 */}
          <div className="flex items-center justify-between p-md bg-surface-container-lowest rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:bg-surface-container-low transition-colors group">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <img 
                  alt="Contact" 
                  className="w-full h-full object-cover rounded-xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyVhBLyMrZzkus8yr7rSwxdcldJbrlOS8IRx2vttq60Q4xD7H1HxQAg1v15iug1rXs5EOffZlORfyc1bYgd3IyfCppes841W_a7FsbDnhzS2GJ8fRnvtYjx0iTEhTtpnvi-WyjZZgj1arB7aw8use-CAPjqIjV7Her0TwDxjfOeZn2CWM1Ezyopa15LRStn7B0rAzfIv6oD-NtmUIXvdB-YxEXovgOo1mLGTz4HntSMQNBUOpEadcpeKlAZ5VSZAwB91thjWP4CJc" 
                />
              </div>
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">Sarah Johnson</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Due: Oct 24, 2023</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-lg">
              <div>
                <p className="font-body-md text-body-md font-bold text-secondary">+$320.00</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Rent split</p>
              </div>
              <button className="flex items-center justify-center p-sm bg-secondary/5 text-secondary rounded-lg hover:bg-secondary/10 active:scale-95 duration-100">
                <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications_active</span>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-md bg-surface-container-lowest rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:bg-surface-container-low transition-colors group">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <img 
                  alt="Contact" 
                  className="w-full h-full object-cover rounded-xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALz2H_DSvkfPRI1GPFHfHjoPWbo8O1PfEgHhSDq0pm6P2z3791jnSWTjXTcdQp1linKkSOhN_KkxiimUf7CKFx2y7-oTy52GPPjBvGH5HBFvF3-P3S3cH5fQ8hTy4UzuCuye1H2Wr_xNPQvafHF5y0Y3Dx8cCE_0ORqsHdk7D041UtsparVW6-ch7Qq1ifIueaj71EjxVXglGgmv0VnNcXefrpKdrMEYp08y9BW5RyeEgkZUSq4-xBnsr1JI-USXq1fMQYDyRNJU8" 
                />
              </div>
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">Marcus Chen</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Due: Oct 28, 2023</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-lg">
              <div>
                <p className="font-body-md text-body-md font-bold text-secondary">+$1,200.00</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Loan payoff</p>
              </div>
              <button className="flex items-center justify-center p-sm bg-secondary/5 text-secondary rounded-lg hover:bg-secondary/10 active:scale-95 duration-100">
                <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications_active</span>
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between p-md bg-surface-container-lowest rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:bg-surface-container-low transition-colors group">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <img 
                  alt="Contact" 
                  className="w-full h-full object-cover rounded-xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ot3Q8MB5ADqiVX5tHCswpibsmeAyVnXCI5a5P_TDFrYbv5ovny9E8W1Gm_7nRVvgVpjUp5PNTyvD9KQC3M2sLXVUxrnJxyl_Jd8ecgLHOuVmgQIj_j8GHJMWcNkgC-AIDp7CdhYhxkVMWAWAdJ2wJzEp2sl0cE4g1uqXJzG8hGTm1_e4BjzHmXENGb6fCpPKr0I8_FzPatq1Ozos7-mAWWYnoNexC6VBdTwXuefVVXKgN59wxu_Z2NBIqLQXDE9gsrTZoLsnS5A" 
                />
              </div>
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">Elena Rodriguez</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-error">Overdue: Oct 15</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-lg">
              <div>
                <p className="font-body-md text-body-md font-bold text-secondary">+$145.50</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Dinner split</p>
              </div>
              <button className="flex items-center justify-center p-sm bg-secondary/5 text-secondary rounded-lg hover:bg-secondary/10 active:scale-95 duration-100">
                <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications_active</span>
              </button>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-between p-md bg-surface-container-lowest rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:bg-surface-container-low transition-colors group">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>person</span>
              </div>
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">David Miller</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Due: Nov 02, 2023</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-lg">
              <div>
                <p className="font-body-md text-body-md font-bold text-secondary">+$25.00</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Coffee</p>
              </div>
              <button className="flex items-center justify-center p-sm bg-secondary/5 text-secondary rounded-lg hover:bg-secondary/10 active:scale-95 duration-100">
                <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications_active</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-container-margin w-14 h-14 bg-primary text-on-primary rounded-xl shadow-[0px_10px_20px_rgba(63,81,181,0.08)] flex items-center justify-center active:scale-95 duration-200 z-40">
        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>add</span>
      </button>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-xs py-sm border-t border-outline-variant/20 bg-surface dark:bg-on-background shadow-md z-50">
        <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>home</span>
          <span className="font-label-md text-label-md">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>qr_code_scanner</span>
          <span className="font-label-md text-label-md">Pay</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-fixed-dim text-on-primary-container dark:text-on-primary-fixed rounded-xl px-md py-xs active:scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>account_balance_wallet</span>
          <span className="font-label-md text-label-md">Debts</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>insights</span>
          <span className="font-label-md text-label-md">Stats</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>target</span>
          <span className="font-label-md text-label-md">Goals</span>
        </button>
      </nav>
    </div>
  );
}
