const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async (fetch) => {
  const headers = {
    Accepts: 'application/json'
  };

  const response = await fetch(API_URL, { headers });
  const data = await response.json();

  return data.joke;
};

module.exports = fetchJoke;