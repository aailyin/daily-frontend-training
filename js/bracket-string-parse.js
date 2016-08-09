// There's an input string, example:
var inputString = '[cdvb(gh]){ds*}))--56sdg}';
/* The task is to pass that string to some function, 
   which whould check whether all brackets are used in an appropriate way,
 */

//Answer hint:

 /*
The main idea is to use stack. Going through char array and putting opening brackets in stack.
as soon as we meet closing bracket - we check if the last bracket in stack is corresponding to it.
If not - error. If yes - pop last bracket from the stack and continue iteration.

BTW: the string in given example would return something like false  :)
 */