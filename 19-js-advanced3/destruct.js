let age = 70;
console.log('=== array destructuring ===');
const arr = [2, 3, 5, 7, 11];
// let a = arr[0];
// let b = arr[1];
let [a, b, ...c] = arr;
console.log(a, b);
console.log(c);
console.log('=== swap ===');
a = 10;
b = 20;
console.log(a, b);
// let temp = a;
// a = b;
// b = temp;
[b, a] = [a, b];
console.log(a, b);
console.log('=== object destructuring ===');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    salary: 20000,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        city: 'Rehovot',
        street: 'Plaut',
        building: 10
    },
    age: 25
}
// let firstName = person.firstName;
// let lastName = person.lastName;
let {firstName, lastName, age: personAge, ...rest} = person;
console.log(firstName);
console.log(lastName);
console.log(rest);
console.log(personAge);
// let {address: {city, street}} = person;
let {city, street} = person.address;
console.log(city, street);
personInfo(person); // obj = person
console.log(person.age);

function personInfo({lastName, age}) {
    age++;
    console.log(`${lastName} - ${age} years old`);
}