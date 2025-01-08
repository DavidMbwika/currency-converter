import React from 'react';

function AmountInput({ amount, onAmountChange }) {
  return (
    <div>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default AmountInput;
