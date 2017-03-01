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
// const sumLines = (filename) => {
const sumLines = (filename, callback) => {
  const sum = function (inFile) {
    let number = 0;
    const promiseReadFile = function(fileName, options) {
      return new Promise((resolve, reject) => {
        fs.readFile(fileName, options, (error, data) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        });
      });
    };
    promiseReadFile(inFile, { encoding: 'utf8' })
      .then((data) => {
        let lines = data.split('\n');
        lines.pop();
        lines.forEach((num) => {
          number += num;
          console.log(number);
        });
        return;
      })
      .catch(console.error)
      ;
    };
    if (sum) {
      callback(null, sum);
    }
    else {
      callback(new Error('line is not a number.'));
    }
};

module.exports = {
  sumLines,
  // sumLinesOfArbitraryLengthFile,
};
