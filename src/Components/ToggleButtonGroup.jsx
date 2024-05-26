// src/components/ToggleButtonGroup.js
import React, { useState } from 'react';
import './ToggleButtonGroup.css';

const ToggleButtonGroup = () => {
  const [activeView, setActiveView] = useState('Decimal View');
  const [currency, setCurrency] = useState('EURO');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="toggle-button-group">
      <div className="view-buttons">
        <button
          className={`toggle-button ${activeView === 'Decimal View' ? 'active' : ''}`}
          onClick={() => handleViewChange('Decimal View')}
        >
          Decimal View
        </button>
        <button
          className={`toggle-button ${activeView === 'Percent View' ? 'active' : ''}`}
          onClick={() => handleViewChange('Percent View')}
        >
          Percent View
        </button>
      </div>
      <div className="currency-dropdown">
        <select value={currency} onChange={handleCurrencyChange} className="dropdown">
          <option value="EURO">EURO</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    </div>
  );
};

export default ToggleButtonGroup;
