import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '', style }) {
  // variants: 'primary', 'secondary', 'success'
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
