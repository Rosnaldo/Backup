const fetch = require('node-fetch')
const fetchJoke = require('./fetchJokeBack')

jest.mock('node-fetch');

it('should fetch jokes', async () => {
  const jokeData = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  };

  fetch.mockImplementation(async () => ({
    json: async () => jokeData
  }));

  const joke = await fetchJoke()
  expect(joke).toEqual('Whiteboards ... are remarkable.')
});