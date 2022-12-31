import { game, GAME_WORDS_SUM } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should works', () => {
    const input = GAME_WORDS_SUM.example1;
    const value = 4;
    const resp = game(input);
    expect(resp).toEqual(value);
  });
});