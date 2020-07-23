const filterBySpeed = require('./filterBySpeed');

const startedPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Electric', speed: 90 }
];

test('Pokemons with at least 50 of speed', () => {
  expect.assertions(1);

  startedPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 });

  return filterBySpeed(startedPokemons, 50) // return serve para promises
    .then((result) =>
      expect(result).toStrictEqual(['Charmander', 'Pikachu'])
    );
});

test('If there are not pokemons it returns an error', () => {
  expect.assertions(1);

  return filterBySpeed(startedPokemons, 99).catch((error) => {
    expect(error).toBe('No pokémons found')
  })
});
