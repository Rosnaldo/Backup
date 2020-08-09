const data = [
  { name: "Sando", age: 18, drive: true, salary: 1000.0, genre: 'male' },
  { name: "Sandy", age: 23, drive: false, salary: 2000.0, genre: 'female' },
  { name: "Falcon", age: 50, drive: true, salary: 10000.0, genre: 'male' },
  { name: "Princy", age: 35, drive: true, salary: 3500.0, genre: 'female' },
  { name: "Kensy", age: 20, drive: false, salary: 3500.0, genre: 'female' },
  { name: "Jeny", age: 18, drive: true, salary: 5400.0, genre: 'female' },
];

const doesDrive = (arr) => arr.filter((item) => item.drive);
const greateSalary = (arr) => arr.filter((item) => item.salary > 3000);
const isOlder = (arr) => arr.filter((item) => item.age > 21);
const isWoman = (arr) => arr.filter((item) => item.genre === 'female');

console.log(
  doesDrive(
    greateSalary(
      isOlder(
        isWoman(data),
      )
    )
  )
);


const pipe = (...cbs) => (value) =>
  cbs.reduce((acc, cb) => cb(acc), value);

console.log(pipe(doesDrive, greateSalary, isOlder, isWoman)(data));
