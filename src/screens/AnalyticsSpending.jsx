import React from 'react';
import Card from '../components/Card';

export default function AnalyticsSpending() {
  return (
    <div>
      <h1 className="headline-lg" style={{ marginBottom: 'var(--spacing-md)' }}>Analytics</h1>
      
      <Card elevation={1}>
        <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-sm)' }}>Spending Breakdown</h2>
        <div style={{ height: '200px', backgroundColor: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="body-md" style={{ color: 'var(--on-surface-variant)' }}>[ Chart Placeholder ]</span>
        </div>
      </Card>
      
      <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>Top Categories</h2>
      <Card elevation={1}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="body-md">Housing</span>
          <span className="body-md" style={{ fontWeight: 600 }}>$1,500</span>
        </div>
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--surface-container-low)', borderRadius: '4px', marginBottom: '16px' }}>
          <div style={{ width: '60%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="body-md">Food</span>
          <span className="body-md" style={{ fontWeight: 600 }}>$450</span>
        </div>
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--surface-container-low)', borderRadius: '4px', marginBottom: '16px' }}>
          <div style={{ width: '25%', height: '100%', backgroundColor: 'var(--tertiary)', borderRadius: '4px' }}></div>
        </div>
      </Card>
    </div>
  );
}
