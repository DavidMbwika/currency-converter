import React from 'react';

function ConversionResult({ convertedAmount, exchangeRate }) {
  return (
    <div>
      <h2>Converted Amount: {convertedAmount}</h2>
      <p>Exchange Rate: {exchangeRate}</p>
    </div>
  );
}

export default ConversionResult;
