const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

// Your previous Plain Text content is preserved below:

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you'd like to use for your interview,
// simply choose it from the dropdown in the top bar.

// You can also change the default language your pads are created with
// in your account settings: https://app.coderpad.io/settings

// Enjoy your interview!



// 1) table / bleat -> true
// 2) god / dog -> true
// 3) A gentle man / elegant man -> true

// function to confirm if the two strs are anagrams
// => bool


function isAnagram(str1, str2) {
  str1 = str2.toLowercase();
  str2 = str2.toLowercase();

  const counter = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === ' ') continue;
    if (counter[str[i]] === undefined) {
      counter[str[i]] = 0;
    }

    counter[str[i]] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === ' ') continue;
    if (!counter[str[i]]) return false;
    counter[str[i]] -= 1; 
  }

  const values = Object.values(counter);
  return !(values.any((el) => el !== 0));
}




// Given: ["table", "bleat", "god", "dog", "dgo", "cat", "I am Lord Voldemort", "Tom Marvolo Riddle"]
// Return: ["table", "bleat", "god", "dog", "dgo", "I am Lord Voldemort", "Tom Marvolo Riddle"]

// helper generateSignature

// => array[str];
function filterAnagrams(words) {
  const signatureCount = {}
  const results = [];

  for (let word of words) {
    const sig = generateSignature(word);

    if (!signatureCount[sig]) {
      signatureCount[sig] = 0;
    }
    signatureCount += 1;
  }

  for (let word of words) {
    const sig = generateSignature(word);
    if (signatureCount[sig] > 1) {
      results.push(word);
    }
  }

  return results;
}

function generateSignature(word) {
  // ... 
  const alphabet = new Array(26).fill(0);
  word = word.toLowercase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ') continue;
    const charIdx = 0// ...get the character order #
    alphabet[charIdx] += 1;
  }

  return alphabet.join('-');
}








