import React from 'react';
import './Input.css';

export default function Input({ label, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div className="input-group">
      {label && <label className="input-label label-md">{label}</label>}
      <input
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="input-error-text label-md">{error}</span>}
    </div>
  );
}
