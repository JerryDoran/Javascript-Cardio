/* jshint esversion: 6 */

// CHALLENGE 1: REVERSE A STRING
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
  // Turn passed in string into an array of characters
  // return str.split('').reverse().join('');

  // ********************************************
  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  // ********************************************
  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  //*********************************************
  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  //*********************************************
  // let revString = '';
  // str.split('').forEach(function(char) {
  //   revString = char + revString;
  // });
  // return revString;

  //*********************************************
  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  //*********************************************
  // return str.split('').reduce(function(revString, char) {
  //   return char + revString;
  // }, '');

  //*********************************************
  return str.split('').reduce((revString, char) => char + revString, '');
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if paindrome and false if not.
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === false
function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// ex. reverseInt(521) === 125
function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}

// CHALLENGE 4: CAPITAL LETTERS
// Return a string with the first letter of every word capitalized
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  //
  // return strArr.join(' ');

  //**************************************************
  // return str.toLowerCase().split(' ').map(function(word) {
  //   return word[0].toUpperCase() + word.substr(1);
  // }).join(' ');

  //**************************************************
  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
}

// CHALLENGE 5: MAX CHARACTER.
// Return a character that is most common in a string.
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // Create an empty object literal
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      // Add one to the character if it exists
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  // console.log(charMap);

  for(let char in charMap) {
    /*jshint -W087 */
    // debugger;
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.  For multiples of
// 3, instead of the number, print "Fizz", for multiples of 5, print "Buzz".  For numbers
// which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// CHALLENGE 7: LONGEST WORD.
// Return the longest word of a string.
// If more than one longest word put into array.
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Jerry') === ['hello', 'there', 'jerry']
function longestWord(sen) {
  // The match with an expression will strip off any puncuation that is in the sentence
  // and a filtered array will be created.
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  // const sorted = wordArr.sort(function(a, b) {
  //   return b.length - a.length;
  // });

  // Can use ES6 arrow function
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // if multiple words then put into array.
  // const longestWordArr = sorted.filter(function(word) {
  //   return word.length === sorted[0].length;
  // });

  // Use ES6 arrow function
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

  // Check if more than one array value
  if(longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length.
// ex. chunkArray([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6],[7]]
// ex. chunkArray([1,2,3,4,5,6,7],2) === [[1,2],[3,4],[5,6],[7]]
function chunkArray(arr, len) {
  // SOLUTION 1****************************************************************
  // Initialize chunked array
  // const chunkedArr = [];

  // Set index
  // let i =0;

  // Loop while index is less than the array lenght
  // while(i < arr.length) {
    // Slice out from index to the index + chunck length and push on to the chunked array.
    // chunkedArr.push(arr.slice(i, i + len));

    // Increment by chunk length
    // i += len;


  // }

  // return chunkedArr;

  // SOLUTION 2**************************************************************************
  const chunkedArr = [];

  // Loop through array
  arr.forEach(function(item) {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if there is a last element and if last length is equal to the chunk length
    if(!last || last.length === len) {
      chunkedArr.push([item]);
    } else {
      last.push(item);
    }
  });

  return chunkedArr;
}

// CHALLENGE 9: FLATTEN ARRAY.
// Take an array of arrays and flatten to a single array.
// ex. flattenArray[[1,2],[3,4],[5,6],[7]] = [1,2,3,4,5,6,7]
function flattenArray(arrays) {
  // SOLUTION 1******************************************************
  // return arrays.reduce(function(a, b) {
  //   return a.concat(b);
  // });

  // return arrays.reduce((a, b) => a.concat(b));

  // SOLUTION 2******************************************************
  // return [].concat.apply([], arrays);

  // SOLUTION 3******************************************************
  return [].concat(...arrays);
}

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not.
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}

// Helper function
function formatString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// CHALLENGE 11: LETTER CHANGES
// Changes every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str){
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if(char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return newStr;
}

// CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex. addAll(2,5,6,7) === 20

// SOLUTION 1: ES5*******************************************************
// function addAll() {

  // This will return an array.
  // return arguments;

  // Convert 'args' to an array old style
  // var args = Array.prototype.slice.call(arguments);
  // var total = 0;
  //
  // for(let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  //
  // return total;

// }

// SOLUTION 2: ES6*******************************************************
function addAll(...numbers) {
  // Will return an array using '...numbers'.
  // return rest;

  // let total = 0;
  // numbers.forEach(function(num) {
  //   total += num;
  // });
  //
  // return total;

  // Use arrow function
  // let total = 0;
  // numbers.forEach(num => (total += num));
  // return total;

  // Use reduce
  return numbers.reduce((accumulator, current) => accumulator + current);
}

// CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) === 17
function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(num) {
    for(let j = 2; j < num; j++) {
      if(num % j === 0) {
        return false;
      }
    }
    return true;
  }
  for(let i = 2; i <= num; i++) {
    if(checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 14: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments.
// Return leftover values in an array.
// ex. seekAndDestroy([2,3,4,6,6, 'hello'], 2, 6) === [3,4, 'hello']

// SOLUTION 1: USING ARGUMENTS, INDEXOF AND FILTER
// function seekAndDestroy(arr) {
//
//   const args = Array.from(arguments);
//   // return args;
//   // return arr;
//
//   function filterArray(arr) {
//     // Return true if NOT in the array
//     return args.indexOf(arr) === -1;
//   }
//
//   return arr.filter(filterArray);
// }

// SOLUTION 2: USING ...REST, FILTER AND INCLUDES
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

// CHALLENGE 14: SORT BY HEIGHT
// Some people are standing in a row in a park.  There are trees between them which
// cannot be moved.  Rearange the people by their heights in a non-descending order
// without moving the trees.
// ex. a = [-1, 150, 190, 170, -1, -1, 180, 160]
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  // Store position of items in array
  const arr1 = [];

  // Store values of the array not equal to -1
  const arr2 = [];

  // arr.forEach((val, i) => {
  //   if(val === -1) {
  //     arr1.push(i);
  //   } else {
  //     arr2.push(val);
  //   }
  // });

  arr.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

  const sortArr = arr2.sort((a, b) => a - b);
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  return sortArr;
}

// CHALLENGE 15: MISSING LETTERS
// Find the missing letter in the passed letter range and return it.  If all letters are
// present, return 'undefined'
// ex. missingLetters("abce") == "d"
//     missingLetters("abcdefghjklmno") == "i"
//     missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
function missingLetters(str) {
  // Returns an integer(Ascii value) of the first character in the string.
  let compare = str.charCodeAt(0);
  let missing;

  // Turn string into an array
  str.split('').map((char, i) => {
    if(str.charCodeAt(i) == compare){
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// CHALLENGE 16: EVEN & ODD SUMS.
// Take an array and return an array of the sums of even and odd numbers.
// ex. evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? evenSum += num : oddSum += num));

  return [evenSum, oddSum];
}

// Call function
// const a = [-1, 150, 190, 170, -1, -1, 180, 160];
const output = evenOddSums([50, 60, 60, 45, 71]);
console.log(output);
