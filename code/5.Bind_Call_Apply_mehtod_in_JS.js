/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-05
* 'Bind', 'Call' & 'apply' mehtod in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/


// - - -  Bind Method (Without parameter)- - - //
function printx() {
    console.log('hello, ' + this.name);
}

var objx1 = {
    name: 'Shihan',
    age: 20
}
var objx2 = {
    name: 'Tanjima',
    age: 12
}

var outputx1 = printx.bind(objx1); // We store in a variable cause bind method return a function
var outputx2 = printx.bind(objx2); // We store in a variable cause bind method return a function
outputx1();
outputx2();

// - - - - -With parameter - - - - - - //

function addx(a, b) {
    return ( a + b ) + this.c;
}
var obj1 = {
    c: 10
}
var obj2 = {
    c: 15
}
var output1 = addx.bind(obj1); // Using 'bind' method only assing object in parentheses not giving parameter 
var output2 = addx.bind(obj2); // Using 'bind' method only assing object in parentheses not giving parameter
console.log("Output 1: "+output1(5,2)); // When call a function then give parameter
console.log("Output 2: "+output2(6,3)); // When call a function then give parameter

// - - -  Call Method - - - //
function add(a, b) {
    return ( a + b ) + this.c;
}
var obj3 = {
    c: 10
}
var obj4 = {
    c: 15
}
var output3 = add.call(obj3, 20,30); // Using 'call' method must give parameter in the parentheses 
var output4 = add.call(obj4, 40,50); // Using 'call' method must give parameter in the parentheses
console.log("Output 3: "+output3);
console.log("Output 4: "+output4);

// - - -  Apply Method - - - //
function mul(a, b) {
    return ( a - b ) * this.c;
}
var obj5 = {
    c: 20
}
var obj6 = {
    c: 30
}
var output5 = mul.apply(obj5,[10, 5]); // Using 'apply' method must give value within an array 
var output6 = mul.apply(obj6,[5, 3]); // Using 'apply' method must give value within an array
console.log("Output 5: "+output5);
console.log("Output 6: "+output6);


// Those  are the difference between Bind, Call & Apply Mehtod