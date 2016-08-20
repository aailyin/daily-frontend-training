var fullName = 'John Doe';

var obj = {
  fullName: 'Collin Inrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};

console.log(obj.prop.getFullName());  // Aurelio De Rosa

var test = obj.prop.getFullName;

console.log(test());  // John Doe

// Context of test function is window because test variable refers to 
// this function but in the moment of calling window will be applied
// as a context.