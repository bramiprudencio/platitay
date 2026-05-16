import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import WelcomeLogin from './screens/WelcomeLogin';
import MainDashboard from './screens/MainDashboard';
import AnalyticsSpending from './screens/AnalyticsSpending';
import PaymentTagging from './screens/PaymentTagging';
import DebtsLoans from './screens/DebtsLoans';
import GoalsAlerts from './screens/GoalsAlerts';
import BottomNavigation from './components/BottomNavigation';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="app-container" style={{justifyContent: 'center', alignItems: 'center'}}>Loading...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        {!user ? (
          <Routes>
            <Route path="*" element={<WelcomeLogin />} />
          </Routes>
        ) : (
          <>
            <div className="content-area">
              <Routes>
                <Route path="/" element={<MainDashboard />} />
                <Route path="/analytics" element={<AnalyticsSpending />} />
                <Route path="/payment" element={<PaymentTagging />} />
                <Route path="/debts" element={<DebtsLoans />} />
                <Route path="/goals" element={<GoalsAlerts />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
            <BottomNavigation />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
