var a = {
  toString: function () {
    return this;
  },
  valueOf: function () {
    return this;
  }
};
+a;   // ?

// Answer: "Uncaught TypeError: Cannot convert object to primitive value()"

// Algorithm of conversion of non-primitive value in JS:
// 1. If value is primitive, then return it.
// 2. Otherwise, call valueOf method. If this method returned primitive, then return this value.
// 3. Otherwise, call toString method. If returned value is primitive, then return it.
// 4. TypeError.
