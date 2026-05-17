import React from 'react';

export default function AnalyticsSpending() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col pb-24">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-background flex justify-between items-center w-full px-container-margin h-14 sticky top-0 z-50">
        <div className="flex items-center gap-md">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JBMlyhn3JLs9gfzy16LnRLf0bGW-0h8PWUTxzBffnN70ZtcqDkIwP9vUnb-V3D9WdPRRZZJ3KCcXHInwZYIg14jPalCTSq_7DM2B1boise5XD663c67HONemLkIOmha-K9NzF7Iu5Cber7KJXkH_hdMvR4dMp9tgcEL_2knTu0HYVW6PazJSIoJFXYr0Eheu5NEzKQpabDkFpKYnWKXwWanjhYa9VTk_4QWOG3J06B-YsZKyLyIMfGiklXDrAO--BSlT9wUfRaQ" 
            />
          </div>
          <h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Platitay</h1>
        </div>
        <button className="text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity active:scale-95 duration-100">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>notifications</span>
        </button>
      </header>

      <main className="flex-1 px-container-margin pt-md flex flex-col gap-xl">
        {/* Screen Title Section */}
        <section className="flex flex-col gap-xs">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Analytics &amp; Spending</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Your financial health overview for October 2023.</p>
        </section>

        {/* Bento Grid Visualization Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Main Chart Card (Bento Large) */}
          <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex flex-col gap-md">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Spending by Category</h3>
              <span className="font-label-md text-label-md text-primary bg-primary-fixed px-sm py-xs rounded-lg">Month-to-Date</span>
            </div>
            
            {/* Visual Data Representation */}
            <div className="relative h-64 w-full flex items-center justify-center">
              {/* Simplistic High-End CSS Donut Representation */}
              <div className="relative w-48 h-48 rounded-full border-[16px] border-surface-container flex items-center justify-center">
                <svg className="absolute inset-[-16px] w-[calc(100%+32px)] h-[calc(100%+32px)] -rotate-90">
                  <circle cx="112" cy="112" fill="none" r="96" stroke="#24389c" strokeDasharray="240 600" strokeLinecap="round" strokeWidth="16"></circle>
                  <circle cx="112" cy="112" fill="none" r="96" stroke="#006e2a" strokeDasharray="120 600" strokeDashoffset="-245" strokeLinecap="round" strokeWidth="16"></circle>
                  <circle cx="112" cy="112" fill="none" r="96" stroke="#ba1a1a" strokeDasharray="80 600" strokeDashoffset="-370" strokeLinecap="round" strokeWidth="16"></circle>
                </svg>
                <div className="text-center">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile block text-on-surface">$2,450</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Total Spent</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-sm">
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md">Rent &amp; Housing</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">$1,200 (48%)</span>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md">Food &amp; Dining</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">$650 (26%)</span>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md">Debts</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">$400 (16%)</span>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-outline"></div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md">Others</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">$200 (10%)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Cards Stack (Bento Sidebar) */}
          <div className="md:col-span-4 flex flex-col gap-md">
            {/* Monthly Savings Card */}
            <section className="bg-surface-container-lowest rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex-1">
              <div className="flex items-center gap-sm mb-sm text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>savings</span>
                <h3 className="font-label-md text-label-md uppercase tracking-wider">Monthly Savings</h3>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface">$850.00</p>
              <div className="mt-md w-full bg-surface-container rounded-full h-2 overflow-hidden">
                <div className="bg-secondary w-3/4 h-full rounded-full"></div>
              </div>
              <p className="mt-xs font-body-sm text-body-sm text-on-surface-variant">75% of your $1,200 goal</p>
            </section>

            {/* Debt Progress Card */}
            <section className="bg-surface-container-lowest rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex-1">
              <div className="flex items-center gap-sm mb-sm text-primary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>account_balance</span>
                <h3 className="font-label-md text-label-md uppercase tracking-wider">Debt Progress</h3>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface">$12,400 left</p>
              <div className="flex items-end gap-xs mt-md h-12">
                <div className="flex-1 bg-primary/20 h-full rounded-t-sm"></div>
                <div className="flex-1 bg-primary/40 h-[80%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/60 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-outline-variant h-[20%] rounded-t-sm"></div>
              </div>
              <p className="mt-xs font-body-sm text-body-sm text-on-surface-variant">Down 4% from last month</p>
            </section>
          </div>
        </div>

        {/* Share Spending Section */}
        <section className="bg-primary-container text-on-primary-container rounded-xl p-lg flex flex-col md:flex-row items-center gap-lg shadow-[0px_10px_20px_rgba(63,81,181,0.08)]">
          <div className="flex-1 flex flex-col gap-xs text-center md:text-left">
            <h3 className="font-headline-md text-headline-md text-on-primary-container">Share Spending Habits</h3>
            <p className="font-body-md text-body-md text-on-primary-container/80">Generate a secure, anonymous link to compare your financial habits with peers or share with a mentor.</p>
          </div>
          <button className="bg-on-primary-container text-primary-container px-lg py-md rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity active:scale-95 flex items-center gap-sm">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>link</span>
            Generate Link
          </button>
        </section>

        {/* Comparison Section / Insight */}
        <section className="bg-surface-container rounded-xl p-md border border-outline-variant/20 flex items-center gap-md">
          <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>lightbulb</span>
          </div>
          <div className="flex-1">
            <h4 className="font-label-md text-label-md text-on-surface">Insight: Dining is high</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">You've spent 15% more on food than the average Platitay user this month. Consider checking for subscription overlaps.</p>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-xs py-sm border-t border-outline-variant/20 bg-surface dark:bg-on-background shadow-md z-50">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/">
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
        <Link className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-fixed-dim text-on-primary-container dark:text-on-primary-fixed rounded-xl px-md py-xs active:scale-95 duration-200 ease-in-out" to="/analytics">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>insights</span>
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
