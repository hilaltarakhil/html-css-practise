let counter = 0;

module.exports = {
  incermentCounter() {
    counter = counter + 1;
  },
  getCounter() {
    return counter;
  },
};
