class PipeIterator {
  constructor(...middlewares) {
    this.middlewares = middlewares;
  }

  use(data) {
    let iterator = 0;
    if (iterator < this.middlewares.length) {
      const firstMiddleware = this.middlewares[iterator];
      const next = () => {
        iterator++;
        if (iterator < this.middlewares.length) {
          const nextMiddleware = this.middlewares[iterator];
          return nextMiddleware(data, next);
        }
      };
      return firstMiddleware(data, next);
    }
  }
}

const logMiddleware = (data, next) => {
  console.log('logMiddleware1')
  if (data === '1') return '1';
  data.email = 'email';
  return next();
};

const logMiddleware2 = (data, next) => {
  console.log('logMiddleware2')
  if (data === '2') return '2';
  return next();
};

const logMiddleware3 = (data, next) => {
  console.log('logMiddleware3')
  if (data === '3') return '3';
  return next();
};

const func = (data) => {
  const pipe = new PipeIterator(logMiddleware, logMiddleware2, logMiddleware3);
  return pipe.use(data);
}
console.log('func', func('1'))