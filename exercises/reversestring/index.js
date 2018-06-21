// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
//-------------------------------
// function reverse(str) {
//   return str.split('').reverse().join(''); 
// }

// SOLUTION 2
//-------------------------------
// function reverse(str) {
//  let reversed = '';
//  for (let character of str)
//   reversed = character + reversed;
//   return reversed;
// }

// SOLUTION 3
//-------------------------------
// function reverse(str){
//   return str.split('').reduce((reversed, character)=>
//    character + reversed, '');
// }

module.exports = reverse;
