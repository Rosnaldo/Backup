function fetchData(callback) {
  setTimeout(() => {
    callback('peanut botter');
  }, 100);
}

function fetchDataPromise() {
  return new Promise((resolve) => {
    resolve('peanut butter')
  }, 100);
}


function fetchDataPromiseError() {
  return new Promise((resolve, reject) => {
    reject('error')
  }, 100);
}

//Callback
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }
});

// test('the data is peanut butter Promise', () => {
//   return fetchDataPromise().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchDataPromise().catch(e => expect(e).toMatch('error'));
// });

//Promises
test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchDataPromiseError()).rejects.toMatch('error');
});


//await async
test('the data is peanut butter', async () => {
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseError();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
