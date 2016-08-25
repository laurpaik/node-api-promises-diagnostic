// 1.  In the comment below, explain three advantages of using promises
//     intead of callbacks.
/*
  Your answer here.
*/

// 2.  The following function sums the numbers in a file.
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
const sumLines = (filename) =>

// const sumLines = (filename, callback) => {
  new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
      let lno = 0;
      let sum = lines.split('\n').reduce((prev, curr, i) => {
        lno = i;
        return prev + (+curr);
      }, 0);
      let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
      if (error) {
        reject(error);
      } else {
        resolve(sum);
      }
    });
  });

module.exports = {
  sumLines,
};
