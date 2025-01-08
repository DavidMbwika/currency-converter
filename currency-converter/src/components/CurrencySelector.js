import React from 'react';

function CurrencySelector({ label, currencies, selectedCurrency, onCurrencyChange }) {
  return (
    <div>
      <label>
        {label}
        <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default CurrencySelector;
