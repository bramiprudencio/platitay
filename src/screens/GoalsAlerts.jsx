import React from 'react';
import Card from '../components/Card';
import Tag from '../components/Tag';

export default function GoalsAlerts() {
  return (
    <div>
      <h1 className="headline-lg" style={{ marginBottom: 'var(--spacing-md)' }}>Goals & Alerts</h1>
      
      <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-sm)' }}>Active Goals</h2>
      <Card elevation={1}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 className="body-lg" style={{ fontWeight: 600 }}>Emergency Fund</h2>
          <Tag label="On Track" colorHex="#006e2a" />
        </div>
        <p className="body-md" style={{ marginTop: '8px', marginBottom: '8px' }}>$4,500 / $10,000</p>
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--surface-container-low)', borderRadius: '4px' }}>
          <div style={{ width: '45%', height: '100%', backgroundColor: 'var(--secondary)', borderRadius: '4px' }}></div>
        </div>
      </Card>
      
      <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-sm)', marginTop: 'var(--spacing-xl)' }}>Recent Alerts</h2>
      <Card elevation={1}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'var(--error-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
            ⚠️
          </div>
          <div>
            <p className="body-md" style={{ fontWeight: 600 }}>Budget Exceeded</p>
            <p className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>You've spent 110% of your Dining budget this month.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
