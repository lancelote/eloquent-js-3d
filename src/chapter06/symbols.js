const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());
