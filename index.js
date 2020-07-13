// Code your solutions in this file

function writeCards(names, eventName) {
  const cardArray = [];
  for (let i=0; i < names.length; i++) {
    cardArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return cardArray;
}

function countDown(num) {
    while (num > 0) {
      console.log(num);
      num -= 1;
    }
    console.log(num);
}
