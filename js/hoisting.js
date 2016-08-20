(function () {
  var x = 1;
  function x() {}
  console.log(x);   // 1
})();

// Function x will be hoisted in the start of scope and then
// x will be reinitialized by value 1.
//
// Good explanation is here: 
// http://adripofjavascript.com/blog/drips/variable-and-function-hoisting