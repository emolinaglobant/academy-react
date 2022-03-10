import { getDifficulty } from "../../helpers/getDifficulty";

describe("test on function getDifficulty", () => {
  test("should select the correct difficulty", () => {
    const difficulty = getDifficulty(5);
    expect(difficulty).toEqual("hard");
  });

  test("should not select difficulty", () => {
    const difficulty = getDifficulty();
    expect(difficulty).toEqual();
  });
});
