const toStringSymbol = Symbol("toString");

const stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};

console.log(stringObject[toStringSymbol]());
