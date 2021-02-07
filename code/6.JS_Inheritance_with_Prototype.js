/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-06
* JS Inheritance with Prototype
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// - - - BASIC EXAPMLE 1 - - - //
function User() {
    this.name = "SHIHAN";
}
function Teacher() {
    User.call(this);
    this.id = 1412020003;
}
var x = new User();
var y = new Teacher();
console.log(x); // User { name: 'SHIHAN' }
console.log(y); // Teacher { name: 'SHIHAN', id: 1412020003 }


// - - - BASIC EXAPMLE 2 - - - //
function F1(name) {
    this.name = name;
}
F1.prototype.print1 = function() {
    console.log("hello, " + this.name); // hello, SHAKIB
}
function F2(name, id) {
    F1.call(this, name);
    this.id = id;
}

var output1 = new F1("SHAKIB");
var output2 = new F2('MASH', 1412);
console.log(output1); // F1 {name: 'SHAKIB'} here print1 method is not show though it is added with prototype
output1.print1();
console.log(output2); //F2 { name: 'MASH', id: 1412 }

// - - - BASIC EXAPMLE 3 - - - //

function person(name, age) {
    this.name = name;
    this.age = age;
}
person.prototype.printFun = function() {
    console.log("Name: "+this.name + ", Age: "+this.age + ", ID: " + this.id);
    // undefined
}
function owner(name, age, id) {
    person.call(this, name, age);
    this.id = id;
}
var owenerOutput = new owner("TAMIM", 34, 6300);
console.log(owenerOutput); // owner { name: 'TAMIM', age: 34, id: 6300 }

// ownerOutput.printFun() It will not work because it is a method of person constructor
// which we are not call from owner & not inherit from person object. So what should i do?


// - - - BASIC EXAPMLE 4 - - - //

function person1(name, age) {
    this.name = name;
    this.age = age;
}
person1.prototype.printFun1 = function() {
    console.log("Name: "+this.name + ", Age: "+this.age + ", ID: " + this.id);
    // Name: TAMIM, Age: 34, ID: 6300
}
function owner1(name, age, id) {
    person1.call(this, name, age);
    this.id = id;
}
// Now we can user person1's function
// Method 1
owner1.prototype = Object.create(person1.prototype); // IT is used widely for better perormance
owner1.prototype.constructor = owner;
// Method 2
// Object.setPrototypeOf(owner1.prototype, person1.prototype);
// owner1.prototype.constructor = owner;

var owenerOutput1 = new owner1("TAMIM", 34, 6300);
console.log(owenerOutput1); // owner { name: 'TAMIM', age: 34, id: 6300 }

owenerOutput1.printFun1();
person1.prototype.printFun2 = function() {
    console.log("Thank you " + this.name);
    // Thank you TAMIM
}
owenerOutput1.printFun2();