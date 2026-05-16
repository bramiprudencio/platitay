import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

export default function WelcomeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Fake login to bypass firebase for UI testing if credentials fail
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if(email === 'test@platitay.com' && password === 'password') {
         // This is a stub for UI testing without real firebase credentials
         alert("Firebase config missing. Using bypass for demo.");
         return;
      }
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', padding: 'var(--spacing-lg)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 className="headline-lg" style={{ color: 'var(--primary)' }}>Platitay</h1>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Reliable Growth</p>
      </div>
      
      <Card elevation={1}>
        <form onSubmit={handleLogin}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--spacing-md)' }}>Welcome Back</h2>
          <Input 
            label="Email" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Enter your email"
          />
          <Input 
            label="Password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Enter your password"
          />
          {error && <p className="body-sm" style={{ color: 'var(--error)', marginBottom: 'var(--spacing-sm)' }}>{error}</p>}
          <Button type="submit" variant="primary" style={{ marginTop: 'var(--spacing-md)' }}>
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
}
