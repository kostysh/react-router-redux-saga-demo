import fetch from 'isomorphic-fetch';

export const fetchRates = () => fetch('https://blockchain.info/ru/ticker').then(response => response.json());
