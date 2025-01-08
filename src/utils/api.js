import axios from 'axios';

const API_KEY = '92044f88b0f5120987db1100'; //API key
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/USD`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw new Error('Unable to fetch exchange rates. Please try again later.');
  }
};
