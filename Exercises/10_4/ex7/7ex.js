let count = 0;
const counter = {
  add(val) {
    count += val;
  },
  getCount() {
    return count;
  }
};

const multipleAdd = counter => {
  counter.add(15);
  counter.add(20);
};
    
module.exports = multipleAdd;