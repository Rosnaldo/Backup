const fetch = require('node-fetch');
const fetchJoke = require('./fetchJokeBack');

jest.mock('node-fetch');

test('should fetch jokes', async () => {
  const joke = {
    'id': '7h23y7fh',
    'joke': 'whiteboards',
    'status': 400,
  };

  fetch.mockImplementation(async () => ({
    json: async () => joke
  }));

  const returnedJoke = await fetchJoke();
  expect(returnedJoke).toEqual('whiteboards');
});
