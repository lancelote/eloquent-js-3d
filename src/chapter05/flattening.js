const flatten = (array) => {
  return array.reduce((acc, x) => acc.concat(x), []);
};

console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
