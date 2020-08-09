class Pipeline {
  constructor(value) {
    this.value = value;
    this.callStack = [];
  }

  add(cb) {
    this.callStack.push(cb);
  }

  execute() {
    return function() {

    }
  }
  // const pipe = (...cbs) => (value) =>
  // cbs.reduce((acc, cb) => cb(acc), value);
}