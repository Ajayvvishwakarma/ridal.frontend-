// src/components/ui/Input.js
import React from 'react';

export const Input = ({ label, type = "text", placeholder, error, style = {}, onChange, name, value, disabled }) => {
  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '12px 16px',
    marginBottom: '10px',
    border: error ? '1px solid #e53935' : '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#333',
    ...style
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      {label && <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '5px', color: '#333' }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={inputStyle}
        name={name}
      />
      {error && <p style={{ color: '#e53935', fontSize: '12px', marginTop: '5px' }}>{error}</p>}
    </div>
  );
};