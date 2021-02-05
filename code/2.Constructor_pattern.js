/**************************
* Bismillahir Rahmanir Rahim
* OOJS T-02
* Constructor Pattern in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// Why we should use Class? 
var multyObj = [
    {
        name: 'Shakib',
        age: 33
    },
    {
        name: 'Mash',
        age: 36
    },
    {
        name: 'Tamim',
        age: 33   
    }
]

multyObj.forEach(function(obj) {
    console.log('Name: ' + obj.name + ', Age: '+obj.age);
})

// This multyObj has static properties, if you have to add thousands objects than we have to use Class

function Person(name, email) {
    this.name = name;
    this.email = email;
    this.print = function() {
        console.log('My name is ' + this.name);
    }
}
var person1 = new Person('Shihan', 'hackedgdown@gmail.com');
var person2 = new Person('Shakib', 'hackedgdown@gmail.com');
var person3 = new Person('Mash', 'hackedgdown@gmail.com');

console.log(person1.constructor);
// Though it shows an Lemda function but in dubugg or browser console we will show a constructor

console.log(person1);
console.log(person2);
console.log(person3);

// Even we can store all object in an array
var arr = [person1, person2, person3];

arr.forEach(function(Person) {
    console.log('Name: ' + Person.name + ', Age: '+Person.email);
    Person.print();
});

for (var properties in person1) {
    console.log('Key(' + properties + '): Value (' + person1[properties] +')');
}

// Another Example of constructor 
function User(name, country) {
    this.name = name;
    this.country = country;
}
var user = new User('shihan', 'Canada');
console.log(user);

console.log(user.constructor); 