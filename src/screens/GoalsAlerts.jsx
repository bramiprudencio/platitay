import React from 'react';

export default function GoalsAlerts() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-background flex justify-between items-center w-full px-container-margin h-14 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiC1WPuDx4dZheQs2J2WvEIr6Hz5eaiNHJq8LrZ5SqbIGbgjoYhgDQAgsABSDZvPug7hVVoz-KPQGF1bQRYWxjbhBSkLkHBLWUEzspAQ4pEg0UL8N7a37ckSssVyigxwlrIimicoYojTfwQ_gTrBM-8l1zdlPE8elDgO9Zv4olXeIzhhcp2MdcJvujDUyYs1mE8it4T03KYc18RF3QpINQBtfe9iIdNp8jOW7CL5fXnjbFQzc-03dsdr0N4Vcqsjjs5YepXRgZGSU" 
            />
          </div>
          <h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Platitay</h1>
        </div>
        <button className="material-symbols-outlined text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity active:scale-95 duration-100">
          notifications
        </button>
      </header>

      <main className="px-container-margin pt-md">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-xl">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-wider">Financial Health</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile mt-xs">Goals &amp; Alerts</h2>
          </div>
          <button className="bg-primary text-on-primary px-md py-sm rounded-xl font-label-md text-label-md flex items-center gap-2 shadow-md hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create New Goal
          </button>
        </div>

        {/* Bento Grid: Active Goals */}
        <section className="space-y-md mb-xl">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md">Active Goals</h3>
            <span className="text-primary font-label-md text-label-md">View All</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Goal Card 1 */}
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30 relative overflow-hidden">
              <div className="flex justify-between items-start mb-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>directions_bike</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md leading-tight">New Bike</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Mountain Explorer Pro</p>
                  </div>
                </div>
                <span className="font-label-md text-label-md text-secondary bg-secondary-container/20 px-sm py-xs rounded-lg">82%</span>
              </div>
              <div className="space-y-xs mb-md">
                <div className="flex justify-between font-label-md text-label-md">
                  <span className="text-on-surface-variant">Reserved</span>
                  <span className="text-on-surface">$1,250.00 / $1,500.00</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">Estimated completion: 2 weeks</p>
            </div>

            {/* Goal Card 2 */}
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
              <div className="flex justify-between items-start mb-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>flight</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md leading-tight">Travel</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Summer in Japan</p>
                  </div>
                </div>
                <span className="font-label-md text-label-md text-tertiary bg-tertiary-fixed/40 px-sm py-xs rounded-lg">45%</span>
              </div>
              <div className="space-y-xs mb-md">
                <div className="flex justify-between font-label-md text-label-md">
                  <span className="text-on-surface-variant">Reserved</span>
                  <span className="text-on-surface">$2,250.00 / $5,000.00</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">Next contribution: Tomorrow</p>
            </div>
          </div>
        </section>

        {/* Alerts & Limits Section */}
        <section className="space-y-md">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md">Alerts &amp; Limits</h3>
            <span className="material-symbols-outlined text-on-surface-variant">settings</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-md border border-outline-variant/20">
            {/* Limit Item 1 */}
            <div className="flex items-center justify-between py-md border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">theater_comedy</span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold">Entertainment</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">$245.50 of $300.00</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-label-md text-label-md text-error">Near Limit</p>
                <div className="w-24 h-1.5 bg-surface-container rounded-full mt-1">
                  <div className="bg-error h-full rounded-full" style={{ width: '81%' }}></div>
                </div>
              </div>
            </div>

            {/* Limit Item 2 */}
            <div className="flex items-center justify-between py-md border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">restaurant</span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold">Dining Out</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">$112.00 of $400.00</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-label-md text-label-md text-secondary">Healthy</p>
                <div className="w-24 h-1.5 bg-surface-container rounded-full mt-1">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
            </div>

            {/* Limit Item 3 */}
            <div className="flex items-center justify-between py-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold">Groceries</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">$550.00 of $600.00</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-label-md text-label-md text-error">Critical</p>
                <div className="w-24 h-1.5 bg-surface-container rounded-full mt-1">
                  <div className="bg-error h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Set New Limit Promotion */}
          <div className="bg-primary-container text-on-primary-container p-md rounded-xl flex items-center gap-4 mt-lg">
            <span className="material-symbols-outlined text-[32px]">security</span>
            <div>
              <p className="font-body-md text-body-md font-bold">Stay within your budget</p>
              <p className="font-body-sm text-body-sm opacity-90">Enable smart notifications to get alerted when you reach 80% of any category limit.</p>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-xs py-sm border-t border-outline-variant/20 bg-surface dark:bg-on-background shadow-md z-50">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-md text-label-md">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/payment">
          <span className="material-symbols-outlined">qr_code_scanner</span>
          <span className="font-label-md text-label-md">Pay</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/debts">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="font-label-md text-label-md">Debts</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/analytics">
          <span className="material-symbols-outlined">insights</span>
          <span className="font-label-md text-label-md">Stats</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-fixed-dim text-on-primary-container dark:text-on-primary-fixed rounded-xl px-md py-xs hover:bg-surface-container dark:hover:bg-surface-variant transition-colors active:scale-95 duration-200 ease-in-out" to="/goals">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>target</span>
          <span className="font-label-md text-label-md">Goals</span>
        </Link>
      </nav>
    </div>
  );
}
