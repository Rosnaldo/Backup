const API_URL = 'https://fakeapi.com/api/clock-in';

function clockIn(fetch, timestamp, gps = null) {
  return fetch(API_URL, {
    method: 'POST',
    body: { timestamp, gps },
  })
  .then((response) => response.json())
  .then((data) => {
    if(gps) return data.message;
    return `${data.message} (GPS desativado)`
  })
  .catch((error) => error.message);
}

module.exports = clockIn;
