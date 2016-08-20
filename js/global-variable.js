(function () {
  var a = b = 5;
})();
console.log(b);   // 5

// The reason is that b was decalred in window object,
// because operator var is used with variable a only.