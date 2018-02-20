
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let nameArray = firstAndLast.split(' ');
  let firstName = nameArray[0];
  let lastName = nameArray[1];

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.setFullName = function(name) {
    let nameArr = name.split(' ');
    firstName = nameArr[0];
    lastName = nameArr[1];
  };

  this.getFirstName = function() {
    return firstName;
  };


  this.setFirstName = function(name) {
    firstName = name;
  }

  
  this.getLastName = function() {
    return lastName;
  };


  this.setLastName = function(name) {
    lastName = name;
  }
  
  return firstAndLast;

};

var bob = new Person('Bob Ross');

bob.setFullName("Haskell Curry");

bob.getFullName();
