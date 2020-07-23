const fetchJoke = require('./fetchJoke')

it('fetches a joke', async () => {
  const jokeData = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  };

  const fetchMock = jest.fn()
    .mockImplementation(async () => ({
      json: async () => jokeData
    }));

  const joke = await fetchJoke(fetchMock)
  expect(joke).toEqual('Whiteboards ... are remarkable.')
})