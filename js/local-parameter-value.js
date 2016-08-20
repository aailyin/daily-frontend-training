var obj = {
  a: 1
};

(function () {
  obj = {
    a: 2
  };
})(obj);

console.log(obj.a);  // 1

// Within function scope will be created local variable
// that refers to object obj, so the within function scope this 
// new variable is reinitialized and refers to new object. 
// But the reference obj not in function refers to the old object.