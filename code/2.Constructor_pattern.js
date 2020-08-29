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
}
var person1 = new Person('Shihan', 'hackedgdown@gmail.com');
var person2 = new Person('Shakib', 'hackedgdown@gmail.com');
var person3 = new Person('Mash', 'hackedgdown@gmail.com');

console.log(person1);
console.log(person2);
console.log(person3);

// Even we can store all object in an array
var arr = [person1, person2, person3];

arr.forEach(function(Person) {
    console.log('Name: ' + Person.name + ', Age: '+Person.email);
});
