import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should works', () => {
    const value = 'Even Prime,Odd Prime,';
    const resp = game(2,3);
    expect(resp).toEqual(value);
  });
});