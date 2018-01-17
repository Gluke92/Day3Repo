// CRACKING THE CODE
const message = 'craft block argon meter bells brown croon droop';

function decode(msg) {
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }
  // console.log(cipher['a']);
  return msg.split(' ').map(word => {
    const firstLetter = word[0]; // this is a string
    if (cipher[firstLetter]) {
      return word[cipher[firstLetter]];
    } else {
      return ' ';
    }
  }).join('');

}
decode(message);
console.log(decode(message));

 // console.log(dec[0][0]);
  // msg.split(' ').forEach(word => {
  //   const firstLetter = word[0]; // this is a string
  //   if (cipher[firstLetter]) {
  //     decodedMsg += word[cipher[firstLetter]];
  //   } else {
  //     decodedMsg += ' ';
  //   }
  // });