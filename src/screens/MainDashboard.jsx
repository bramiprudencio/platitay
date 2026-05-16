import React from 'react';
import Card from '../components/Card';
import Tag from '../components/Tag';

export default function MainDashboard() {
  return (
    <div>
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Total Balance</p>
        <h1 className="headline-lg">$12,450.00</h1>
        <Tag label="+2.5% this month" colorHex="#006e2a" />
      </div>

      <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-md)' }}>Recent Transactions</h2>
      
      <Card elevation={1}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #E0E0E0' }}>
          <div>
            <p className="body-md" style={{ fontWeight: 600 }}>Groceries</p>
            <p className="label-md" style={{ color: 'var(--on-surface-variant)' }}>Oct 24, 2026</p>
          </div>
          <p className="body-md" style={{ fontWeight: 600 }}>-$85.20</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px' }}>
          <div>
            <p className="body-md" style={{ fontWeight: 600 }}>Salary</p>
            <p className="label-md" style={{ color: 'var(--on-surface-variant)' }}>Oct 20, 2026</p>
          </div>
          <p className="body-md" style={{ fontWeight: 600, color: 'var(--secondary)' }}>+$4,200.00</p>
        </div>
      </Card>

      <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>Quick Actions</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
        <Card elevation={1} onClick={() => {}} className="clickable">
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>💸</span>
            <p className="body-md" style={{ marginTop: '8px', fontWeight: 600 }}>Send</p>
          </div>
        </Card>
        <Card elevation={1} onClick={() => {}} className="clickable">
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>📥</span>
            <p className="body-md" style={{ marginTop: '8px', fontWeight: 600 }}>Request</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
