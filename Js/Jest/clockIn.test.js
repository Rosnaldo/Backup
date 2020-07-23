const clockIn = require('./clockIn');

describe('clockIn', () => {
  test('If the function exists', () => {
      expect(typeof(clockIn)).toBe('function');
  });

  const fetch = jest.fn(() =>  
    Promise.resolve({
      json: () => Promise.resolve({
          message: 'A hora foi registrada com sucesso',
      }),
  }));

  const timestamp = new Date().toJSON();

  describe('when there is no GPS', () => {
      test('sends a request with only the timestamp and report sucess', () => {
          const clockInPromise = clockIn(fetch, timestamp);
          expect(fetch).toHaveBeenCalledWith('https://fakeapi.com/api/clock-in', {
              method: 'POST',
              body: {timestamp, gps: null}    
          });

          return clockInPromise
              .then((data) => expect(data).toEqual('A hora foi registrada com sucesso (GPS desativado)'));
      });
  });

  describe('when reports error', () => {
    const fetch = jest.fn(() => Promise.reject({
      message: 'TimeOut',
    }));

    test('sends a request with only the timestamp', () => {
      return clockIn(fetch, timestamp)
        .then((error) => expect(error).toEqual('TimeOut'));
    });
  });
});


