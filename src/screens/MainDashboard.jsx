import React from 'react';

export default function MainDashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-24">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-background flex justify-between items-center w-full px-container-margin h-14 sticky top-0 z-50">
        <div className="flex items-center gap-sm">
          <img 
            alt="User profile photo" 
            className="w-10 h-10 rounded-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7swDMeqJgdU-MAER35O1Enfc3TqHI7zozM1sa-6hvG-4kSgye-Lpk_MzhSU_zENs_83YkburYMN80NHvzcw_lrTfO7kRQ0Di5HCw5lJ8BsUEd2qyCmPykqTwc3CSDtjAIzizwm2evbHrMzFAeK7FBegdE2ziMkJX0IakQQjvUkqtxLmm9XtXAeKMVSpl0PoLhvwP7qeypnPb5iAIGSLxAseKpDekq3KqCzrJ50qukqysubZrw4bpg6oaVyz-RZk-Nv6E_1qwR5vU" 
          />
        </div>
        <h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Platitay</h1>
        <button className="text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity active:scale-95 duration-100">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications</span>
        </button>
      </header>

      <main className="px-container-margin py-md space-y-xl">
        {/* Balance Card */}
        <section className="relative overflow-hidden bg-primary p-lg rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] text-on-primary">
          {/* Background Decorative Element */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="space-y-xs">
            <p className="font-label-md text-label-md opacity-80">Total Balance</p>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile">$12,450.80</h2>
          </div>
          <div className="mt-lg flex items-center justify-between border-t border-white/20 pt-md">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-secondary-fixed" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>trending_up</span>
              <p className="font-label-md text-label-md">+2.4% this month</p>
            </div>
            <div className="font-label-md text-label-md text-white/70">
              USD Account
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-2 gap-md">
          <button className="flex flex-col items-center justify-center gap-sm bg-secondary p-md rounded-xl text-on-secondary shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>qr_code_scanner</span>
            <span className="font-label-md text-label-md">Pay</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-sm bg-surface-container p-md rounded-xl text-primary border border-outline-variant shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:bg-surface-variant active:scale-95 transition-all">
            <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>request_quote</span>
            <span className="font-label-md text-label-md">Charge</span>
          </button>
        </section>

        {/* Recent Transactions */}
        <section className="space-y-md">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md-mobile">Recent Transactions</h3>
            <button className="text-primary font-label-md text-label-md">View All</button>
          </div>
          <div className="space-y-sm">
            {/* Transaction 1 */}
            <div className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>restaurant</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md font-semibold">Green Leaf Bistro</p>
                <span className="inline-block px-xs py-[2px] bg-primary/10 text-primary text-[10px] font-bold rounded uppercase mt-[2px]">Food</span>
              </div>
              <div className="text-right">
                <p className="font-body-md text-body-md font-bold">-$42.00</p>
                <p className="font-label-sm text-label-sm text-outline">Today, 12:45</p>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>payments</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md font-semibold">Loan Repayment</p>
                <span className="inline-block px-xs py-[2px] bg-secondary/10 text-secondary text-[10px] font-bold rounded uppercase mt-[2px]">Debt Payment</span>
              </div>
              <div className="text-right">
                <p className="font-body-md text-body-md font-bold">-$250.00</p>
                <p className="font-label-sm text-label-sm text-outline">Yesterday</p>
              </div>
            </div>

            {/* Transaction 3 */}
            <div className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>home_repair_service</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md font-semibold">Cloud Hosting Pro</p>
                <span className="inline-block px-xs py-[2px] bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase mt-[2px]">Services</span>
              </div>
              <div className="text-right">
                <p className="font-body-md text-body-md font-bold">-$12.99</p>
                <p className="font-label-sm text-label-sm text-outline">Oct 24, 2023</p>
              </div>
            </div>

            {/* Transaction 4 */}
            <div className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
              <div className="w-10 h-10 rounded-xl bg-on-secondary-container/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>add_card</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md font-semibold">External Transfer</p>
                <span className="inline-block px-xs py-[2px] bg-surface-container text-outline text-[10px] font-bold rounded uppercase mt-[2px]">Transfer</span>
              </div>
              <div className="text-right">
                <p className="font-body-md text-body-md font-bold text-secondary">+$1,200.00</p>
                <p className="font-label-sm text-label-sm text-outline">Oct 22, 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Stats Card (Bento Style) */}
        <section className="grid grid-cols-2 gap-md">
          <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 space-y-sm">
            <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>insights</span>
            <div>
              <p className="font-label-sm text-label-sm text-outline uppercase">Expenses</p>
              <p className="font-headline-md text-headline-md-mobile">$3,120</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 space-y-sm">
            <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>target</span>
            <div>
              <p className="font-label-sm text-label-sm text-outline uppercase">Savings Goal</p>
              <p className="font-headline-md text-headline-md-mobile">85%</p>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-xs py-sm border-t border-outline-variant/20 shadow-md bg-surface dark:bg-on-background z-50">
        <Link className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-fixed-dim text-on-primary-container dark:text-on-primary-fixed rounded-xl px-md py-xs active:scale-95 duration-200 ease-in-out" to="/">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>home</span>
          <span className="font-label-md text-label-md">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/payment">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>qr_code_scanner</span>
          <span className="font-label-md text-label-md">Pay</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/debts">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>account_balance_wallet</span>
          <span className="font-label-md text-label-md">Debts</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/analytics">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>insights</span>
          <span className="font-label-md text-label-md">Stats</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/goals">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>target</span>
          <span className="font-label-md text-label-md">Goals</span>
        </Link>
      </nav>
    </div>
  );
}
