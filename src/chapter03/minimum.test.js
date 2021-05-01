const minimum = require("./minimum");

test("0 and 10", () => {
  expect(minimum(0, 10)).toBe(0);
});

test("0 and -10", () => {
  expect(minimum(0, -10)).toBe(-10);
});
