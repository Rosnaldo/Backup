function randomDice (sides) {
  return Math.floor(Math.random() * sides) + 1
}

function rollDices() {
  const results = Array.from({ length: 4 }, () => randomDice(6));
  const smallestResult = Math.min(...results);

  results.splice(results.indexOf(smallestResult), 1);

  return results.reduce((total, value) => total + value);
}

test('randomDice', () => {
  randomDice = jest.fn()
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(2)
    .mockReturnValue(5);
  
  // expect(randomDice()).toBe(4);
  // expect(randomDice()).toBe(2);
  // expect(randomDice()).toBe(5);
  // expect(randomDice()).toBe(5);

  expect(rollDices()).toStrictEqual(14);

  expect(randomDice).toHaveBeenNthCalledWith(1, 6);
  expect(randomDice).toHaveBeenNthCalledWith(2, 6);
  expect(randomDice).toHaveBeenNthCalledWith(3, 6);
  expect(randomDice).toHaveBeenNthCalledWith(4, 6);
  expect(randomDice).toHaveBeenCalledTimes(4);
});
