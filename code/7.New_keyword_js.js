/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-07
* JS New Keyword
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

function User(name) {
    this.name = name;
}
User.prototype.print = function() {
    console.log("hello, " + this.name);
}

var output = new User("SHIHAN");
console.log(output);
output.print();

// Here we will learn how 'new' keyword work
function User1(name) {
    this.name = name;
}
User1.prototype.print1 = function() {
    console.log("hello, " + this.name); // hello, Cat
}

function myNewKeyword(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    // console.log(arguments); // 2 arguments; A function & 'Cat'
    // Though arguments work like array but not totally an array, So
    var arr = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, arr.slice(1));
    return obj;
}

var output1 = myNewKeyword(User1, 'Cat');
output1.print1();
