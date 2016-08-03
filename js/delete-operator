//delete operator removes an object, object property or array element at the specified index.
x = 42;
var y = 43;
myobj = {};
myobj.h = 4;
myobj.k = 5;
delete x;       // return true (without var)
delete y;       // return false (with var)
delete Math.PI; //return false
delete myobj.h; // return true
with(myobj) {
    delete k;    // return true (equivalent delete myobj.k)
}
delete myobj;   // return true

//Question: Can we update Math.PI property?
//Answer: No, because PI is a static property of Math and Math is not a constructor.
