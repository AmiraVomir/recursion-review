// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // primitive data types
  let stringify = '';
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'null') {
    return stringify += obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }



  // arrays




  // objects

};
