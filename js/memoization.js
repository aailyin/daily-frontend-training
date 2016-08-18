/* Sometimes huge calculation needs occur. Thats where memoization pattern helps.
Memoization is an optimization technique used to speed up computer programs by storing 
the results of expensive function calls and returning the cached result when the same 
inputs occur again. (Wiki)

Here's a simple example:
*/

function factorial() {
	factorial.cache = {};
	function f(n) {
		var result;
		if(n in factorial.cache) {
			result = factorial.cache[n]	
		} else {
			result = n!=1 ? n*f(n-1) : n; // recursion to calculate factorial
			factorial.cache[n] = result;  // caching transitional result
		}
		return result;
	}
	return f;
} 

/*
Now a call like factorial()(5) will calculate 5! - return 120 and cache 1!, 2!, 3!, 4! and 5! itself.
Next time the result wil be returned immediately 
*/