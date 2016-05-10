// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// The Promise returned should be rejected.
//

'use strict';

const fs = require('fs');

const sumLines = (filename) =>
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

const sumLinesOfArbitraryLengthFile = (filename) => {
  const rl = require('readline');
  return new Promise((resolve, reject) => {
    const rli = rl.createInterface({
      input: fs.createReadStream(filename),
    });
    let lno = 0;
    let sum = 0;
    rli.on('line', (line) => {
      lno++;
      sum += +line;
    });
    rli.on('close', () => {
      let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
      if (error) {
        reject(error);
      } else {
        resolve(sum);
      }
    });
  });
};

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
