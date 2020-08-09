
const Middleware = function() {};

Middleware.prototype.use = function(fn) {
  const self = this;

  this.go = (function(stack) {
    return function(next) {
      stack.call(self, function() {
        fn.call(self, next.bind(self));
      });
    }.bind(this);
  })(this.go);
};

Middleware.prototype.go = function(next) {
  next();
};


const middleware = new Middleware();

middleware.use(function(next) {
  const self = this;
  setTimeout(function() {
    self.hook1 = true;
    next();
  }, 1000);
});

middleware.use(function(next) {
  const self = this;
  setTimeout(function() {
    self.hook2 = true;
    next();
  }, 1000);
});

const start = new Date();
middleware.go(function() {
  console.log(this.hook1); // true
  console.log(this.hook2); // true
  console.log(new Date() - start); // around 20
});
