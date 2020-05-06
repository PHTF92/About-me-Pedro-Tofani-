let count = 0;
const counter = {
  increment() {
    count += 1;
  },
  getCount() {
    return count;
  }
};

const app = counter => {
  counter.increment();
  counter.increment();
};

app(counter)
console.log(count)

exports.app = app;
exports.counter = counter;
