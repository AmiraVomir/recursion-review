// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var empStr = '';

  // primitive data types
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // check for null
  if (obj === null) {
    return 'null';
  }
  //array
  if (Array.isArray(obj)) {
    var empty = [];
    obj.forEach(element => {empty.push(stringifyJSON(element));
    });
    return '[' + empty.join(',') + ']';
  }

  // objects
  if (typeof obj === 'object') {
      // loop through the keys
    for (let key in obj) {
      // get the current key's value
      let value = obj[key];
      // edge case for functions
      if (typeof value === 'function') {
        return '{}';
      }
      // push the strings into empStr
      empStr += (stringifyJSON(key) + ':' + stringifyJSON(value));
      if (key === Object.keys(obj).pop()) {
        break;
      } else {
        empStr += ',';
      }
    }

    return '{' + empStr + '}';

  }
  // return
  return '' + obj;
};