import { JOURNAL } from "./journal.js";

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

const tableFor = (event, journal) => {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;

    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
};

console.assert(tableFor("pizza", JOURNAL)[0] === 76);

const journalEvents = (journal) => {
  let events = [];
  for (const entry of journal) {
    for (const event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
};

console.assert(journalEvents(JOURNAL)[0] === "carrot");

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(`${event}: ${correlation}`);
  }
}
