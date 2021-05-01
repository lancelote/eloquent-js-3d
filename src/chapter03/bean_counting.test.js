const { countBs, countChar } = require("./bean_counting");

describe("test countBs", () => {
  test("BBS", () => {
    expect(countBs("BBS")).toBe(2);
  });
});

describe("test countChar", () => {
  test("kakkerlak", () => {
    expect(countChar("kakkerlak", "k")).toBe(4);
  });
});
