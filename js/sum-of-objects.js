// Code example
{} + {};                //NaN
console.log({} + {});   //"[object Object][object Object]"

// The problem is that JavaScript interprets the first {} as an empty code block and ignores it. 
// The NaN is therefore computed by evaluating +{} (plus followed by the second {}). The plus you see here 
// is not the binary addition operator, but a unary prefix operator that converts its operand to a number, 
// in the same manner as Number(). Why is the first {} interpreted as a code block? Because the complete input 
// is parsed as a statement and curly braces at the beginning of a statement are interpreted as starting a code block. 
// Arguments of functions or methods are also always parsed as expressions. 
// Help link: http://www.2ality.com/2012/01/object-plus-object.html
