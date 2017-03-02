// The following function sums the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// the Promise returned should be rejected.
//

'use strict';

const fs = require('fs');

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
const sumLines = (filename) => {
  // let's read a file
  const promiseReadFile = function (fileName, options) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, options, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    });
};

  return promiseReadFile(filename, { encoding: 'utf8' })
    // new promise after the file is resolved
    .then((lines) => {
      // starting line number
      let lno = 0;
      // split the lines at each line into an array
      // reduce the array down to one number
      // prev is the accumulator, curr is the current value
      // i is the current index
      let sum = lines.split('\n').reduce((prev, curr, i) => {
        // reassign lno as the current index value
        lno = i;
        // force add current value to the accumulator
        // and return the sum as a number
        return prev+ (+curr);
        // callback ends
        // callback was the first argument in .reduce LOL
        // second argument is 0
        // 0 is our initial value
      }, 0);
      // definition of sum is over LOL but we're still in the .then
      // define our error:
      // if the sum is Not a Number we have a new Error that tells us the
      // line is not a number
      let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
      // if there's no error, return the sum
      if(!error) {
        return sum;
        // otherwise toss us the error
      } else {
        throw error;
      }

      // .then ends here!
    });
};

module.exports = {
  sumLines,
  // sumLinesOfArbitraryLengthFile,
};
