const axios = require('axios');

const API_ENDPOINTS = {
  p: 'http://20.244.56.144/evaluation-service/primes',
  f: 'http://20.244.56.144/evaluation-service/fibo',
  e: 'http://20.244.56.144/evaluation-service/even',
  r: 'http://20.244.56.144/evaluation-service/rand',
};

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNTc0MzQ0LCJpYXQiOjE3NDM1NzQwNDQsImIzcyI6IkFmZm9yZG11ZCIsImp0aSI6ImQ5Y2JjNjk5LTRhMjctNDRhNS04ZDU5LThiMWJlZmE4MTZkYSIsInN1YiI6InJhbWtyaXNobmFAYWJjLmVkdSIsIm5hbWUiOiJyYW9ga3Jpc2huYSIsInJvbGxObyI6ImFhMWJiIiwWNjZXN2Q29kZSI6InhQN0Q0YIsImNsaWVudEljoiZDljYmI2OTktNmEyNy00NGE1LThkNTktOGIxYmVmYTGxNmRhiIwiY2xpZW50U2VjcmV0IjoidFZKYWFhUkJTZVhjUlh1TSJ9.YApD98gq0IN_0Ww7JMfmuuFk1m4hLTm7AIcLDcLAzVg';

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
