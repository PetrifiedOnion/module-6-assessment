const { shuffleArray } = require("./utils");

const testingArray = [1776, 1, 69, 77, 490];
describe("shuffleArray should", () => {
  test("Ensure that shuffleArray returns an array", () => {
    expect(Array.isArray(shuffleArray(testingArray))).toBe(true);
  });
});

it("Ensure that shuffleArray returns an array of equal length as the argument sent in", () => {
  expect(shuffleArray(testingArray)).toHaveLength(5);
});
