var x = 1000/0;
console.log(typeof x);       // 1) ?
console.log(typeof 1000/0);  // 2) ?

// Answer: 1) "number"; 2) "NaN"
// In the first case 1000/0 is Infinity and typeof Infinity is "number". 
// The second line is equal to "console.log( (typeof 1000)/0 )" because priority
// of typeof operator is higher than division.
