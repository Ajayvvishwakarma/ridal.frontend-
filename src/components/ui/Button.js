// src/components/ui/Button.js
import React from 'react';

export const Button = ({ label, onClick, variant = 'primary', disabled = false }) => {
  const buttonStyle = {
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: variant === 'primary' ? '#2563eb' : '#fff',
    color: variant === 'primary' ? '#fff' : '#333',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {label}
    </button>
  );
};