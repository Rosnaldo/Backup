const filterBySpeed = require('./filterBySpeed');

const startedPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Electric', speed: 90 }
];

test('Pokemons with at least 50 of speed', async () => {
  startedPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 });

  const result = await filterBySpeed(startedPokemons, 50) // return serve para promises
  
  expect(result).toStrictEqual(['Charmander', 'Pikachu']);
});

test('If there are not pokemons it returns an error', async () => {
  expect.assertions(1);

  try {
    await filterBySpeed(startedPokemons, 99);
  } catch(error) {
    expect(error).toBe('NO pokémons found');
  }
});
