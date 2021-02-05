/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-03
* This Key & Bind in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/


var obj = {
    name: "Shihan",
    print: function() {
        console.log('Hello, ' + this.name);
    }
}
obj.print();
// Hello, Shihan


function myFunc() {
    console.log(this);
    // Here 'this' will print window object
}
myFunc();

function myFunc1() {
    function inner() {
        console.log(this);
        // Here 'this' will also print window object
        // Because 'this' key only works in an object
    }
    inner();
}
myFunc1();

function myFunc2() {
    function inner1() {
        console.log(this);
    }
    new inner1();
    // Now it well print 'inner1 obj' because here 'new' create an object
}
myFunc2();

var obj1 = {
    name: "Shakib",
    print: function() {
        console.log(this);
        // Upper console will print a window object
        console.log('hello, ' + this.name);
    }
}

obj1.print();
//1. this will print- hello, Shakib

var fun = obj1.print;
console.log(fun());
//2. Upper console will print - hello, undefined. To fix this problem we need bind method


// So now we are fixing this issu by using 'bind' method

var obj2 = {
    name: "Mash",
    print: function() {
        console.log('hello, ' + this.name);
    }
}
var fun2 = obj2.print.bind(obj2);
fun2(); // hello, Mash

function add(num) {
    console.log(num); // 100
    return num + this.value;
}
var addObj = {
    value: 20
}
var binded = add.bind(addObj);
var result = binded(100);
result; // 120


var obj3 = {
    name : "Tamim",
    print: function() {
        setTimeout(function() {
            console.log('I am called');
        }, 2000);
    }
}
obj3.print();
// After 2 seconds it will print 'I am called'

var obj4 = {
    name : "Tamim",
    print: function() {
        setTimeout(function() {
            console.log('Hello, ' + this.name);
        }, 2000);
    }
}
obj4.print();
// Output: Hello, undefined because of obj4 has a method (print) which has also a setTimeout function. 
// So that in setTimeout scope 'this' keyword take window object.

var obj5 = {
    name : "Tamim",
    print: function() {
        setTimeout(function() {
            console.log('Hello, ' + this.name);
        }.bind(this), 2000);
    }
}
obj5.print();
// Output: Hello, Tamim. Now its working because of we are now using bind method

//Difference Between Funciton And Method
var User = {
    name: 'MUHAMMAD',
    printMethod: function() {
        console.log(this.name); //MUHAMMAD
    },
    printFun: function() {
        setTimeout(function() {
            console.log(this.name);// undifined; so we can fix usin bind that are applying in printFinal Method
        }, 2000);
        // Because of setTimeout is an innerfunction of that's why in this scope 'this' key will take 'Window object'
    },
    printFinal: function() {
        setTimeout(function() {
            console.log(this.name);// MUHAMMAD
        }.bind(User), 2000);
    }
}
User.printMethod();
User.printFun();
User.printFinal();
