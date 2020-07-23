const fetchJoke = require('./fetchJokeFront');

it('should fetch jokes', async () => {
  const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(async () => {
    const joke = {
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    };

    return {
      json: async () => joke
    }
  })

  const joke = await fetchJoke()
  expect(joke).toEqual('Whiteboards ... are remarkable.')
});