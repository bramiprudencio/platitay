import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function DebtsLoans() {
  return (
    <div>
      <h1 className="headline-lg" style={{ marginBottom: 'var(--spacing-md)' }}>Debts & Loans</h1>
      
      <Card elevation={1}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 className="headline-md">Car Loan</h2>
          <span className="body-md" style={{ fontWeight: 600 }}>$8,400 left</span>
        </div>
        <p className="body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '16px' }}>Next payment: $350 on Nov 1</p>
        
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--surface-container-low)', borderRadius: '4px', marginBottom: '16px' }}>
          <div style={{ width: '45%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
        </div>
        
        <Button variant="secondary">Make Payment</Button>
      </Card>
      
      <Card elevation={1}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 className="headline-md">Owed to Alice</h2>
          <span className="body-md" style={{ fontWeight: 600 }}>$120</span>
        </div>
        <p className="body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '16px' }}>Dinner from last week</p>
        <Button variant="secondary">Settle Up</Button>
      </Card>
    </div>
  );
}
