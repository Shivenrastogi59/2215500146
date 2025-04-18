const axios = require('axios');

const API_ENDPOINTS = {
  p: 'http://20.244.56.144/evaluation-service/primes',
  f: 'http://20.244.56.144/evaluation-service/fibo',
  e: 'http://20.244.56.144/evaluation-service/even',
  r: 'http://20.244.56.144/evaluation-service/rand',
};

const AUTH_TOKEN = ''; //working upon the access token 

const validIds = Object.keys(API_ENDPOINTS);

async function fetchNumbers(id) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 500);

  try {
    const response = await axios.get(API_ENDPOINTS[id], {
      signal: controller.signal,
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });
    clearTimeout(timeout);
    console.log("Response from 3rd-party API:", response.data);

    return response.data.numbers || [];
  } catch (error) {
    clearTimeout(timeout);
    console.error(`Failed fetching ${id}:`, error.message);
    return [];
  }
}

module.exports = { fetchNumbers, validIds };
