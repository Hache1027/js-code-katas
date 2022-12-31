/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

const game = (s) => {
    const numbers = s.match(/\d+/g);
  
    if (numbers) {
      return numbers.map(Number).reduce((a, b) => a + b);
    } else {
      return 0;
    }
}
function sumOfIntegersInString(s) {
    
  }

  const GAME_WORDS_SUM = Object.freeze({
    example1: 'h3ll0w0rld1',
    example2: 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog',
  });


export {game , GAME_WORDS_SUM};