var y = 1, x = y = typeof x;
console.log('x = ',x); // 'undefined'
console.log('y = ',y); // 'undefined'

// '=' operator has left-associativity (left-to-right). First typeof x set to 'undefined'. Then the y is also set to
// 'undefined', then x set to 'undefined'.

