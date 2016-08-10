if(~'123'.indexOf(1)) {
  console.log('Found!');
} else {
  console.log('Not found!');
}

// Question: what will be output?
// Answer: "Found!". 
// indexOf returns position of '1' in '123' and it is 0.
// Bitwise operator NOT inverts all bits of operand using scheme ~n = -(n+1) so
// the result of ~0 is -1 and it's a true for if statement. 
