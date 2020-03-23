// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // create an array for storing elements
  let resultsArr = [];
  // helper function
  let helper = function(elements) {
    if (elements.classList && elements.classList.contains(className)){
      resultsArr.push(elements);
    }
    //check if childnode
    if (elements.hasChildNodes()) {
      // get the children
      //if yes, go into childnode recursively
      let children = elements.childNodes;
      for (var i = 0; i < children.length; i++) {
        //add to resultArr
        helper(children[i]);
      }
    }
  }
  //run helper func through document.body
  helper(document.body);


  // return that array
  return resultsArr;
};
