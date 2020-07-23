const filterBySpeed = (starterPokemons = [], minimumSpeed = 0) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => {
        const bySpeed = starterPokemons
          .filter(pokemon => pokemon.speed >= minimumSpeed)
          .map(pokemon => pokemon.name);
        
        if (bySpeed.length > 0) return resolve(bySpeed);

        return reject('No pokémons found');
      }, 1500
    )
  );

module.exports = filterBySpeed;
