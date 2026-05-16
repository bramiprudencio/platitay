import React from 'react';
import './Tag.css';

export default function Tag({ label, colorHex = '#24389c' }) {
  // Convert hex to rgb for opacity background
  const hex2rgb = (hex) => {
    if (!hex) return '36, 56, 156';
    let c = hex.substring(1);
    if(c.length === 3){
        c = c.split('').map(char => char + char).join('');
    }
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  const rgb = colorHex.startsWith('#') ? hex2rgb(colorHex) : '36, 56, 156';

  return (
    <span 
      className="tag label-md"
      style={{
        backgroundColor: `rgba(${rgb}, 0.1)`,
        color: colorHex
      }}
    >
      {label}
    </span>
  );
}
