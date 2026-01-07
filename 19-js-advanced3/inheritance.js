const person = {
    hobby: 'Coding',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(john);
console.log(john.hobby);
john.__proto__ = person;
console.log(john.hobby);
console.log(john);
console.log(john.fullName());
console.log(person.fullName());
john.hobby = 'Reading';
console.log(john.hobby);
console.log(john.__proto__ === person);
john.__proto__.hobby = 'Gaming';
console.log(person.hobby);
console.log('=== Constructor ===');
// Person.prototype = person;
console.log(Person.prototype.constructor === Person);
Person.prototype.fullName = person.fullName;
Person.prototype.hobby = 'Coding';
const peter = new Person('Peter', 'Parker');
const mary = new Person('Mary', 'Poppins');
console.log(peter);
console.log(mary);
// peter.__proto__ = person;
// mary.__proto__ = person;
console.log(mary.fullName());
console.log(peter.fullName());
console.log(peter.constructor === Person);
const jane = new mary.constructor('Jane', 'Poppins');
console.log(jane);
console.log('=== array ===');
Array.prototype.printArray = function (){
    console.log('==========');
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
    console.log('==========');
}
const numbers = [2, 3, 5, 7, 11, 13];
console.log(numbers);
numbers.printArray();
const arr = new Array('one', 'two', 'three');
arr.printArray();
console.log('=== for-in Array ===')
for(const i in arr) {
    console.log(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}