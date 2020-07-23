const pokeTips = require('./pokeTips.js');

test('poketips returns the string we expect', (done) => {
  expect.assertions(1);

  const callback = (data) => {
    expect(data).toBe('Bulbasaur é o melhor pokémon para começar.');
    done();
  };

  pokeTips(callback);
});
