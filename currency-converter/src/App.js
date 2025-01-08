import React, { useState, useEffect } from 'react';  
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';
import { fetchExchangeRates } from './utils/api';
import './index.css'; // Import custom styles

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadExchangeRates = async () => {
      setIsLoading(true);
      try {
        const rates = await fetchExchangeRates(fromCurrency);
        setCurrencies(Object.keys(rates));
        setExchangeRate(rates[toCurrency]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadExchangeRates();
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      setConvertedAmount('0.00');
      setError('Please enter a valid amount.');
      return;
    }
    setConvertedAmount((amount * exchangeRate).toFixed(2));
    setError('');
  };

  return (
    <div className="app-container">
      <div className="converter-card">
        <h1 className="title">Currency Converter</h1>
        {error && <p className="error-message">{error}</p>}
        {isLoading && <p className="loading-text">Loading exchange rates...</p>}

        <CurrencySelector
          label="From:"
          currencies={currencies}
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
        <CurrencySelector
          label="To:"
          currencies={currencies}
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
        
        <AmountInput 
          amount={amount} 
          onAmountChange={setAmount} 
        />

        <button
          onClick={handleConvert}
          className="convert-button"
        >
          Convert
        </button>
        
        {convertedAmount && (
          <ConversionResult 
            convertedAmount={convertedAmount} 
            exchangeRate={exchangeRate} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
