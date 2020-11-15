const isEven = require("./recursion");

test("50", () => {
    expect(isEven(50)).toBe(true);
});

test("75", () => {
    expect(isEven(75)).toBe(false);
});

test("-1", () => {
    expect(isEven(-1)).toBe(false);
});
