/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-08
* JS __proto__ vs prototype
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// __proto__ is an object reference and 'prototype' is object property

// - - - EXAMPLE 1 - - - - -//

function Obj1(a, b) {
    this.a = a;
    this.b = b;
}
function Obj2(c) {
    Obj1.call(this, 10, 20);
    this.c = c;
}
function Obj3(d) {
    Obj2.call(this, 30);
    this.d = d;
}

Obj2.prototype = Object.create(Obj1.constructor);
Obj2.prototype.constructor = Obj2;
Obj3.prototype = Object.create(Obj2.constructor);
Obj3.prototype.constructor = Obj3;

var x = new Obj3(40);
console.log(x); // Obj3 {10, 20, 30, 40} 

// - - - EXAMPLE 2 - - - - -//
function Obj4(a, b) {
    this.a = a;
    this.b = b;
}
function Obj5(a, b, c) {
    Obj4.call(this, a, b);
    this.c = c;
}
function Obj6(a, b, c, d) {
    Obj5.call(this, a, b, c);
    this.d = d;
}

Obj5.prototype = Object.create(Obj4.constructor);
Obj5.prototype.constructor = Obj5;
Obj6.prototype = Object.create(Obj5.constructor);
Obj6.prototype.constructor = Obj6;

var o2 = new Obj6(2, 4, 6, 8);
console.log(o2); // Obj6 {2, 4, 6, 8}