'use strict';

const MESSAGE = 'craft block argon meter bells brown croon droop';

function decode(msg) {
  const key = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  function compareAgainstKey(word) {
    const first = word[0];

    // Ternary operation!
    // is the first letter in the key?
    // if so, return the appropriate letter from the word
    // if not, return an empty space
    return key[first] ? word[key[first]] : ' ';
  }

  return msg
    // split the string into an array
    .split(' ')
    // map over that array with the fn defined above
    .map(compareAgainstKey)
    // put the array back together
    .join('');
}

console.log(decode(MESSAGE));  // => 'for loop'