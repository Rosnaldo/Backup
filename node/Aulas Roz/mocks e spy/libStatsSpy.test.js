const libStats = require('./libStats');

test('testing spy', () => {
  const spyHealthPoints = jest.spyOn(libStats, 'healthPoints');

  //  ----- spy ------
  // const spyHealthPoints = jest.fn()
  //  .mockImplementation((...args) => libStats.healthPoints(...args))

  // ----- mock -------
  // const spyHealthPoints = jest.fn()
  // .mockImplementation((b) => b * 3)

  spyHealthPoints(5);

  expect(spyHealthPoints).toHaveBeenCalled();
  expect(spyHealthPoints).toHaveBeenCalledTimes(1);
  expect(spyHealthPoints).toHaveBeenCalledWith(5);
  expect(spyHealthPoints(5)).toBe(10);
  expect(spyHealthPoints).toHaveBeenCalledTimes(2);

  spyHealthPoints.mockRestore();
});