const libStats = require('./libStats');

jest.mock('./libStats');

test('mock healthPoints', () => {
  libStats.healthPoints.mockImplementation((a) => a * 8);
  libStats.healthPoints(2);

  expect(libStats.healthPoints).toHaveBeenCalled();
  expect(libStats.healthPoints).toHaveBeenCalledTimes(1);
  expect(libStats.healthPoints).toHaveBeenCalledWith(2);
  expect(libStats.healthPoints(5)).toBe(40);
});
