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
  if (Array.isArray(obj)) {
    var empArr = [];
    obj.forEach(element => {empArr.push(stringifyJSON(element));
    });
    return  "" + '[' + empArr.join(',') + ']';
  }



  // objects

  //return
  return '' + obj;
};