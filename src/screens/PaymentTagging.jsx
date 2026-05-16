import React from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Tag from '../components/Tag';

export default function PaymentTagging() {
  return (
    <div>
      <h1 className="headline-lg" style={{ marginBottom: 'var(--spacing-md)' }}>New Payment</h1>
      
      <Card elevation={1}>
        <Input label="Recipient" placeholder="Name, Email, or Phone" />
        <Input label="Amount" type="number" placeholder="$0.00" />
        
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <p className="label-md" style={{ color: 'var(--on-surface-variant)', marginBottom: '8px' }}>Category</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Tag label="Utilities" colorHex="#24389c" />
            <Tag label="Groceries" colorHex="#006e2a" />
            <Tag label="Dining" colorHex="#313e7e" />
            <Tag label="+ Add" colorHex="#757684" />
          </div>
        </div>
        
        <Input label="Note (Optional)" placeholder="What is this for?" />
        
        <Button variant="success" style={{ marginTop: 'var(--spacing-md)' }}>
          Confirm Payment
        </Button>
      </Card>
    </div>
  );
}
