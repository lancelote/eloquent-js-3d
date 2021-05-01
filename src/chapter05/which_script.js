import { SCRIPTS } from "./scripts.js";

export const countBy = (items, groupName) => {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(count => count.name === name);
    if (known === -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }

  return counts;
}

export const characterScript = code => {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

export const testScripts = (text) => {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name !== "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total === 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
};

console.log(testScripts("helloмирübrigens"));
// 81% Latin, 19% Cyrillic
