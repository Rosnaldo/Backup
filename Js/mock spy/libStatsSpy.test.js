const libStats = require('./libStats');

test('testing function call, times called, parameters and returns', () => {
  expect(libStats.healthPoints(5)).toBe(60);

  const spyHealthPoints = jest.spyOn(libStats, 'healthPoints')
    .mockImplementation((value, booster) => value + booster);
  
  expect(spyHealthPoints(8, 3)).toBe(11);
  expect(spyHealthPoints).toHaveBeenCalled();
  expect(spyHealthPoints).toHaveBeenCalledTimes(1);
  expect(spyHealthPoints).toHaveBeenCalledWith(8, 3);

  // const spy = jest.fn()
  //   .mockImplementation((...args) => libStats(...args))

  spyHealthPoints.mockRestore()

  const secondSpyHealthPoints = jest.spyOn(libStats, 'healthPoints')
  secondSpyHealthPoints(5);

  expect(secondSpyHealthPoints).toHaveBeenCalled();
  expect(secondSpyHealthPoints).toHaveBeenCalledTimes(1);
  expect(secondSpyHealthPoints).toHaveBeenCalledWith(5);

  expect(secondSpyHealthPoints(5)).toBe(60);

  expect(secondSpyHealthPoints).toHaveBeenCalledTimes(2);
})