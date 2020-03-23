// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // primitive data types
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // arrays
  // if (Array.isArray(obj)) {
  //   let result = [];
  //   if (!obj.length) {
  //     return '[]';
  //   } else {
  //     // loop thru array
  //     for (var i = 0; i < obj.length; i++) {
  //       result.push(stringifyJSON(obj[i]));
  //     }
  //     return '[' + result + ']';
  //   }
  // }
  var empArr = [];
  if (Array.isArray(obj)) {
    obj.forEach(element => {empArr.push(stringifyJSON(element));
    });
    return '[' + empArr + ']';
  }

  // objects
  if (typeof obj === 'object') {
    // get the objects keys
    let objKeys = Object.keys(obj);
    // if the obj is empty
    if (!objKeys.length) {
      //return empty {}
      return '{}';
    } else {
      // loop through the keys
      for (let key in obj) {
        // get the current key's value
        let value = obj[key];
        // edge case for functions
        if (typeof value === 'function') {
          return '{}';
        }
        // recursively build the key and value strings
        let keyStr = stringifyJSON(key);
        let valueStr = stringifyJSON(obj[key]);
        // push the strings into empArr
        empArr.push(keyStr + ':' + valueStr)
        if (keyStr === Object.keys(obj).pop()) {
          break;
        } else {
          empArr.push(',');
        }
      }
    }
    // create a string variable
    let resultStr = empArr.join('');
    return '{' + resultStr + '}';

  }
  // return
  return '' + obj;
};