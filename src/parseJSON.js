// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //check 0 and last index
  //if [ & ]
  //return [ + slice middle + ]
  // if { & }
  //return { + middle + }
  //iterate
  //add to emp var
  //return emp var
  var rmQuotes = function(ele) {
    var endIndex = ele.length -1;
    if (ele[0] === '\"' && ele[endIndex] === '\"') {
      return ele.slice(1, endIndex);
    }
    return ele;
  }
  return rmQuotes(json);
};

var string = 'the quick brown fox';
var num = 1234;
var bool = false;
var und = undefined;
var arr = [1,2,3,true];
var obj = {
  test: true,
  stack: 123
}
console.log('==========================')

console.log('stringified ===', JSON.stringify(string));
console.log('realparse ===', JSON.parse(JSON.stringify(string)));
console.log('testparse ===', parseJSON(JSON.stringify(string)));
console.log('typeof test ===', typeof parseJSON(JSON.stringify(string)));

console.log('==========================')

console.log('stringified ===', JSON.stringify(num));
console.log('realparse ===', JSON.parse(JSON.stringify(num)));
console.log('testparse ===', parseJSON(JSON.stringify(num)));
console.log('typeof test ===', typeof parseJSON(JSON.stringify(num)));

console.log('==========================')

console.log('stringified ===', JSON.stringify(bool));
console.log('realparse ===', JSON.parse(JSON.stringify(bool)));
console.log('testparse ===', parseJSON(JSON.stringify(bool)));
console.log('typeof test ===', typeof parseJSON(JSON.stringify(bool)));

console.log('==========================')

console.log('stringified ===', JSON.stringify(arr));
console.log('realparse ===', JSON.parse(JSON.stringify(arr)));
console.log('testparse ===', parseJSON(JSON.stringify(arr)));
console.log('typeof test ===', typeof parseJSON(JSON.stringify(arr)));

console.log('==========================')

console.log('stringified ===', JSON.stringify(obj));
console.log('realparse ===', JSON.parse(JSON.stringify(obj)));
console.log('testparse ===', parseJSON(JSON.stringify(obj)));
console.log('typeof test ===', typeof parseJSON(JSON.stringify(obj)));

console.log('==========================')