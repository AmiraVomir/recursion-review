// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var rmQuotes = function(ele) {
    var endIndex = ele.length - 1;
    if (ele[0] === '\"' && ele[endIndex] === '\"') {
      return ele.slice(1, endIndex);
    }
    return ele;
  };

  //string > "'string'" > "string"
  if (json[0] === '\"' && json[json.length - 1] === '\"') {
    return rmQuotes(json);
  }
  //num > "1234" > 1234
  if (json === Number(json)) {
    return Number(json);
  }
  //bool
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  //undefined /null
  if (json === 'null') {
    return null;
  }
  if (json === 'undefined') {
    return undefined;
  }
  //arr
  if (json[0] === '[' && json[json.length - 1] === ']') {
    if (json.length === 2) {
      return [];
    }
    var copy = json.slice(1, json.length - 1); //'1,2,3,true'
    var split = copy.split(','); //['1', '2', '3', 'true']
    var arr = [];
    split.forEach(element => {
      arr.push(parseJSON(element));
    });
    return arr;
  }
  //obj
  if (json[0] === '{' && json[json.length - 1] === '}') {
    if (json.length === 2) {
      return {};
    }
    var empObj = {};
    var copy = json.slice(1, json.length - 1); //"key: value, key2: value2
    //find key
    var pair = copy.split(','); //[key: value, key2:value2]
    var keysArr = [];
    for (var i = 0; i < pair.length; i++) {
      keysArr.push(pair[i].slice(pair[i].indexOf(':')));
    }

    //find val
    var valArr = [];
    for (var i = 0; i < pair.length; i++) {
      valArr.push(pair[i].slice(pair[i].indexOf(':') + 1));
    }
    // var valArr = _.filter(pair, function(ele) { return pair.forEach(element => {var val = pair.slice(pair.indexOf(':') +1)};)})
    // for (var i = 0; i < valArr.length; i++) {
    //   valArr[i] = parseJSON(valArr[i]);
    // }

    for (var i = 0; i < keysArr.length; i++) {
      empObj[keysArr[i]] = valArr[i];
    }
    return empObj;
  }
  return SyntaxError;
};

var string = 'the quick brown fox';
var num = 1234;
var bool = false;
var und = undefined;
var arr = [1, 2, 3, true];
var obj = {
  test: true,
  stack: 123
};