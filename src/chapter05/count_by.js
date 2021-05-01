export const countBy = (items, groupName) => {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((count) => count.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }

  return counts;
};

console.log(countBy([1, 2, 3, 4, 5], (x) => x > 2));
// [ { name: false, count: 2 }, { name: true, count: 3 } ]
