exports.min = function min (array) {
  return !array ? 0 : array.reduce((a, b) => Math.min(a, b), 0);
}

exports.max = function max (array) {
  return !array ? 0 : array.reduce((a, b) => Math.max(a, b), 0) ;
}

exports.avg = function avg (array) {
  return !array || array.length === 0 ? 0 : array.reduce((a, b) => (a + b)) / array.length;
}
