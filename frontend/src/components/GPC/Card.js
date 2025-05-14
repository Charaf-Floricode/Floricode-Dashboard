// src/components/Card.js
import React from 'react';
import './Card.css';
export default function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
