import { getRandom } from "../../helpers/getRandom";

describe('test function getRandom', () => {
  test('should return random between 1 and 5', () => { 
    const random = getRandom();

    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThan(6);
   })
});