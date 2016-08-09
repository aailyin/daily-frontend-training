// There's an input string, example:
var inputString = "function parseString(targetString) {	var bracketsStack = [],i = 0,strLength = targetString.length;" +
				  "for( ; i < strLength; i += 1 ) {	if ( closingBrackets.indexOf(targetString[i]) != -1 ) { if ( bracketsMap[bracketsStack[bracketsStack.length-1]] == targetString[i] )  {" +
				  "bracketsStack.pop();} else {return {status: 'incorrect',position: i + 1};}} else {	if  (Object.keys(bracketsMap).indexOf(targetString[i] ) != -1 ) {" +
				  "bracketsStack.push(targetString[i]);}}}if(!bracketsStack.length) {	return {status: 'correct',position: 'none'};}}";
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

/*
Dont judge too hard
The implementation could look like this: 
*/

function parseString(targetString) {
	var bracketsStack = [],
	closingBrackets = ['}',')',']'],
	bracketsMap = {
		'{': '}',
		'(': ')',
		'[': ']'
	},
	i = 0,
	strLength = targetString.length;

	for( ; i < strLength; i += 1 ) {
		if ( closingBrackets.indexOf(targetString[i]) != -1 ) {
			if ( bracketsMap[bracketsStack[bracketsStack.length-1]] == targetString[i] )  {
				bracketsStack.pop();
			} else {
				return {
					status: 'incorrect',
					position: i + 1
				};
			}
		} else {
			if  (Object.keys(bracketsMap).indexOf(targetString[i] ) != -1 ) {
				bracketsStack.push(targetString[i]);
			}
		}
	}

	if(!bracketsStack.length) {
		return {
			status: 'correct',
			position: 'none'
		};
	}
}

console.log(parseString(inputString).status);
console.log(parseString(inputString).position);
console.log(inputString);

/* We could use Object.values(bracketsMap) instead of closingBrackets, but that technology is in development :) */