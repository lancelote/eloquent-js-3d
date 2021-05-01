let journal = [];

const roundBy = (number, places) => {
  const shift = 10 ** places;
  return Math.round((number + Number.EPSILON) * shift) / shift;
};

const addEntry = (events, squirrel) => {
  journal.push({ events, squirrel });
};

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

const phi = (table) => {
  //      11         00         10         01
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
};

console.assert(roundBy(phi([76, 9, 4, 1]), 3) === 0.069);
