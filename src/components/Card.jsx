import React from 'react';
import './Card.css';

export default function Card({ children, className = '', elevation = 1, onClick }) {
  return (
    <div 
      className={`card elevation-${elevation} ${className} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
