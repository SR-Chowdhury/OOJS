/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-04
* Javascript Prototype
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        console.log("hello, " + this.name);
    }
}

var p1 = new Person("SHIHAN", 30);
var p2 = new Person("MONI", 20);
console.log(p1); // Here print: [] will generate
console.log(p2); // Here print: [] will generate as well which is douplicate

// To avoid this douplication we use 'prototype'

function Person1(name, age) {
    this.name = name;
    this.age = age;
}
Person1.prototype.print1 = function() {
    console.log("hello, " + this.name);
}
Person1.prototype.email = "myEmail@gmail.com";

var p3 = new Person1("SHAKIB", 50);
var p4 = new Person1("TAMIM", 10);
console.log(p3); 
console.log(p3.email); 
console.log(p4); 
console.log(p4.email); 

// p3.__proto__ == p4.__proto__ (True) same 

//- - - - - - - - - -//
function Person2(name, age) {
    this.name = name;
    this.age = age;
}
Person2.prototype = {
    print2: function() {
        console.log("hello, " + this.name);
    },
    email : "my2Email2@gmail.com",
}
var p5 = new Person2("Mash", 50);
var p6 = new Person2("Fizz", 10);

console.log(p5);
console.log(p5.email); 
console.log(p6);
console.log(p6.email); 


