'use strict';

const nouns = [
  "cat",
  "dog",
  "hamster",
  "parrot",
  "dolphin"
]

function arrayToSentence (arr) {
  const last = arr.pop(); //removes last element from array and returns that element
  return arr.join(', ') + ' and ' + last;
}

console.log(`My favourite animals are the ${arrayToSentence(nouns)}.`);
