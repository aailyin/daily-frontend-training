//Question: What will be the output of the code below?

var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);

//The output would be '1undefined'. The if condition statement evaluates using eval,
// so eval(function f(){}) returns function f(){} (which is true). Therefore, inside the if statement,
// executing typeof f returns undefined because the if statement code executes at run time,
// and the statement inside the if condition is evaluated during run time.
