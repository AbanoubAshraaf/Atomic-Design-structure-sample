import { isValidAge } from "..";

describe("components/utils", () => {
  test("return true with valid age", () => {
    const age = isValidAge(10)
    expect(age).toBeTruthy()
  });

  test("return false with negative age", () => {
    const age = isValidAge(-10)
    expect(age).toBeFalsy()
  });

  test("return false with decimal age", () => {
    const age = isValidAge(10.5)
    expect(age).toBeFalsy()
  });
});
