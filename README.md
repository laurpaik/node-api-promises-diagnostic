[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Node Promises Diagnostic

This diagnostic assesses your ability to use native Promises with the Node File
System module.

## Prerequisites

-   [ga-wdi-boston/node-api-promises](https://github.com/ga-wdi-boston/node-api-promises)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch, named `response`.
1.  Follow the directions given in [`lib/diagnostic.js`](lib/diagnostic.js).
1.  Before the alotted time is up, push to your fork and issue a pull request.

Your pull request description should contain a "fist to five" for comfort and
clarity. Additionally, you should mention the resources you used to help you
complete this assessment. For example:

```md
Comfort: 3
Clarity: 3

I used Google and my class notes to help with this assessment.
```

You may wish to refer to ["How do I submit diagnostics?"](https://github.com/ga-wdi-boston/meta/wiki/Diagnostics)
and other [FAQs](https://github.com/ga-wdi-boston/meta/wiki/) related to
[forking, cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone),
and [pull requests](https://github.com/ga-wdi-boston/meta/wiki/PullRequest).

You may use **any resource** other than each other to complete this diagnostic.
This includes referencing talk materials, appropriate documentation, and
searching for help online.

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors.

Test your code by running `grunt test`.


## Other Notes on another solution that wasn't done in Rachel's review:
```javascript
// this is the one that's closer to the solution branch
// tbh this is just a condensed version of Rachel's solution
const sumLines = (filename) => // we don't open curly braces here
// implicit return at the end because of no curly brace, I think
  new Promise((resolve, reject) => {
    // let's read a file <3
    fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
      // again, start line number as 0
      let lno = 0;
      // define sum as all the data in the file we read
      // but split by line
      // reduce it down
      let sum = data.split('\n').reduce((prev, curr, i) => {
        lno = i;
        return prev + (+curr);
      }, 0);
      // define the error, same as in Rachel's solution
      let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
      // if we hit an error, the promise gets rejected!
      if (error) {
        reject(error);
      }
      // if we don't hit an error, then we resolve it
      // with whatever sum returns
      resolve(sum);
    });
  });
  // up until it's done reading the file
  // and finding out if there's an error,
  // the promise is unfulfilled!
  // line 69(ayy) and 73 just tell us
  // what the function will do when it's ready!
```

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
