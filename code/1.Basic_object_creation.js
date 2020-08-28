var obj = {};
var obj1 = new Object;
// Those obj & obj1 are working same

console.log(obj);
console.log(obj1);
// Those output are same

var personObj = {
    name: 'Shihan Chowdhury',
    age: 28,
    country: 'Bangladesh',
    print: function() {
        console.log(this.name + ', From: ' + this.country);
    }
}
console.log(personObj);
personObj.print();
// here we are accessing personObj method by dot(.) notaion
console.log(personObj['name']);
// here we are accessing personObj properties by Bracket [] notaion
// N.B. In js single or double qotaion is eligible, but majority are used dot ' ' single qotation

personObj.sex = 'Male';
console.log('Name: ' + personObj.name + ', Sex: ' + personObj.sex);
// we can extend any object properties outer from object scope; using (.) notation


personObj['city'] = 'Sylhet';
console.log(personObj['city']);
// we can extend any object properties outer from object scope; using [] notation

// Now i want to travers all object properties. So we are using for in loop
for (properties in personObj){
    console.log(properties + ' : ' + personObj[properties]);
}


// Remember we use personObj[properties] because here . notation will not work