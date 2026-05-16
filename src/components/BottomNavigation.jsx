import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavigation.css';

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
        <div className="nav-icon">📊</div>
        <span className="label-sm">Dashboard</span>
      </NavLink>
      <NavLink to="/analytics" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="nav-icon">📈</div>
        <span className="label-sm">Analytics</span>
      </NavLink>
      <NavLink to="/payment" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="nav-icon center-icon">💸</div>
      </NavLink>
      <NavLink to="/debts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="nav-icon">📒</div>
        <span className="label-sm">Debts</span>
      </NavLink>
      <NavLink to="/goals" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="nav-icon">🎯</div>
        <span className="label-sm">Goals</span>
      </NavLink>
    </nav>
  );
}
